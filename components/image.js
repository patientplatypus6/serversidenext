import Image from 'next/image'
import styles from '../css/Blog.module.css';
import DOMPurify from 'dompurify';

function createMarkup(markup) {
  return {__html: markup};
}

export default function ComponentImage(props){
  return(
    <div style={{width: '60vw', textAlign: 'center', background: 'rgba(100,100,150)', paddingBottom: '5px'}}>
      <div style={{
          position: 'relative', 
          height: '50vh', 
          width: '40vw',
          marginLeft: '0vw',
          display: 'inline-block', 
          background: 'rgba(100,100,150,0.5)'
      }}>
        <Image 
          src={props.imagename} 
          layout="fill" 
          objectFit="contain"
        />
      </div>  
      {props.caption!=undefined?<div style={{
          background: 'rgba(100,100,150,0.5)', 
          display: 'inline-block', 
          textAlign: 'center',
          width: 'calc(40vw - 10px)',  
          color: 'white', 
          fontFamily:"'Times New Roman', Times, serif"
        }}>
          <div dangerouslySetInnerHTML={
            createMarkup(
              DOMPurify.sanitize(props.caption, { USE_PROFILES: { html: true } })
            )
          } />
        </div>:<div/>}
        {props.attrib!=undefined?<div style={{
            background: 'rgba(100,100,150,0.5)', 
            display: 'inline-block', 
            textAlign: 'center',
            width: 'calc(40vw - 10px)',  
            color: 'white', 
            fontFamily:"'Times New Roman', Times, serif"
        }}>
          <a className={styles.anchor} href={props.attrib}>source</a>
        </div>:<div/>}
    </div>
  )
}