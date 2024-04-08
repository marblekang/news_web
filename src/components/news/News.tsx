import { WrapperDiv } from "../commonStyle";
import Main from "./main/Main";
import Header from "./header/Header";
import { Tabs } from "antd";
import Bookmark from "../bookmark/Bookmark";

const News = () => {
  return (
    <WrapperDiv>
      <Tabs>
        <Tabs.TabPane tab="기사 검색" key="search">
          <WrapperDiv padding={0}>
            <Header />
            <Main />
          </WrapperDiv>
        </Tabs.TabPane>
        <Tabs.TabPane tab="즐겨찾기" key="bookmark">
          <WrapperDiv padding={0}>
            <Bookmark />
          </WrapperDiv>
        </Tabs.TabPane>
      </Tabs>
    </WrapperDiv>
  );
};

export default News;
