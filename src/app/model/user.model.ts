export interface User {
  id: string;
  userName: string;
  date: string; // ngày sinh
  phone: string;
  email: string;
  pass: string;
  address: string; // địa chỉ chi tiết
  city: string; // tỉnh/thành phố
  gender: 'male' | 'female'; // giới tính
}
