import React from "react";
import { Input as AntdInput } from "antd";
interface InputProps {
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const Input = ({ value, setValue }: InputProps) => {
  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };
  return <AntdInput value={value} onChange={onChangeInputValue} />;
};

export default Input;
