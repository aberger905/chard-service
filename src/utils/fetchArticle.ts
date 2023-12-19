const API_BASE = 'http://localhost:3001'

const fetchArticle = async () => {
  const articleIdString: any = localStorage.getItem('articleId');
  const articleId = JSON.parse(articleIdString);


  try {
    const response = await fetch(`${API_BASE}/article/title-of-article-${articleId}`)
    const result = response.json();
    console.log(result);
    return result
  } catch (e) {
    throw new Error('Error fetching article from database');
  }

}

export default fetchArticle;