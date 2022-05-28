import axios from "axios";
axios.defaults.headers.common["Authorization"] = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUzNzQ4NzA3LCJqdGkiOiJlZDY5N2I5ODg3OWU0OGE3YTQ5NWI0ZTMxNWE2MzQzMiIsInVzZXJfaWQiOiJyYWppbmlAZ21haWwuY29tIn0.cMgN0FW7F51rVqm1I-DG_EYWsCO7WihIkSExhplDtGc'
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
