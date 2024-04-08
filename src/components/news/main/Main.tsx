import Article from "./article/Article";
import { ArticleTypeWithBookmark } from "../../../type/news";
import { WrapperDiv } from "../../commonStyle";
import useConvertData from "./useConvertData";
import { Skeleton } from "antd";

const Main = () => {
  const { convertedDataByBookMark, isFetching } = useConvertData();

  return (
    <WrapperDiv padding={0}>
      <>
        {isFetching ? (
          <Skeleton active />
        ) : (
          (convertedDataByBookMark ?? []).map(
            (val: ArticleTypeWithBookmark) => (
              <Article data={val} key={val.originalLink || val.link} />
            )
          )
        )}
      </>
    </WrapperDiv>
  );
};

export default Main;
