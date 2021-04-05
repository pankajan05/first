import React from 'react';

const seasonalConfig = {
    summer: {
        icon: 'sun',
        phrase: 'It is very hot these days'
    },
    winter: {
        icon: 'snowflake',
        phrase: 'It is very chill now'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9)
        return lat>0 ? 'summer' : 'winter';
    else
        return lat<0 ? 'winter' : 'summer';
};

const Season = (pros) => {
    const season = getSeason(pros.lat, new Date().getMonth());
    const {icon, phrase} = seasonalConfig[season];

    return (<div>
        <i className={ `top-left massive ${icon} icon`}/>
        <h1>{phrase}</h1>
        <i className={ `bottom-right massive ${icon} icon`}/>
    </div>);
};

export default Season;
