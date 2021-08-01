import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
  //   if (!error.response) toast.error("There is an unexpected error");
  return Promise.reject(error);
});

const HttpService = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  patch: axios.patch,
  delete: axios.delete,
};

export default HttpService;
