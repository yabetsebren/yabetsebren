---
title: "Advanced TypeScript Patterns for Enterprise Applications"
date: "2024-12-08"
description: "Explore advanced TypeScript patterns, utility types, and techniques for building type-safe enterprise applications."
author: "Alex Johnson"
category: "TypeScript"
tags: ["TypeScript", "Advanced", "Patterns", "Types", "Enterprise"]
featuredImage: "/placeholder.jpg"
readingTime: "18 min read"
status: "published"
seo:
  keywords: "TypeScript, Advanced Patterns, Utility Types, Type Safety"
  ogImage: "/images/blog/typescript-patterns-og.jpg"
---

# Advanced TypeScript Patterns for Enterprise Applications

TypeScript has evolved far beyond simple type annotations. Modern TypeScript offers powerful features for building robust, type-safe enterprise applications. Let's explore advanced patterns that will elevate your TypeScript game.

## Template Literal Types

Create dynamic string types with template literals:

```typescript
type EventNames = "click" | "hover" | "focus";
type EventHandlers = `on${Capitalize<EventNames>}`;
// Result: 'onClick' | 'onHover' | 'onFocus'

type HTTPMethods = "GET" | "POST" | "PUT" | "DELETE";
type APIEndpoint<T extends string> = `api/${T}`;
type UserEndpoints = APIEndpoint<"users" | "profiles">;
// Result: 'api/users' | 'api/profiles'
```

## Conditional Types

Build complex type logic with conditional types:

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type ApiResponse<T> = T extends string
  ? { message: T }
  : T extends number
  ? { count: T }
  : { data: T };

// Usage
type StringResponse = ApiResponse<string>; // { message: string }
type NumberResponse = ApiResponse<number>; // { count: number }
type ObjectResponse = ApiResponse<User>; // { data: User }
```

## Mapped Types

Transform existing types systematically:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties readonly
type ReadonlyUser = Readonly<User>;

// Create update types
type UserUpdate = {
  [K in keyof User]?: User[K];
} & { id: number }; // id is required

// Transform property types
type StringifiedUser = {
  [K in keyof User]: string;
};
```

## Utility Type Combinations

Combine utility types for complex transformations:

```typescript
interface DatabaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

interface Product extends DatabaseEntity {
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

// Create input type (exclude database fields)
type ProductInput = Omit<Product, keyof DatabaseEntity>;

// Create update type (partial + required id)
type ProductUpdate = Partial<ProductInput> & Pick<Product, "id">;

// Create API response type
type ProductResponse = Pick<Product, "id" | "name" | "price" | "inStock">;
```

## Advanced Function Types

Type functions with precision:

```typescript
// Function overloads
function processData(data: string): string;
function processData(data: number): number;
function processData(data: boolean): boolean;
function processData(data: unknown): unknown {
  return data;
}

// Generic constraints
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// Higher-order function types
type EventHandler<T = Event> = (event: T) => void;
type AsyncHandler<T, R> = (data: T) => Promise<R>;

function createAsyncHandler<T, R>(
  handler: AsyncHandler<T, R>
): (data: T) => Promise<R> {
  return async (data: T) => {
    try {
      return await handler(data);
    } catch (error) {
      console.error("Handler error:", error);
      throw error;
    }
  };
}
```

## Brand Types

Create nominal types for better type safety:

```typescript
// Brand type pattern
declare const __brand: unique symbol;
type Brand<B> = { [__brand]: B };
type Branded<T, B> = T & Brand<B>;

// Usage
type UserId = Branded<number, "UserId">;
type ProductId = Branded<number, "ProductId">;
type Email = Branded<string, "Email">;

function createUserId(id: number): UserId {
  return id as UserId;
}

function getUserById(id: UserId): User {
  // Implementation
}

// This prevents mixing up IDs
const userId = createUserId(123);
const productId = 456 as ProductId;

getUserById(userId); // ✅ Works
// getUserById(productId); // ❌ Type error
```

## State Machine Types

Model complex state with TypeScript:

```typescript
type LoadingState = {
  status: "loading";
  data?: never;
  error?: never;
};

type SuccessState = {
  status: "success";
  data: any;
  error?: never;
};

type ErrorState = {
  status: "error";
  data?: never;
  error: string;
};

type AsyncState = LoadingState | SuccessState | ErrorState;

function handleAsyncState(state: AsyncState) {
  switch (state.status) {
    case "loading":
      // TypeScript knows: state.data is never, state.error is never
      return <Spinner />;
    case "success":
      // TypeScript knows: state.data exists, state.error is never
      return <div>{state.data}</div>;
    case "error":
      // TypeScript knows: state.error exists, state.data is never
      return <div>Error: {state.error}</div>;
  }
}
```

## Builder Pattern with Types

Create type-safe builders:

```typescript
interface QueryBuilder {
  select?: string[];
  where?: Record<string, any>;
  orderBy?: { field: string; direction: "ASC" | "DESC" };
  limit?: number;
}

class TypedQueryBuilder<T> {
  private query: QueryBuilder = {};

  select<K extends keyof T>(...fields: K[]): TypedQueryBuilder<Pick<T, K>> {
    this.query.select = fields as string[];
    return this as any;
  }

  where(conditions: Partial<T>): this {
    this.query.where = conditions;
    return this;
  }

  orderBy<K extends keyof T>(
    field: K,
    direction: "ASC" | "DESC" = "ASC"
  ): this {
    this.query.orderBy = { field: field as string, direction };
    return this;
  }

  limit(count: number): this {
    this.query.limit = count;
    return this;
  }

  build(): QueryBuilder {
    return this.query;
  }
}

// Usage
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const query = new TypedQueryBuilder<User>()
  .select("name", "email") // Only valid User keys allowed
  .where({ age: 25 }) // Only valid User properties allowed
  .orderBy("name", "DESC") // Only valid User keys allowed
  .limit(10)
  .build();
```

## Performance Tips

1. **Use `const assertions`** for literal types:

```typescript
const themes = ["light", "dark"] as const;
type Theme = (typeof themes)[number]; // 'light' | 'dark'
```

2. **Prefer `interface` over `type`** for object shapes:

```typescript
// Better performance
interface User {
  name: string;
  age: number;
}

// Slower compilation
type User = {
  name: string;
  age: number;
};
```

3. **Use generic constraints wisely**:

```typescript
// More specific constraints = better performance
function process<T extends Record<string, unknown>>(obj: T): T {
  return obj;
}
```

## Conclusion

These advanced TypeScript patterns provide the foundation for building type-safe, maintainable enterprise applications. Start incorporating them gradually and watch your code become more robust and self-documenting.

> **Pro Tip**: Always balance type safety with code readability. Complex types should make your code clearer, not more obscure.

---

_Which TypeScript pattern has helped you the most? Share your favorite advanced TypeScript techniques in the comments!_
