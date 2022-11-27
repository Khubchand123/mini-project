import app from '../firebase';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css';
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route,Routes, Link } from 'react-router-dom';



import pic1 from "../images/login/logo.jpg";
import pic2 from "../images/login/bglo.jpg";
import { Grid, Form, Segment, Header, Icon, Button, Message } from 'semantic-ui-react';
const Login = () =>{
    const auth = getAuth(app);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const signIn = () =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
            alert('success');
            const user = userCredential.user;
         // ...
        })
        .catch((error) => {
            alert(error.code);
             const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    return(
        <section class="vh-100 tab1" >
        <div class="container h-100">

            <div class="row d-flex justify-content-center align-items-center h-100 " >
                <div class="col-lg-12 col-xl-11" >
                    <div class="card text-black tab2" >

                        <a href="https://khubchand123.github.io/HomePage_Educate/"><i class="fa fa-arrow-left icona"></i></a>

                        <div class="card-body p-md-5 tab3">
                            <div class="row justify-content-center align-items-center">
                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1" >

                                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>





                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="form-outline flex-fill mb-0">
                                                <div class="input-icons">
                                                    <i class="fa fa-envelope icon"></i>
                                                    <input class="input-field form-control" type={"email"} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="form-outline flex-fill mb-0">
                                                <div class="input-icons">
                                                    <i class="fa fa-lock icon"></i>
                                                    <input class="input-field form-control" type={"password"} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="form-check d-flex mb-5">
                                            <input class="form-check-input me-2 d-flex" type="checkbox" value=""
                                                id="form2Example3c" />
                                            <label class="form-check-label" for="form2Example3">
                                                I agree all statements in <a href="#!" class="tab4" >Terms of service</a>
                                            </label>
                                        </div>

                                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="submit" onClick={signIn} class="btn btn-primary btn-lg">Login</button>
                                        </div>
                                        <div class=" my-3 col-12 text-center mb-3 register" >
                                                New User? <Link to="/register" class="lcolor">Register Now</Link>
                                        </div>


                                </div>
                                <div
                                    class=" col-lg-6 col-xl-7 text-center align-items-center justify-content-center  ">

                                    <div><img src={pic1} class="img-fluid col-xl-3" alt="Sample image" /></div>
                                    <div>
                                        <h2>Educate</h2>
                                    </div>
                                    <div class=" col-xl-11 bgrl"><img src={pic2} class="img-fluid  mt-4"
                                            alt="Sample image"/></div>
                                </div>

                            </div>
                        </div>
                        
                </div>
            </div>
        </div>
    </div>
    </section>
    
    );
}
export default Login;

