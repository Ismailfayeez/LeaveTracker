import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadLeaveRequests } from '../../store/leaves';
import Table from '../common/table/Table';
import './status.css'
class Status extends Component {
    state = { 
     } 
    componentDidMount(){
        
        this.props.loadLeaveRequests('upcomingLeaves')
    }
    columns=[
        {
            path:'serialNo',
            label:"no"
        },
        {
            path:'info',
            label:"Info",
            className:"leave-status__info",
            content:(leave,index)=>(
                <>
                <div className='request-no' >
                            {leave.request_number}</div>
                            <div className='range'><span>{leave.from_date} to {leave.to_date}</span></div>
                </>
            )
        },
        {
            path:'request_number',
            label:"Request No",
            className:"leave-status__request-no",
            content:(leave,index)=>(
                <span>{leave.request_number}</span>
            )
        },
        {
            path:'range',
            label:"Range",
            className:"collapsible",
            content:(leave=>(<div className='range'><span>{leave.from_date} to {leave.to_date}</span></div>))
            
        },
        
        {
            path:'type',
            label:"Type",
            className:"collapsible",
            
        },
        {
            path:'duration',
            label:"Duration",
            className:"collapsible",
            
        },
        {
            path:'status',
            label:"Status",
            className:"",
            
        },
    ]
    
    render() { 
        return (
            <section className='status'>
                <h3 className='status__title'>leave status</h3>
                <Table data={this.props.upcomingLeaves.list} columns={this.columns} className="leave-status-table" />
            </section>
     
     );
    }
}

const mapStateToProps=state=>({
    upcomingLeaves:state.entities.leaves.leaveRequests.upcomingLeaves}
)

const mapDispatchToProps=dispatch=>({
    loadLeaveRequests:(filter)=>dispatch(loadLeaveRequests(filter))
    
})
export default connect(mapStateToProps,mapDispatchToProps)(Status)
