# NoSleepClub Support Desk

[![QA](https://github.com/Tienkhoaa2908/nosleepclub-support-desk/actions/workflows/qa.yml/badge.svg?branch=main)](https://github.com/Tienkhoaa2908/nosleepclub-support-desk/actions/workflows/qa.yml)

## Thành tích

Đội NoSleepClub đạt **Giải Nhất track VNG AI Agent** và **Giải Ba chung cuộc** tại MLAI Hackathon 2026. [Thông báo kết quả của HUTECH](https://www.facebook.com/hutechuniversity/posts/pfbid02aDmtNL88SKFYwZUSW7gRMWut1BLRCKFEPxb2ZkhA3j2vRQx8P5epe2AaP63dhZ82l).

## Tổng quan

Support Desk tiếp nhận yêu cầu hỗ trợ IT bằng ngôn ngữ tự nhiên, cung cấp hướng dẫn có nguồn cho tình huống phù hợp và chuyển các trường hợp thiếu thông tin, vượt thẩm quyền hoặc có rủi ro đến nhân viên xử lý. Sản phẩm được xây dựng cho thử thách **The Escalation Referee** của MLAI Hackathon 2026.

Mô hình ngôn ngữ hỗ trợ trích xuất dữ kiện có cấu trúc và soạn câu trả lời. Server kiểm chứng dữ kiện, áp dụng policy xác định và giữ quyền quyết định cuối cùng; kết quả không đủ căn cứ sẽ được làm rõ hoặc chuyển người.

## Chức năng chính

- Tiếp nhận, phân loại, xem trước và theo dõi yêu cầu hỗ trợ.
- Trả lời dựa trên kho tri thức có nguồn, hỗ trợ hội thoại tiếp nối và tái sử dụng hướng dẫn đã duyệt.
- Quản lý hàng đợi, hỏi bổ sung, duyệt và ghi lại quyết định cùng bằng chứng.
- Cung cấp bộ Verify, dữ liệu tổng hợp và quy trình đánh giá hồi quy.

## Kiến trúc và công nghệ

Ứng dụng dùng Next.js App Router, TypeScript và React. MongoDB lưu yêu cầu, sự kiện và dữ liệu identity; OpenAI adapter hỗ trợ phân tích ngôn ngữ và tạo câu trả lời. Policy, kiểm tra an toàn và chuyển tiếp do server thực hiện.

Xem [sơ đồ kiến trúc](docs/ARCHITECTURE.md), [mục lục tài liệu](docs/README.md) và [mô tả dữ liệu MLAI](challenge/mlai-2026/README.md).

## Chạy local

Yêu cầu Node.js 22.13+ và npm. Cấu hình mẫu dùng AI mock và bộ nhớ demo, không cần dịch vụ ngoài.

```powershell
npm ci
Copy-Item .env.example .env.local
npm run dev
```

Mở http://localhost:3000. Không ghi API key hoặc connection string vào Git. Cấu hình dịch vụ nằm trong .env.local; xem [RUNBOOK](RUNBOOK.md).

## Kiểm tra

```powershell
npm run check:docs
npm run lint
npm run typecheck
npm test
npm run build
```

## Tài liệu

- [Hướng dẫn sử dụng](docs/USAGE.md)
- [Kiến trúc](docs/ARCHITECTURE.md)
- [Đánh giá và giới hạn](docs/EVALUATION.md)
- [Kho dữ liệu và bộ Verify của MLAI 2026](challenge/mlai-2026/README.md)
- [Vận hành](RUNBOOK.md)

## Repo dự thi

Mã nguồn gốc được dùng để tham gia cuộc thi: [dakiemdarktharr/nosleepclub-support-desk](https://github.com/dakiemdarktharr/nosleepclub-support-desk)
