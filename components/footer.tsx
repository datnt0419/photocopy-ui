import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-zinc-400 border-t border-slate-800/50 py-16 transition-colors">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Brand block */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <Link href="/" className="text-white font-black text-xl tracking-wider hover:text-indigo-400 transition-colors">
            Xuân Thành PHOTOCOPY
          </Link>
          <p className="text-sm text-zinc-500 leading-relaxed font-light">
            Xuân Thành là trung tâm sửa chữa, đổ mực máy in, máy photocopy chuyên nghiệp hàng đầu tại khu vực Hà Nội. Tiết kiệm chi phí văn phòng cho doanh nghiệp của bạn.
          </p>
          <div className="text-xs text-zinc-600 mt-2">
            © {new Date().getFullYear()} Xuân Thành Photocopy. All rights reserved.
          </div>
        </div>

        {/* Hotline block */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Tổng Đài Hỗ Trợ</h4>
          <div className="flex flex-col gap-2.5 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">Đặt lịch (08:00 - 21:00):</span>
              <a href="tel:0988732433" className="text-indigo-400 hover:underline font-bold">0988.732.433</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">Bảo hành & Khiếu nại:</span>
              <a href="tel:0988732433" className="text-indigo-400 hover:underline font-bold">0988.732.433</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">Bàn làm việc cố định:</span>
              <a href="tel:02439964519" className="text-indigo-400 hover:underline">0988.732.433</a>
            </div>
            <p className="text-xs text-zinc-600 mt-1">Phục vụ tất cả các ngày trong tuần (kể cả Thứ 7 và Chủ Nhật).</p>
          </div>
        </div>

        {/* Showroom locations */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Hệ Thống Cơ Sở Cửa Hàng</h4>
          <ul className="text-xs flex flex-col gap-2 text-zinc-500 font-light">
            <li>• Cơ sở 1: 175 Trần Quốc Vượng, Cầu Giấy, Hà Nội</li>
            <li>• Cơ sở 2: 567 Nguyễn Hoàng Tôn, Tây Hồ, Hà Nội</li>
            <li className="pt-2 border-t border-slate-800/40 text-[10px] text-zinc-600 font-normal">• Trạm kỹ thuật trực sẵn sàng 15-30p tại tất cả các quận nội thành Hà Nội.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
