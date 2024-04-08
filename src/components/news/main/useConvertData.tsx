import { useMemo } from "react";
import useFetchingNewData from "./useFetchingNewData";

import useNewsStore from "../../../store/useNewsStore";

const useConvertData = () => {
  const { data, isFetching } = useFetchingNewData();
  const { bookmarkList } = useNewsStore();
  const linkList = useMemo(() => {
    return bookmarkList.map(({ link, originalLink }) => link ?? originalLink);
  }, [bookmarkList]);
  const convertedDataByBookMark = useMemo(() => {
    return (data ?? []).map((val) => {
      if (linkList.includes(val.link) || linkList.includes(val.originalLink)) {
        return { ...val, marked: true };
      } else {
        return { ...val, marked: false };
      }
    });
  }, [linkList, data]);
  return { convertedDataByBookMark, isFetching };
};

export default useConvertData;
