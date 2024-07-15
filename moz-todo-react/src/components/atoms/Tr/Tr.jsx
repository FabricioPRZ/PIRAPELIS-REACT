import React from "react";

const Tr = ({ className, children }) => {
  return (
    <tr className={className}>
      {children}
    </tr>
  );
}

export default Tr;
