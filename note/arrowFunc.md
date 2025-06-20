| Viết kiểu                 | Có return không?     | Kết quả        |
| ------------------------- | -------------------- | -------------- |
| `(a) => a > b`            | ✔️ Có return ngầm    | Hoạt động đúng |
| `(a) => { a > b }`        | ❌ Không return      | SAI            |
| `(a) => { return a > b }` | ✔️ Có return rõ ràng | Hoạt động đúng |

s
