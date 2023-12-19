
const API_BASE = 'http://localhost:3001'

interface FormData {
  articleType: string;
  fullName: string;
  pronouns: string;
  age: string;
  subject: string;
  story: string;
  mainImage: any;
  additionalImage: any;
  email: string;
}

const sendSubmission = async (formData: FormData) => {

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