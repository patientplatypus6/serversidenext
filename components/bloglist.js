import Image from 'next/image'
import {blogs} from '../utility/utility'
import styles from '../css/Main.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function BlogList(){
  const router = useRouter();
  console.log('value of router.asPath: ', router.asPath)

  const handleRoute = (e) => {
    router.push(e)
  }

  return(
    <div className={styles.bloglist}>
      {Object.keys(blogs).map(key =>{
        if(isNaN(key)!=true){
          return(
            <div className={router.asPath==blogs[key]['route']?styles.blogitemselected:styles.blogitem}
            onClick={()=>handleRoute(blogs[key]['route'])}
            key={key}
            >
              {blogs[key]['title']}
            </div>
          )
        }
      })}
    </div>
  )
}