import axios from 'axios';
import {APIBaseURL, APIKey} from '../API';

// const getWeatherData = async (loc) => {
//     const res = await axios(`${APIBaseURL}weather?lat=${loc.lat}&lon=${loc.lon}&units=metric&appid=${APIKey}`)
//         .then(result => {
//             return result;
//         })
//         .catch(err => {console.log(err)});
//     return res.data;
// };

const getWeatherData = (loc) => {
    return new Promise ((resolve, reject) => {
        resolve(
            axios(`${APIBaseURL}weather?lat=${loc.lat}&lon=${loc.lon}&units=metric&appid=${APIKey}`)
        )
        reject(new Error ('Error with getWeatherData'))
        }
    );
}

export default getWeatherData;