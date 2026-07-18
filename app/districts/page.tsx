import type { Metadata } from "next";
import { DistrictSelector } from "@/components/district-selector";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Khu Vực Phục Vụ Đổ Mực & Sửa Máy Photocopy Tại Hà Nội",
  description: "Xuân Thành phục vụ sửa chữa, đổ mực máy in tận nơi tại 12 quận Hà Nội: Cầu Giấy, Đống Đa, Thanh Xuân, Hà Đông, Mỹ Đình... Gọi là có mặt sau 15-30 phút.",
  alternates: {
    canonical: "/districts",
  },
};

export default function DistrictsPage() {
  const branchLocations = [
    { name: "Cơ sở Cầu Giấy (Trụ sở chính)", address: "175 Trần Quốc Vượng, Cầu Giấy, Hà Nội", mapLink: "#" },
    { name: "Cơ sở Tây Hồ", address: "567 Nguyễn Hoàng Tôn, Tây Hồ, Hà Nội", mapLink: "#" },
  ];

  return (
    <div className="py-12 md:py-20 bg-slate-50 dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-4">
          <Badge className="bg-indigo-600/10 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 w-fit mx-auto rounded-full px-3 py-1 font-semibold uppercase tracking-wider text-xs">
            Khu vực dịch vụ
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Mạng Lưới Kỹ Thuật Trải Khắp Hà Nội
          </h1>
          <p className="text-slate-600 dark:text-zinc-400">
            Chúng tôi bố trí kỹ thuật viên túc trực liên tục tại các quận lớn ở Hà Nội. Nhận điện thoại là di chuyển ngay lập tức.
          </p>
        </div>

        {/* District Selector Component */}
        <div className="mb-20">
          <DistrictSelector />
        </div>

        {/* Branch Offices List */}
        <div className="bg-white dark:bg-zinc-900/30 border border-slate-200 dark:border-zinc-800/85 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Danh Sách Chi Nhánh Cố Định của Xuân Thành
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branchLocations.map((branch, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-zinc-950/50 border border-slate-200/50 dark:border-zinc-850 p-5 rounded-xl flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                    Chi nhánh {branch.name}
                  </h3>
                  <div className="flex gap-2 text-slate-500 dark:text-zinc-400 text-sm mb-4">
                    <MapPin className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="tel:0988732433"
                    className={buttonVariants({
                      variant: "outline",
                      className: "w-full text-xs font-semibold py-2 rounded-lg border-indigo-600/30 hover:border-indigo-600 dark:border-indigo-500/30 dark:hover:border-indigo-400 flex items-center justify-center gap-1",
                    })}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Gọi Chi Nhánh
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
