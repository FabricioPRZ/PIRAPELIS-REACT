import React from "react";

const Th = ({ className, id, children }) => {
  return (
    <th className={className} id={id}>
      {children}
    </th>
  );
}

export default Th;
