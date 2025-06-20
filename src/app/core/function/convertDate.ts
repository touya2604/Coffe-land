export function parseDate(ddmmyyyy: string): Date {
  const [day, month, year] = ddmmyyyy.split('/').map(Number);
  return new Date(year, month - 1, day); // tháng bắt đầu từ 0
}
