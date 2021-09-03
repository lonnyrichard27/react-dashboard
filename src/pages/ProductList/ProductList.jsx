import React, { useState} from 'react'
import './productlist.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData'
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !==id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'product',
          headerName: 'Product',
          width: 150,
          renderCell: (params) =>{
            return(
                <div className="productlistuser">
                    <img className="productlistimg" src={params.row.img} alt="" />
                    {params.row.name}
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
          field: 'stock',
          headerName: 'Stock',
          width: 200,
          editable: true,
        },
        {
          field: 'price',
          headerName: 'Price',
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
                        <Link to={"/product/"+params.row.id}>
                            <button className="productlistedit">Edit</button>
                        </Link>
                        <DeleteOutline className="productlistdelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
      ];

    return (
        <div className="productlist">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={10} checkboxSelection disableSelectionOnClick />
        </div>
    )
}


export default ProductList
