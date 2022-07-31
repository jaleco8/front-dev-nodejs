import axios from "axios";

const URL_API = "http://localhost:4000/api";

export const getTranscript = async () => {
  const res = await axios.post(`${URL_API}/transcriptions/read`);
  return res.data.data;
};

export const sendTranscript = async () => {
  const res = await axios.post(`${URL_API}/transcriptions/send`);
  return res.data.data;
};
