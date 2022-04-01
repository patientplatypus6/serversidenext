import BlogList from '../components/bloglist'
import styles from '../css/Main.module.css'
import Header from '../components/header'
import PageList from '../components/pagelist'
import Head from 'next/head'


export default function Links(){
  return(
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto+Mono:wght@100&display=swap" rel="stylesheet"/>
      </Head>
      <div className={styles.headercontainer} style={{width: '100vw'}}>
        <Header/>
      </div> 
      <div className={styles.listcontainerleft}>
        <BlogList/>
      </div>
      <div className={styles.pagecontentcontainer}>
        This is the links page
      </div>
      <div className={styles.listcontainerright}>
        <PageList/>
      </div>
    </div>
  )
}