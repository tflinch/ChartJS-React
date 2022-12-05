import React from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

export default function  BarChart({chartdata}){
    return(
        <div style={{width: 700}}>
        <Bar 
        data={chartdata}
        height={400}
        width={600}
        
        />
        </div>
    )
}