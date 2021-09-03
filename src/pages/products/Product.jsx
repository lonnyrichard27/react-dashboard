import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'
import Chart from '../../components/chart/Chart'
import {productData} from '../../dummyData'
import { Publish } from '@material-ui/icons'

const Product = () => {
    return (
        <div className="product">
            <div className="producttitlecontainer">
                <h1 className="producttitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productaddbutton">Create</button>
                </Link>
            </div>
            <div className="producttop">
                <div className="producttopleft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="producttopright">
                    <div className="productinfotop">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="productinfoimg" />
                        <span className="productname">Airpods</span>
                    </div>
                    <div className="productinfobottom">
                        <div className="productinfroitem">
                            <span className="productinfokey">id:</span><span className="productinfovalue">234</span> 
                        </div>
                        <div className="productinfroitem">
                            <span className="productinfokey">sales:</span><span className="productinfovalue">$3,000</span>
                        </div>
                        <div className="productinfroitem">
                            <span className="productinfokey">active:</span><span className="productinfovalue">yes</span>
                        </div>
                        <div className="productinfroitem">
                            <span className="productinfokey">in stock:</span><span className="productinfovalue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productbottom">
                <form className="productform">
                    <div className="productformleft">
                        <label htmlFor="">Product Name</label>
                        <input type="text" placeholder="Apple Airpod" />
                        <label>In Stock</label>
                        <select name="instock" id="idstock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="idactive">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productformright">
                        <div className="productupload">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productuploadimg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: 'none'}} />
                        </div>
                            <button className="productbutton">
                                Update
                            </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
