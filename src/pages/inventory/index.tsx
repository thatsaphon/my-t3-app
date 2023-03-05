import React from "react";
import TransactionList from "~/components/TransactionList";

function InventoryPage() {
  return (
    <>
      <div className="flex h-full w-full flex-col">
        <div className="w-ful flex gap-2 bg-gray-100 p-2">
          <div className="border-2 border-gray-500 p-2 underline">
            สร้างสินค้า
          </div>
          <div className="border-2 border-gray-500 p-2 underline">
            ค้นหาสินค้า
          </div>
        </div>
        <div className="flex h-full">
          <div className="w-[300px] justify-center border-r-2 border-gray-100">
            <h2 className="m-2 text-xl font-bold">หมวดหมู่สินค้า</h2>
          </div>
          <div className="w-full">
            <TransactionList />
          </div>
        </div>
      </div>
    </>
  );
}

export default InventoryPage;
