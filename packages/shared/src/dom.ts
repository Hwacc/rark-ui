export function findUp(
  el: HTMLElement | null | undefined,
  predicate: (node: HTMLElement) => boolean,
): boolean {
  let cur: HTMLElement | null | undefined = el
  if (!cur)
    return false
  while (cur) {
    if (predicate(cur))
      return true
    cur = cur.parentElement
  }
  return false
}
