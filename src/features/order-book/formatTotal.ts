export function formatTotal(total: number) {
  if (total >= 1000) {
    return `${(total / 1000).toFixed(2)}K`;
  }
  return total.toFixed(5);
}
