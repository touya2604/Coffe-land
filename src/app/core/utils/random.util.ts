export function randomNumber(): string {
  const randomDigit = Math.floor(Math.random() * 1_000_000_0000)
    .toString()
    .padStart(10, '0');
  return `CFL${randomDigit}`;
}
export function randomId(): string {
  const randomId = Math.floor(Math.random() * 1_000)
    .toString()
    .padStart(2, '0');
  return `U${randomId}`;
}
