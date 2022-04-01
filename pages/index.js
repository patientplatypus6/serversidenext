
import {blognames} from '../utility/utility';
import BlogList from '../components/bloglist';
import styles from '../css/Main.module.css';
import { blogs } from '../utility/utility';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/header'
import PageList from '../components/pagelist'
import { AboutContainer } from './about';

export default function Home(){
  return(
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Press+Start+2P&family=Roboto+Mono:wght@100&display=swap" rel="stylesheet"/>
      </Head>
      <div className={styles.headercontainer} style={{width: '100vw'}}>
        <Header/>
      </div> 
      <div className={styles.listcontainerleft}>
        <BlogList/>
      </div>
      <div className={styles.pagecontentcontainer}>
        <AboutContainer/>
      </div>
      <div className={styles.listcontainerright}>
        <PageList/>
      </div>
    </div>
  )
}