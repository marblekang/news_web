import { message } from "antd";
import { LocalStorageKey } from "../type/localStorageKey";

interface LocalStorageParams {
  key: LocalStorageKey;
  data?: any;
  fallbackData?: any;
}
export const getLocalStorage = ({ key, fallbackData }: LocalStorageParams) => {
  try {
    const item = localStorage.getItem(key);
    return JSON.parse(item ?? fallbackData);
  } catch (e) {
    message.error({ content: `${e}`, duration: 1 });
    return fallbackData;
  }
};

export const setLocalStorage = ({ key, data }: LocalStorageParams) => {
  try {
    const stringifiedItem = JSON.stringify(data);
    localStorage.setItem(key, stringifiedItem);
  } catch (e) {
    // 에러 처리 어떤식으로 하면 좋을지?
    message.error({ content: `${e}`, duration: 1 });
  }
};
