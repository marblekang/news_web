import { UseQueryResult, useQuery } from "@tanstack/react-query";

import useNewsStore from "../../../store/useNewsStore";
import { ReactQueryKey } from "../../../type/queryKey";
import { getNewsData } from "../../../util/api/getNewsData";
import { ArticleType } from "../../../type/news";

const useFetchingNewData = () => {
  const { globalKeyword } = useNewsStore();
  /* 데이터에 type 지정 하는 방법? */
  const { data, isFetching }: UseQueryResult<ArticleType[], Error> = useQuery({
    queryKey: [ReactQueryKey.News, { globalKeyword }],
    queryFn: () => {
      if (!globalKeyword) {
        return [];
      }

      return getNewsData({ keyword: globalKeyword });
    },
  });
  return { data, isFetching };
};

export default useFetchingNewData;
