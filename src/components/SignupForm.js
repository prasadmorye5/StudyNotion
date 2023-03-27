import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return ;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("printing Final account data ");
        console.log(finalData);

        navigate("/dashboard");

    }


  return (
    <div>
        {/* student-Instructor tab */}
        <div
        className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

            <button
            className={`${accountType === "student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("student")}>
                Student
            </button>

            <button
            className={`${accountType === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler} >
        {/* first name and lastName */}
            <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
            </div>
            {/* email Add */}
            <div className='mt-[20px]'>
            <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
            </label>
            </div>
            

            {/* createPassword and Confirm Password */}
            <div className='w-full flex gap-x-4 mt-[20px]'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span
                     className='absolute right-3 top-[38px] cursor-pointer' 
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? 

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type= {showConfirmPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span 
                     className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ?

                         (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                         (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>
        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Create Account
        </button>
        </form>

    </div>
  )
}

export default SignupForm

































// import React, { useState } from 'react'
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import {toast} from "react-hot-toast"
// import { useNavigate } from 'react-router-dom';


// const SignupForm = ({setIsLoggedIn}) => {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         firstName:"",
//         lastName:"",
//         email:"",
//         password:"",
//         confirmPassword:""
//     })

//     const [showPassword, setShowPassword] = useState(false);

//     function changeHandler(event) {

//         setFormData( (prevData) =>(
//             {
//                 ...prevData,
//                 [event.target.name]:event.target.value
//             }
//         ) )

//     }

//     function submitHandler(event) {
//         event.preventDefault();
//         if(formData.password != formData.confirmPassword) {
//             toast.error("Passwords do not match");
//             return ;
//         }

//         setIsLoggedIn(true);
//         toast.success("Account Created");
//         const accountData = {
//             ...formData
//         };
//         console.log("printing account data ");
//         console.log(accountData);

//         navigate("/dashboard");

//     }


//   return (
//     <div>
//         {/* student-Instructor tab */}
//         <div>
//             <button>
//                 Student
//             </button>
//             <button>
//                 Instructor
//             </button>
//         </div>

//         <form onSubmit={submitHandler}>
//         {/* first name and lastName */}
//             <div>
//                     <label>
//                         <p>First Name<sup>*</sup></p>
//                         <input
//                             required
//                             type="text"
//                             name="firstName"
//                             onChange={changeHandler}
//                             placeholder="Enter First Name"
//                             value={formData.firstName}
//                         />
//                     </label>

//                     <label>
//                         <p>Last Name<sup>*</sup></p>
//                         <input
//                             required
//                             type="text"
//                             name="lastName"
//                             onChange={changeHandler}
//                             placeholder="Enter Last Name"
//                             value={formData.lastName}
//                         />
//                     </label>
//             </div>
//             {/* email Add */}
//             <label>
//                     <p>Email Address<sup>*</sup></p>
//                     <input
//                         required
//                         type="email"
//                         name="email"
//                         onChange={changeHandler}
//                         placeholder="Enter Email Address "
//                         value={formData.email}
//                     />
//             </label>

//             {/* createPassword and Confirm Password */}
//             <div>
//                 <label>
//                     <p>Create Password<sup>*</sup></p>
//                     <input
//                         required
//                         type= {showPassword ? ("text") : ("password")}
//                         name="password"
//                         onChange={changeHandler}
//                         placeholder="Enter Password"
//                         value={formData.password}
//                     />
//                     <span onClick={() => setShowPassword((prev) => !prev)}>
//                         {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
//                     </span>
//                 </label>

//                 <label>
//                     <p>Confirm Password<sup>*</sup></p>
//                     <input
//                         required
//                         type= {showPassword ? ("text") : ("password")}
//                         name="confirmPassword"
//                         onChange={changeHandler}
//                         placeholder="Confirm Password"
//                         value={formData.confirmPassword}
//                     />
//                     <span onClick={() => setShowPassword((prev) => !prev)}>
//                         {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
//                     </span>
//                 </label>
//             </div>
//         <button>
//             Create Account
//         </button>
//         </form>

//     </div>
//   )
// }

// export default SignupForm


































// // import React from 'react'
// // import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
// // import { useState, useNavigate } from 'react';
// // import {toast} from "react-hot-toast"

// // const SignupForm = ({setIsLoggedIn}) => {
// //     const navigate = useNavigate();

// //     const[formData, setFormData] = useState({
// //         firstName:"",
// //         lastName:"",
// //         email:"",
// //         password:"",
// //         confirmPassword:""
// //     })
        
// //     const [showPassword, setShowPassword] = useState(false);

// //     function changeHandler(event) {
// //         setFormData( (prevData) => (
// //             {
// //                 ...prevData,
// //                 [event.target.name]:event.target.value
// //             }
// //         ))
// //     }

// //     function submitHandler(event) {
// //         event.preventDefault();
// //         if(formData.password != formData.confirmPassword){
// //             toast.error("Password do not match ");
// //             return ;
// //         }
// //         setIsLoggedIn(true);
// //         toast.success("Account Created");
// //         const accountData = {
// //             ...formData
// //         };
// //         console.log("printing account data ");
// //         console.log(accountData);

// //         navigate("/dashboard");
// //     }
// //   return (
// //     <div>
// //       {/* student instr form    */}
// //       <div>
// //         <button>
// //             Student 
// //         </button>
// //         <button>
// //             Instructor
// //         </button>
// //       </div>

      

     
// //         <form onSubmit={submitHandler}>
// //         {/* First Name and Last Name  */}
// //             <div>
// //             <label>
// //                 <p>
// //                     First Name<sup>*</sup></p>
// //             <input 
// //                 type ="text"
// //                 required
// //                 name="firstName"
// //                 placeholder="Enter the Name"
// //                 value={formData.firstName}
// //                 onClick = {changeHandler}
// //             />
// //             </label>

// //             <label>
// //                 <p>Last Name</p><sup>*</sup>
// //                 <input
// //                     type="text"
// //                     required
// //                     name="lastName"
// //                     placeholder="Enter your Last Name"
// //                     onChange={changeHandler}
// //                     value ={formData.lastName}
// //                 />
// //             </label>
// //             </div>
// //            {/* Email Address  */}
// //         <label>
// //             <p>
// //                 Email Address<sup>*</sup>
// //             </p>
// //             <input
// //                 required
// //                 type="email"
// //                 placeholder="Enter Email Address"
// //                 value ={formData.email}
// //                 name = "email"
// //                 onChange={changeHandler}
// //             />
// //         </label>

// //         {/* create passs and confirm pass  */}

// //         <div>
// //         <label>
// //             <p>
// //                 Create Password <sup>*</sup>
// //             </p>
// //             <input
// //                 required
// //                 type={showPassword ? ("text") : ("password")}
// //                 placeholder="Enter Password"
// //                 value ={formData.password}
// //                 name = "password"
// //                 onChange={changeHandler}
// //             />
// //             <span onClick={() => setShowPassword((prev) => !prev)}>
// //                 {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) } 
// //             </span>
// //         </label>

// //         <label>
// //             <p>
// //                 Confirm Password <sup>*</sup>
// //             </p>
// //             <input
// //                 required
// //                 type={showPassword ? ("text") : ("password")}
// //                 placeholder="Confirm Password"
// //                 value ={formData.confirmpassword}
// //                 name = "Confirm password"
// //                 onChange={changeHandler}
// //             />
// //             <span onClick={() => setShowPassword((prev) => !prev)}>
// //                 {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) } 
// //             </span>
// //         </label>
// //         </div>

// //         <button>
// //             Create Account
// //         </button>
// //          </form>
     
        

// //     </div>
// //   )
// // }
// // export default SignupForm