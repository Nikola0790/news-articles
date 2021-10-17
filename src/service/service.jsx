const apiAccessKey = "c7f8a0d444869fb8a1f475fb257d8d91"; // set this api key before sent link
const baseUrl = "http://api.mediastack.com/v1/";
const reserveApiAccessKey = "a291905b1c087c10985926e95a8116d2";
export const limit = 20; // number of articles per page

export async function getNews(category, keyword, offset, btt) {
  return await fetch(
    `${baseUrl}news?access_key=${reserveApiAccessKey}&keywords=${keyword}&categories=${category}&languages=en&sort=${btt}&limit=${limit}&offset=${offset}`
  ).then((result) => {
    return result.json();
  });
}
