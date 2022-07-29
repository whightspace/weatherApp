import { currData } from '../components/dummy data/currentData';
import { polData } from '../components/dummy data/pollutionData';
import { forData } from '../components/dummy data/forecastData';
import { getWeatherData, getPollutionData, getForecastData, getPosition } from '.';

const getData = async () => {
    
    const loc = await getPosition();
    console.log('getData reporting: ', loc);

    // const wData = (await getWeatherData(loc)).data;
    // console.log('getData reporting ', wData);

    // const { list: [{ components }] } = (await getPollutionData(loc)).data;
    // console.log('getData reporting: ', components);

    // const { list: fData } = (await getForecastData(loc)).data;
    // console.log('getData reporting ', fData);

    const wData = currData;
    const { list: [{ components }] } = polData;
    const { list: fData } = forData;

    return [wData, components, fData];
}

export default getData;