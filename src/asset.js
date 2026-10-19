/**
 * Resolve a file inside public/ against the Vite base URL, so asset links keep
 * working no matter where the site is hosted (root domain or sub-path).
 */
export function asset(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}
