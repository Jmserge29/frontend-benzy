import React from 'react';
import {
    Chart as ChartJS, RadialLinearScale, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, ScriptableContext
} from "chart.js";
import { Line, Doughnut, Radar } from "react-chartjs-2";
import MenuBar from "../Components/MenuBar"
import NavBar from "../Components/NavBar"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react"
import Loader from '../Components/Loader';
axios.defaults.withCredentials = true

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, RadialLinearScale, Filler, Title);

const Dashboard = () => {
    const [dataMatters, setDataMatters] = useState([])
    const [estadistics, setEstadistics] = useState([])
    const handlerDashboard = async()=> {
        toast('Dashboard!', {
            icon: '👏',
          });
        await axios.post(`https://server-benzy-app.vercel.app/User/dashboard`,{
            email: "Jmserge29$21@gmail.com"
        }).then((response)=>{
            toast.success('Data Obtenida!')
            console.log(response.data)
            setEstadistics(response.data)
            const array = estadistics.estadistics.map((data)=>{
                console.log('Estadistics: ',data.matter)
            })
        }).catch((error)=>{
            console.log(error)
        })
    }

    const getMaterias = async () => {
        await axios.get("https://server-benzy-app.vercel.app/Materia/api", {
            withCredentials: true, headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then((response) => {
            console.log(response.data.data)
            setDataMatters(response.data.data)
            toast.success('Successfully toasted!')
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        getMaterias()
    }, []);

    const data = {
        labels: estadistics.length === 0 ? ['Aqua marine', 'Purple', 'Yellow', 'Hellow'] : estadistics.estadistics.map(data=>data.matter),
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    return (<>
        <Toaster position="top-right" reverseOrder={false} />
        <div className="container-scroller">
            <NavBar />
            <div className="container-fluid page-body-wrapper">
                <MenuBar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row">
                            <div className="col-md-12 grid-margin">
                                <div className="row">
                                    <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                                        <h3 className="font-weight-bold">Panel Dashboard Benzy</h3>
                                        <h6 className="font-weight-normal mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptatem voluptate provident laborum. <span className="text-primary">3 unread alerts!</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 grid-margin stretch-card">
                                <div className="card tale-bg">
                                    <div className="card-people mt-auto">
                                        <img src='http://lachachara.org/wp-content/uploads/2015/06/postgrados-Norte.jpg' alt="people" />

                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-6 grid-margin transparent">
                                <div className="row">
                                    <div className="col-md-6 mb-4 stretch-card transparent">
                                        <div className="card card-tale">
                                            <div className="card-body">
                                                <p className="mb-4">Today’s Bookings</p>
                                                <p className="fs-30 mb-2">4006</p>
                                                <p>10.00% (30 days)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4 stretch-card transparent">
                                        <div className="card card-dark-blue">
                                            <div className="card-body">
                                                <p className="mb-4">Total Bookings</p>
                                                <p className="fs-30 mb-2">61344</p>
                                                <p>22.00% (30 days)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                                        <div className="card card-light-blue">
                                            <div className="card-body">
                                                <p className="mb-4">Number of Meetings</p>
                                                <p className="fs-30 mb-2">34040</p>
                                                <p>2.00% (30 days)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 stretch-card transparent">
                                        <div className="card card-light-danger">
                                            <div className="card-body">
                                                <p className="mb-4">Number of Clients</p>
                                                <p className="fs-30 mb-2">47033</p>
                                                <p>0.22% (30 days)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div class="col-md-6 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Block buttons</h4>
                                        <p class="card-description">Add class <code>.btn-block</code></p>
                                        <div class="template-demo">
                                            <button type="button" class="btn btn-info btn-lg btn-block"><i class="pr-2 ti-user"></i>
                                                Login
                                            </button>
                                            <button type="button" class="btn btn-dark btn-lg btn-block"><i class="pr-2 ti-user"></i>
                                                Register</button>
                                            <button onClick={handlerDashboard} type="button" class="btn btn-primary btn-lg btn-block">
                                                <i class="pr-2 ti-user"></i>
                                                Dashboard
                                            </button>
                                            <button type="button" class="btn btn-outline-secondary btn-lg btn-block">Other Option</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-title">Order Details</p>
                                        <p className="font-weight-500">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                                        <div className="d-flex flex-wrap mb-3">
                                            <div className=" mr-5 mt-3">
                                                <p className="text-muted">Order value</p>
                                                <h3 className="text-primary fs-30 font-weight-medium">12.3k</h3>
                                            </div>
                                            <div className="mr-4 mt-3">
                                                <p className="text-muted">Orders</p>
                                                <h3 className="text-primary fs-30 font-weight-medium">14k</h3>
                                            </div>
                                            <div className="mr-5 mt-3">
                                                <p className="text-muted">Users</p>
                                                <h3 className="text-primary fs-30 font-weight-medium">{estadistics.progress}</h3>
                                            </div>
                                        </div>
                                        <Doughnut data={data} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <p className="card-title">Progreso Por Materias</p>
                                            <a href="#" className="text-info">View all</a>
                                        </div>
                                        <p className="font-weight-500">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                                        <div className="charts-data text-center">
                                            {estadistics.length === 0 ? <Loader/> : estadistics.estadistics.map((data)=>{
                                                return(<div className="mt-3">
                                                <p className="mb-0">{data.matter}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="progress progress-md flex-grow-1 mr-4">
                                                        <div className={`progress-bar ${parseInt(data.progress) < 25 && 'bg-danger'} ${parseInt(data.progress) >= 25 && parseInt(data.progress) < 50 ? 'bg-warning': ''} ${parseInt(data.progress) >= 50 && parseInt(data.progress) < 75 ? 'bg-info': ''} ${parseInt(data.progress) >= 75 && 'bg-success'}`} role="progressbar" style={{ width: `${data.progress}` }} aria-valuenow={data.progress} aria-valuemin="0" aria-valuemax={data.progress}></div>
                                                    </div>
                                                    <p className="mb-0">{data.progress}</p>
                                                </div>
                                            </div>)
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <p className="card-title">Sales Report</p>
                                            <i className="icon-ellipsis"></i>
                                        </div>
                                        <p className="font-weight-500">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                                        <div className="charts-data">
                                            <div className="mt-3">
                                                <p className="mb-0">Data 1</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="progress progress-md flex-grow-1 mr-4">
                                                        <div className="progress-bar bg-inf0" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p className="mb-0">5k</p>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <p className="mb-0">Data 2</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="progress progress-md flex-grow-1 mr-4">
                                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: "35%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p className="mb-0">1k</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-title mb-0">Asignaciones Pendientes</p>
                                        <div className="table-responsive">
                                            <table className="table table-striped table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th>Asignación</th>
                                                        <th>Price</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>{estadistics.length === 0 ? <div className='text-center '>Cargando...</div> : estadistics.assignationsP.map((data)=>{
                                                    return(
                                                        <tr>
                                                            <td>{data}</td>
                                                            <td className="font-weight-bold">$362</td>
                                                            <td>21 Sep 2018</td>
                                                            <td className="font-weight-medium"><div className="badge badge-danger">Pendiente</div></td>
                                                        </tr>
                                                    )
                                                })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Dashboard;