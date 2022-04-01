import { useEffect } from 'react'
import styles from '../css/Main.module.css'
import blogstyles from '../css/Blog.module.css'
import ComponentImage from '../components/image'
import Highlightcode from '../components/highlightcode'
import Quote from '../components/quote'

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
        And each page is treated as its’ own SPA so it saves on memory.
        <br/><br/>
        This may all be old hat to those who’ve worked in the industry for a while or who do this professionally in their day-to-day work. Maybe my repository will be helpful to someone who wants to spin up a website. My other repositories show how to handle deployment with docker-compose.
        <br/><br/>        
        It’s fun.
        <br/><br/>
        It’s weird - life that is. Talking to this guy about what he’s working on and working on this blog template last night and this morning got me thinking about what the web is about and how it’s changed over the last few years.
        <br/><br/>
        Gwern says:
      </div>
      <Quote
          quote='I am attempting to explain things to my future self, who is intelligent and interested, but has forgotten.'
      />
      <div className={blogstyles.text}>
        There is this passage in this book (from 2008, but many of the programming still holds true and is an excellent reference - much of it still beyond me, admittedly):
      </div>
      <ComponentImage
        imagename='/blogs/remakingremadewheel/hacking.webp'
        caption="The book can be found here. It’s worth noting that No Starch Press is an excellent resource, including their Python Crash Course."
      />
      <div className={blogstyles.text}>      
        It’s worth quoting a few paragraphs of the introduction at length -
      </div>
      <Quote
          quote='Since the infancy of computers, hackers have been creatively solving problems. In the late 1950s, the MIT model railroad club was given a donation of parts, mostly old telephone equipment. The club’s members used this equipment to rig up a complex system that allowed multiple operators to control different parts of the track by dialing in to the appropriate sections. They called this new and inventive use of telephone equipment hacking; many people consider this group to be the original hackers. The group moved on to programming on punch cards and ticker tape for early computers like the IBM 704 and the TX-0. While others were content with writing programs that just solved problems, the early hackers were obsessed with writing programs that solved problems well. A new program that could achieve the same result as an existing one but used fewer punch cards was considered better, even though it did the same thing. The key difference was how the program achieved its results—elegance.<br/><br/>Being able to reduce the number of punch cards needed for a program showed an artistic mastery over the computer. A nicely crafted table can hold a vase just as well as a milk crate can, but one sure looks a lot better than the other. Early hackers proved that technical problems can have artistic solutions, and they thereby transformed programming from a mere engineering task into an art form.<br/><br/>Like many other forms of art, hacking was often misunderstood. The few who got it formed an informal subculture that remained intensely focused on learning and mastering their art. They believed that information should be free and anything that stood in the way of that freedom should be circumvented. Such obstructions included authority figures, the bureaucracy of college classes, and discrimination. In a sea of graduation-driven students, this unofficial group of hackers defied conventional goals and instead pursued knowledge itself. This drive to continually learn and explore transcended even the conventional boundaries drawn by discrimination, evident in the MIT model railroad club’s acceptance of 12-year-old Peter Deutsch when he demonstrated his knowledge of the TX-0 and his desire to learn. Age, race, gender, appearance, academic degrees, and social status were not primary criteria for judging another’s worth—not because of a desire for equality, but because of a desire to advance the emerging art of hacking.'
      />
      <div className={blogstyles.text}>  
        I would say that there are two forces in technology that play point and counterpoint continuously - established technology and the emergence of new technologies that use prior art as a platform. This is different than what I would consider a dialectic, which would be two seemingly intractable sides to an argument that eventually creates a third way. In the case of the above, the platform is the the train set and the software is new technology that uses the old platform to improve.
        <br/><br/>
        Over the next 8-10 years, up until the election of 2016 and the Trump presidency, it was treated as an assumed good, if not by everyone but as a general consensus, that the hardware of the electronic age, the server farms and internet lines, was the platform, software was the new technology, and culture had free reign. It didn’t matter if you were black, white, gay, straight, from the city or the country. Age was, seemingly, not a limiting factor. What mattered was the increase in the adoption of software as a service in rich industrial countries to power the next evolution in the distribution of goods, the creation of art and technology, and the overall well being of society.
        <br/><br/>
        This allowed in many ways unprecedented freedom. Who you were didn’t matter - it was what you could do. This is an incredibly anti-establishment position for an MIT publication to take. And this view prevailed culturally, despite two economic crises (2008/2013) and a general economic malaise.
        <br/><br/>
        Sites like meetup and couch surfing were coming from a view of a bottom up democratizing view of technology. The platform is the hardware infrastructure in high speed internet (cable internet and broadband were sweeping the world, wifi was still a new technology) and the new technology was the ability to improve culture through the use of web platforms. Anyone could be the next Zuckerberg, they just had to come up with a product that was culturally creative and impactful enough to be relevant.
        <br/><br/>
        What changed?
        <br/><br/>
        Some would argue that the aging population in America, the lack of industrial jobs, the opioid epidemic and general poverty in middle America caused the rise of Donald Trump, but populist leaders began to pop up across the globe, from Silvio Berlusconi to Boris Johnson.
        <br/><br/>
        I would argue that the cause is the rise of the monopoly power of such sites as Facebook, Amazon, and other large market entrants.
        <br/><br/>
        Several situations happened simultaneously. First as the success of small players to create websites increased, and the education to create those sites became more widely available (thanks in no small part to the internet), the market became flooded with websites each trying to be the next big cultural event. Second, the larger monopoly players were able to sell server space to every gambler and gold rush entrant attempting to strike it rich. Couter-intuitively, this meant that many social networks that came up with a new idea would be flooded with me-too websites that would prevent any social market from reaching critical mass, that level of user interaction that would attract second and third wave users to the platform, and cause the website to fail - thus entrenching the dominant monopoly players. Why would a savvy user invest in a new social network, even if they hate Facebook, if they expect that social network to fail?
        <br/><br/>
        This has caused the situation that we have today - rather than the internet being a free and open market that’s democratizing, it’s increasingly centrally controlled. Yes, you *can* create a website, but yours will be only one of a few million digital business cards on the web. For most businesses given the difficulty of addressing Google’s page rank service, they may attract more “likes” and eyeballs by hanging a physical sign outside their shop window.
        <br/><br/>
        Rather - the platform has become the social media platform, and the technology that is built on top of it has become over the last 10 years or so, culture. Whoever has the best quip, says the most viral tweet, is the most outrageous has been the one that is most likely to succeed.
        <br/><br/>
        This is not because social media is any more likely to make you a superstar - the number of superstar podcasters, pundits, or opinion columnists are vanishingly small and the likely-hood that they will be ousted in a few years time is higher now that it’s ever been. It’s that the chance for the average person to make money from the internet is proportional to how many views they are able to snag and how quickly.
        <br/><br/>
        In my own case, I could take weeks to build out the website above, or I could in that time create an article a day. The writer, or the Instagram star, is more likely to build a following and have people begin liking their content continuously than the diligent developer. The odds that either is successful given the worldwide competition is vanishingly small.
        <br/><br/>
        When we are all writing gonzo no one is.
      </div>
      <ComponentImage
        imagename='/blogs/remakingremadewheel/panopticon.webp'
        caption="A diagram of Facebook’s cloud infrastructure."
      />
      <div className={blogstyles.text}> 
        Consider then -
      </div>
      <Quote 
        quote="Age, race, gender, appearance, academic degrees, and social status were not primary criteria for judging another’s worth—not because of a desire for equality, but because of a desire to advance the emerging art of hacking."
      />
      <div className={blogstyles.text}>  
        Increasingly since 2016, age, race, gender, etc. are the *main qualifications* for rallying one’s in-group and denying the out-group where work is often bullshit and people no longer identify themselves by the work they do, because robots do it better.
        <br/><br/>
        This is not a critique of the left or the right of the political spectrum - both sides are equally guilty of this. Nor of the owners of the AI algorithms. To cast blame on any party is to ignore the fact that this gigantic machine is running without anyone in charge, no one at the wheel. In some sense casting blame is comforting, because if only for China, or Russia, or the wealthy tech billionaires, or the people on welfare, or the white privileged, or the sexually heterodox, then all of our problems would be solved.
        <br/><br/>
        Today low level botnets and corporate owned AI algorithms are in an arms race to determine what information is shown to whom for political and economic gains, and it is undermining the belief in free speech at the same time as the economic returns to free speech, writing and creating content, is becoming smaller. Whether you are more likely to side with the large social media networks or the little guy in questions like this, this will not change the fact that algorithms are here and they are not going away.
        <br/><br/>
        I fear that the world that we are entering is one in which there is a class division between the technorati and everyone else, where what is true and what is not is controlled by who has the best software, and where allegiance to identity groups is more likely to lead to a cut of an ever shrinking pie rather than creativity or engineering know-how.
        <br/><br/>
        I have still not found a physical copy of the Satanic Verses by Rushdie. The search continues.
        <br/><br/>
        I found a copy of Rushdie’s book after the third bookstore that I went to run by some little old ladies in a strip mall. They said, “If someone bans a book the more likely it is that someone will want to read it.” Three bookstores and a library and I could not find a copy of this book.
        <br/><br/>
        So, I will now stop bothering world and read a book for a while.
        <br/><br/>
        You’re welcome.
        <br/><br/>
        Post Script
        <br/><br/>
        Check out longform - it’s this website that used to put out articles *all the time*. Really long articles about a ton of topics, and now they mostly do podcasts. What the hell longform! Bring the articles back. Their archives are still online and they’re worth checking out
      </div>
    </div>
  )
}

export default Remakingremadewheel;