import Link from "next/link";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

const NotFound = () => {
    const router = useRouter()
  
    useEffect(() => {
    //console.log('Testing useEffect Fuction!!')
      setTimeout(() => {
        // router.go(-1)
        // router.go(1)
        router.push('/')
      }, 3000)
    }, [])

    return ( 
        <div className="notFound">
            <h1 className={styles.title}>Oops..</h1>
            <h2 className={styles.title}>This page Url cannot be found</h2>
            <p> <Link href="/"><a className={styles.btn}>Home</a></Link></p>
        </div>
     );
}
 
export default NotFound;