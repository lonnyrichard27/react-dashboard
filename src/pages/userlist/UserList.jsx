import React, { useState } from 'react'
import './userlist.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData'
import { Link } from 'react-router-dom';

const UserList = () => {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !==id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'username',
          headerName: 'Username',
          width: 150,
          renderCell: (params) =>{
            return(
                <div className="userlistuser">
                    <img className="userlistimg" src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
          }
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        {
          field: 'transaction',
          headerName: 'Transactions',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={"/user/"+params.row.id}>
                            <button className="userlistedit">Edit</button>
                        </Link>
                        <DeleteOutline className="userlistdelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
      ];
      
      
    return (
        <div className="userlist">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={10} checkboxSelection disableSelectionOnClick />
        </div>
    )
}

export default UserList;
