import { loginGoogleURL, loginURL } from "../constants/api";
import httpService from "./httpServices";

class authenticationServices {
  async login(payload) {
    return httpService.axios.post(loginURL, payload);
  }

  async loginGoolge() {
    return httpService.axios.get(loginGoogleURL);
  }
}

const AuthenticationServices = new authenticationServices();
export default AuthenticationServices;
