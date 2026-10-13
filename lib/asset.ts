// On GitHub Pages a project site lives under /<repo-name>, so files in public/
// need that prefix. <Link> and <Image> add it automatically; plain <a href>
// and <img src> do not, so wrap those paths with asset().
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${basePath}${path}`;
