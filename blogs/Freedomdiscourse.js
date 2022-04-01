import { useEffect } from 'react'
import styles from '../css/Main.module.css'
import blogstyles from '../css/Blog.module.css'
import ComponentImage from '../components/image'
import Quote from '../components/quote';

const Freedomdiscourse = () => {

  return (
    <div className={blogstyles.blogbackground}>
      <div className={blogstyles.title}>
        Freedom & Discourse
      </div>
      <div className={blogstyles.subtitle}>
        What Would Socrates Say? <a 
        className={styles.anchor} style={{fontSize: '1.25rem', marginTop: '-5px', float: 'right'}}
        href='https://lightchan.substack.com/p/freedom-and-discourse?s=w'>substack</a>
      </div>
      <hr/>
      <div className={blogstyles.text}>
        Recently, I read this - On Being Disappeared. Some guy by the name of Chris Hedges, whom I have never heard of, recently had all of his videos taken down from youtube.
        <br/><br/>
        To be sure, there are a couple things that are worth mentioning right away - his post appears breathlessly wrought, and over the top. He sounds like another aging Rush Limbaugh clone (which, while entertaining in their own way, is not a compliment). He has pictures of himself with boxing gloves, which always strikes me, pardon the pun, as the kind of person that wishes they were Hemingway without ever having gone to the trouble of getting piss drunk on a tropical island and getting punched in the head. These are the sort of arm chart sophists that remind me of the maxim - war is when old men fight and the young die.
        <br/><br/>
        I’ve linked to his blog because I don’t believe in de-platforming, but I also don’t agree with his politics. This is in some sense an apology and an explanation, to provide a bit of nuance to explain why I would link to someone that I find, and I would in some sense hope my readers would find, personally distasteful.
        <br/><br/>
        I also don’t know if I am right.
        <br/><br/>
        It’s not enough to consider only the title - but let’s consider that first. In the electronic age, when the SEO title has replaced the media driven sound bite, political rancor starts with the headline and the rest follows.
        <br/><br/>
        He has definitely not been “disappeared” in any real sense, no totalitarian dictatorship has sent him to a prison camp, and this is just a form of hyperbolic rhetoric that we are seeing all too much of in today’s discourse.
      </div>
      <ComponentImage
        imagename='/blogs/freedomdiscourse/thompsonbook.webp'
        caption="<a style='background: black; color: lightgreen; text-decoration: none;' href='https://www.amazon.com/dp/B01BSN15JW/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1'>Mark Thompson's What's Gone Wrong With the Language of Politics</a>"
      />
      <div className={blogstyles.text}>
        I recently said that I didn’t know what to read any more - the next day the literature board on Reddit arose from the dead. That inspired me to go book hunting and I found this book by Mark Thompson at the library. It’s a worthwhile read and is useful to examine the above in the context of this book.
        <br/><br/>
        Reading both has provided excellent frisson and I recommend it.
        <br/><br/>
        It would be unfair to examine every sentence in the essay above, to look for hidden rhetorical devices in every specific turn of phrase, whether those devices exist or not - lest you fall in the trap that I think is on display in this essay - the author is so hemmed in by his critique that it paints his critics as needlessly unfair to the written word and on any form of debate whatsoever. Ironically lowering the credibility of the critics themselves on topics of technical fact, rather than rhetorical persuasion, that readers would have to rely on them as a source of authority. Every word is declared to be what the Greeks would term an enthymeme, the news of yesteryear would term a soundbite, the millennials a meme, and the SEO crowd would term “going viral”.
      </div>
      {/* DOMPurify.sanitize(dirty, { USE_PROFILES: { html: true } }); */}
      <ComponentImage
        imagename='/blogs/freedomdiscourse/snowcrash.webp'
        caption="Here is a <a style='background: black; color: lightgreen; text-decoration: none;' href='https://www.nothuman.net/images/files/discussion/4/04ca4ae88a63721aa7144430117ab4ca.pdf'>free PDF Online</a> 
        from a website that I would otherwise not endorse. And a link to an analysis of <a style='background: black; color: lightgreen; text-decoration: none;' href='https://archive.org/details/mythsofenkicraft0000unse/page/104/mode/2up'>ancient Sumerian mythology</a>.The novel is a detective story of the search for the cause of a drug caused only by viewing information in a virtual world. Weaponized memes do not seem so science fictional today."
      />
      <div className={blogstyles.text}>
        Memes are powerful precisely because they allow for there to be a gap between what is said and what is implied. They can be used to rally the faithful, as well as to misinform (whether you believe or not in the politics linked to above they are examples of the phenomenon). In much of what we consider not only of representative government but of representative institutions generally speaking, law, medicine, science, we are relying on an authority to take information that is not understood in all its technical aspects and condense it to a form that is actionable by other people.
        <br/><br/>
        For a proper critique of an essay, a proper criticism of a piece of work by another author, I do not believe it is possible to entirely escape the idea that the author is using memes or to not, even possibly subconsciously, respond to them. We cannot parse every sentence, look to every grammatical misstep or turn of phrase. To do so lowers ourselves as rhetoricians in the eyes of people who might believe and understand our arguments, wastes our time in looking for hidden agendas, and removes ourselves from the public discourse.
        <br/><br/>
        Are my ideas any less valid because the second paragraph used the word “piss”?
        <br/><br/>
        We can look at what their thesis is, how they are parsing their argument in the broad sense, how they identify, and what actions they would like their readership to take and why.
        <br/><br/>
        As you can tell, I am predisposed to a more low-brow use of language, and believe that language should be used freely, even carelessly at times. What I would look for, in this case, is context. Compare the opening line with the three points that follow -
      </div>      
      <Quote
        link="https://chrishedges.substack.com/p/on-being-disappeared?s=r"
        attrib="On Being Disappeared - Chris Hedges"
        quote="The entire archive of On Contact, the Emmy-nominated show I hosted for six years for RT America and RT International, has been disappeared from YouTube. Gone is the interview with Nathaniel Philbrick on his book about George Washington. Gone is the discussion with Kai Bird on his biography of J. Robert Oppenheimer. Gone is my exploration with Professor Sam Slote from Trinity College Dublin of James Joyce’s “Ulysses.” Gone is the show with Benjamin Moser on his biography of Susan Sontag. Gone is the show with Stephen Kinzer on his book on John Foster Dulles and Allen Dulles. Gone are the interviews with the social critics Cornel West, Tariq Ali, Noam Chomsky, Gerald Horne, Wendy Brown, Paul Street, Gabriel Rockwell, Naomi Wolff and Slavoj Zizek. Gone are the interviews with the novelists Russell Banks and Salar Abdoh. Gone is the interview with Kevin Sharp, a former federal judge, on the case of Leonard Peltier. Gone are the interviews with economists David Harvey and Richard Wolff. Gone are the interviews with the combat veterans and West Point graduates Danny Sjursen and Eric Edstrom about our wars in the Middle East. Gone are the discussions with the journalists Glenn Greenwald and Matt Taibbi. Gone are the voices of those who are being persecuted and marginalized, including the human rights attorney Steven Donziger and the political prisoner Mumia Abu Jamal. None of the shows I did on mass incarceration, where I interviewed those released from our prisons, are any longer on YouTube. Gone are the shows with the cartoonists Joe Sacco and Dwayne Booth. Melted into thin air, leaving not a rack behind. "
      />
      <div className={blogstyles.text}>
        as compared to - 
      </div>
      <Quote
        link="https://chrishedges.substack.com/p/on-being-disappeared?s=r"
        attrib="On Being Disappeared - Chris Hedges"
        quote="It removes the efforts to examine our reality in ways the ruling class does not appreciate."
      />
      <div className={blogstyles.text}>
        and - 
      </div>
      <Quote
        link="https://chrishedges.substack.com/p/on-being-disappeared?s=r"
        attrib="On Being Disappeared - Chris Hedges"
        quote="I was on RT because, as a critic of US imperialism, militarism, the corporate control of the two ruling parties, and especially because I support the Boycott, Divestment and Sanctions movement against Israel, I was blacklisted."
      />
      <div className={blogstyles.text}>
       and - 
      </div>
      <Quote
        link="https://chrishedges.substack.com/p/on-being-disappeared?s=r"
        attrib="On Being Disappeared - Chris Hedges"
        quote="And that is where we are headed as the ruling elites refuse to respond to the disenfranchisement and suffering of the working class, opting not for social and political change or the curbing of the rapacious power and obscene wealth of our oligarchic rulers, but instead imposing iron control over information, as if that will solve the mounting social unrest and vast political and social divides. "
      />
      <div className={blogstyles.text}>
        What ruling class is he speaking of? The ruling class that interviews authors and writes about them and is paid for it? It appears that he’s simply using “ruling class”, “ruling parties”, “oligarchic rulers” as being those people who he disagrees with, while he himself has little to do with the “working class”. When was the last time he changed his own tire or worked a blue collar job? I’m not saying that I support the ruling class as such. I don’t believe in class as a basis for personal identification in the general nor in the sort of middle America heartland class that I imagine the author supports, in the particular. He just seems to be inconsistent - does he practice what he preaches and lives the life that he says he espouses? If not, why not? Does he believe that elites are good, but only for him?
        <br/><br/>
        I may be being unfair - I don’t know his personal history. Perhaps he worked for years as a blue collar laborer or journalist. And yet, time is limited and so when searching for context within an author’s work there is only so much scope that I can broaden to. I can’t parse words, but in an essay itself I am willing to consider the thesis in isolation.
        <br/><br/>
        Much of the rest of the essay is filled with weaponized memes, which are all the more frustrating as to lower oneself to critiquing them turns you into a word parser extraordinaire.
        <br/><br/>
        He’s the literary equivalent of a shock jock. It’s what he’s good at, which I find rather despicable. He’s a Procian.
        <br/><br/>
        There is a fascinating looking about the distinction between rationalist and authenticist political views and how they permeate political discourse and why that matters in Thomas’ book.
        <br/><br/>
        Here what Chris Hedges appears to be doing is identifying himself in an “authentic” style in which he is right because he is ideologically pure, and therefore rational, underdog who fights against the elites. The elites, the supposedly rationalist crowd, are driven to discredit authenticist’s such as himself in a non-rational way.
        <br/><br/>
        This is a rather skillful use of mental gymnastics.
        <br/><br/>
        It may well be that his platform was deleted by a group of web developers or some “community guidelines” internal team, that make much less than Chris does, who could be anywhere along the political spectrum. Or that the people responsible for the decision are a group that is highly rational, or highly authentic, or some mixture of the two. Or that the decision was made because he violated some community guideline that applies both to people on the left and right of the political spectrum (although I argue below that this may not necessarily make those guidelines defensible if Youtube were treated as a common carrier).
        <br/><br/>
        He’s arguing that his opponents are non-rational, and he is rational, because he fights for the people and they do not. He calls his enemies ideologically irrational because they performed an action that he disagrees with.
        <br/><br/>
        He’s describing motives for the action against a faceless enemy.
        <br/><br/>
        So I can agree with his position - that de-platforming should not happen, and that what happened to him was especially egregious - while disagreeing with his rhetoric, which is difficult to unpack. It’s especially difficult because his blustering style makes causal observers either discredit him immediately, or fall into the trap of believing that his rhetorical style is simple.
        <br/><br/>
        My position is based more on Kantian reasoning - the principle of universalizability. He should not be de-platformed for the same reason that extreme posts on the side of the Left should not be de-platformed. I don’t know for certain whether he was de-platformed purely on ideological grounds or on technical grounds, because I have only heard his side of what happened.
        <br/><br/>
        I also agree with some of what he says, although perhaps not for the reason he intends. I subscribed to his paper, not because I agree with him, or because I even disagree with his opponents (he seems angry with the New York Times, whose CEO seems much more cogent than him, though he worked his way up through the ranks of the BBC).
        <br/><br/>
        I subscribed because he has made me consider what it means for there to be a free and open dialog of information on the internet.
        <br/><br/>  
        Consider this -
      </div>
      <Quote
        link="https://chrishedges.substack.com/p/on-being-disappeared?s=r"
        attrib="On Being Disappeared - Chris Hedges"
        quote="This censorship is about supporting what, as I.F Stone (EDT: link added) reminded us, governments always do – lie. Challenge the official lie, as I often did, and you will soon become a nonperson on digital media. Julian Assange and Edward Snowden exposed the truth about the criminal inner workings of power.  Look where they are now. This censorship is one step removed from Joseph Stalin’s airbrushing of nonpersons such as Leon Trotsky out of official photographs. It is a destruction of our collective memory. It removes the efforts to examine our reality in ways the ruling class does not appreciate. The goal is to foster historical amnesia. If we don’t know what happened in the past, we cannot make sense of the present."
      />
      <div className={blogstyles.text}>
        In the 20th century, the atrocities of WWII were broadly disseminated. Pictures of holocaust camps were published broadly (I will not link to them), as the existence was not known to the general public. The fog of war, and much worse, were not known even in places like Italy.

        For example, here is an essay that is worth while reading on what Umberto Eco decries as “Ur-Fascism” - that is the definition of fascism that encompasses not one fascist ideology but a co-morbidity of totalitarian ethos -
      </div>
      <Quote
        link="https://www.pegc.us/archive/Articles/eco_ur-fascism.pdf"
        attrib="Ur-Fascism by Umberto Eco"
        quote="In my country today there are some who say that the War of Liberation was a tragic period of division, and that all we need is national reconciliation. The memory of those terrible years should be repressed, refoulée, verdrängt. But Verdrängung causes neurosis. If reconciliation means compassion and respect for all those who fought their own war in good faith, to forgive does not mean to forget."
      />
      <div className={blogstyles.text}>
        The belief then was that more information was an inherent good.
        <br/><br/>
        Consider this prophetic line at the end of chapter 1 of Mark Thompson’s book (written in 2016) -
      </div>
      <Quote
        link="https://www.amazon.com/dp/B01BSN15JW/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1"
        attrib="What's Gone Wrong With The Language of Politics by Mark Thompson"
        quote="How do we decide which of two ways of expressing a marketing message - or a political thought - is more persuasive? An A/B test, where the two are tested side by side with two segments of a given audience, will give you a definitive answer. Such testing is ubiquitous and significantly automated. Most of us are not aware that much of the public language to which we are exposed is continually being algorithmically assessed and optimized. If human persuasiveness fails, it will be replaced not by a vacuum, but by the persuasiveness of the machines. They knew in ancient Athens how power gravitated to the most persuasive orator. The risk in the future is that power comes to lie in the hands of whoever has the biggest machine."
      />
       <div className={blogstyles.text}>
        This was before QAnon being banned on Facebook. Whether or not you agree with de-platforming or not, the risk has always been that if there is an authority that determines who is allowed to speak and who is not then when critics are silenced it means they cannot speak out to the social ills they see around them.
       </div>
       <ComponentImage
        imagename='/blogs/freedomdiscourse/watchmen.webp'
        caption="<a style='background: black; color: lightgreen; text-decoration: none;' href='https://en.wikipedia.org/wiki/Quis_custodiet_ipsos_custodes%3F'>Quis custodiet ipsos custodes</a>"
      />
      <div className={blogstyles.text}>
        Compare this (in a not-self-unaware A/B testing sort of way, which is a sort of self critique).
      </div>
      <Quote
        link="https://chrishedges.substack.com/p/on-being-disappeared?s=r"
        attrib="On Being Disappeared - Chris Hedges"
        quote="The de-platforming (EDT: spelling) of voices like mine, already blocked by commercial media and marginalized with algorithms, is coupled with the pernicious campaign to funnel people back into the arms of the establishment media such as CNN, The New York Times, and The Washington Post. In the US, as Dorthy Parker once said about Katharine Hepburn’s emotional range as an actress, any policy discussion ranges from A to B. Step outside those lines and you are an outcast. This is the reason Matt Taibbi, Glenn Greenwald and I are on Substack."
      />
      <div className={blogstyles.text}>
        So you have two sides to an argument that both agree that algorithms are a problem. What is happening is that, since the mid-20th century, and especially so in the last 20 years is that algorithms have determined what we see and why.
        <br/><br/>
        Consider the following image -
      </div>
      <ComponentImage
        imagename='/blogs/freedomdiscourse/poohbear.webp'
        caption="<a style='background: black; color: lightgreen; text-decoration: none;' href='https://news.sky.com/story/china-censors-winnie-the-pooh-social-media-posts-amid-xi-criticism-11270677'>Political Mockery In Totalitarian Regimes</a>"
      />
      <div className={blogstyles.text}>
        It is true that totalitarian regimes censor information of their political opponents. I would take as also true that if this image or new articles about it were repeatedly shown to you on your social media feed, the algorithms involved are most likely too complex for you to understand.
        <br/><br/>
        Did a search engine algorithm determine that you had young children, it was around Christmas and you were more likely to spend money on toys?
        <br/><br/>
        Was there a botnet unleashed on a social media website with political leanings that wanted you to vote in a certain way, and people shown this image were more likely to be swayed in a certain direction by a few basis points?
        <br/><br/>
        Was the only news that you saw that day the top of an indexed search engine result, not because what they article said happened to be true, but because the author of the article was good at SEO (search engine optimization)?
        <br/><br/>
        The answer is multi-faceted, and several algorithms could be working simultaneously to sway your actions and beliefs in different directions.
        <br/><br/>
        We are in an era, where the old maxims still hold true - that speech should be free and the press is a hallmark of a free and open society. New maxims are also quickly becoming apparent - whoever says something not only loudly enough, often enough, and with the fastest algorithm can win discussions and steer speech, thought, and politics in directions that the viewer might not even be aware of.
        <br/><br/>
        The war between Russia and Ukraine has become a full blown information war. Nothing that is viewed online can be taken at face value. Nuclear weapons cannot be used without causing a full European theatre conflict in which both sides lose. What is happening is that high tech countries are using the internet as a proxy for misinformation, in the hopes of generating foreign aide, not only from governments, or even corporations and third party NGOs, but bitcoin and fungible untraceable blockchain transfers from anonymous donors.
        <br/><br/>
        Wikipedia, once an encyclopedia for the masses, was built on the belief that with enough writers truth would win out. I wonder if that is still true today.
        <br/><br/>
        The wars of the future may be determined not only by who has the fastest servers, but determined in advance, by botnets and corporate algorithms capable of swaying public opinion and actions to support polities, buy products, or arrange their lives, in ways they may not even be aware of.
        <br/><br/>
        Because of this people have become afraid of speech.
        <br/><br/>
        This is Snow Crash.
        <br/><br/>
        Both sides would agree that the algorithms have run out of control and they present alternative views of the future, coming from the perspective of journalists who have worked for years in their respective fields -
        <br/><br/>
        The Mark Thompson’s of the world argue that only large platforms can be trusted in the digital age. Moderation should rest in the hands of a small cadre of professionals supplemented by threat detection algorithms at new media organizations such as Facebook, Youtube, Instagram and so forth. No mention is made of how large page rank algorithms such as Bing and Google index the web or determine which sites are to be shown in the first place. They view small walled garden publications as a breeding ground for extremism and see the middle ground as only being possible from a sort of (little r) media republicanism.
        <br/><br/>
        The Chris Hedge’s of the world argue that (and in this case provides an example of) the moderation gone wrong. Moderators de-platforming, if not legitimate content, at least content that they believe should have a voice. They argue that media organizations have become so large that they should be treated to some extent as “common carriers”, concerned only with the technical aspects of creating a digital distribution system without having a say on content. If not that then they believe that the only alternative is the creation of new media organizations to fight the old. Their anger lies in the fact that, because of economies of scale and first mover advantage, established players may not be replaced, and enjoy their status as publications not because their content is in any way superior, but because they have become de-facto monopolies. The believe in a sort of (little d) democratics, where content should be paid for and distributed on a per-person basis.
        <br/><br/>
        Tellingly, both sides are arguing for what would be in their own financial best interest, Horatio Alger stories of having risen up the ranks of the BBC or claims of being part of a scrappy underdog “non-ruling class” aside.
        <br/><br/>
        There are two extreme end results that could occur if the internet is optimized to either of these two poles. The internet could just become television, in which there is nothing new under the sun, and the monopolies that exist today exist indefinitely into the near future. Information would not be trusted because that information would come from a corporate elite with their own agenda. Alternatively, the internet could be disaggregated into so many voices that a mob mentality of truth would prevail with whichever voice spoke the loudest, had the funniest meme, or otherwise was the most scandalous.
        <br/><br/>
        What is the answer then, between truth and discourse? Thomas writes of aporia sometimes the result of Socratic questioning.
        <br/><br/>
        I don’t know.
      </div>
    </div>
  )
}

export default Freedomdiscourse;