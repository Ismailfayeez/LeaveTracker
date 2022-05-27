import React, { useEffect, useState } from 'react';
import Select from '../../common/Select';
import moment from 'moment';
import BarGraph from './BarGraph';
import GraphData from './GraphData';
import axios from 'axios';
function Graph(props) {
    const createDateList=(monthId,year)=>{
       
        const list=[]
        let totalDays=moment(monthId,"M").daysInMonth()
        while(totalDays){
            let current = moment({year:year,month:monthId-1,day:totalDays}).format('YYYY-MM-DD');
            list.push(current);
            totalDays--;
        }
        return list.reverse()
    }
    const createYearList=(count)=>{
        const list=[]
        let year=moment().year()
        list.push(year)
        while(count){
            year=moment().subtract(count,'years').year()
            list.push(year) 
            count-- 
        }return list
    }
    const yearList=createYearList(10).map(year=>({value:year,name:year}))
    const monthsList=moment.monthsShort().map((month,index)=>({value:index+1,name:month}))
    const setDateList=(monthId,year)=>createDateList(monthId,year).map(date=>({value:date,name:date}))

    
    const [options,setOptions]=useState({
        yearList:[...yearList],
        monthList:[...monthsList],
        dateList:[...setDateList(monthsList[0].value,yearList[0].value)]})
    
    
    const [date,setDate]=useState(
        {startDate:options.dateList[0].value,
        endDate:options.dateList[options.dateList.length-1].value,
        month:monthsList[0].value,
        year:yearList[0].value})

    const [graphData,setGraphData]=useState({
        date:{value:[],labels:[]},
        month:{value:[],labels:[]},
        year:{value:[],labels:[]}
    })
    const handleGraphData=async()=>{
        try{
        const [yearData,monthData,dayData]=await Promise.all([
            fetchYearData(date.year),
            fetchMonthData(date.month,date.year),
            fetchDayData(date.startDate,date.endDate)])
            console.log(date)
            setGraphData((graphData)=>({...graphData,date:{value:mapValueToGraph(dayData.data),labels:mapLabelsToGraph(dayData.data)}}))
            setGraphData((graphData)=>({...graphData,month:{value:mapValueToGraph(monthData.data),labels:mapLabelsToGraph(monthData.data)}}))
            setGraphData((graphData)=>({...graphData,year:{value:mapValueToGraph(yearData.data),labels:mapLabelsToGraph(yearData.data)}}))
        }catch(err){
            console.log(err)
        }
        }
    const mapValueToGraph=(data)=>data.map(item=>(item.leave_count))
    const mapLabelsToGraph=(data)=>data.map(item=>(item.name))
    
    const fetchYearData=(year)=>{
        console.log(year)
        return axios.get(`http://127.0.0.1:8000/leavetracker/team-analysis/7/member/?type=year&year=${year}`)
    }
    const fetchMonthData=(monthId,year)=>{
        console.log(monthId,year)
        return axios.get(`http://127.0.0.1:8000/leavetracker/team-analysis/7/member/?type=month&year=${year}&month=${monthId}`)
    }
    
    const fetchDayData=(startDate,endDate)=>{
        console.log(startDate,endDate)
        return axios.get(`http://127.0.0.1:8000/leavetracker/team-analysis/7/member/?type=date&start-date=${startDate}&end-date=${endDate}`)
    }
    const handleChange=({currentTarget:input})=>{ 
        if(input.name==="month" ||input.name==="year"){
            let newDateList=input.name==="month"?
            setDateList(input.value,date.year):setDateList(date.month,input.value)
            setOptions({...options,dateList:[...newDateList]})
            setDate({...date,
                startDate:newDateList[0].value,
                endDate:newDateList[newDateList.length-1].value})}
            setDate((newData)=>({...newData,[input.name]:input.value}))
            
        // handleGraphData({...date,[input.name]:input.value}) 
    }
    useEffect(()=>{handleGraphData()},[date])
    
    
    return (
        <div>
            <h4>Graph</h4>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
            <GraphData 
            data={[{name:"year",
            label:'year: ',
            options:options.yearList,
            value:date.year,
            handleChange:handleChange}]}
            graphData={graphData.year}
            />
            <GraphData 
            data={[{name:"month",
            label:'month: ',
            options:options.monthList,
            value:date.month,
            handleChange:handleChange}]}
            graphData={graphData.month}
            />
            <GraphData
            data={[{name:"startDate",
            options:options.dateList,
            value:date.startDate,
            handleChange:handleChange},{name:"endDate",
            options:options.dateList,
            value:date.endDate,
            handleChange:handleChange}]}
            graphData={graphData.date}
            />
            
            </div>
        </div>
            
        
        
    );
}

export default Graph;