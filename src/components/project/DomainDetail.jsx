import React from 'react';
import { useParams } from 'react-router-dom';
import Detail from './Detail';

function DomainDetail(props) {
    const{projectId,domainId}=useParams()
    const postUrl=`http://127.0.0.1:8000/project/myprojects/${projectId}/domain/`
    const putUrl=`http://127.0.0.1:8000/project/myprojects/${projectId}/domain/${domainId}/`
    const url=domainId==='new'?postUrl:putUrl
    const setStateProps=()=>({name:'',code:''})
    const mapStateValue=(section)=>({name:section.name,code:section.code})

    return (
        <div className='project-dashboard'>
            Domain detail
            <Detail url={url} 
            sectionId={domainId}
            setStateProps={setStateProps} 
            mapStateValue={mapStateValue}
            />
        </div>
    );
}

export default DomainDetail;