import API_BASE from "../settings";

const fetchArticle = async (slug: any) => {
  // const articleIdString: any = localStorage.getItem('articleId');
  // const articleId = JSON.parse(articleIdString);

  try {
    const response = await fetch(`${API_BASE}/article/${slug}`)
    const result = response.json();
    console.log(result);
    return result
  } catch (e) {
    throw new Error('Error fetching article from database');
  }

}

export default fetchArticle;