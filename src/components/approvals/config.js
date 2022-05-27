import moment from "moment";

export const newApprovals={
    name:'newApprovals',
    label:'New Approvals',
    url:`request_number__from_date__gte${moment().format('YYYY-MM-DD')}`
}
export const actionedApprovals={
    name:'actionedApprovals',
    label:'Actioned Approvals',
    url:`request_number__from_date__gte${moment().format('YYYY-MM-DD')}`
}
export const previousApprovals={
    name:'previousApprovals',
    label:'Previous Approvals',
    url:`request_number__from_date_lt${moment().format('YYYY-MM-DD')}`
}
export const Pending={
    code:'P',
    name:'Pending'
    }
    
export const Accepted={
code:'A',
name:'Accepted'
}

export const Rejected={
code:'R',
name:'Rejected'
}