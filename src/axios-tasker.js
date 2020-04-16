import axios from "axios";

const axiosTasker = axios.create({
  baseURL: "https://tasker-mcuve.firebaseio.com/",
});

export default axiosTasker;
