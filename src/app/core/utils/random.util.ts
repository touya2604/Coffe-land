export function randomNumber(): string {
  const randomDigit = Math.floor(Math.random() * 1_000_000_0000)
    .toString()
    .padStart(10, '0');
  return `CFL${randomDigit}`;
}
