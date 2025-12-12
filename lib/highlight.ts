export function highlight(text: string, keyword: string) {
  if (!keyword) return text;

  const regex = new RegExp(`(${keyword})`, "gi");
  return text.replace(
    regex,
    `<mark class="bg-yellow-200 px-1 rounded">$1</mark>`
  );
}
