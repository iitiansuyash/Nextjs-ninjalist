import Head from 'next/head'
import Image from 'next/image'
import myGif from 'url'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const About = () => {
    return ( 
        <div>
            <h1 className={styles.title} >About page!</h1>
            <p>This is my very First project in nextJS and i am already in love with this programming language.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate nec leo ut elementum. In tincidunt, mi a iaculis sagittis, magna nulla venenatis dolor, vel blandit ante neque eget neque. Ut viverra, dui ac maximus placerat, elit purus auctor tortor, et ullamcorper nunc augue ut justo.
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate nec leo ut elementum. In tincidunt, mi a iaculis sagittis, magna nulla venenatis dolor, vel blandit ante neque eget neque. Ut viverra, dui ac maximus placerat, elit purus auctor tortor, et ullamcorper nunc augue ut justo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate nec leo ut elementum. In tincidunt, mi a iaculis sagittis, magna nulla venenatis dolor, vel blandit ante neque eget neque. Ut viverra, dui ac maximus placerat, elit purus auctor tortor, et ullamcorper nunc augue ut justo.</p>
            </p>
            {/* <p className={styles.title}> 
                  <Image
                  src="/img5.jpg"
                  alt="Picture of the author"
                  width="300px"
                  height="300px"
                  layout="fixed" 
                  />
              </p> */}
              <a><a href="https://www.linkedin.com/in/suyash-suryavanshi-1b020a203" className={styles.btn}>ABOUT ME</a> </a>
        </div>   
     );
}
 
export default About;