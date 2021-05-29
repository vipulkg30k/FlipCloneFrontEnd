// export const api = 'http://localhost:2000/api';
const baseUrl = "http://localhost:2000";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `http://localhost:2000/public/${fileName}`;
};