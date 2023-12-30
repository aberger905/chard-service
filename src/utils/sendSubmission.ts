
import API_BASE from "../settings";

interface FormData {
  articleType: string;
  fistlName: string;
  lastName: string;
  pronouns: string;
  subject: string;
  story: string;
  email: string;
}

const sendSubmission = async (formData: FormData | {}) => {

  try {
    const response = await fetch(`${API_BASE}/article/submission`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({input: formData})
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

export default sendSubmission;