import React, { Component, Fragment } from 'react';
import Form from '../common/Form';
class Edit extends Form {
    state = {  } 
    render() { 
        return (<Fragment>
            <h3>My Info</h3>
            <div className='grid grid1x2--md-6-6 user-details'>
            {this.renderText('name','Name','Mohammed ismail fayeez')}
            {this.renderText('email','Email','mohammedismailfayeez@gmail.com')}
            {this.renderText('domain','Domain','Frontend developer')}
            {this.renderText('role','Role','Manager')}
            {this.renderText('mobileNo','Mobile Number','9003303072')}
            {this.renderText('mobileNo','Mobile Number','9003303072')}
            {this.renderText('location','Location','Chennai')}
            {this.renderText('approver','Approver','Abdul')}
            {this.renderText('approver','Approver','arafath')}
            {this.renderText('approver','Approver','majidha')}
            </div>
        </Fragment>);
    }
}
 
export default Edit;