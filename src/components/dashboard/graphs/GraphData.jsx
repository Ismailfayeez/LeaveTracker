import React from 'react';
import Select from '../../common/Select';
import BarGraph from './BarGraph';

function GraphData(props) {
    const {data,graphData}=props
    return (
        <div>
            <BarGraph graphData={graphData}/>
            {data.map((item)=><Select  
            {...item} />   )  }  
        </div>
    );
}

export default GraphData;