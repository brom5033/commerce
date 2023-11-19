import axios from "axios";

export const useCatalogue = () => {
  return axios.get('https://tmp-riad.s3.ap-northeast-2.amazonaws.com/catalogue.json');
}