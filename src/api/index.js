import axios from 'axios';

export const getPlacesData = async() => {
    try{
        const {data} = await axios.get('https://ev-charging-points.p.rapidapi.com/v1/us/all',{
          params: {API_KEY: process.env.REACT_APP_RAPID_PARAMS_API_KEY},
          headers: {
            'x-rapidapi-host': 'ev-charging-points.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
          }
          });
        return data;
    }catch(error){
        console.log(error);
    }
}