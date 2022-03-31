import { useRouter } from 'next/router'
import { useEffect } from 'react'
import BlogList from '../../components/bloglist'
import styles from '../../css/Main.module.css'
import Drivingplaces from '../../blogs/Drivingplaces'
import Freedomdiscourse from '../../blogs/Freedomdiscourse'
import Header from '../../components/header'

import Head from 'next/head'

const Blog = () => {
  const router = useRouter()
  const { blogpost } = router.query
  // console.log('value of blogpost: ', blogpost)

  //this path would require dangerously settinnnerhtml 
  //which could potentially lead to cross site scripting attacks
  //see here: https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml

  // const returnBlog = () => {

    // if(blogpost!=undefined){
    //   var name = "<"+blogpost[0].toUpperCase()+blogpost.slice(1)+"/>"
    //   console.log('value of name: ', name) 
    //   return 
    // }else{
    //   return <div/>
    // }

    //alternative is just to use a helper function in utility
    //using if statements

  // }

  const returnBlog = () => {
    if(blogpost=='drivingplaces'){
      return <Drivingplaces/>
    }else if(blogpost=='freedomdiscourse'){
      return <Freedomdiscourse/>
    }
  }

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto+Mono:wght@100&display=swap" rel="stylesheet"/>
      </Head>
      <div className={styles.headercontainer} style={{width: '100vw'}}>
        <Header/>
      </div>  
      <div className={styles.bloglistcontainer}>
        <BlogList/>
      </div>
      <div className={styles.blogcontentcontainer}>
        {returnBlog()}
      </div>
    </div>
  )
}

export default Blog;