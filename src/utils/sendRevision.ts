
import API_BASE from "../settings";


const sendRevision = async (input: string) => {
  const articleIdString: any = localStorage.getItem('articleId');
  const articleId = JSON.parse(articleIdString);

  try {
    const response = await fetch(`${API_BASE}/revision/title-of-article-${articleId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({input: input})
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

export default sendRevision;