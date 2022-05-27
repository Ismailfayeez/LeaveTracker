import React, { Component } from 'react';
import Form from '../common/Form';
import GroupMembersList from './GroupMembersList';
class GroupDetails extends Form {
    state = {  } 
   
    render() { 
        const {group,filterAdminList,filterParticipantList}=this.props
      
        return  group &&(
            <div className='group-detail'>
                {this.renderText('name','Name',group.name)}
                {this.renderText('description','Description',group.description)}
                {group.team_members &&<GroupMembersList title="Admins" groupMembers={filterAdminList(group.team_members)}/>}
                {group.team_members &&<GroupMembersList title="Members" groupMembers={filterParticipantList(group.team_members)}/>}
                {this.renderText('createdOn','Created on','11 jan 2022')}
                {this.renderText('lastModifiedOn','Last Modified on','11 jan 2022')}
                {this.renderText('lastModifiedBy','Last Modified By','fayeez')}
                <div className='button-list button-list--center'>
                {this.renderButton('edit','Edit','btn--accept')}
                {this.renderButton('delete','Delete','btn--reject')}
                {this.renderButton('exit','Exit','btn--accept')}
                </div>
            </div>
        );
    }
}
 
export default GroupDetails;