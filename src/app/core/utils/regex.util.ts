export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const phoneRegex = /^(0|\+84)(\d{9})$/;
// export const nameRegex = /^[a-zA-Z\s]+$/;
// \s - cho pheps dấu cách
export const nameRegex = /^\p{L}+$/u;
