import MenuBar from "../Components/MenuBar";
import NavBar from "../Components/NavBar";
import axios from 'axios'
import { useEffect, useState } from 'react'
import logoAtomo from './atomo.png'
import Badge from "react-bootstrap/Badge";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Courses = () => {
    const [apiMatters, setApiMatters] = useState([])
    const userpicPositionning = {
        position: 'relative',
        top: '-60px',
        marginBottom: '-60px'
    }

    const loadDataApi = async () => {
        await axios.get("https://server-benzy-app.vercel.app/Materia/api").then((response) => {
            setApiMatters(response.data.data)
        }).catch((error) => {
            console.log("Hay un problema con el servidor Code: Data$1 😵")
        })
    }
    const mattersLoading = ["", "", "", "", "", "", "", ""]

    useEffect(() => {
        loadDataApi()
    }, [])
    return (<>
        <div className="container-scroller">
            <NavBar />
            <div className="container-fluid page-body-wrapper">
                <MenuBar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <h3>Panel Courses</h3>
                        <div className="row">
                            <div className="col-4 py-2" key="dhbchg78321">
                                <div className='card shadow'>
                                    <div style={{ backgroundImage: `url(https://image.shutterstock.com/image-photo/mathematical-physical-formulas-against-background-600w-2010979148.jpg)`, height: '110px', backgroundSize: 'cover', borderRadius: '20px 20px 0 0' }}></div>
                                    <div className="">
                                        <div
                                            style={userpicPositionning}
                                            className="text-center ">
                                            <img src={logoAtomo} className="rounded-circle" alt="Atomic" />
                                        </div>
                                        <p className="h4 text-center">
                                            <span className="font-weight-bold">Física Mecánica</span>
                                            {' '}
                                        </p>
                                        <p className="text-center grey mb-4">Ingridd
                                            <Badge className='offset-md-1' bg="primary">Jueves</Badge>
                                        </p>
                                    </div>
                                    <div className="container text-center py-3">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `87%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">87%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {apiMatters.length == 0 ? mattersLoading.map((data) => {
                                return (
                                    <div className="col-md-4 py-2" key="dhbchg78375">
                                        <div className='card shadow'>
                                            <Skeleton style={{ height: '110px', backgroundSize: 'cover', borderRadius: '20px 20px 0 0' }} />
                                            <div className="text-center px-2">
                                                <div
                                                    style={userpicPositionning}
                                                    className="text-center ">
                                                    <Skeleton width={90} height={90} circle />
                                                </div>
                                                <p className="h4 text-center">
                                                    <span className="font-weight-bold"><Skeleton /></span>
                                                </p>
                                                <p className="text-center grey mb-4">
                                                    <Skeleton />
                                                </p>
                                                <p className="text-center grey mb-4">
                                                    <Skeleton />
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : apiMatters.map((data) => {
                                return (
                                    <div className="col-4 py-2" key="dhbchg78321">
                                        <div className='card shadow'>
                                            <div style={{ backgroundImage: `url(${data.enlace})`, height: '110px', backgroundSize: 'cover', borderRadius: '20px 20px 0 0' }}></div>
                                            <div className="">
                                                <div
                                                    style={userpicPositionning}
                                                    className="text-center ">
                                                    <img src={logoAtomo} className="rounded-circle" alt="Atomic" />
                                                </div>
                                                <p className="h4 text-center">
                                                    <span className="font-weight-bold">{data.id}</span>
                                                    {' '}
                                                </p>
                                                <p className="text-center grey mb-4">{data.tutors}
                                                    <Badge className='offset-md-1' bg="primary">Jueves</Badge>
                                                </p>
                                            </div>
                                            <div className="container text-center py-3">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `87%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">87%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default Courses;