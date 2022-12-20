import Tables from "../Components/Tables"
import axios from "axios"
import { useEffect, useState } from "react"
axios.defaults.withCredentials = true

const Dashboard = () => {
    const getMaterias = async() => {
        await axios.get("https://server-benzy-app.vercel.app/Materia/api",{ withCredentials: true, headers: {
            'Access-Control-Allow-Origin' : '*',
            }}).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })    
    }
    useEffect(()=>{
        getMaterias()
    }, []);
    return (<>

        <body className="g-sidenav-show  bg-gray-100">
            
            <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-4">
                                <div className="card-header pb-0">
                                    <h6>Authors table</h6>
                                </div>
                                <Tables/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    </>
    );
}

export default Dashboard;