import axios from "axios";
interface GetNewsDataParams {
  keyword: string;
  display?: number;
  start?: number;
  sort?: "sim" | "date";
}

export const getNewsData = async ({
  keyword,
  display = 100,
  start = 1,
  sort = "sim",
}: GetNewsDataParams) => {
  const query = encodeURI(keyword);
  const params = { display, start, sort, query };
  const naverNewsSearch = axios.create({
    headers: {
      "X-Naver-Client-Id": import.meta.env.VITE_CLIENT_ID,
      "X-Naver-Client-Secret": import.meta.env.VITE_CLIENT_SECRET,
      "Access-Control-Allow-Origin": "*",
    },
  });

  try {
    const response = await naverNewsSearch.get("/api", {
      params,
    });

    const data = response.data;
    return data.items;
  } catch (error) {
    console.error(error);
    return [];
  }
};
