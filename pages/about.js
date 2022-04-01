import BlogList from '../components/bloglist'
import styles from '../css/Main.module.css'
import Header from '../components/header'
import PageList from '../components/pagelist'
import Head from 'next/head'
import Image from 'next/image'

export const AboutContainer = () => {
  return(
    <div style={{textAlign: 'justify', marginRight: '10px'}}>
      <div style={{float: 'left', paddingRight: '5px'}}>
        <Image src='/profile.jpeg' height='200' width='200'/>
      </div>  
      <div>
        Hello, my name is Peter Weyand. I've worked as an analyst at   some banks, and have also worked on designing and building websites. Right now I'm writing and looking for a job. I like to hike, ride my bike, explore cities when I can. Wander about at random and read anything and everything I can. I also like to talk to people and hear new and interesting stories. Often people that I disagree with or have something interesting to say.
      </div>
      <hr/>
      <div>
        This website will be a bit different than the traditional wordpress site that has become so popular these days. This will be an ongoing work in progress (design and writing wise) to appeal to my audience. If you have any suggestions please reach out and contact me!
      </div>
      <hr/>
      <div style={{textAlign: 'right', paddingRight: '20px'}}>
        You can find me on: 
      </div>
      <br/>
      <div className={styles.ulnostyle} style={{textAlign: 'right', paddingRight: '30px'}}>
        <div style={{display: 'inline-block', marginBottom: '15px'}}>
          <a className={styles.anchor} href='https://twitter.com/PeterWeyand1'>Twitter</a>
        </div>
        <div style={{display: 'inline-block', marginBottom: '15px'}}>
          <a className={styles.anchor} href='https://www.linkedin.com/in/peterweyand/'>LinkedIn</a>
        </div>
        <div style={{display: 'inline-block', marginBottom: '15px'}}>
          <a className={styles.anchor} href='https://lightchan.substack.com/'>Substack</a>
        </div>
        <div style={{display: 'inline-block', marginBottom: '15px'}}> 
          <a className={styles.anchor} href='mailto:peterweyand0@gmail.com'>Gmail</a>
        </div>
      </div>
      <hr/>
      <div style={{float: 'left', paddingRight: '5px', width: 'calc(100% - 10px)'}}>
        <p>
          I spent many years exploring. Here are a couple of my favorite pictures from my travels. 
        </p>
        <div style={{display: 'flex'}}>
          <div style={{flex: 20}}>
            <Image src="/about/farm.jpeg" alt="" title="" width="100%" height="100%" layout="responsive" objectFit="fill"/>
          </div>
          <div style={{flex: 1}}/>
          <div style={{flex: 20}}>
            <Image src="/about/himalayas.jpeg" alt="" title="" width="100%" height="100%" layout="responsive" objectFit="fill"/>
          </div>
          <div style={{flex: 1}}/>
          <div style={{flex: 20}}>
            <Image src="/about/rainbow.jpeg" alt="" title="" width="100%" height="100%" layout="responsive" objectFit="fill"/>
          </div>
        </div>
        <br/>
        <div style={{display: 'flex'}}>
          <div style={{flex: 20}}>
            <Image src="/about/ruins.jpeg" alt="" title="" width="100%" height="100%" layout="responsive" objectFit="fill"/>
          </div>
          <div style={{flex: 1}}/>
          <div style={{flex: 20}}>
            <Image src="/about/tasmania.jpeg" alt="" title="" width="100%" height="100%" layout="responsive" objectFit="fill"/>
          </div>
          <div style={{flex: 1}}/>
          <div style={{flex: 20}}>
            <Image src="/about/temple.jpeg" alt="" title="" width="100%" height="100%" layout="responsive" objectFit="fill"/>
          </div>
        </div>
        <hr/>
        <p>
          Thank you for visiting.
        </p>
      </div>  
    </div>
  )
}

export default function About(){
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
        <AboutContainer/>
      </div>
      <div className={styles.listcontainerright}>
        <PageList/>
      </div>
    </div>
  )
}