import React from 'react'
import { useState, useEffect } from 'react'
import "../../css/aos.css"
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Crumbs from '../../component/Crumbs/Crumbs'
import studentsign from "../../assets/img/study/student-sign.svg"

import educatorlogin1 from "../../assets/img/study/educator-login.svg"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Toast, { toast } from 'react-toastify'
import { connect } from "react-redux";
// import { SIGNUP_REQUEST } from '../../redux/actions';

function Studentsignup({ signupUsers, signUsers, logUsersResponse, loading }) {

   const initialValues = { email: "", password: "", confirmPassword: "", name: "" };
   const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({});
   const [showHidePassword, setShowHidePassword] = useState(false)

   const field = {
      type: "Learner Register",
      content: "Socially Purpose Driven Business Providing A Next Generation Learning as a Service Platform (GRIT LaaS)",
      route: [{ name: "Home", route: "/" }, { name: "Lass", route: "/studentlogin"}]
   }

   const Navigate = useNavigate()

   useEffect(() => {
      //  console.clear()
   }, [])
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
   };


   const handleSubmit = (e) => {
      e.preventDefault();

      let error = validate(formValues)

      if (Object.keys(error).length === 0) {
         var axiosConfig = {
            headers: {

               "Content-Type": "application/json",
               "Access-Control-Allow-Origin": "true",
            }
         };
         var data = {
            // "userId": "",
            "firstName": formValues.name,
            "lastName": "",
            "emailId": formValues.email,
            // "phone": "9884033102",
            // "age": "38",
            // "educationType": "BE",
            "password": formValues.password,
            "userRole": "Learner"
         }
         console.log(formValues)
         axios.post("http://44.203.0.129:8989/api/user/create", data)
            .then((res) => {
               console.log(res.data, "aasssssssssssssssss")
               if (res.data.message == "User created successfully." ) {
                toast.success("User Registered successfully.")
                Navigate("/studentlogin")
                  setFormValues(initialValues);
                  setFormErrors({})
             }
          
          })
          .catch((err) => {
             if(err.response.data.error.reason == "Email Id already exists "){
                toast.error("Email Id already exists")
             }
             else{
                toast.error("Somethign went wrong")
             }
             console.log(err.response.data,"ssssss")

          })



      } else {
         setFormErrors(validate(formValues));

      }
   }

   const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

      if (!values.email) {
         errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
         errors.email = "This is not a valid email format!";
      }
      if (!values.name) {
         errors.name = "Name is required";
      }
      if (values.password == "") {
         errors.password = "Password is required";
      }
      else if (values.password.length < 7) {
         errors.password = "Password must be more than 7 characters";
      }
      else if (values.password.length > 20) {
         errors.password = "Password cannot exceed more than 20 characters";
      }
      if (!values.confirmPassword) {
         errors.confirmPassword = "Confirm Password is required";
      }
      if (!(values.password == values.confirmPassword)) {
         errors.confirmPassword = "Confirm Password should be same as Password";
         // errors.password = "Password cannot exceed more than 10 characters";

      }
      return errors;
   };

   // const validate = (values) => {
   //    const errors = {};
   //    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

   //    if (!values.email) {
   //       errors.email = "Email is required!";
   //    } else if (!regex.test(values.email)) {
   //       errors.email = "This is not a valid email format!";
   //    }
   //    if (!values.password) {
   //       errors.password = "Password is required";
   //    } else if (values.password.length < 4) {
   //       errors.password = "Password must be more than 4 characters";
   //    } else if (values.password.length > 10) {
   //       errors.password = "Password cannot exceed more than 10 characters";
   //    }
   //    if (!values.confirmPassword) {
   //       errors.confirmPassword = "Confirm Password is required";
   //    } else if (values.confirmPassword.length < 4) {
   //       errors.confirmPassword = "Confirm Password must be more than 4 characters";
   //    } else if (values.confirmPassword.length > 10) {
   //       errors.confirmPassword = "Confirm Password cannot exceed more than 10 characters";
   //    } else if (values.password != values.confirmPassword) {
   //       errors.confirmPassword = "Confirm Password should be same as Password";

   //    }
   //    return errors;
   // };

   const [eyeon, eyeoff] = useState("password")

   const passwordshower = (value) => {
      if (eyeon == "password") {
         eyeoff("")
      }
      else {
         eyeoff("password")

      }
   }

   const [eyeon1, eyeoff1] = useState("password")

   const passwordshower1 = (value) => {
      if (eyeon1 == "password") {
         eyeoff1("")
      }
      else {
         eyeoff1("password")

      }
   }

   return (
      <>
         <Header />

         <Crumbs data={field} />


         <main id="main">
            <section id="login" className="login">
               <div className="container" >
                  <div className="row gy-5 banner-wrap" >
                     <div className="col-lg-6 text-center" data-aos="fade-up" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <img src={studentsign} className="img-fluid" alt="" />
                     </div>
                     <div className="col-lg-6 ps-0 ps-lg-5 d-flex flex-column  relative  text-lg-start"
                        data-aos="fade-down" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <div className="login-wrap p-4 p-md-5">
                           <div className="form-title">
                              <h3 className="mb-2 primary-color">Let's Create an Account!!</h3>
                              {/* <p className="mb-4">Please enter your email and password</p> */}
                           </div>
                           <form id="studentform" name="signform" className="signin-form" >
                              <div className="form-group mt-3">
                                 <input type="text" autoComplete className="form-control" onChange={handleChange} name="email" value={formValues.email} placeholder="Email" required />
                                 <p className="text-danger">{formErrors.email}</p>

                              </div>
                              <div className="form-group mt-3">
                                 <input type="text" autoComplete className="form-control" onChange={handleChange} name="name" value={formValues.name} placeholder="Name" required />
                                 <p className="text-danger">{formErrors.name}</p>

                              </div>
                              <div className="form-group mt-3">
                                 <input type={eyeon} autoComplete className="form-control" onChange={handleChange} name="password" value={formValues.password} placeholder="Password" required />
                                 <p className="text-danger">{formErrors.password}</p>
                                 <span toggle="#password-field" onClick={() => passwordshower()} className="bi bi-eye field-icon toggle-password" ></span>

                              </div>
                              <div className="form-group">
                                 <input id="password-field" autoComplete name="confirmPassword" type={eyeon1} onChange={handleChange} className="form-control" value={formValues.confirmPassword} placeholder="Confirm Password" required />
                                 <p className="text-danger">{formErrors.confirmPassword}</p>

                                 <span toggle="#password-field" onClick={() => passwordshower1()} className="bi bi-eye field-icon toggle-password" ></span>
                              </div>

                              <div className="form-group">
                                 <button type="submit" onClick={(e) => handleSubmit(e)} className="form-control btn btn-primary rounded submit px-3">Signup</button>
                              </div>
                              <div className="form-group d-md-flex">
                                 {/* <div className="w-50 text-left">
                                 <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                                 <input type="checkbox" checked/>
                                 <span className="checkmark"></span>
                                 </label>
                              </div> */}
                                 {/* <div className="w-50 d-flex justify-content-end">
                                 <a href="#">Forgot Password</a>
                              </div> */}
                              </div>
                           </form>
                           <p className="text-center mb-0" onClick={() => Navigate("/studentlogin")}>Already ! Have an Account  <a data-toggle="tab" href="#">Login</a></p>
                           {/* <div class="course-btn mt-4 text-center" onClick={() => Navigate("/createcourse")}>
                              <a href="#" class="btn btn-default btn-rd" title="Create Courses On Your Own">Create Courses</a>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>


         <Footer />


      </>
   )
}

// const mapStateToProps = (state) => (console.log(state))
// const mapDispatchToProps = (dispatch) => ({
//    signupUsers: (data) => dispatch({ type: SIGNUP_REQUEST, payload: data })
// })

// export default connect(mapStateToProps, mapDispatchToProps) (Studentsignup)

export default Studentsignup