import Image from 'next/image'

export default function TestImage(){
    return(
        <div style={{width: '100vw', textAlign: 'center'}}>
            <div style={{
                position: 'relative', 
                height: '50vh', 
                width: '50vw', 
                display: 'inline-block', 
                background: 'rgba(100,100,150,0.5)'
            }}>
                <Image src='/rain.png' layout="fill" objectFit="contain"/>
            </div>
            <br/>
            <div style={{
                background: 'rgba(100,100,150,0.5)', 
                display: 'inline-block', 
                padding: '5px', 
                fontStyle: 'italic'
            }}>
                Caption: Hello there 
            </div>
        </div>
    )
}