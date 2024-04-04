import axios from "axios";

// const final =
//   "https://www.frontend.com/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoicmF2aWNoYW5kcmFwYWxsYTE5OTdAZ21haWwuY29tIiwiaWQiOjk2LCJmaXJzdE5hbWUiOiJSYXZpIiwibGFzdE5hbWUiOiJDaGFuZHJhIn0sImlhdCI6MTcxMjIzMzU4OSwiZXhwIjoxNzQzNzY5NTg5fQ.khLFqIAA4dHmh54JJ5PaWtZnrx9_U_LeT69CBExZ_Do";
const url =
  "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com";

export async function handleGoogleLoginApi() {
  try {
    const response = await axios.get(url);
    // console.log("g auth api repsinse is ---->", response);
    return response;
  } catch (error) {
    return error.message;
  }
}
