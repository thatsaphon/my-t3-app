import Link from "next/link";
import React from "react";
import LeftMenu from "./LeftMenu";

function Navbar({ children }) {
  return (
    <>
      <div className="flex">
        <div className="flex h-[100vh] w-[250px] flex-col items-center gap-2 bg-gray-400 p-4 text-center">
          <Link href={"/"}>
            <div className="h-24 w-24 rounded-full bg-green-400">
              <span>Logo</span>
            </div>
          </Link>
          <Link href={"/sales"}>
            <span>งานขาย</span>
          </Link>

          <Link href={"/purchase"}>
            <span>รับสินค้า</span>
          </Link>
          <Link href={"/inventory"}>
            <span>สินค้า</span>
          </Link>
        </div>
        <div className="flex w-full flex-col">
          <div className="h-[70px] w-full bg-gray-400"></div>
          <main className="h-full">{children}</main>
        </div>
      </div>
    </>
  );
}

export default Navbar;
