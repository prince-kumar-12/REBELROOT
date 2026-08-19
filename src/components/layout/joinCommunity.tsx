import React from "react";
import Link from "next/link";
function joinCommunity() {
  return (
    <div className="mx-auto mt-14 max-w-5xl border-t pt-30 pb-40  space-y-10">
      <h1 className="mt-6 text-4xl text-center font-medium text-ink sm:text-5xl">
        Join the NovaRoot Community. Let's Build Better Software Together.
      </h1>
      <div className="mx-auto mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 max-w-5xl pt-10">
        <button className="w-full max-w-[320px] h-12 min-[565px]:w-80 min-[565px]:h-14 rounded-[7px] bg-green-400 text-[15px] uppercase tracking-[4px] text-white transition-[box-shadow] duration-500 shadow-[0_0_25px_rgba(74,222,128,1)] hover:shadow-[0_0_5px_rgba(74,222,128,1),0_0_25px_rgba(74,222,128,1),0_0_50px_rgba(74,222,128,1),0_0_100px_rgba(74,222,128,1)]">
        
          SUBSCRIBE TO UPDATES
        </button>
      <Link
  href="/products"
  className="flex w-full max-w-[320px] h-12 min-[565px]:w-80 min-[565px]:h-14 items-center justify-center rounded-[7px] text-[15px] text-black dark:text-white uppercase tracking-[4px] transition-[box-shadow] duration-500 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),inset_0px_-2px_6px_0px_rgba(10,37,64,0.35)] hover:shadow-[0px_54px_55px_rgba(0,0,0,0.25),0px_-12px_30px_rgba(0,0,0,0.12),0px_4px_6px_rgba(0,0,0,0.12),0px_12px_13px_rgba(0,0,0,0.17),0px_-3px_5px_rgba(0,0,0,0.09)]"
>
  OUR PRODUCT
</Link>
      </div>
    </div>
  );
}

export default joinCommunity;
