import axios from "axios";
axios.defaults.headers.common["Authorization"] = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNzk5NjcwLCJqdGkiOiI1ZDBlYzU3NGUwYTU0NzUzODRkNTI3Y2E3MWM1MzYxZiIsInVzZXJfaWQiOiJyYWppbmlAZ21haWwuY29tIn0.Z-NP9cRiBnG76xZCtUlQtLy_5sjWe-wBALMveGQSb9Y'
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    
    console.log(expectedError)
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  request:axios.request,
  setJwt
};
