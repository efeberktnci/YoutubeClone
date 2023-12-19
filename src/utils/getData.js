import axios from "axios";

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com/"


const options = {
    params:{ geo: "EN", lang: "en"},
    headers: {
      'X-RapidAPI-Key': '4eef4a8517msha56097b1a04004cp13e133jsn266c039ceea4',
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
  };
  

export const getData = async (path) => {
   try{
    const response = await axios.get(path, options)
    
    return response.data;
   } catch (err){
    console.log(err);
   }
};
