import { useEffect } from 'react'
import styles from '../css/Main.module.css'
import blogstyles from '../css/Blog.module.css'
import ComponentImage from '../components/image'
import Highlightcode from '../components/highlightcode'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'

const Remakingremadewheel = () => {

  return (
    <div className={blogstyles.blogbackground}>
      <div className={blogstyles.title}>
        Remaking The Remade Wheel
      </div>
      <div className={blogstyles.subtitle}>
        Iterations Within Iterations <a 
        className={styles.anchor} style={{fontSize: '1.25rem', marginTop: '-5px', float: 'right'}}
        href='https://lightchan.substack.com/p/remaking-the-remade-wheel?s=w'>substack</a>
      </div>
      <hr/>
      <div className={blogstyles.text}>
        So there’s this website, meetup, where people get together to meet, in actual real life, to come together and talk about stuff. This is one of those groups that came about when the web was young and bold. When websites were about making people come together and interact.
        <br/><br/>
        Is it weird that a web developer or group of web developers might use this to come together and talk about what they’re working on, given zoom, and work-from-home/remote/colocations etc?
        <br/><br/>
        Remember couch surfing? There was a time in the development of the internet when the ideal wasn’t just for people to Facebook (organize contacts in a black book style system), or Instagram (promote oneself), or even post content for money - just about the rest of the internet when creators are paid (deviantart as an advertisement for patreon). There was this idealization that if you could just get people from diverse (little d) backgrounds in the same room with each other that they would be find common ground and be able to talk to each other, learn. Become more than only the sum of their parts.
        <br/><br/>
        There are still occasionally developer meetups, so I met up with this guy who works on infrastructure, Kubernetes specifically, for an IT security-as-a-services firm.
        <br/><br/>  
        Last night and this morning I also played around with a next.js application and set up a blog based on what I’ve been writing on this substack blog. (Check out the repository for some basics on how to set up a next.js application). What’s nice about Next (and Nuxt and Nest) is that they’re built on top of the popular javascript frameworks so you don’t have to go about adding routing, state management, and all the tools you end up doing anyway (by the way, React v18 is out).
      </div>
      <ComponentImage
        imagename='/blogs/remakingremadewheel/websitescreen.webp'
        caption="Mono Fonts from Google Fonts, header background from pattern.monster, a CSS gradient, and a Mac Emoji, an dangerouslysetinnerhtml cleaner (don't ask). It’s surprising the number of tools that you end up using before even adding in CSS pre-pocessors. The colors are up for debate…"
      />
      <ComponentImage
        imagename='/blogs/remakingremadewheel/tree.webp'
        caption="A sensible folder structure"
      />
      <div className={blogstyles.text}>
        What I like most about Next.js though is that for most of the routing, unless you’re templating with slugs (see pic), a file in `pages/somefolder/somesubfolder/mypage.js` will route to `http://www.mydns.com/somefolder/somesubfolder/mypage`. And since it’s a server-side framework, if you make a page in `api/myroute.js` then GET/POST requests to `http://www.mydns.com/api/myroute` are handled just as they would be as a route in any other node application:
      </div>
      <div>
        <Highlightcode
          language='javascript'
          code='export default function handler(req, res) {
            res.status(200).json({text:"Hello"})
          }'
        />
      </div>
      <div className={blogstyles.text}>
        So with Next -
        <ul>
          <li>
            Routing is handled by the folder structure
          </li>
          <li>
            Server side requests are treated as just any other javascript page allowing pre-rendering of pages
          </li>
          <li>
            Which means further that static directory files (images for the blog above) can be stored and served on the frontend code without having to worry about pre-loading the images on the browser.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Remakingremadewheel;