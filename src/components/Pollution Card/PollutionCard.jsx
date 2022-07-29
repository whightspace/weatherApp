import React from 'react'
import './PollutionCard.css'

function PollutionCard(props) {
    const { co, nh3, no, no2, o3, pm2_5, pm10, so2 } = props.pollutionData;
    return (
        <div className='pollutionCard Card'>

            {/* <div className='col'> */}

                <div className='pollMiniCard'>
                    <div className='txt'>PM<sub>2.5</sub></div>
                    <div className='val'>{pm2_5}<span className='units'>μg/m<sup>3</sup></span></div>
                </div>

                <div className='pollMiniCard'>
                    <div className='txt'>CO</div>
                    <div className='val'>{co}<span className='units'>ppm</span></div>
                </div>

                <div className='pollMiniCard'>
                    <div className='txt'>NO</div>
                    <div className='val'>{no}<span className='units'>ppm</span></div>
                </div>

                <div className='pollMiniCard'>
                    <div className='txt'>NH<sub>3</sub></div>
                    <div className='val'>{nh3}<span className='units'>ppm</span></div>
                </div>

            {/* </div>

            <div className='col'> */}


                <div className='pollMiniCard'>
                    <div className='txt'>PM<sub>10</sub></div>
                    <div className='val'>{pm10}<span className='units'>μg/m<sup>3</sup></span></div>
                </div>

                <div className='pollMiniCard'>
                    <div className='txt'>SO<sub>2</sub></div>
                    <div className='val'>{so2}<span className='units'>ppm</span></div>
                </div>

                <div className='pollMiniCard'>
                    <div className='txt'>NO<sub>2</sub></div>
                    <div className='val'>{no2}<span className='units'>ppm</span></div>
                </div>

                <div className='pollMiniCard'>
                    <div className='txt'>O<sub>3</sub></div>
                    <div className='val'>{o3}<span className='units'>ppm</span></div>
                </div>

            {/* </div> */}
        </div>
    )
}

export default PollutionCard