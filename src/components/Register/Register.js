import React, { useContext } from 'react';
import registerAnimation from '../../assets/register.json';
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
const Register = () => {
const {createUser,googleSignIn,updateUser}=useContext(AuthContext);
const googleProvider=new GoogleAuthProvider();
const navigate=useNavigate();
const location=useLocation();
const from=location.state?.from?.pathname || "/";
const handleSignIn=(event)=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const photourl=form.photourl.value;
    console.log(name,photourl,email,password);
    createUser(email,password)
    .then(result=>{
        const user=result.user;
        console.log(user)
        toast.success('User Created Successfully');
        navigate(from, { replace: true });
        form.reset();
        const userInfo={
            displayName:name,
            photoURL:photourl
        }
        updateUser(userInfo)
        .then(()=>{})
        .catch(error=>console.log(error))
    })
    .catch(error=>console.error(error))
    
}
const handleGoogleSignIn=()=>{
    googleSignIn(googleProvider)
    .then(result=>{
        const user=result.user;
        console.log(user);
        navigate(from, { replace: true });
    })
    .catch(error=>console.log(error))
}


    return (
        <div className=' flex justify-center items-center md:flex-row lg:flex-row flex-col px-8 bg-emerald-100'>
        <div className='lg:w-1/2 md:w-1/2 p-8 border-2 rounded-md border-blue-200 m-4'>
        <h1 className='text-4xl font-bold'>
           <span style={{color:'#24A148'}}>Register </span>  
           <span style={{color:'#FF0066'}}>Now!</span> 
            </h1>
        <form onSubmit={handleSignIn} className=' text-start p-2'>
            <div className='grid grid-cols-2 gap-4'>
            <div className='my-4'>
            <label className='text-xl'> Name</label>
        <input type="text" name='name' placeholder="Type your name" className="mt-2 text-lg w-full input-bordered p-4 rounded-md" required/>
        </div>
        <div className='my-4'>
            <label className='text-xl'>PhotoUrl</label>
        <input type="text" name='photourl' placeholder="Type your password" className="mt-2 text-lg w-full p-4 rounded-md hover:border-pink-600" required/>
        </div>
        </div>
        
        <div className='grid grid-cols-2 gap-4'>
        <div className='my-4'>
            <label className='text-xl'>Email</label>
        <input type="email" name='email' placeholder="Type your email" className="mt-2 text-lg w-full p-4 rounded-md hover:border-pink-600" required/>
        </div>
        <div className='my-4'>
            <label className='text-xl'>Password</label>
        <input type="password" name='password' placeholder="Type your password" className="mt-2 text-lg w-full p-4 rounded-md hover:border-pink-600" required/>
        </div>
        </div>
        <input type="submit" className=' w-full btn btn-outline text-black  hover:bg-pink-600 my-4' style={{borderColor:'#FF0066'}} value="Register"/>
        </form>
        
     <p style={{color:'#24A148'}} className='text-lg'>Already Have An Account ? Please <Link to='/login' style={{color:'#FF0066'}}>Log In</Link></p>
     <div className="divider">OR</div>
     <button onClick={handleGoogleSignIn} className='w-full btn btn-outline text-black  hover:bg-green-600 my-4' style={{borderColor:'#FF0066'}}>GOOGLE</button>
        </div>

        <div className='lg:w-1/2 md:w-1/2'>
       <Lottie animationData={registerAnimation}></Lottie>
        </div>
      </div>
    );
};

export default Register;