import { useEffect } from 'react'
import styles from '../css/Main.module.css'
import blogstyles from '../css/Blog.module.css'
import ComponentImage from '../components/image'

const Weirdwonderful = () => {

  return (
    <div className={blogstyles.blogbackground}>
      <div className={blogstyles.title}>
        Weird & Wonderful
      </div>
      <div className={blogstyles.subtitle}>
        Websites Worth Visiting <a 
        className={styles.anchor} style={{fontSize: '1.25rem', marginTop: '-5px', float: 'right'}}
        href='https://lightchan.substack.com/p/weird-and-wonderful?s=w'>substack</a>
      </div>
      <hr/>
      <div className={blogstyles.text}>
        There are a bunch of websites on the internet that are worth visiting, and sometimes it’s difficult to find them. Here are the obvious suspects - places that people know about - the usual suspects -
        <ul>
          <li>
            <a className={styles.anchor} style={{padding: 0}} href='www.reddit.com'>Reddit</a>
          </li>
          <li>
            <a className={styles.anchor} style={{padding: 0}}  href='www.metafilter.com'>Metafilter</a>
          </li>
          <li>
            <a className={styles.anchor} style={{padding: 0}}  href='news.ycombinator.com'>Hacker News</a>
          </li>
          <li>
            <a className={styles.anchor} style={{padding: 0}} href='www.deviantart.com'>Deviant Art</a>
          </li>
          <li>
            <a className={styles.anchor} style={{padding: 0}} href='www.facebook.com'>Facebook</a>
          </li>
          <li>
            <a className={styles.anchor} style={{padding: 0}} href='www.instagram.com'>Instagram</a>
          </li>
        </ul>
        And then there are sites that are off the beaten path.
        <br/><br/>
        In all fairness - there are sites that I like that are sponsored in part by corporations; React, the premier website javascript platform, in competition I would say Vue is made by Facebook, which has been released as free software that could compete with Facebook. So there’s that - Deep Dream by Google is an art website that allows using their AI to create psychedelic art. In the future, as compute power becomes cheaper, it will be possible for such services to become cheaper and more ubiquitous as well.
      </div>
      <ComponentImage
        imagename='/blogs/weirdwonderful/flower.webp'
        caption='Found on Deep Dream - if you’re the author and want me to credit you or take down DM me - couldn’t find your username again. Thanks!'
      />
      <div className={blogstyles.text}>
        (This mishmash of art and culture opens up all sorts of new possibilities and questions - Molly White has mentioned that IPFS and NFT blockchain art opens the doors for art to be appropriated and sold at auction. Here too the question is - if I use two images to create a third, an image as the base image plus an image as the dream generator background image, and use the dream generator software, who owns the final product. Me, the owners of either of the two images (who may or not be me), or deep dream by Google? This moves beyond a legal question - the question becomes a cultural one - if the internet is designed to be a way for creators to be paid for their content as opposed to the benefit of a few who own the algorithms, then how is the average creator compensated beyond a few enormously wealthy superstars? This is a question that has become increasingly important since the creation of the record player and hasn’t been solved - and Google’s Deep Dream is a good product that makes art that’s worthwhile.)
        <br/><br/>
        I want to point to a website that was on HackerNews today that is worth mentioning. I linked to the guy’s substack - his website is gwern.net.
        <br/><br/>
        I’ll say two things right away - the guy’s a bit weird. I also immediately took pictures of his blog, sent him an email saying I liked it, asking for advice, and linked to his substack. His writing is not for everyone and some of it is weird, off the beaten path, I disagree with, or don’t like.
        <br/><br/>
        Which is a compliment.
        <br/><br/>
        The internet is where many of us spend large amounts of our time and the way that we consume and view information - the way that it is presented to us - is in a way an extension of the Sapir-Worf Hypothesis. I would go so far as to call this the Zuckerberg Corollary, named after arguably the first and most successful social media platform, Facebook - that they way that information is presented influences the way that people form relationships, both for good and ill.
        <br/><br/>
        This has two components on the web that are linked to the front-end and the back-end of web architecture.
        <br/><br/>
        In social media the way that the database systems are designed and organized, algorithms that are designed to promote or remove content, influence the way that users interact with a website. Zuckerberg and other social media mogols have been criticized for designing algorithms that influence behavior for the benefit of their websites and not their users. It’s clear that this has happened, but that there is a way to *not* have an algorithm influence behavior is much more complicated and would possibly require a complete rethink of not only how social media is created by how social media companies are organized. I’ve written about this before.
        <br/><br/>
        The other component of web design is the UI-UX -
        <br/><br/>
        The UI-UX of a website, the way that people interact with software not only from a perspective of the color and layout of a website, but also the click throughs and how a web page is navigated, clearly influences not only how many people interact with a website in particular but how a website influences individual users.
        <br/><br/>
        Check out this picture from gwern.net -
        <br/><br/>
        What Gwern has done is created hyperlinks that when hovered over opens up a new iframe and when the cursor loses focus the window closes. It’s a fascinating way of organizing content with deep links in a website. He’s written the website in Haskell (a wonky functional language), so I don’t know if it would be possible to do this in javascript. It may be that opening up several stack iFrames in React might cause a memory overflow. But I have never seen this in any social media website before. To the extent that smaller websites are testbeds and experiments in how to structure content that could be folded into the main social media structure that most users are accustomed to, this website is worth looking into.
      </div>
      <ComponentImage
        imagename='/blogs/weirdwonderful/gwern.webp'
        caption="I don't know about you but I think this is cool"
      />
      <div className={blogstyles.text}>
        This reminds me of the idea that if you follow any system of links on Wikipedia deep enough that you will eventually reach Philosophy - ie if you take the first link on any wikipedia page and navigate to the next repeatedly. IE {`<TOWN> > <FOUNDER> > <YEAR> > <…> > <MATHEMATICS> > <PHILOSOPHY>`}. It’s strange that ultimately the end result is usually philosophy with mathematics being a close second.
        <br/><br/>
        Could this somehow be integrated into a social media platform of links, not just within a webpage of content, but each Iframe then linking to another person’s page of content, or outside content from other websites? Outside content may be a bit harder as other webpages may break the formatting, but within a social media platform it might be possible.
        <br/><br/> 
        There’s an open question on how this solves the first problem of the Sapir-Worf-Zuckerberg hypothesis - that algorithmic design influences the way that people think by the way that it is organized.
        <br/><br/>
        My solution to this problem was the creation of an individual website that would be open source, where each webpage would have a 4chan style image board. The image boards then would communicate with each other over a socket interface using Phoenix/Elixir - which is particularly good at socketed interfaces. The individual webpages themselves would have a front-end and a backend, javascript on the front end and either node or python on the backend, all of which would be open source. The API endpoints to the Phoenix/Elixir application would be owned by a particular company, and could be subscribed to by the open source admins of the owning boards whether they wanted to or not.
        <br/><br/>
        Contrast this with substack, and ghost.io, which seem to be the new way of hosting paid creator content - it is paid, but the actual software is not owned by individual administrators. It means the front-end of the software has bounds on how it can be modified, and that the creators do not ultimately own their own data.
        <br/><br/>
        It may be that in designing such open-source software with posts and cross posts, if the software was designed so that iframes were openable between applications and allowed deep-linking between each of the pages that subscribed to the phoenix channels. How much this would force the open source software to conform to a certain standard of javascript design (if deep-linking using javascript, phoenix, and iFrames as opposed to Haskell is possible) I don’t know.
        <br/><br/>
        But it’s an interesting possibility.
      </div>
    </div>
  )
}

export default Weirdwonderful;