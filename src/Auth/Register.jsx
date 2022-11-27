import app from '../firebase';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import './Register.css';
import pic1 from "../images/register/log.jpg";
import pic2 from "../images/register/bgr.jpg";
import { Grid, Form, Segment, Header, Icon, Button, Message } from 'semantic-ui-react';
const Register = () =>{
    const auth = getAuth(app);
    const [username,setuserName] = useState("");
    const [cpassword,setcPassword] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const saveDataInDB = (User) =>{
        const photoURL = `http://gravatar.com/avatar/${User.uid}?d=identicon`;
        const res = fetch("https://login-setup-7d8be-default-rtdb.firebaseio.com/users.json",{
            method:"POST",

            body:JSON.stringify({
                username,
                photoURL
            }),

        });
        if(res){
            console.log('confirm');
        }
        else{
            console.log('not');
        }
    }
    
    const signUp = () =>{
        if(username.length==0 || password.length==0 || email.length==0 || cpassword.length==0){
            alert("Please fill all fields");
        }
        else if(password.length<8){
            alert('Password Lengths should be greater than 8');
        }
        else if(password!=cpassword){
            alert('password must be same');
        }
        else{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                saveDataInDB(user);
                alert("success");
                // ...
        })
        .catch((error) => {
            alert(error.code);
            // ..
        });
    }
    }
    
    return (
        <section class="vh-100 tag1" >
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black tag2" >
                        <div class="card-body p-md-5">
                            <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                    

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="form-outline flex-fill mb-0">
                                                <div class="input-icons">
                                                    <i class="fa fa-user icon"></i>
                                                        <input class="input-field form-control" type={"userName"} placeholder="UserName" onChange={(e)=>setuserName(e.target.value)} />
                                                </div>
                                            </div>

                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="form-outline flex-fill mb-0">
                                                <div class="input-icons">
                                                    <i class="fa fa-envelope icon"></i>
                                                    <input class="input-field form-control" type={"email"} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="form-outline flex-fill mb-0">
                                                <div class="input-icons">
                                                    <i class="fa fa-lock icon"></i>
                                                    <input class="input-field form-control" type={"password"} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="form-outline flex-fill mb-0">
                                                <div class="input-icons">
                                                    <i class="fa fa-key icon"></i>
                                                    <input class="input-field form-control" type={"cpassword"} placeholder="Confirm Password" onChange={(e)=>setcPassword(e.target.value)} />
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-check d-flex mb-5">
                                            <input class="form-check-input me-2 d-flex" type="checkbox" value=""
                                                id="form2Example3c" />
                                            <label class="form-check-label" for="form2Example3">
                                                I agree all statements in <a href="#!">Terms of service</a>
                                            </label>
                                        </div>

                                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button class="btn btn-primary btn-lg" type="submit" onClick={signUp}>Register</button>
                                        </div>
                                        <div class=" my-3 col-12 text-center mb-3 register" >
                        
                                            Have an account? <Link to="/login">LogIn</Link>
                                        </div>

                                    

                                </div>
                                <div
                                    class=" col-lg-6 col-xl-7 text-center align-items-center justify-content-center order-1 order-lg-2">

                                    <div><img src={pic1} class="img-fluid col-xl-3" alt="Sample image"/></div>
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
export default Register;