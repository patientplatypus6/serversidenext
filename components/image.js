import Image from 'next/image'

export default function ComponentImage(props){
  return(
    <div style={{width: '80vw', textAlign: 'center'}}>
      <div style={{
          position: 'relative', 
          height: '50vh', 
          width: '40vw',
          marginLeft: '0vw',
          display: 'inline-block', 
          background: 'rgba(100,100,150,0.5)'
      }}>
        <Image src={props.imagename} layout="fill" objectFit="contain"/>
      </div>  
      <br/>
      <div style={{
          background: 'rgba(100,100,150,0.5)', 
          display: 'inline-block', 
          // float: 'left',
          padding: '5px', 
          fontStyle: 'italic', 
          marginBottom: '5px'
      }}>
        {props.caption}
      </div>
    </div>
  )
}