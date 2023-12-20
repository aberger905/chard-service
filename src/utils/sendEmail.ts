import API_BASE from "../settings";

const sendEmail = async () => {
  const articleIdString: any = localStorage.getItem('articleId');
  const articleId = JSON.parse(articleIdString);

  const titleString: any = localStorage.getItem('title');
  const title = JSON.parse(titleString);

  try {
    const response = await fetch(`${API_BASE}/article/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({articleId: articleId, title: title})
    });
    if (!response.ok) {
      throw new Error('error sending articleId to backend');
    }
    const result = await response.json();
    return result;
  } catch (e) {
    console.error('Error sending information', e)
  }
}

export default sendEmail;