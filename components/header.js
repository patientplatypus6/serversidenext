

import headerstyles from '../css/Header.module.css';
import Image from 'next/image';

export default function Header(){
  return (
    <div className={headerstyles.backgroundmonster}>
      <div style={{display: 'flex'}}>
        <div style={{flex: 4}}/>
        <div style={{flex: 20}}>
          <div className={headerstyles.title}>
            Welcome to Lightchan
          </div>
        </div>
        <div style={{flex: 3, background: 'rgba(0,0,0,0.5)'}}>
          <div className={headerstyles.linkcontainer} style={{display: 'flex'}}>
            <div style={{flex: 1}}></div>
            <div style={{flex: 3}}>
              <a href="mailto:peterweyand0@gmail.com" className={headerstyles.anchor}>
                <Image src='/email.png' height='40px' width='40px' layout='fixed'/>
              </a>
            </div>
            <div style={{flex: 1}}></div>
            <div style={{flex: 3}}>
              <a href="https://twitter.com/PeterWeyand1" className={headerstyles.anchor}>
                <Image src='/twitter.jpeg' height='40px' width='40px' layout='fixed'/>
              </a>
            </div>
            <div style={{flex: 1}}></div>
            <div style={{flex: 3}}>
              <a href="https://lightchan.substack.com" className={headerstyles.anchor}>
                <Image src='/substack.png' height='40px' width='40px' layout='fixed'/>
              </a>
            </div>
            <div style={{flex: 1}}></div>
          </div>
        </div>
        {/* <div style={{flex: 1}}/> */}
      </div>
    </div>
  )
} 