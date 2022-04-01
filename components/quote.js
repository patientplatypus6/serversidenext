
import styles from '../css/Blog.module.css'
import DOMPurify from 'dompurify';

function createMarkup(markup) {
  return {__html: markup};
}

export default function Quote(props) {
  return(
    <div>
      <div 
        className={styles.quote}
      >
        <div dangerouslySetInnerHTML={
            createMarkup(
              DOMPurify.sanitize(props.quote, { USE_PROFILES: { html: true } })
            )
          }
        />
        {props.attrib!=undefined?
          <div 
          className={styles.attrib}
          style={{textAlign: 'center'}}
          >
            {props.attrib} - <a 
            className={styles.anchor}
            href={props.link}>source</a>
          </div>
        :<div/>}
      </div>
    </div>
  )
}