
import API_BASE from "../settings";


const publishArticle = async (version: string) => {
  const articleIdString: any = localStorage.getItem('articleId');
  const articleId = JSON.parse(articleIdString);

  try {
    const response = await fetch(`${API_BASE}/article/publish`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({articleId: articleId, version: version})
    });
    if (!response.ok) {
      throw new Error('error sending information to backend');
    }
    const result = await response.json();
    return result;
  } catch (e) {
    console.error('Error sending information', e)
  }

}

export default publishArticle;