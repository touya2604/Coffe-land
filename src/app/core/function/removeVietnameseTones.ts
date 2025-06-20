export function removeVietnameseTones(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Xóa dấu
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}
