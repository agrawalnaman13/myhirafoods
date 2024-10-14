import axios from "axios";

const token = localStorage.getItem("token-user");
if (token) {
  axios.defaults.headers.common["x-auth-token-user"] = token;
}

const errorCallBack = (error) => {
  const isExpectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!isExpectedError) {
    console.error("An unexpected error occurred:", error);
  }

  return Promise.reject(error);
};

axios.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token-user");
    if (token && req.headers["x-auth-token-user"] !== token) {
      req.headers["x-auth-token-user"] = token;
    }
    return req;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use((response) => response, errorCallBack);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
