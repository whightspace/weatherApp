import axios from "axios";
import { APIBaseURL, APIKey } from "../API";

// const getPollutionData = async (loc) => {
//     const res = await axios(`${APIBaseURL}air_pollution?lat=${loc.lat}&lon=${loc.lon}&units=metric&appid=${APIKey}`)
//         // .then(result => {
//         //     return result;       
//         // })
//         // .catch(err => { console.log(err) });
//         console.log('getPollutionData using async/await',res)
//     return res.data;
// }

const getPollutionData = (loc) => {
    return new Promise ((resolve, reject) => {
        resolve(
            axios(`${APIBaseURL}air_pollution?lat=${loc.lat}&lon=${loc.lon}&units=metric&appid=${APIKey}`)
            )
        reject(new Error ('Error with getPollutionData'))
        }
    );   
}

export default getPollutionData;

