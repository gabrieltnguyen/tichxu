import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <Link
        href="https://github.com/gabrieltnguyen/tichxu"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
      >
        Tài liệu được lưu trên Github{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
        Mua sắm thả ga, hoàn tiền tối đa!
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
      Hãy bắt đầu hành trình tiết kiệm thú vị cùng Tích Xu và nhận Hoàn Tiền thật đến 30% khi mua sắm online cộng thêm hàng ngàn ưu đãi, mã giảm giá hấp dẫn từ hàng ngàn cửa hàng như Lazada, Shopee, Tiki,Tiktok Shop, Booking.com, Agoda, Uniqlo, Adidas, Samsung, Apple, Taobao... tại Việt Nam.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs/${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Bắt Đầu Thôi!
        </Link>
        {/* <Link
          href="#"
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          Customize
        </Link> */}
      </div>
      {/* <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
        <TerminalIcon className="w-4 h-4 mr-1" /> ~ npx this-library-name@latest
      </span> */}
    </div>
  );
}
