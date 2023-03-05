// import { Dialog } from "@headlessui/react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { AutoComplete } from "primereact/autocomplete";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import SalesTable from "./SalesTable";

function SalesDialog() {
  const [visible, setVisible] = useState(false);
  const footerContent = (
    <div>
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );

  return (
    <div className="card justify-content-center flex">
      <Button
        label="Show"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Header"
        visible={visible}
        className="h-[80vh] w-[80vw]"
        onHide={() => setVisible(false)}
        footer={footerContent}
      >
        <div className="card flex">
          <div className="flex flex-col gap-2">
            <label htmlFor="customer">ลูกค้า</label>
            <InputText id="customer" aria-describedby="customer-help" />
            <small id="customer-help">
              Enter your username to reset your password.
            </small>
          </div>
        </div>
        <SalesTable />
      </Dialog>
    </div>
  );
}

export default SalesDialog;
