import React from 'react';
import CanvasJSReact from '../canvasjs.react';
import { chartData, dataPointsConfig } from '../mockData/bubbleChartData';

function BubbleChart() {
    let CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const dataPointsArray = chartData.map((data, idx) => {
        return {
            label: data.dentist,
            x: data.adjustedProduction,
            y: data.patientsSeen,
            z: 1,
            markerColor: dataPointsConfig[idx].markerColor,
            markerBorderColor: dataPointsConfig[idx].markerBorderColor,
            markerBorderThickness: idx === 0 ? 5 : 2,
        }
    })

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "",
            fontSize: 11,
        },
        axisX: {
            title: "Adjusted Production (in US Dollars)",
            valueFormatString: "$#,##0.##",
            gridThickness: 0.1
        },
        axisY: {
            title: "Patients Seen",
            gridThickness: 0.1

        },
        data: [{
            type: "bubble",
            indexLabel: "{label}",
            indexLabelFontSize: 10,
            indexLabelMaxWidth: 50,
            indexLabelWrap: true,
            toolTipContent: "<b>{label}</b><br>Adjusted Production: '$'{x}<br>Patients Seen: {y}",
            dataPoints: dataPointsArray
        }]
    }
    return <div className='canvas-container'>
        <CanvasJSChart options={options} />
    </div>;
};

export default BubbleChart;
