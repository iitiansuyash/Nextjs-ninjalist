import Head from 'next/head'
import Image from 'next/image'
import myGif from 'url'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        
        <h1 className={styles.title}>Home page!</h1>
        <p className={styles.text}>The Website is made using nextJS<Image src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width={20} height={15}></Image>, 
        GTG in data fetching and works fine with API callings. Also its a <strong>ninja list </strong> 
        website which just lists a load of different peoples(Json data set) and you can click on the particular data to see the information about the peoples listed in the website and further check their details </p>
        <p className={styles.title}> 
                  <Image
                  src="/img5.jpg"
                  alt="Picture of the author"
                  width="300px"
                  height="300px"
                  layout="fixed" 
                  />
              </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja_Listing</a>
        </Link>
      </div>
    </>
  );
}
