
import React from 'react';
import './SeasonDisplay.css';


const SeasonConfig = {
    summer: {
        text:`Let's hit the beach`,
        icon:'sun'
    },
    winter : {
        text:'Burr its chilly',
        icon:'snowflake'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, icon} = SeasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${icon} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${icon} icon`}></i>
        </div>
    );
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

export default SeasonDisplay;