import API_BASE from "../settings";

const checkStatus = async () => {

  const subIdString: any = localStorage.getItem('submissionId');
  const submissionId = JSON.parse(subIdString);


  try {
    const response = await fetch(`${API_BASE}/article/status/${submissionId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (e) {
    console.error('Error checking status:', e);
    throw new Error('Error checking status');
  }
};

export default checkStatus;