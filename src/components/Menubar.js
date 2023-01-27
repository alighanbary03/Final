import React from "react";
import "../Style/components/Menubar.css";

export const Menubar = ({ cardlist }) => {
  return (
    <div className="menu-bar">
      {cardlist.length == 0 ? (
        <p>خرید فوری خالی است</p>
      ) : (
        <p>شما {cardlist.length} محصول در سبدتان دارید </p>
      )}
    </div>
  );
};
