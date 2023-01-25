import MenuBar from "../Components/MenuBar"
import NavBar from "../Components/NavBar"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { uploadImage } from '../firebase/config'

const Admin = () => {
    // Variables for API or sistem
    const [show, setShow] = useState(false);
    const [apiMatters, setApiMatters] = useState([])
    const [apiAssignations, setApiAssignations] = useState([])
    // Variables creating assignation
    const [loadAssignation, setLoadAssignation] = useState([])
    const [loadDateAssignation, setLoadDateAssignation] = useState([])
    const [loadMatterAssignation, setLoadMatterAssignation] = useState('Cálculo Integral')
    // Variables creating new matter
    const [loadMatter, setLoadMatter] = useState([])
    const [loadDescription, setLoadDescription] = useState([])
    const [fileImage, setFileImage] = useState([])
    const [loadDepartment, setLoadDepartment] = useState('Ingeniería')
    const [loadTutors, setLoadTutors] = useState([])
    const [element, setElement] = useState([])



    const addElement = () => {
        setLoadTutors([...loadTutors, element]);
    }

    const removeElement = (index) => {
        let newElement = [...loadTutors];
        newElement.splice(index, 1);
        setLoadTutors(newElement);
    }

    const loadDataAssignations = async () => {
        await axios.get('https://server-benzy-app.vercel.app/Assignation/api').then((response) => {
            setApiAssignations(response.data.data)
        }).catch((error) => {
            toast.error("Hay un problema con el servidor Code: Data$1 😵")
        })
    }

    const loadDataApi = async () => {
        await axios.get("https://server-benzy-app.vercel.app/Materia/api").then((response) => {
            setApiMatters(response.data.data)
        }).catch((error) => {
            toast.error("Hay un problema con el servidor Code: Data$1 😵")
        })
    }

    const handlerCreateAssignation = async (loadAssignation, loadDateAssignation, loadMatterAssignation) => {
        await axios.post(`https://server-benzy-app.vercel.app/Assignation/creating`, {
            name: loadAssignation,
            date: loadDateAssignation,
            materia: loadMatterAssignation
        }).then((response) => {
            console.log(response.data.data)
            toast('Se ha creado exitosamente la Assignación!',
                {
                    icon: '👏',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        }).catch((error) => {
            console.log(error)
            toast('Lo sentimos, no se ha podido crear la Assignación',
                {
                    icon: '😭',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        })
    }

    const handlerCreateMatter = async (e) => {
        e.preventDefault()
        const url = await uploadImage(fileImage)

        await axios.post(`https://server-benzy-app.vercel.app/Materia/creating`, {
            id: loadMatter,
            enlace: url,
            tutors: loadTutors,
            description: loadDescription,
            department: loadDepartment,
        }).then((response) => {
            console.log(response)
            toast(`Se ha creadola materia ${loadMatter} correctamente!`,
                {
                    icon: '👏',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        }).catch((error) => {
            toast((t) => (
                <span>
                    Error de creación, hubo un problema
                </span>
            ), {
                icon: '😭',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
        })
    }

    useEffect(() => {
        loadDataAssignations()
    }, []);

    useEffect(() => {
        loadDataApi()
    }, []);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setTime(new Date());
    //     }, 1000)

    return (<>
        <Toaster position="top-right" reverseOrder={false} />
        <div className="container-scroller">
            <NavBar />
            <div className="container-fluid page-body-wrapper">
                <MenuBar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row">
                            {/* Form Creating news Assignations  */}
                            <div className="col-md-6 grid-margin">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Create Assignation 👨‍💻</h4>
                                        <p className="card-description">
                                            Create a new assignation for matter
                                        </p>
                                        <form className="forms-sample">
                                            <div className="form-group">
                                                <label >Name</label>
                                                <input type="text" className="form-control"
                                                    onChange={(e) => setLoadAssignation(e.target.value)}
                                                    value={loadAssignation} id="exampleInputUsername1" placeholder="Name Assignation" />
                                            </div>
                                            <div className="form-group">
                                                <label >Date</label>
                                                <input type="date" className="form-control"
                                                    onChange={(e) => setLoadDateAssignation(e.target.value)}
                                                    value={loadDateAssignation} id="exampleInputEmail1" placeholder="Date of Assignation" />
                                            </div>
                                            <div className="form-group">
                                                <label >Date</label>
                                                <input type="text" className="form-control"
                                                    onChange={(e) => setLoadMatterAssignation(e.target.value)}
                                                    value={loadMatterAssignation} id="exampleInputEmail1" placeholder="Matter" disabled />

                                                {/* <label className='pb-2' for="exampleInputEmail1">Matter</label>
                                                <Button variant="primary" onClick={() => setShow(true)}>
                                                    Select Matter
                                                </Button> */}
                                            </div>
                                            <div className='row center'>
                                                <button type="button" onClick={() => handlerCreateAssignation(loadAssignation, loadDateAssignation, loadMatterAssignation)} className="btn btn-primary mr-2">Create</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* Form creating news matters */}
                            <div className="col-md-6 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Create Matter (Dev - 👨‍💻)</h4>
                                        <p className="card-description">
                                            Create a new Matter
                                        </p>
                                        <form className="forms-sample" onSubmit={handlerCreateMatter}>
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" className="form-control" value={loadMatter}
                                                    onChange={(e) => setLoadMatter(e.target.value)} placeholder="Name of the new Matter" />
                                            </div>
                                            <div className="form-group">
                                                    <label>Image</label>
                                                    <input type="file" className="form-control"
                                                        onChange={(e) => setFileImage(e.target.files[0])}
                                                        />
                                                </div>
                                            <div className="form-group">
                                                <label>Departmen Select</label>
                                                <input type="text" className="form-control"
                                                    onChange={(e) => setLoadDepartment(e.target.value)}
                                                    value={loadDepartment} placeholder="name of the Department" disabled />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleTextarea1">Description</label>
                                                <textarea value={loadDescription} onChange={(e) => setLoadDescription(e.target.value)} className="form-control" rows="4"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label >Tutors</label>
                                                <div className="row">
                                                    <div className="col-9">
                                                        <input type="email" className="form-control"
                                                            onChange={(e) => setElement(e.target.value)}
                                                            value={element} placeholder="Tutors this matter" />
                                                    </div>
                                                    <div className="col-3">
                                                        <button type="button" onClick={() => addElement(element)} className="btn btn-primary btn-rounded btn-icon">
                                                            <i className="ti-plus"></i>
                                                        </button>
                                                    </div>
                                                    <div className="container text-center row">
                                                        <label className='pt-3' >Listado de Tutores</label>
                                                        <ul className='list-ticked'>
                                                            {loadTutors.map((element, index) => (
                                                                <li className="pb-2" key={index}>{element} <button style={{ width: '25px', height: '25px' }} onClick={() => removeElement(index)} type="button" className="btn btn-danger btn-rounded btn-icon">
                                                                    <i className="bi bi-x-circle"></i>
                                                                </button></li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row center'>
                                                <button type="submit" className="btn btn-primary mr-2">Create</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p className="card-title mb-0">Tabla De Asignaciones</p>
                                        <div className="table-responsive">
                                            <table className="table table-striped table-borderless">
                                                <thead>
                                                    <tr className='text-center'>
                                                        <th>Asignación <span className='badge badge-primary'>{apiAssignations.length}</span></th>
                                                    </tr>
                                                </thead>
                                                <tbody>{apiAssignations.map((data) => {
                                                    return (
                                                        <tr className='text-center'>
                                                            <td>{data.name}</td>
                                                        </tr>
                                                    )
                                                })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p className="card-title mb-0">Tabla De Materias</p>
                                        <div className="table-responsive">
                                            <table className="table table-striped table-borderless">
                                                <thead>
                                                    <tr className="text-center">
                                                        <th>Materia <span className='badge badge-primary'>{apiMatters.length}</span></th>
                                                    </tr>
                                                </thead>
                                                <tbody>{apiMatters.map((data) => {
                                                    return (
                                                        <tr className="text-center">
                                                            <td>{data.id}</td>
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
                        {/* <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="card-title mb-0">Matters</p>
                                            <div className="table-responsive">
                                                <table className="table table-striped table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th>Matte</th>
                                                            <th>Date</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>{apiMatters.map((data)=>{
                                                        return(
                                                            <tr>
                                                            <td>{data.id}</td>
                                                            <td>I don'k know</td>
                                                            <td className="font-weight-medium"><div className="badge badge-primary">Hellow World!</div></td>
                                                        </tr>
                                                        )
                                                    })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-100w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Custom Modal Styling
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    {apiMatters.length === 0 ? 'Cargando' : apiMatters.map((data) => {
                        return (
                            <div className="card">
                                <div className="card-body">
                                    {data.id}
                                </div>
                            </div>
                        )
                    })}

                </div>
            </Modal.Body>
        </Modal>

    </>);
}

export default Admin;