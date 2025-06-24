export interface Voucher {
  id: string;
  title: string;
  description: string;
  expiry: string;
  type: string;
  usageCondition: string;
  discountPercent?: number; // chỉ có nếu type là 'discount' hoặc 'special'
  reward?: string; // chỉ có nếu type là 'gift'
  quantity: number;
}
