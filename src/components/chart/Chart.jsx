import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip,ResponsiveContainer } from 'recharts';

const chart = ({ title, data, dataKey, grid}) => {

    return (
        <div className="chart">
            <h3 className="charttitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    {/* if theres grid data use cartesiangrid */}
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="#e0dfdf" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default chart;

