import React from "react";


type Props = {
  size: number;
};

const Column: React.FC<Props> = (props) => {
  const cls = "col-md-"+ props.size;
  return <div className={cls}>{props.children}</div>;
};

export default Column;
