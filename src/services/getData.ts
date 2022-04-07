export function getData(url: string) {
  return fetch(url).then((response) => response.json());
}
