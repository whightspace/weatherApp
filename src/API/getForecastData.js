import axios from 'axios';
import {APIKey, APIBaseURL} from '../API';

// const getForecastData = async(loc) => {
//     const res = await axios(`${APIBaseURL}forecast?lat=${loc.lat}&lon=${loc.lon}&appid=${APIKey}`)
//     .then(result => {return result})
//     .catch(err => {console.log(err)});
    
//     return res.data;
// };

const getForecastData = (loc) => {
    return new Promise ((resolve, reject) => {
            resolve(
                axios(`${APIBaseURL}forecast?lat=${loc.lat}&lon=${loc.lon}&units=metric&appid=${APIKey}`)
            )
            reject(new Error ('Error with getForecastData'))
        }
    )
}

export default getForecastData;