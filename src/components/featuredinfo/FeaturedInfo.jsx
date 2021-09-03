import React from 'react'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import './featuredinfo.css'

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featured-item">
                <span className="featuredtitle">Revenue</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$2,415</span>
                    <span className="featuredmoneyrate">
                        -11.4<ArrowDownward className="featuredicon negative"/>
                    </span>
                </div>
                <span className="featuredsub">Compared to last month</span>
            </div>

            <div className="featured-item">
                <span className="featuredtitle">Sales</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$15,000</span>
                    <span className="featuredmoneyrate">
                        -2.4<ArrowDownward className="featuredicon negative" />
                    </span>
                </div>
                <span className="featuredsub">Compared to last month</span>
            </div>

            <div className="featured-item">
                <span className="featuredtitle">Cost</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$5,615</span>
                    <span className="featuredmoneyrate">
                        +14.7<ArrowUpward className="featuredicon" />
                    </span>
                </div>
                <span className="featuredsub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
