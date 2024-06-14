import { useState } from "react";
import "./App.css";

export const GridComp = () => {
  const [selectedOrder, setSelectedOrder] = useState([]);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivateCell = () => {
    let interval;
    interval = setInterval(() => {
      setSelectedOrder((existingSelected) => {
        const cellInfo = [...existingSelected];
        cellInfo.pop();
        if (cellInfo?.length === 0) {
          clearInterval(interval);
        }
        return cellInfo;
      });
    }, 300);
  };

  const onCellClick = (index) => {
    const newOrder = [...selectedOrder, index];
    setSelectedOrder(newOrder);
    if (newOrder?.length === config?.flat().filter(Boolean).length) {
      deactivateCell();
    }
  };

  return (
    <div id={"main-container"}>
      <div id={"grid-wrapper"}>
        {config?.flat()?.map((item, index) => {
          return item ? (
            <button
              id={selectedOrder?.includes(index) ? "cell-activated" : "cell"}
              disabled={selectedOrder?.includes(index)}
              onClick={() => onCellClick(index)}
            >
              {""}
            </button>
          ) : (
            <span></span>
          );
        })}
      </div>
    </div>
  );
};
