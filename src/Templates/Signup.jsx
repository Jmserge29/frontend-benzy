import { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
const Signup = () => {
    const [user, setuser] = useState([])
    // Variables para inputs
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [materias, setMaterias] = useState([])
    const [assignations, setAssignations] = useState([])

    const signupFuction = async (e) => {
        e.preventDefault();
        await axios.post("https://server-benzy-app.vercel.app/User/signup", {
            email,
            password,
            materias,
            assignations
        })
            .then((response) => {
                console.log(response)
                setuser(response)
                toast.success('Successfully toasted!')
            }).catch((error => {
                console.log(error)
            }))
    }

    return (<>
    <h1>SignUp</h1>
    </>);
}

export default Signup;