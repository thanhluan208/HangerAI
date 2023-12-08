import {
  extractItemFromImage,
  generateContent,
  switchStatus,
} from "../constants/api";
import httpService from "./httpServices";

const test = {
  infos: {
    "item category": "shorts",
    "attributes informations": {
      silhouette: ["symmetrical", "regular fit"],
      length: ["above-the-knee length"],
      "opening type": ["fly"],
      "textile pattern": ["plain pattern"],
    },
    Company: "HangerMiracle",
  },
};

class productRecommendationServices {
  extractItemFromImage(img64) {
    return httpService.axios.post(extractItemFromImage, { img64 });
  }
  generateContent(body) {
    return httpService.axios.post(generateContent, body);
  }
  switchStatus(body) {
    return httpService.axios.post(switchStatus, body);
  }
}

export default new productRecommendationServices();
