import React from 'react';
import MaterialTable from 'material-table';

function Table() {

  const data =[
      {name:"client1" ,number:4 , id: 3},
      {name:"client2" ,number:24 , id: 32},
      {name:"client3" ,number:4 , id: 23},
      {name:"client4" ,number:2 , id: 7}
  ]
  const columns =[
      {title:'Id' ,field:'id'},
      {title:'Name',field:'name'},
      {title:'Beverage Number', field:'number'}
  ]

    return (
        <div>
            <MaterialTable
             title="Entries Today"
             data = {data}
             columns ={columns}
             
             options={{
                 paging:false,
                 headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF'
                  },
                 rowStyle: {
                    backgroundColor: '#EEE',
                  } 
             }}
            />
        </div>
    )
}

export default Table
