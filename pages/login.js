import {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import {signInWithPopup,onAuthStateChanged} from  "firebase/auth";
import {auth, provider} from "../firebase";

const Login = () => {

  const router = useRouter();

  useEffect(() => {

    onAuthStateChanged(auth, user => {
      if(user){
        router.push("/")
      }
    })
  },[])

  return (
   <div className="page-wrapper bg-gray-200 flex flex-col justify-center items-center bg-white space-y-4 overflow-y-auto spaxe-y-5">
          <div className="px-5 space-y-5 md:w-2/5 bg-white p-7 shadow rounded-2xl">
            <img src="https://i.ibb.co/n6LWQM4/Post.png" className="block h-10" alt="Logo" />
            
            <img src="https://i.ibb.co/CsV9RYZ/login-image.png" className="block w-full" />
            <p className="text-2xl font-semibold">Log in to access your account</p>

             <div className="bg-white  flex space-x-2 items-center font-bold">
              <button className="bg-black w-full text-center text-white py-2" onClick={() => signInWithPopup(auth, provider)}>
                 Sign In with Google
              </button>
            </div>
          </div>
     </div>

  )
}

export default Login;