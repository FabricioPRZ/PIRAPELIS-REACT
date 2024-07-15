import React from "react";

const Table = ({ className, id, children }) => {
  return (
    <table className={className} id={id}>
      {children}
    </table>
  );
}

export default Table;
