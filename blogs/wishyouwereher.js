import { useEffect } from 'react'
import styles from '../css/Main.module.css'
import blogstyles from '../css/Blog.module.css'
import ComponentImage from '../components/image'
import Highlightcode from '../components/highlightcode'

const Wishyouwereher = () => {

  return (
    <div className={blogstyles.blogbackground}>
      <div className={blogstyles.title}>
        Wish You Were Her
      </div>
      <div className={blogstyles.subtitle}>
        Images For Your Consideration <a 
        className={styles.anchor} style={{fontSize: '1.25rem', marginTop: '-5px', float: 'right'}}
        href='https://lightchan.substack.com/p/wish-you-were-her?s=w'>substack</a>
      </div>
      <hr/>
      <div className={blogstyles.text}>  
      I was working on some Node.js code for a take home assignment. It didn’t feel particularly productive. I was looking up the answers online - is that cheating to read the docs extensively on how to create a promise based query? It sounds impressive (maybe) to someone who hasn’t worked on it before, only because it uses big words. It didn’t feel productive and the library was too quiet - here’s what I came up with, only a few lines -
      </div>
      <ComponentImage
        imagename='/blogs/wishyouwereher/codeexample.png'
        caption="A simple example of promise based directory insertion in Node.js + SQL"
      />
      <div className={blogstyles.text}>  
        There is a gallery at the university in the town I live. There are rotating pieces. A large amount of Western and Christian art. A large amount of period pieces up through abstract and then a rotating gallery of newer works. It’s a small and rather standard gallery - which is not to say that it’s bad, only that it’s what you would expect from a good, small, carefully curated selection. I like it.
        <br/><br/>
        There’s some weird stuff thrown in there too. A urinal that Duchamp signed. Ho-hum.
        <br/><br/>
        There are two images that I keep coming back to me. One is a Tibetan picture of the wrathful aspect of the god of compassion, Mahakala.
      </div>
      <ComponentImage
        imagename='/blogs/wishyouwereher/mahakalapic.webp'
      />
      <ComponentImage
        imagename='/blogs/wishyouwereher/mahakalatag.webp'
      />
      <ComponentImage
        imagename='/blogs/wishyouwereher/womanpic.webp'
      />
      <ComponentImage
        imagename='/blogs/wishyouwereher/womantag.webp'
      />
      <div className={blogstyles.text}> 
        The Tibetan piece is so complicated that I couldn’t tell you in words why I find it intriguing. I just do - you have to see it as a whole and take in its totality.
        <br/><br/>
        The woman - at first blush you might think that she is seeing a monster off camera and you would be prone to look away as well or wonder where the monster is that she would rather fling herself to get away from. In my view the monster is actually the viewer, who she is too afraid to look at. That is the story that I have come up with to go along with the image. I do not know if it is true at all, but I find it intriguing and I find the way that I’m engaged with the image as a viewer, where I wonder what the painter would imagine that this imaginary person would be thinking in relation to the viewer is himself thinking. Wheels within wheels.
        <br/><br/>
        I read a long form article a while ago of this famous art reviewer who had long suffered to become an artist. He had made several grand portraits that were supposed to represent the cycle of Dante’s inferno, but he never managed to make it. Rather he spent his life as an art reviewer. I sometimes wonder when I look at paintings if it is better to be the observer or the observed, the reviewer or the creator. In either you can either be satisfied with your lot or you cannot.
        <br/><br/>
        I used to not care about code, only five years ago. I traveled and took pictures. My tumblr still exists. I am sitting in a cafe next to someone who has a magazine about travel and it reminds me of those days. Maybe he’s a jerk, maybe he doesn’t travel at all, maybe he’s a wonderful person. But it reminded me.
        <br/><br/>
        Tasmania -
      </div>
      <ComponentImage
        imagename='/blogs/wishyouwereher/tasmania.webp'
      />
      <div className={blogstyles.text}> 
        Australia - 
      </div>
      <ComponentImage
        imagename='/blogs/wishyouwereher/australia.webp'
      />
      <div className={blogstyles.text}> 
        On Top of The World - 
      </div>
      <ComponentImage
        imagename='/blogs/wishyouwereher/mountain.webp'
      />
      <div className={blogstyles.text}> 
        I took fewer photos than I would have liked, and there are fewer photos of people and smiling faces than I would care for. I had this thought that you should live in the moment and exist for the NOW, the idea that the camera gets in the way, is an artificial device between the observer and the observed.
        <br/><br/>
        Can the same be said for a paintbrush or a compiler?
        <br/><br/>
        There was a sense of being there that I miss - too much for any piece of code I am looking up syntax for this minor quote or that minor detail. You just through yourself at the world and it threw itself right back at you.
        <br/><br/>
        I am reminded of Transmetropolitan #3 by Warren Ellis when it comes to writing. You can look up quotes, you can copy text, and find what you are looking for but there is nothing between your thoughts and the keyboard. That being said, there’s no barrier to entry. Any putz can write, any putz can climb a mountain. Anyone can grab a smartphone and take a picture.
        <br/><br/>
        I’m reminded of A Private War about the late mad sad bad Marie Colvin who led a life worth living. What is that like, to be able to make your passion you life’s work? To lead a life of adventure without getting anyone bloody killed.
        <br/><br/>
        You just throw yourself at the mountain and hope and pray that you have enough to eat. That you say something that might set someone on fire, that will inspire them to wake up with a spring in their step, to give a shit. To wake up and walk into the cushy boring job where they look up the answers and say,
        <br/><br/>
        “Yeah, that’s worth it”.
        <br/><br/>
        Mas o menos. This or that.
        <br/><br/>
        Fuck, I need a cigarette.
      </div>
      {/* <Highlightcode
        language='javascript'
        code={`
          const selectstar = (db) => {
            return new Promise(resolve => {
              resolve(db.query('select * from comments'))
            })
          }
          const insertcomment = (db, payload) => { 
            return new Promise(resolve => { 
              resolve(db.none('INSERT INTO comments(name, posting_time, comment, image_name) VALUES($1, $2, $3, $4)', payload)) 
            })
          }
          router.get('/comments', async function(req, res, next){ 
            console.log("inside get /comments") 
            var db = req.app.get('db') 
            var data = await selectstar(db);
            res.json(data);
          })
          router.post('/comment', async function(req, res, next){
            console.log("inside post /comment") 
            var db = req.app.get('db');
            var name = req.body.name; 
            var posting_time = req.body.posting_time; 
            var comment = req.body.comment; 
            var image_name = req.body.image_name; 
            var payload = [name, posting_time, comment, image_name];
            await insertcomment(db, payload); 
            var data = await selectstar(db); 
            res.json(data);
          })
        `}
      /> */}
    </div>
  )
}

export default Wishyouwereher;