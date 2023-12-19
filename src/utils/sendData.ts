
const API_BASE = 'http://localhost:3001'

interface FormData {
  articleType: string;
  fullName: string;
  pronouns: string;
  age: number;
  subject: string;
  story: string;
  mainImage: any;
  additionalImage: any;
}

const sendData = async () => {
  const userInput: any = localStorage.getItem('userInput')
  const formData: FormData = JSON.parse(userInput);
  console.log('RETURNED SESSION USERINPUT,', formData);
  try {
    const response = await fetch(`${API_BASE}/article/generate`, {
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

export default sendData;