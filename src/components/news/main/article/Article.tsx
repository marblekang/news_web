import { Checkbox } from "antd";
import { ArticleTypeWithBookmark } from "../../../../type/news";
import { FlexContainer } from "../../../commonStyle";
import useBookMark from "../../useBookMark";
interface ArticleProps {
  data: ArticleTypeWithBookmark;
}
const Article = ({ data }: ArticleProps) => {
  const { onChangeBookmarkList } = useBookMark();
  const link = data.link || data.originalLink;
  return (
    <FlexContainer>
      <a href={link} target="_blank">
        <span>{data.title}</span>
      </a>
      <span>{data.pubDate}</span>
      <Checkbox
        checked={data.marked}
        onChange={(e) => {
          const type = e.target.checked ? "add" : "remove";
          onChangeBookmarkList({ article: data, type });
        }}
      />
    </FlexContainer>
  );
};

export default Article;
