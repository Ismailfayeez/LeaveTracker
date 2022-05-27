import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

function Table({data,columns,className}) {
    return (
       <table className={`table ${className? className:""}`}>
           <TableHeader columns={columns}  />
           <TableBody columns={columns} data={data} />
       </table>
    );
}

export default Table;