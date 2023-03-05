import React, { useEffect, useState } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import TreeNode from "primereact/treenode";

function TransactionList() {
  const [nodes, setNodes] = useState<TreeNode[]>([]);
  useEffect(() => {
    let files = [];

    for (let i = 0; i < 50; i++) {
      let node = {
        key: i,
        data: {
          name: "Item " + i,
          size: Math.floor(Math.random() * 1000) + 1 + "kb",
          type: "Type " + i,
        },
        children: [
          {
            key: i + " - 0",
            data: {
              name: "Item " + i + " - 0",
              size: Math.floor(Math.random() * 1000) + 1 + "kb",
              type: "Type " + i,
            },
          },
        ],
      };

      files.push(node);
    }

    setNodes(files);
  }, []);
  return (
    <div className="card">
      <TreeTable
        // value={nodes}
        lazy
        paginator
        // totalRecords={totalRecords}
        // first={first}
        // rows={rows}
        // onPage={onPage}
        // onExpand={onExpand}
        // loading={loading}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="date" header="วันที่/จำนวน" expander></Column>
        <Column field="name" header="ชื่อ"></Column>
        <Column field="quantity" header="จำนวน"></Column>
        <Column field="total" header="รวม"></Column>
      </TreeTable>
    </div>
  );
}

export default TransactionList;
