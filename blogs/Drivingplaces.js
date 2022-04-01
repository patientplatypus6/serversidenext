import { useEffect } from 'react'
import styles from '../css/Main.module.css'
import blogstyles from '../css/Blog.module.css'
import ComponentImage from '../components/image'
import Quote from '../components/quote';

const Drivingplaces = () => {

  return (
    <div className={blogstyles.blogbackground}>
      <div className={blogstyles.title}>
        Driving Places
      </div>
      <div className={blogstyles.subtitle}>
        Idiots in Cars Getting Coffee
        <a 
          className={styles.anchor} 
          style={{fontSize: '1.25rem', marginTop: '-5px', float: 'right'}}
          href='https://lightchan.substack.com/p/driving-places?s=w'>
            substack
        </a>
      </div>
      <hr/>
      <div className={blogstyles.text}>
        So I decided to drive up to the city, buy a coffee, and listen to some music.

        My father once said that the greatest invention that has ever been made has been the thermos bottle - the thing that is making the hot things hot and the cold things cold. After all, how does it know?

        I’ll settle for cruise control and the digital range on my odometer that tells me how many miles I can drive without running out of gas. My CRV is 10 years old and I’m still amazed that this is still a thing.
        <br/>
        Apparently WayMo is now offering <a className={styles.anchor} style={{fontSize:'1rem', padding:'0px'}} href='https://blog.waymo.com/2022/03/taking-our-next-step-in-city-by-bay.html'>fully autonomous rides</a>.
      </div>
      <ComponentImage
        imagename='/blogs/driving/odometer.webp'
        caption="There's a mileage gage!"
      />
      <div className={blogstyles.text}>
        I have a soft spot in my heart for places that are weird and just a bit funky when it comes to businesses. I especially like, for some reason I could not tell you why, when someone decides to take over and repurpose a warehouse, and industrial area and repurpose the space for something else.
      </div>
      <ComponentImage
        imagename='/blogs/driving/coffeeshop.webp'
        caption="It’s pleasant is all. It’s not replicable - you couldn’t make a chain of these."
      />
      <div className={blogstyles.text}>
        I finished reading Mark Thompson’s book.
        <br/><br/>
        It’s clear that his sympathies lie left of center, but that’s to be expected I think as of 2016. In 2022, I don’t know if most people these days would be swayed to be Republican - it seems fashionable to hate whichever party is in power, specifically the president.
        <br/><br/>
        There’s a story somewhere, that someone told me of once, about a future in which there is a lottery that every citizen must participate in. The person who is the loser must be president and run the country. It makes much more sense than our current system, anyway - who would possibly choose to be president of their own free will? You would have to be crazy, which isn’t a high qualification for the leader of the free world.
        <br/><br/>
        This is still the most cogent political analysis that I’ve ever read -
      </div>
      <Quote
        link="https://www.amazon.com/dp/B000SEFDP0/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1"
        attrib="Illuminatus! Trilogy by Robert Shea & Robert Anton Wilson"
        quote="“Don’t say wop,” the President shouted back. “How many times do I have to tell you? Don’t say wop or kike or any of those words anymore.” He spoke with some asperity, since he lived daily with the dread that someday the secret tapes he kept of all Oval Room transactions would be released to the public. He had long ago vowed that if that day ever came, the tapes would not be full of “(expletive deleted)” or “(characterization deleted).” He was harassed, but still he spoke with authority. He was, in fact, characteristic of the best type of dominant male in the world at this time. He was fifty-five years old, tough, shrewd, unburdened by the complicated ethical ambiguities which puzzle intellectuals, and had long ago decided that the world was a mean son-of-a-bitch in which only the most cunning and ruthless can survive. He was also as kind as was possible for one holding that ultra-Darwinian philosophy; and he genuinely loved children and dogs, unless they were on the site of something that had to be bombed in the National Interest. He still retained some sense of humor, despite the burdens of his almost godly office, and, although he had been impotent with his wife for nearly ten years now, he generally achieved orgasm in the mouth of a skilled prostitute within 1.5 minutes. He took amphetamine pep pills to keep going on his grueling twenty-hour day, with the result that his vision of the world was somewhat skewed in a paranoid direction, and he took tranquilizers to keep from worrying too much, with the result that his detachment sometimes bordered on the schizophrenic; but most of the time his innate shrewdness gave him a fingernail grip on reality. In short, he was much like the rulers of Russia and China."
      />
      <div className={blogstyles.text}>
        The New York Times is probably a left of center organization I think - although I have to say I liked chapter 11, although that was probably not the point. It was all about the freedom to read, write and say what you will. He mentioned the Charlie Hebdo attacks and the fatwa against Salman Rushdie’s Satanic Verses, although these days given all the future that has already happened those sorts of ideals and battles may seem like quaint and a little far away.
        <br/><br/>
        I have been told that someone somewhere once said not to read the Satanic Verses. I remember once picking up the book in Chicago, a block away from a farmer’s market on a sunny Sunday day. The bookstore was one of those cramped little spaces of a corner brownstone, just filled with books. I still remember doing that sideways shuffle with my head turned to one side to read all the titles, sort of sliding along backwards and to the right. I remember asking the proprietor if it still was a house and he said yes, that he lived upstairs, and the downstairs was his store. I am still in awe of that, in my living memory, that someone can live like that with so many books. This was back in 2013-14 when I was living in Logan’s Square in Chicago, with my little black fixie bike I rode on black ice during the winters, and thought I was so cool for zip tying a milk crate to the back. I had no idea what I was doing and I loved every fucking minute of it without realizing.
        <br/><br/>
        I find it so strange that when I, or you, walk or drive or do the dishes, or any number of the myriad activities of daily living, that your mind wanders and expands. You become more than yourself and you begin to write, even though you are so far from a keyboard, or a pen and paper, or a piece of paper and bus receipts.
        <br/><br/>
        I remember reading, in the New York mythology of the time, so many books on making money and the Gods and men involved - Barbarians at the Gates, Liar’s Poker, A Random Walk Down Wall Street. Between the bulging brackets and ties on fire there was at least one man that would sit on the bus on his way to the office at 3 in the morning, writing down financial analysis figures on bus receipts, until he made it big, made it rich with the corner office and all that jazz, unlike so many that didn’t. I wish that I could find that quote somewhere of that intrepid explorer, but he is buried there, to live forever, nameless, among the pages of so many books, an Unknown Investor.
        <br/><br/>
        Addendum to the addendum: There is something special about websites like abebooks, and others like alibris, that sell books specifically from private used bookstores. Somewhere along the way Amazon started selling more server space than books - not that I’m complaining. When I see dog eared novels with yellowed pages, and price stickers, without barcodes, smelling of vanilla. Books age like wine and one can’t wonder that Dionysius grew books as much as drank wine.
        <br/><br/>
        I recently downloaded the Google Keyboard app because my Samsung keyboard randomly decided to highlight words at random. Hmm… The application comes with speech to text and I cannot but think of the villains in The Core or Van Wilder who would start what they thought were insightful commentary, isolated from other people, with “Note to Self…”.
      </div>
      <ComponentImage
        imagename='/blogs/driving/disquiet.webp'
        caption='“My bitterness over nostalgia’s impotence to revive and resurrect becomes a tearful rage against God, who created impossibilities, when I think about how the friends of my dreams – with whom I’ve shared so much in a make-believe life and with whom I’ve had so many stimulating conversations in imaginary cafés – have never had a space of their own where they could truly exist, independent of my consciousness of them!”'
      />
      <div className={blogstyles.text}>
        Fernando Pessoa’s, The Book of Disquiet, is still my go to reference for this type of dislocation. In, I believe the first few chapters of Sword of Shannara, there is a quote by one of the characters that’s a bit more pithy if shorter, “when you are by the fire, you desire to be out on an adventure, when you’re on adventure, you desire to be by the fire.” Pessoa’s novel is the last reflections of an author near the end of his life, and is on a par in existential dread with The Secret of Evil, which is still the most terrifying book I have ever read.
        <br/><br/>
        You shouldn’t judge a book by its’ cover, but just seeing Pessoa’s cover I am reminded of the book. I was in conversation with this girl and I couldn’t remember the book the title or author, but knew the entire story just from that one image. The Illuminatus! Trilogy is another example of that phenomenon, of an image that inspires the whole.
      </div>
      <ComponentImage
        imagename='/blogs/driving/illuminatus.webp'
        caption='Another of the most Iconic Book covers that I’ve ever seen. Johnny Mnemonic, Hitchhiker’s Guide to the Galaxy and this book all feature hyper intelligent dolphins. There should be a way to categorize books by weird facts like this. Someone build a search engine.
        '
      />
      <div className={blogstyles.text}>
        And then there are the times when I am out and about, creating my own stories, or I am inspired by people who take photographs like this (give this person money and buy all of their work) -
      </div>
      <ComponentImage
        imagename='/blogs/driving/rain.webp'
        caption='Away from the fire - support artists like this!'
        attrib='https://neocha.com/magazine/technicolor-tokyo/'
      />
      <div className={blogstyles.text}>
        What is the answer, this push and pull from writing and imagination, action and doing.
        <br/><br/>
        Both.
        <br/><br/>
        It is unsatisfying as it is true.
        <br/><br/>
        To have good stories to tell you must read and act and live and walk down the street. You must meet people and talk to them or what will you have to write about in the end, but conversations you wish you had with people that don’t exist?
        <br/><br/>
        So what do I do with words of such high stature and noble purpose - I visit another bookstore in this city, a bookstore where the proprietor does not organize alphabetically, where the books are to be dug through, through the layers of history, dead trees and living ideas (for ideas never die) to find gems in the rough like this -
      </div>
      <ComponentImage
        imagename='/blogs/driving/pushcart.webp'
        caption='I had forgotten that my mom had read this book to me once upon a time. I had forgotten about The Phantom Tollbooth too. And even Death Is A Lonely Business.
        '
      />
      <Quote
        link="https://www.amazon.com/dp/B000SEFDP0/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1"
        attrib="Illuminatus! Trilogy by Robert Shea & Robert Anton Wilson"
        quote="“Don’t say wop,” the President shouted back. “How many times do I have to tell you? Don’t say wop or kike or any of those words anymore.” He spoke with some asperity, since he lived daily with the dread that someday the secret tapes he kept of all Oval Room transactions would be released to the public. He had long ago vowed that if that day ever came, the tapes would not be full of “(expletive deleted)” or “(characterization deleted).” He was harassed, but still he spoke with authority. He was, in fact, characteristic of the best type of dominant male in the world at this time. He was fifty-five years old, tough, shrewd, unburdened by the complicated ethical ambiguities which puzzle intellectuals, and had long ago decided that the world was a mean son-of-a-bitch in which only the most cunning and ruthless can survive. He was also as kind as was possible for one holding that ultra-Darwinian philosophy; and he genuinely loved children and dogs, unless they were on the site of something that had to be bombed in the National Interest. He still retained some sense of humor, despite the burdens of his almost godly office, and, although he had been impotent with his wife for nearly ten years now, he generally achieved orgasm in the mouth of a skilled prostitute within 1.5 minutes. He took amphetamine pep pills to keep going on his grueling twenty-hour day, with the result that his vision of the world was somewhat skewed in a paranoid direction, and he took tranquilizers to keep from worrying too much, with the result that his detachment sometimes bordered on the schizophrenic; but most of the time his innate shrewdness gave him a fingernail grip on reality. In short, he was much like the rulers of Russia and China."
      />
      <div className={blogstyles.text}>
        I took a picture of this bookstore, but I am no Gargoyle and the mystery and adventure of living is to find that which is unique to your own time and circumstances. Perhaps the bookstore in your neck of the woods does things, almost, but not quite, completely differently. Let there be some veil of privacy over this place, that others may find them, and their specialness may be shared with a select, but prosperously growing, few.
        <br/><br/>
        And while there are books that are of a type - books like the Phantom Tollbooth and The Pushcart Wars, children's adventure books - fighting the forces of evil. There are also books that share a common thread, share ideas that transcend the novel themselves.
        <br/><br/>
        Here we find a thread through Mark Thompson, Mark Wheeler, Asimov, and Sir Arthur Conan Doyle.
      </div>
      <Quote
        link="https://www.amazon.com/dp/B01BSN15JW/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1"
        attrib="Enough Said: What's Gone Wrong with the Language of Politics?"
        quote="“He quotes Sherlock Holmes—“While individuals may be insoluble puzzles, in the aggregate they become mathematical certainties”—and goes on to explain: “This statement means that you can never foretell how one person will react to a given selling sentence, but that you can say with scientific accuracy what the average will do.”"
      />
      <div className={blogstyles.text}>
        He is quoting Tested Sentences That Sell by Elmer Wheeler. Who is himself quoting Sherlock Holmes in the Sign of Four:
      </div>
      <Quote
        quote="“Winwood Reade is good upon the subject,” said Holmes. “He remarks that, while the individual man is an insoluble puzzle, in the aggregate he becomes a mathematical certainty. You can, for example, never foretell what any one man will do, but you can say with precision what an average number will be up to.”"
      />
      <div className={blogstyles.text}>
        Excerpt From The Complete Sherlock Holmes
        <br/><br/>
        Was Sir Arthur Conan Doyle structuring his story as in part a critique of William Winwood Reade? It seems like a possibility.
        <br/><br/>
        But I am reminded that ideas can travel both backward as well as forward in time - this idea of the mathematical certainty of man strikes of Asimov’s psychohistory - and apparently the term is conflated itself with an actual discipline.
        <br/><br/>
        This is the other book I bought today at the un-alphabetic bookstore. I asked if they had the Satanic Verses, but alas, they did not. A bit against the spirit of the place. I may have to read that book online.
      </div>      
      <ComponentImage
        imagename='/blogs/driving/babel.webp'
        caption='By the author of Dhalgren - a straight up contender with the Illuminatus! Trilogy for weirdest book that I’ve ever read. Substitute super-intelligent dolphins for holographic chains.'
      />
      <div className={blogstyles.text}>
        A science fiction story about how language can be used as a weapon, with shades of Orwell’s 1984. It’s been on my list for a while.
        <br/><br/>
        I had imagined when I was driving today that there may be a way to quote books into the future - to provide references to events and novels that have never happened and let them be written so that one could walk both forwards and backwards in time.
        <br/><br/>
        Wouldn’t that be something?
      </div>
    </div>
  )
}

export default Drivingplaces;