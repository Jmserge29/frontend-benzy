import MenuBar from "../Components/MenuBar";
import NavBar from "../Components/NavBar";
import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react';
import {
    Chart as ChartJS, RadialLinearScale, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, ScriptableContext
} from "chart.js";
import { Line} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, RadialLinearScale, Filler, Title);
const Estadistics = () => {
    const [dataUser, setDataUser] = useState([])

    const getDataUser = async () => {
        await axios.post("https://server-benzy-app.vercel.app/User/dashboard", {
            withCredentials: true, headers: {
                'Access-Control-Allow-Origin': '*'
            },
            email: "Jmserge29$21@gmail.com"
        }).then((response) => {
            console.log(response.data)
            setDataUser(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        getDataUser()
    }, []);

    // Data for Line chartjs
    const dataLine = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: "Mobile apps",
                tension: 0.4,
                borderWidth: 0,
                pointRadius: 0,
                borderColor: "#cb0c9f",
                borderWidth: 3,
                backgroundColor: (context: ScriptableContext<"line">) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 230, 0, 50);
                    gradient.addColorStop(1, 'rgba(203,12,159,0.2)');
                    gradient.addColorStop(0.2, 'rgba(72,72,176,0.0)');
                    gradient.addColorStop(0, 'rgba(203,12,159,0)');
                    return gradient;
                },
                fill: true,
                data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                maxBarThickness: 6
            },
            {
                label: "Websites",
                tension: 0.4,
                borderWidth: 0,
                pointRadius: 0,
                borderColor: "#3A416F",
                borderWidth: 3,
                backgroundColor: (context: ScriptableContext<"line">) => {
                    const ctx = context.chart.ctx;
                    const gradient2 = ctx.createLinearGradient(0, 230, 0, 50);
                    gradient2.addColorStop(1, 'rgba(20,23,39,0.2)');
                    gradient2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
                    gradient2.addColorStop(0, 'rgba(20,23,39,0)');
                    return gradient2;
                },
                fill: true,
                data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
                maxBarThickness: 6
            },
        ],
    };

    const options = {
        responsive: true,
        // maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
        scales: {
            y: {
                grid: {
                    drawBorder: false,
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: false,
                    borderDash: [5, 5]
                },
                ticks: {
                    display: true,
                    padding: 10,
                    color: '#b2b9bf',
                    font: {
                        size: 11,
                        family: "Open Sans",
                        style: 'normal',
                        lineHeight: 2
                    },
                }
            },
            x: {
                grid: {
                    drawBorder: false,
                    display: false,
                    drawOnChartArea: false,
                    drawTicks: false,
                    borderDash: [5, 5]
                },
                ticks: {
                    display: true,
                    color: '#b2b9bf',
                    padding: 20,
                    font: {
                        size: 11,
                        family: "Open Sans",
                        style: 'normal',
                        lineHeight: 2
                    },
                }
            },
        },

    };

    return (<>
        <div className="container-scroller">
            <NavBar />
            <div className="container-fluid page-body-wrapper">
            <MenuBar />

                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row">
                            <div className="col-8">
                                <div className="card">
                                    <div className="card-body">
                            <Line data={dataLine} options={options} />
                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default Estadistics;