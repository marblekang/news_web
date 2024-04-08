import Article from "../news/main/article/Article";
import { ArticleTypeWithBookmark } from "../../type/news";

import { WrapperDiv } from "../commonStyle";
import useNewsStore from "../../store/useNewsStore";

const Bookmark = () => {
  const { bookmarkList } = useNewsStore();

  return (
    <WrapperDiv padding={0}>
      {(bookmarkList ?? []).map((val: ArticleTypeWithBookmark) => (
        <Article data={val} key={val.originalLink || val.link} />
      ))}
    </WrapperDiv>
  );
};

export default Bookmark;
