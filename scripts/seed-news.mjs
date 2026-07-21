import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(import.meta.dirname, '..', 'src', 'content', 'news');

function esc(s) {
  return s.replace(/---/g, '—');
}

const posts = [
  {
    slug: '2026-06-30-james-dean-bradfield-new-single',
    date: '2026-06-30',
    title: 'James Dean Bradfield of Manic Street Preachers features on new single',
    body: `Fresh from announcing her forthcoming album As We Once Were, The Anchoress (aka Catherine Anne Davies) returns with new single 'Throw Over Your Man', featuring James Dean Bradfield of Manic Street Preachers. The track is the second preview of a powerful and deeply personal record that cements Davies' reputation as one of the UK's most distinctive musical voices.

Inspired by the love letters between the two literary giants Virginia Woolf and Vita Sackville West, the new single is a celebratory queer rock anthem that conjures that intoxicating feeling of being drawn into someone's orbit for the first time. A raucous and pulsating guitar-laden track – think Anna Calvi meets Fleetwood Mac – the single features both guest vocals and guitars from James Dean Bradfield of Manic Street Preachers, whom Davies has frequently collaborated and toured with since appearing on their 2018 album Resistance Is Futile.

The new single appears on June 30th alongside a stunning new video directed by JJ Eringa, during the creation of which Davies broke her arm, halting filming for a month while she had surgery and a metal plate inserted into her wrist: "incredibly scary for a musician", she adds, completing the rest of the video while still in plaster with some "clever camera angles and ingenuity." [Watch the video here](https://youtu.be/0AWHzSzH3Gc).

Davies – who also has a PhD in literature and queer theory – describes the track as "born out of my life-long passion for Woolf's written work but also because of the profound awakening it provided for me as a queer teenager still figuring out how to be in the world. These letters were signposts from the past for an imagined future for myself."

On James Dean Bradfield's involvement, she adds:

"The Manics first taught me how to incorporate the literary world into rock n roll, so I knew that James would instinctively 'get' what I was trying to do here. It's never not a huge privilege to listen back to his incredible talent and I spent many happy hours editing the takes and wondering what my 12 year old self as a huge Manics fan would think to see what 'just another day in the studio' looked like for the adult me. The song also features a 'queer choir' of voices, including my dear friends Bishi and Rookes, who are brilliantly talented producers and artists in their own right."`,
  },
  {
    slug: '2026-06-30-nme-premiere-throw-over-your-man',
    date: '2026-06-30',
    title: 'NME premiere new video for Throw Over Your Man',
    body: `After premiering the song on BBC 6Music with Steve Lamacq, the brand new single, Throw Over Your Man featuring guest vocals and guitars from James Dean Bradfield of Manic Street Preachers is released.

Inspired by the love letters between the two literary giants Virginia Woolf and Vita Sackville-West, the song is a celebratory sapphic queer rock anthem that conjures that intoxicating feeling of being drawn into someone's orbit for the first time.

Read all about it in my exclusive interview with the NME here, where you can also watch the brand new video directed by JJ Eringa.

The track is now streaming worldwide on your service of choice. You can also download it via my Bandcamp.

All the links are here: [found.ee/ThrowOverYourMan](https://found.ee/ThrowOverYourMan)`,
  },
  {
    slug: '2026-05-26-ivor-novello-awards-2026',
    date: '2026-05-26',
    title: 'The Anchoress judges Ivor Novello Awards 2026',
    body: `It was such an honour to be asked to be one of the judges at this year's 71st Ivor Novello Awards. It was even more of a privilege to be in a room yesterday with so many outstanding talents and wonderful humans, including Sir Elton John, whose championing of my last album stopped me from walking away from my career, and who has raised up so many other young songwriters and artists with his passion and dedication. To see him appointed as the first ever President of the Ivors really brought a tear to my eye.

Whilst some awards shows can turn into cynical showboating events, the Ivors is different. There was a true love for the craft in the room and in every acceptance speech that recognised WHY we do what we do. Songs save lives. It really does matter.

I was so moved to see the likes of Kae Tempest, Sam Fender and Jacob Alon and many more articulate so clearly why it matters so much when you're LGBTQ+, when you're working class… that you have access to express and articulate your world through the medium of song craft. There's nothing quite like it.`,
  },
  {
    slug: '2026-05-26-album-special-guests-announced',
    date: '2026-05-26',
    title: 'As We Once Were album special guests announced',
    body: `As We Once Were is the third studio album from twice Welsh Music Prize nominated artist and producer The Anchoress aka Catherine Anne Davies. This new record is the long-awaited follow-up to the UK Top 40 album The Art Of Losing, which received wall-to-wall critical plaudits upon its release in 2021 and scooped up a raft of Album of The Year nods from The Sunday Times, to Prog, to the Mail on Sunday. With Sir Elton John naming it "one of my favourite records of the year" and Caitlin Moran calling it "the inadvertent, beautiful and truthful soundtrack to this moment", it went on to sell over 10,000 physical copies via the power of word of mouth.

Three-times Music Producers Guild nominated Davies created the new album at Black Lodge Studios, while being given access to Pete Townshend's collection of vintage analogue synthesisers to produce an epic 14-track widescreen exploration of the nature of time and transformation.

Against the backdrop of the birth of her first child (after the multiple losses documented on The Art Of Losing) and the discovery of her grandmother's voice on a long lost cassette tape in her mother's attic, Davies found herself asking the question: "What can we build out of the past? Are we destined to be held down by it? Can we ever return to these past versions of ourselves?"

Featuring an all-star cast of guest vocalists, including vocals from Mercury Music Prize nominees Hannah Peel and Welsh-Cornish musician Gwenno, long-time collaborator James Dean Bradfield from Manic Street Preachers also contributes vocals and electric guitar to 'Throw Over Your Man' - a song inspired by the love letters between literary legends Virginia Woolf and Vita Sackville West - and newcomer Eaves Wilder (Secretly Canadian) duets on 'Damsels'.

The album will be available on 2LP leopard print etched vinyl, 14 track gatefold CD, ltd edition deluxe 2CD media book, and limited cassette tape.`,
  },
  {
    slug: '2026-04-15-preorder-as-we-once-were',
    date: '2026-04-15',
    title: 'Preorder As We Once Were',
    body: `If you just tuned in to my live interview with Steve Lamacq on BBC 6 Music then you will know that the cat is now out of the bag (or the first single at least…) and you can now preorder my new album, As We Once Were.

It will be released via Last Night From Glasgow this Summer and there's lots of limited edition goodies on offer so don't sleep on this. The first 100 copies of the double LP and first 100 CDs sold by LNFG will also be signed by me. There's also lots of bundle discounts if you want multiple formats and even the option to include a rare test pressing: Preorder the album here.

We've also just announced a one-off special album launch show at London's legendary 100 Club – the oldest independent venue in the world – on Saturday August 22nd with a parent-friendly early curfew of 10pm. Tickets are very limited and go on sale on Tuesday 14th April at 10am here.

**BBC 6 Music premiere & NME first interview**

Thanks to everyone who tuned in live tonight to BBC 6Music with Lamacq playing the first single from the album, 'I Had A Baby Not A Lobotomy' and chatting about all my exciting news! If you missed it, you can listen back to the show here.

If that wasn't enough, you can also now watch the shiny new lyric video for the first single and read my first interview about the album exclusively with the NME here.

**Album formats**

So… what will you be getting? 14 tracks and around 58 minutes of brand new music. Formats wise, the album will be released on 2LP vinyl (in two colour options: coral and linen) with a leopard print etching on side 4 which I'm very excited about. Apparently this is the closest you can get to actual leopard print vinyl. Yes I did ask.

The standard gatefold CD will come with a lovely 24 page lyric booklet, while for the completists, the ltd edition deluxe 2CD hardback media book edition will include a 48 page hardback book with exclusive artwork, unseen photos, extended liner notes, scans from my studio notebooks + 1 additional CD featuring original demos, alternative mixes, and writing demos. All for just £25.

A strictly limited edition cassette album will also be available to conceptually complete the beautiful back cover art, which has been lovingly created again by Simon Morse at Standard Designs in homage to the lost cassette tape of my grandmother's voice that inspired much of the album. No spoilers on that just yet as it will give away some of the very special guests that appear on the record that I will be teasing you all with over the coming weeks…

As We Once Were is my third studio album and the long-awaited follow-up to the UK Top 40 album The Art Of Losing, which scooped up a rack of Album of The Year nods from The Sunday Times, to Prog, to the Mail on Sunday. With Sir Elton John naming it "one of my favourite records of the year" and Caitlin Moran calling it "the inadvertent, beautiful and truthful soundtrack to this moment", it went on to sell over 10,000 physical copies via the power of word of mouth.

I created this new album at my very own Black Lodge Studios, while being given access to Pete Townshend's collection of vintage analogue synthesisers to produce an epic 14-track widescreen exploration of the nature of time and transformation.

Against the backdrop of the birth of my daughter (after the multiple losses documented on The Art Of Losing) and the discovery of my grandmother's voice on a long lost cassette tape in her mother's attic, I found myself asking the question: "What can we build out of the past? Are we destined to be held down by it? Can we ever return to these past versions of ourselves?"

This is As We Once Were.

I really think it's my best work to date. And you know what a perfectionist I am…

Preorder it now and be part of this new chapter.`,
  },
  {
    slug: '2026-04-14-100-club-launch-show-announced',
    date: '2026-04-14',
    title: 'Album launch show announced at 100 Club',
    body: `Tickets are on sale now for the special album launch show at London's 100 Club - the oldest independent venue in the world – on Saturday August 22nd with a parent-friendly and travel friendly early curfew of 10pm.

Tickets are very limited so grab yours today: [seetickets.com/event/the-anchoress/100-club](https://www.seetickets.com/event/the-anchoress/100-club/3625711)`,
  },
  {
    slug: '2026-04-13-new-album-announced-with-nme',
    date: '2026-04-13',
    title: 'New album announced with NME',
    body: `If you just tuned in to my live interview with Steve Lamacq on BBC 6 Music then you will know that the cat is now out of the bag (or the first single at least…) and you can now preorder my new album, As We Once Were from the fine folk at Last Night From Glasgow.

If that wasn't enough, you can also now watch the shiny new lyric video for the first single and read my first interview about the album exclusively with the [NME here](https://www.nme.com/news/music/the-anchoress-i-had-a-baby-not-a-lobotomy-interview-as-we-once-were-manics-tour-3940066).`,
  },
  {
    slug: '2025-03-15-mpg-awards-nomination',
    date: '2025-03-15',
    title: 'The Anchoress nominated for 2025 Music Producers Guild Awards',
    body: `What a lovely surprise this morning to find out that I've been nominated for a Music Producers Guild - MPG Awards this year when I didn't even know I had been long-listed! It's an enormous honour to have that kind of feedback and respect from my peers for my production work.

Most people think of me as a "singer" but I'm actually happiest when I'm in the studio putting together records, either for myself or one of the amazing artists that I've had the privilege to produce for.

Thank you to everyone that had continued to support and encourage my work.`,
  },
  {
    slug: '2025-01-31-2025-tour-announced',
    date: '2025-01-31',
    title: '2025 tour announced',
    body: `I'm finally getting the chance to leave the studio and play you some of the songs from forthcoming album 3. I'll be bringing my full band and I can't wait to see you all on the road this Spring and Summer! On sale now!

**April 2025**
Sun 20th Leeds, Old Woollen
Wed 23rd Manchester, The Deaf Institute
Thur 24th Liverpool, Music Room at the Philharmonic Hall
Sat 26th London, EartH (Hackney Arts Centre)

**May 2025**
Fri 9th May Hebden Bridge, The Trades Club
Sat 10th May Glasgow, CCA

**June 2025**
Wed 11th Aldershot, The West End Centre
Thur 12th Milton Keynes, The Craufurd Arms
Fri 13th Cardiff, Tramshed Cardiff`,
  },
  {
    slug: '2024-12-30-communion-reissue',
    date: '2024-12-30',
    title: 'Communion reissue',
    body: `Big news! Communion is finally getting a proper vinyl and CD release next year. The first 100 copies will be signed so hurry yourself over to the Last Night From Glasgow store to secure your copy.

They say that good things come to those who wait… Sometimes you have to wait 11 years but I'm hoping it will be worth the protracted timeline.

When I first started conversations with the new label, one of the things I was really looking forward to was giving some of the early handmade releases a proper outing and getting them pressed on vinyl.

This is hopefully the first of a few resurrections of material I made as Catherine AD when I was first beginning my musical journey.`,
  },
  {
    slug: '2024-10-05-versions-encore-announced',
    date: '2024-10-05',
    title: 'Versions: Encore - announced today',
    body: `I'm very excited to announce the release of my new EP 'Versions: Encore' on limited edition 12" vinyl (500 copies)

The EP brings together 6 of my recent reworkings of songs by Joy Division, The Smiths, Suede, & Blur and is available on Eco Mix vinyl for a special discounted price today.

Lots of you requested that these new offerings be collected together on vinyl. So, here they are. I've also included two additional bonus songs that didn't make it onto the original Versions LP track listing, so all 6 of these are making their vinyl debut here:

[iamtheanchoress.bandcamp.com/album/versions-encore](https://iamtheanchoress.bandcamp.com/album/versions-encore)`,
  },
  {
    slug: '2024-01-08-sunday-times-mail-on-sunday-albums-of-year',
    date: '2024-01-08',
    title: 'Sunday Times & Mail on Sundays Albums of the Year',
    body: `Happy New Year everyone! I'm thrilled that Versions was included in both the Sunday Times and Mail on Sunday's best albums of 2023 plaudits. If you've not yet got a copy, there's still a very limited number of vinyl bundles remaining over on Bandcamp.

Thanks to everyone who has supported the album.

Catherine x`,
  },
  {
    slug: '2023-10-08-sunday-times-review-of-versions',
    date: '2023-10-08',
    title: 'The Sunday Times ★★★★ album review of Versions',
    body: `Guess who's woken up to a fabulous ★★★★ album review in The Sunday Times?

"Teases out details and dark corners… raises them to another level."

Huge thanks to Dan Cairns for such flattering words about the new album.

'Versions' is out now on CD, vinyl and download.`,
  },
  {
    slug: '2023-10-01-mail-on-sunday-review',
    date: '2023-10-01',
    title: 'Mail on Sunday gives Versions a glowing ★★★★ album review',
    body: `Huge thanks to Tim De Lisle for the glorious ★★★★ review in today's Mail on Sunday for the new album:

"With Versions Davies has another winner…"

Was definitely not expecting a full page spread!`,
  },
  {
    slug: '2023-10-01-bbc-interview-adam-walton',
    date: '2023-10-01',
    title: 'BBC interview with Adam Walton',
    body: `I'm very honoured that last night I had the pleasure of speaking with BBC Radio Wales' Adam Walton for an in-depth 40 minute interview (yes you read that right!) to celebrate the release of the new album next week.

It's not often that you get the privilege of being granted so much air time by the BBC and an interviewer who is also so insightful and thoughtful that you discover new things about your own work across the way.

A huge thank you to Adam and to the BBC for being so generous with their time to support the release of Versions. I think it's probably one of my favourite radio interviews I've ever done!

Listen back from 1h15 into the programme [here](https://www.bbc.co.uk/sounds/play/m001qzch).`,
  },
  {
    slug: '2023-09-28-mojo-review-versions',
    date: '2023-09-28',
    title: 'MOJO ★★★★ album review for Versions',
    body: `There's a lovely ★★★★ review for 'Versions' in this month's issue of MOJO magazine.

I'm always incredibly grateful for the journalists that take the time to really listen and absorb what it is you've spent such a long time trying to make and do. Have always been and will always be a huge fan of writing about music as much as I am of listening to it and creating it. It's sad to see that so much of the music press has been decimated by the changing times and I'm still such a huge advocate of subscribing to print magazines and really savouring reading them cover to cover every month. Make sure you pick up a copy to read the verdict in full.

The album is out October 6th and there's VERY limited stocks of the vinyl remaining. Preorder from Bandcamp or from your independent record stores Rough Trade and Burning Shed.`,
  },
  {
    slug: '2023-08-04-versions-new-album',
    date: '2023-08-04',
    title: 'Versions - new album',
    body: `I'm very excited to announce the release of my new album 'Versions' on October 6th 2023 via the recently revived Drowned In Sound label. The album brings together 10 of my favourite re-imaginings of songs by the likes of Depeche Mode, The Cure, Nirvana, Nico and Halsey.

The album will be available on both limited edition Eco Mix vinyl (strictly limited to 1000 copies only) and signed gatefold CD with 12 page full colour booklet and exclusive additional CD bonus track - a previously unheard acoustic guitar version of 'Friday I'm In Love' featuring the instrumental talents of Charlie Cawood.

Preorders are open now exclusively on Bandcamp (it's also Bandcamp Friday, so they don't take a cut today).

**Versions CD Tracklisting:**

1. Enjoy The Silence (Depeche Mode)
2. Bizarre Love Triangle (New Order)
3. Climbing Up The Walls (Radiohead)
4. Friday I'm In Love (The Cure)
5. Pennyroyal Tea (Nirvana)
6. These Days (Nico)
7. Martha's Harbour (All About Eve)
8. The Tradition (Halsey)
9. This Is Yesterday (Manic Street Preachers)
10. Sweetness Follows (R.E.M.)
11. Bonus Track (CD only) Friday I'm In Love (Acoustic Version)

Preorder your copy now for delivery by 6th October 2023.

Thanks as ever for your support, and let's make this Bandcamp Friday a really special one!

Catherine x`,
  },
  {
    slug: '2023-06-25-glastonbury-with-manic-street-preachers',
    date: '2023-06-25',
    title: 'The Anchoress guests with Manic Street Preachers at Glastonbury',
    body: `This weekend was such a dream, performing with my childhood heroes Manic Street Preachers at Glastonbury Festival in the blistering heat.

To mark the occasion, my reworking of 'This is Yesterday' will be released at midnight tonight across all streaming platforms.

Thank you for all of your kind words about the set. The internet can sometimes be an unkind place but I am truly overwhelmed at the positive reaction to tackling such a sacred cow, especially from a fanbase that is hugely protective of their history. I'm honoured that the band entrusted me with this precious song that means so much to so many people (me included).

The full set from the Isle of Wight festival was also broadcast on Absolute Radio, including me also duetting on 'Little Baby Nothing'.

Catherine x`,
  },
  {
    slug: '2023-04-23-sunday-times-hottest-tracks',
    date: '2023-04-23',
    title: 'Sunday Times hottest tracks',
    body: `Thrilled that The Sunday Times named "Bizarre Love Triangle" as one of their "hottest tracks" this week!

"…this take on the New Order track is a characteristically beguiling and insightful reading."`,
  },
  {
    slug: '2023-04-14-nme-premiere-bizarre-love-triangle',
    date: '2023-04-14',
    title: 'NME premiere Bizarre Love Triangle',
    body: `The brand new video by JJ Eringa for my new single Bizarre Love Triangle is premiering over on NME right now along with a lovely chat about touring, the new album and synth queen Gillian from New Order.`,
  },
];

for (const post of posts) {
  const frontmatter = `---\ntitle: ${JSON.stringify(post.title)}\ndate: ${post.date}\n---\n\n`;
  writeFileSync(join(dir, `${post.slug}.md`), frontmatter + esc(post.body) + '\n');
}

console.log(`Wrote ${posts.length} news posts.`);
