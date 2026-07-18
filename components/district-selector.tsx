"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, ChevronRight } from "lucide-react";

export function DistrictSelector() {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("Cầu Giấy - Trần Quốc Vượng");

  const districts = [
    { name: "Cầu Giấy - Trần Quốc Vượng", hotline: "0988.732.433", address: "175 Trần Quốc Vượng, Dịch Vọng Hậu, Cầu Giấy, Hà Nội" },
    { name: "Xuân Đỉnh - Nguyễn Hoàng Tôn", hotline: "0988.732.433", address: "567 Nguyễn Hoàng Tôn, Xuân Đỉnh, Tây Hồ, Hà Nội" },
  ];

  const currentDistrictInfo = districts.find((d) => d.name === selectedDistrict);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Info side */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <Badge className="bg-indigo-600/10 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 w-fit rounded-full px-3 py-1 font-semibold uppercase tracking-wider text-xs">
          Khu vực phục vụ nhanh
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Hệ Thống Cơ Sở Xuân Thành
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
          Chúng tôi sở hữu các cơ sở sửa chữa cố định và đội ngũ kỹ thuật viên trực quận liên tục ở Hà Nội, cam kết có mặt trong vòng 15-30 phút sau cuộc gọi để xử lý sự cố.
        </p>

        {/* Dynamic district output card */}
        <div className="bg-indigo-600 text-white rounded-2xl p-6 shadow-xl shadow-indigo-600/10 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-0.5 text-indigo-200 shrink-0" />
            <div>
              <h4 className="font-bold text-lg mb-1">Cơ Sở Đang Chọn</h4>
              <p className="text-xs text-indigo-100 mb-4">{currentDistrictInfo?.address}</p>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg text-sm w-fit font-medium">
                <Phone className="w-4 h-4 animate-pulse" />
                Hotline gọi nhanh: <a href="tel:0988732433" className="underline font-bold">{currentDistrictInfo?.hotline}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid selector side */}
      <div className="lg:col-span-7">
        <h4 className="text-sm font-semibold text-slate-500 dark:text-zinc-400 mb-4 uppercase tracking-wider">
          Chọn cơ sở gần bạn nhất để được hỗ trợ tức thì:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {districts.map((d, idx) => {
            const isActive = d.name === selectedDistrict;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedDistrict(d.name)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/25 scale-[1.02]"
                    : "bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-indigo-500/50 hover:bg-slate-50 dark:hover:bg-zinc-800"
                }`}
              >
                <span>{d.name}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "translate-x-0.5" : "text-slate-400"}`} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
