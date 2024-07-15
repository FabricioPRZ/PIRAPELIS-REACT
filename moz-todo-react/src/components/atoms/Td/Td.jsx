import React from "react";

const Td = ({ className, id, children }) => {
  return (
    <td className={className} id={id}>
      {children}
    </td>
  );
}

export default Td;
