import {useEffect, useState} from "react";
import styles from "../styles/Home.module.css";
import Map from "/src/components/Map";
import Link from "next/link";
import {signInWithPopup,onAuthStateChanged, signOut} from  "firebase/auth";
import {auth, provider} from "../firebase";
import {useRouter} from "next/router";

const Home = (props) => {

  const [user,setUser] = useState({name: '',profile: ''});

  const router = useRouter();

  useEffect(() => {

    return onAuthStateChanged(auth, user => {

      if(user){
        setUser({name: user.displayName, profile: user.photoURL});

      }else{
        setUser({name: '', profile: ''})

        router.push('/login');
      }

    })
  },[])


  return (
    <>
    <div className={styles.container}>
        <Map />
        <div className="flex-1 p-5 md:p-10 space-y-5">
           <header className="flex justify-between items-center">
             <img src="https://i.ibb.co/n6LWQM4/Post.png"  className="h-10" />
             
             <div className="flex items-center space-x-1 font-bold">
               <div className="w-20 md:w-auto">{user.name}</div>
               <img 
                src={user.profile}  
                className="h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer"
                onClick={() => signOut(auth)}
                 />
             </div>
           </header>  

           <div className="flex space-x-5">

            <Link href="search">
             <button className={styles.actionButton}>
               <img src="https://i.ibb.co/cyvcpfF/uberx.png" className="h-3/5 " />
               <span>Ride</span>
             </button>
            </Link>

            <Link href="search">
             <button className={styles.actionButton}>
               <img src="https://i.ibb.co/n776JLm/bike.png" className="h-3/5 " />
               <span>Wheels</span>
             </button>
            </Link>

            <Link href="search">
             <button className={styles.actionButton}>
               <img src="https://i.ibb.co/5RjchBg/uberschedule.png" className="h-3/5 " />
               <span>Reserve</span>
             </button>
            </Link>
           </div>
           

           <div className="h-20 bg-gray-100 rounded-lg text-2xl p-4 flex items-center">
              <h2>Where to?</h2>
           </div>
        </div>
    </div>    
    </>
  )
}


export default Home;
