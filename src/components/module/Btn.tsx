import { Button } from "antd";
import React from "react";

interface ButtonProps {
  children: string | React.ReactNode;
  onClick: () => void;
}
const Btn = ({ children, onClick }: ButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default Btn;
