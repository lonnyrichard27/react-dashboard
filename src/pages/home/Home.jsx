import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import './home.css'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSM/WidgetSm'
import WidgetsLg from '../../components/widgetsLG/WidgetsLg'

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homewidgets">
                <WidgetSm />
                <WidgetsLg />
            </div>
        </div>
    )
}

export default Home;
