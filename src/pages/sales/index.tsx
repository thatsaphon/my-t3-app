import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import TransactionList from "~/components/TransactionList";
import SalesDialog from "~/components/SalesDialog";

function SalesPage() {
  const [dates, setDates] = useState(null);
  return (
    <>
      <div className="flex h-full flex-col items-start">
        <div className="flex w-full gap-2 bg-gray-200 p-2">
          <SalesDialog />
          <div className="border-2 border-gray-500 p-2 underline">
            + ขายเงินสด
          </div>
          <div className="border-2 border-gray-500 p-2 underline">
            + ขายเงินเชื่อ
          </div>
        </div>
        <div className="flex flex-1 justify-start">
          <div className="border-r-black-200 flex h-full w-[300px] flex-col items-center border-r-2 p-2">
            <Calendar
              selectionMode="range"
              value={dates}
              onChange={(e) => setDates(e.value)}
              view="month"
              className="mt-2 w-full"
              dateFormat="mm/yy"
              inline
            />
            <Calendar
              selectionMode="range"
              value={dates}
              onChange={(e) => setDates(e.value)}
              view="month"
              className="mt-2"
              dateFormat="mm/yy"
            />
            <div>test</div>
          </div>
          <div className="w-full">
            <TransactionList />
          </div>
        </div>
      </div>
    </>
  );
}

export default SalesPage;
