import axios from "axios";

let Url = "http://localhost:8080/";

if (process.env.NODE_ENV === "production") {
  Url = "/";
}
const myApi = axios.create({
  baseURL: Url
});

export default myApi;