import React, {Component} from 'react';
import MaterialTable from 'material-table';

class Table extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        /*const
            data = [
                {name: "client1", number: 4, id: 3},
                {name: "client2", number: 24, id: 32},
                {name: "client3", number: 4, id: 23},
                {name: "client4", number: 2, id: 7}
            ]*/
        const data = [...this.props.data]
        const
            columns = [
                {title: 'Id', field: 'user_id'},
                /*{title: 'Name', field: 'name'},
                {title: 'Beverage Number', field: 'number'}*/
            ]
        /*this.props.data.map(row =>(
            data.push({name: row.userId, number: 1, id: 1})
        ))*/
        console.log("table ai enma", this.props.data)
        return (
            <div>
                <MaterialTable
                    title="Entries Today"
                    data={data}
                    columns={columns}

                    options={{
                        paging: false,
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
}

export default Table
