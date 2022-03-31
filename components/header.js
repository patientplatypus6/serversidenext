

import headerstyles from '../css/Header.module.css';

export default function Header(){
    return (
        <div className={headerstyles.backgroundmonster}>
            <div style={{display: 'flex'}}>
                <div style={{flex: 3}}/>
                <div style={{flex: 10}}>
                    <div className={headerstyles.title}>
                        Welcome to Lightchan
                    </div>
                </div>
                <div style={{flex: 1, background: 'rgba(0,0,0,0.5)'}}>
                    <div className={headerstyles.email}>
                        <a href="mailto:name@email.com" className={headerstyles.anchor}>📧</a>
                    </div>
                </div>
                {/* <div style={{flex: 1}}/> */}
            </div>
        </div>
    )
} 