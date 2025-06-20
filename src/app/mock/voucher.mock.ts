import { v4 as uuidv4 } from 'uuid';

export const Vouchers = [
  {
    id: uuidv4(),
    title: 'Giảm 20% cho đơn từ 100.000đ',
    description:
      'Áp dụng cho tất cả đồ uống, không áp dụng đồng thời với ưu đãi khác.',
    expiry: '30/06/2025',
  },
  {
    id: uuidv4(),
    title: 'Tặng 1 bánh ngọt cho đơn từ 150.000đ',
    description: 'Chỉ áp dụng cho các loại bánh trong danh mục Bánh ngọt.',
    expiry: '15/07/2025',
  },
  {
    id: uuidv4(),
    title: 'Giảm 10% cho đơn từ 50.000đ',
    description: 'Không áp dụng cho combo khuyến mãi.',
    expiry: '10/08/2025',
  },
  {
    id: uuidv4(),
    title: 'Free ship cho đơn từ 80.000đ',
    description: 'Áp dụng toàn quốc, không giới hạn số lần.',
    expiry: '25/06/2025',
  },
  {
    id: uuidv4(),
    title: 'Giảm 30.000đ cho đơn từ 200.000đ',
    description: 'Chỉ áp dụng khi thanh toán online.',
    expiry: '05/07/2025',
  },
  {
    id: uuidv4(),
    title: 'Tặng cà phê khi mua 2 phần bánh',
    description: 'Áp dụng vào cuối tuần (T7, CN).',
    expiry: '31/07/2025',
  },
  {
    id: uuidv4(),
    title: 'Giảm 15% khi mua từ 3 món trở lên',
    description: 'Không áp dụng với các chương trình giảm giá khác.',
    expiry: '12/08/2025',
  },
  {
    id: uuidv4(),
    title: 'Mua 1 tặng 1 cho trà sữa',
    description: 'Chỉ áp dụng từ 14h đến 17h hàng ngày.',
    expiry: '30/06/2025',
  },
  {
    id: uuidv4(),
    title: 'Ưu đãi sinh nhật - giảm 50%',
    description: 'Áp dụng đúng ngày sinh nhật khách hàng (có CMND).',
    expiry: '31/12/2025',
  },
  {
    id: uuidv4(),
    title: 'Giảm 5% cho đơn bất kỳ',
    description: 'Không giới hạn giá trị đơn hàng.',
    expiry: '01/09/2025',
  },
];
