
var picture = document.getElementById('picture');
var albumimg = document.getElementById('albumimg');
var lyrics = document.getElementById('songlyrics');
var marquee = document.getElementById('marquee');
var songlyrics = document.getElementById('songlyrics');
var songtitle = document.getElementById('songtitle');
var introbox = document.getElementById('tobehid');
var musiclogo = document.getElementById('musiclogo');

var shuffle_btn = document.getElementById('shuffle');
var prev_btn = document.getElementById('prev');
var playpause_btn = document.getElementById('playpause');
var next_btn = document.getElementById('next');
var repeat_btn = document.getElementById('repeat');

var song_duration = document.getElementById('song_duration');
var volume_slider = document.getElementById('volume_slider');
var curr_time = document.getElementById('current-time');
var total_duration = document.getElementById('total-duration');
var volume_slider = document.getElementById('volume-slider');

let track_index = 0;
let isPlaying = false;
let isRandom = false; 
let updateTimer;
let currentSongIndex = 0;
let isShuffle = false;
let isRepeat = false;




let songIds = [
  'album1song1',
  'album1song2',
  'album1song3',
  'album1song4',
  'album1song5',
  'album2song1',
  'album2song2',
  'album2song3',
  'album2song4',
  'album2song5',
  'album3song1',
  'album3song2',
  'album3song3',
  'album3song4',
  'album3song5',
  'album4song1',
  'album4song2',
  'album4song3',
  'album4song4',
  'album4song5',
  'album5song1',
  'album5song2',
  'album5song3',
  'album5song4',
  'album5song5',
  'album6song1',
  'album6song2',
  'album6song3',
  'album1song4',
  'album6song5',
  'album7song1',
  'album7song2',
  'album7song3',
  'album7song4',
  'album7song5',
  'album8song1',
  'album8song2',
  'album8song3',
  'album8song4',
  'album8song5',
  'album9song1',
  'album9song2',
  'album9song3',
  'album9song4',
  'album9song5',
  'album10song1',
  'album10song2',
  'album10song3',
  'album10song4',
  'album10song5',
];

let originalSongIds = [...songIds];

musiclogo.onclick = function(){
  window.location.href = "signup.html";
}

function loadSongById(songId) {
  document.getElementById(songId).click();
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60   );
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}


function updateSlider() {
  if (isPlaying && song_duration) { 
      song_duration.value = audio.currentTime; 
      curr_time.innerHTML = formatTime(audio.currentTime);

      
      const interval = setInterval(() => {
          if (isPlaying) {
              song_duration.value = audio.currentTime;
              curr_time.innerHTML = formatTime(audio.currentTime);
          } else {
              clearInterval(interval);
          }
      }, 1000);
  }
}

volume_slider.oninput = function() {
  audio.volume = volume_slider.value / 99;
};

audio.addEventListener('loadedmetadata', function() {
  song_duration.max = audio.duration;
  total_duration.innerHTML = formatTime(audio.duration);
});


next_btn.onclick = function() {
  if (isShuffle) {
      currentSongIndex = (currentSongIndex + 1) % songIds.length;
  } else {
      currentSongIndex = (currentSongIndex + 1) % songIds.length;
  }
  loadSongById(songIds[currentSongIndex]);
};

prev_btn.onclick = function() {
  currentSongIndex = (currentSongIndex - 1 + songIds.length) % songIds.length;
  loadSongById(songIds[currentSongIndex]);
};


function shuffleSongs() {
  for (let i = songIds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songIds[i], songIds[j]] = [songIds[j], songIds[i]];
  }
};

shuffle_btn.onclick = function() {
  isShuffle = !isShuffle;
  shuffle_btn.classList.toggle('button_background');

  if (isShuffle) {
      shuffleSongs();
  } else {

      const currentSong = songIds[currentSongIndex];
      songIds = [...originalSongIds];
      currentSongIndex = songIds.indexOf(currentSong);
      loadSongById(songIds[currentSongIndex]);
  }
};

repeat_btn.onclick = function() {
  isRepeat = !isRepeat;
  repeat_btn.classList.toggle('button_background');
};


function playAudio() {
  audio.play();
  isPlaying = true; 
};

function pauseAudio() {
  audio.pause();
  isPlaying = false; 
};

playpause_btn.onclick = togglePlayPause;

function togglePlayPause() {
  audio[isPlaying ? 'pause' : 'play'](); 
  isPlaying = !isPlaying; 
};

song_duration.oninput = function() {
  const percentage = song_duration.value; 
  marquee.scrollTop = (percentage * marquee.scrollHeight) / 100; 
};

audio.addEventListener('timeupdate', () => {
  const percentage = (audio.currentTime / audio.duration) * 100; 
  marquee.scrollTop = (percentage * marquee.scrollHeight) / 100;
});

album1song1.onclick = function(){
  document.getElementById('songtitle').innerHTML = "ABCD";
  albumimg.src = "/pictures/nayeon.jpeg";
  audio.src = "../songs/ABCD.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Don't stop it
Mm, yeah

Slow-mo (Slow-mo)
Hey, I see you looking at me and
I like it, oh (I like it, oh)
Yeah (Uh)
No more (No more)
Dagaogil gidarineun geon
Not my option (Option)
Yeah (Ah)

Pieona, my desire (My desire, my desire)
Wonhaneun geon gajyeoya haneun geol (Ooh)
All I want is love, love with you (Love with you, love with you)
Stop thinkin', geobuhal su eopseulgeol (Break it down now)

(Hey, listen to me now) Ayy, you're gonna be my babe
Everytime you see me, ppajyeo, deeper, deeper, babe
(Hey, listen to me now) A-B-C-D, banbokae
How to fall in love, gareuchyeo julge

Neoneun deureowasseo in my fantasy
Beoseonal su eopseo naui gravity
In love, in love
Can't get enough
Hey, jyeodeulgo isseo, you're hypnotized (Yeah)
Hollin deut hanaga doeneun you and I
In love, in love
Can't get enough (Oh, yeah)

Neon ttaraomyeon dwae, my baby
Jigeumbuteo I'ma drive you crazy (Oh)
Aseuraseulhan neowa nae emotion
Jachithamyeon iseongui kkeuneul nochyeo
Daehwaneun pillyo eopseo, mute
Bonneungi hyanghaneun got move
Jeonbu beoseodeonjillae
Jinjja nareul bol su itge

Pieona, feel alive
Tteollineun maeum gamchul su eomneun geol (Ooh)
All I want is love, love with you (Love with you, love with you)
Stop thinkin', geobuhal su eopseulgeol (You)

(Hey, listen to me now) Ayy, you're gonna be my babe
Everytime you see me, ppajyeo, deeper, deeper, babe
(Hey, listen to me now) A-B-C-D, banbokae
How to fall in love, gareuchyeo julge

Neoneun deureowasseo in my fantasy (My fantasy)
Beoseonal su eopseo naui gravity
In love, in love (In love)
Can't get enough
Hey, ppajyeodeulgo isseo, you're hypnotized (Yeah)
Hollin deut hanaga doeneun you and I
In love, in love (Ooh)
Can't get enough (Oh, yeah)

I don't care and I like, yeah
A to Z, you're my type, yeah (Shoo)
Allyeojulge, baby, how to love (How to love)
Algi swipge nege one by one (By one)
I don't care and I like, yeah (Yeah)
A to Z, you're my type, yeah
Allyeojulge, baby, how to love (allyeojulge, baby, love)
Algi swipge nege one by one (algi swipge nege one)

Ayy, you're gonna be my babe
Everytime you see me, ppajyeo, deeper, deeper, babe
A-B-C-D, banbokae
How to fall in love, gareuchyeo julge

`;

}

album1song2.onclick = function(){
  document.getElementById('songtitle').innerHTML = "POP";
  albumimg.src = "/pictures/nayeonpop.jpeg";
  audio.src = "../songs/POP.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `
What's wrong?
Hollil deusi nan neoreul jageukae (Pop, pop, pop)
Watch out, seollen deusi
Ne bupun mami teojil deuthae (Pop, pop, pop)
(Let's start) nae mamdaero play it
(Won't stop) geochimeopsi shake it
You know? neon naege
Dallyeoitdan geonman aradwo (Yeah, yeah)

Imi neon nareul
Beoseonal suga eopseo
Tteollin geu nunbit, ti naneun momjit, baby
Teotteurigo sipeun neo

Seollemi meotgi jeone
I wanna make it
Pop, pop, pop, you want it
Pop, pop, pop, teojigil wonhae
Gaseumi ttwineun i neukkim
I wanna make it
Pop, pop, pop, you want it
Pop, pop, pop, neol gatgil wonhae

Pop, pop, pop (Uh-uh)
Pop, pop, pop (Uh-uh)
Pop, pop, pop (Uh-uh)
Pop, pop, pop

Neomu jal boyeo
Amuri sumgyeodo
Imi deulkin geol
Jakku dungdung tteodanijana (Yeah, yeah)

Yeoyuropge check it (Check it)
Boran deusi, take it
Baby, baby, you're out of control
So you're under my control

Seollemi meotgi jeone
I wanna make it
Pop, pop, pop, you want it
Pop, pop, pop, teojigil wonhae
Gaseumi ttwineun i neukkim
I wanna make it
Pop, pop, pop, you want it
Pop, pop, pop, neol gatgil wonhae

Pop, pop, pop (Uh-uh)
(Hey, hey, hey, hey)
Pop, pop, pop (Uh-uh)
(Hey, hey, hey, hey)
Pop, pop, pop (Uh-uh)
(Hey, hey, hey, hey)
Pop, pop, pop
(Hey, hey, hey, hey)

Pop, pop, beobeulgachi teojyeo beorilji molla
Kkeutdo eopsi jeomjeom bupureo ga
Naege puk ppajin neoreul aesseo chamjin ma
Baby, eyes on me now, naega teotteuryeo jul teni

Five
Ja ttaega dwaesseo, four
Ttak sumeul meomchwo, three
Nan neoreul gyeonwo, two, one
Here we go

Seollemi meotgi jeone (seollemi meotgi jeone)
I wanna make it
Pop, pop, pop, you want it (Pop, pop)
Pop, pop, pop, teojigil wonhae (teojigil wonhae)
Gaseumi ttwineun i neukkim (i neukkim, neukkim, yeah, hey)
I wanna make it
Pop, pop, pop, you want it
Pop, pop, pop, neol gatgil wonhae (I know you want it, babe)

Pop, pop, pop (Uh-uh)
Pop, pop, pop (Uh-uh) (You gotta pop it)
Pop, pop, pop (Uh-uh) (I can't stop it)
Pop, pop, pop
`;
};
album1song3.onclick = function(){
  document.getElementById('songtitle').innerHTML = "LOVE COUNTDOWN";
  albumimg.src = "/pictures/nayeonpop.jpeg";
  audio.src = "/songs/LOVE COUNTDOWN.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `My eyes, your eyes
Let's go

Tell me, do you wanna be my lover?
Are you ready to be mine? deo seodulleodo dwae
My eyes, your eyes
Ten to the one, it's love countdown of your life

Try me
I'm already at the starting line, can't stop me
Nan jigeum signaleul gidaryeo, you know it
No, no way
Not a game for you (Oh, na-na)
Uri sain danji
Neoui mangseorimppunin
But if you want it, deo neutgi jeone
Nuneul matchwoya doel georan geol

Deoneun mutji ma
Geu kkeuteun naya
Mangseoriji ma
Nege dagagalge, baby

Tell me, do you wanna be my lover?
Are you ready to be mine? deo seodulleodo dwae
My eyes, your eyes
And tell it to me quick, don't lie
And baby, I just wanna be your lover
Hana dul naui maeum sok neol bureuneun soriya
Right now, nal bwa
Ten to the one, it's love countdown of your life

Jichyeosseo nan ibul bakkeuro
Daril naemilgo isseo
Nawa jullae jamkkan bonae beoryeo munjareul
Jami an wa jeonhwagiman barabone, oh, na
Teach me, girl
Nuneul bomyeon neoui jinsimeul
Al su isseul geonman gatasseo
Gyeolgugen nae maeumman deulkyeo
You know I

Deoneun mutji ma (ma)
Geu kkeuteun naya (naya, yeah)
Mangseoriji ma (Yeah)
Nege dagagalge, baby

Tell me, do you wanna be my lover?
Are you ready to be mine? deo seodulleodo dwae
My eyes, your eyes
And tell it to me quick, don't lie (I don't lie, don't lie)
And baby, I just wanna be your lover
Hana dul naui maeum sok neol bureuneun soriya
Right now, nal bwa (Yeah)
Ten to the one, it's love countdown of your life

Wait, wait, wait
Uri seoro maeumeul hwaginhagi jeon (hwaginhagi jeon)
Wae ireon byeogi saenggin geolkka nareum saenggakae bwasseo
This is final destination, saenggijido aneul ildeureul
Geokjeonghane 'cause dareum anin I really want

Sweet love
Gomin ttawin neoeo dwo
Uimi eomneun siganman ganikkan
So don't let me wait for you no more

Tell me, do you wanna be my lover? (Ah, my lover)
Are you ready to be mine? deo seodulleodo dwae
My eyes, your eyes (My eyes, your eyes)
And tell it to me quick, don't lie (I don't lie, don't lie; I don't lie)
And baby, I just wanna be your lover (Your lover)
Hana dul naui maeum sok neol bureuneun soriya (bureuneun soriya)
Right now, nal bwa (Right now, nal bwa)
Ten to the one, it's love countdown of your life (I, I)

`;
};
album1song4.onclick = function(){
  document.getElementById('songtitle').innerHTML = "MAGIC";
  albumimg.src = "/pictures/nayeon.jpeg";
  audio.src = "/songs/Magic.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Uh
Feels like magic
Yeah

I'm so cute, so fly, so dangerous
Everybody know me
You ain't never met somebody so glamorous
Bet you wanna come see (Ah)
Love when I do it like that (In my bag)
Feeling like a cool, cool chick
Know how to keep it on track (Check my style)
Baby, I'm a whole package

(Oh) You love it when a girl get sassy
Keep things classy, yeah, that's me though
(Oh) You on me like a paparazzi
Don't harass me, just follow
Simple as one, two, three (Uh, uh)
And I got you on lock, boy, you already know
Can't take your eyes off me
Eenie, meenie, miney, moe (Oh)

I might be out here looking lavish
Watch me doing damage
Yes, I got that magic, magic
Bet you wanna come touch but you can't have it
Baby, I'm a savage
Ain't it just like magic? (Magic)

When I put a spell on you
And the energy starts to build, you got it
When the feeling gets stronger
(It's just like) Just like magic
When the rhythm goes through you
And the melody starts to get hypnotic
Once you get it into you
(It feels like) Feels like magic

Abracadabra
Come get a touch of magic
Uh, bam, alakazam
I make you feel like magic

Uh, in a minute no limit when I start this (Uh-huh)
All day, all night, winning like a boss chick (Oh)
'Cause I run the game with charisma
Under my spell with my magical mixture

(Oh) You love it when a girl get sassy
Keep things classy, yeah, that's me though
(Oh) You on me like a paparazzi
Don't harass me, just follow
Simple as one, two, three (Uh, uh)
And I got you on lock, boy, you already know
Can't take your eyes off me
Eenie, meenie, miney, moe (Oh)

I might be out here looking lavish
Watch me doing damage
Yes, I got that magic, magic
Bet you wanna come touch but you can't have it
Baby, I'm a savage
Ain't it just like magic? (Magic)

When I put a spell on you
And the energy starts to build, you got it
When the feeling gets stronger (It's just like)
(It's just like) Just like magic (Ooh, ooh, ooh)
When the rhythm goes through you
And the melody starts to get hypnotic
Once you get it into you (Ooh)
(It feels like) Feels like magic

Tonight, I wanna dance just a little bit
Uh, I'm gonna rock, rock, rock that
I'm going out for the thrill of it
Uh, I'm gonna shake, shake, shake that
Oh, you gotta have it (Hey)
I got the perfect magic
Yeah, I'm the baddest (Ooh)

I might be out here looking lavish
Watch me doing damage
Yes, I got that magic, magic
Bet you wanna come touch but you can't have it (Have it)
Baby, I'm a savage (Oh, just like, yeah, yeah)
Ain't it just like magic? (Magic)

When I put a spell on you (Oh)
And the energy starts to build you got it
When the feeling gets stronger (Oh)
(It's just like) Just like magic
When the rhythm goes through you (Ooh)
And the melody starts to get hypnotic (Yeah)
Once you get it into you (Ooh)
(It feels like) Feels like magic

Abracadabra (Oh)
Come get a touch of magic
Uh, bam, alakazam
Feels like magic`;
};
album1song5.onclick = function(){
  document.getElementById('songtitle').innerHTML = "NO PROBLEM";
  albumimg.src = "/pictures/nayeonpop.jpeg";
  audio.src = "/songs/NO PROBLEM.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `We stay up until the light
Sunrise in the morning
And I can't wait until we reunite
I can help to ease your mind

And even if you're low sometimes
I can be the one to pick you all the way up
Baby, when you're feeling down
You just gotta let me know

No, there ain't no problem for love
With you and I, tonight
No, nothing can stop us this time (This time)
Doesn't have to be complicated tonight (Mm-mm)
No, there ain't no problem (No, no) for love (For love)
With you and I tonight
No, nothing can stop us this time (This time)
Doesn't have to be complicated
No, there ain't no problem tonight

For your heart, I'm qualified
We don't need no conversation
We don't have to say goodbye
'Cause baby, you got me right, ooh-ooh-ooh-ooh-ooh

And even if you're low sometimes
I can be the one to pick you all the way up
Baby, when you're feeling down
Just pick up the phone

No, there ain't no problem for love
With you and I, tonight
No, nothing can stop us this time (This time)
Doesn't have to be complicated tonight (Mm-mm)
No, there ain't no problem (No, no) for love (For love)
With you and I tonight
No, nothing can stop us (No, no) this time (This time)
Doesn't have to be complicated
No, there ain't no problem tonight

Uh
Ain't no problem for love tonight
Come and ride with me, we can dance tonight, yeah
Under the stars tonight
Yeah, your eyes shine brighter than neon lights, uh (Neon lights)
Bass loud, no, we don't play (Don't play)
For your love, yeah, I will pray (Oh, yeah)
Me and you, that's one plus one (Woo)
Me and you, no, ain't nobody better come on

And even if you're low sometimes
I can be the one to pick you all the way up
Baby, when you're feeling down
You just gotta let me know (No, no)

No, there ain't no problem for love (For love)
With you and I, tonight (Tonight, no)
No, nothing can stop us this time (This time)
Doesn't have to be complicated tonight (Come on, baby, let's go)
No, there ain't no problem (No, no) for love (For love)
With you and I tonight (You and I; With you and I)
No, nothing can stop us (No, no; Yeah, yeah) this time (This time)
Doesn't have to be complicated
No, there ain't no problem tonight`;
};


album2song1.onclick = function(){
  document.getElementById('songtitle').innerHTML = "THE FEELS";
  albumimg.src = "/pictures/thefeels.png";
  audio.src = "/songs/TWICE - The Feels.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Boy I, boy I, boy, I know
I know you get the feels
Boy I, boy I, boy, I know

Uh, I'm so curious
'Bout you, boy, wanna keep it cool
But I know every time you move
Got me frozen, I

Get so shy, it's obvious

Catching feels like butterflies
If I say what's on my mind
Would I hit bullseye?

Shoot
I'm ready, aim and fire
Baby, I

Feel like Cupid's alive
Alive tonight
Yeah, tonight

If your heart beats the same way, let me know
'Cause I'm boom, boom, boom from head to toe, and I

I know, love, it is such a funny thing
A mystery allure
Gotta get to know you more

'Cause I, I can feel a real connection
A supernatural attraction, ah

I got the feels for you, yeah, yeah, yeah, yeah

You have stolen my heart, oh, yeah
Never let it go, oh, oh, no
Never let it go, oh, oh, oh

Lightning straight to my heart, oh, yeah
I got all the feels for sure
Yeah, I got all the feels for ya

Boy I, boy I, boy, I know
I know I get the feels
Boy I, boy I, boy, I know
I know you feel it too

Sway in the moonlight, dance in the dark, I
I know that I caught your eye

Are we on the same vibe? I
Wonder what's on your mind

'Cause you got me good and I wanna be ya boo
If it's dumb, well, I wanna be a fool

Underneath the neon lights, bebe
Electricity tonight, bebe

I know, love, it is such a funny thing
A mystery allure
Gotta get to know you more

'Cause I, I can feel a real connection
A supernatural attraction, ah

I got the feels for you, yeah, yeah, yeah, yeah

You have stolen my heart, oh, yeah
Never let it go, oh, oh, no
Never let it go, oh, oh, oh

Lightning straight to my heart, oh, yeah
I got all the feels for sure
Yeah, I got all the feels for ya

Boy I, boy I, boy, I know
I know I get the feels
Boy I, boy I, boy, I know
I know you feel it too

Boy I, boy I, boy, I know
I know I get the feels
Boy I, boy I, boy, I know
I know you feel it too

You got my attention
So what's your intention?
Yeah, tell me, baby, what's the deal?

Oh, one look and I know it, baby, my eyes reveal
That you, you, you give me the feels

You have stolen my heart, oh, yeah
Never let it go, oh, oh, no
Never let it go, oh, oh, oh

Lightning straight to my heart, oh, yeah
I got all the feels for sure
Yeah, I got all the feels for ya

Boy I, boy I, boy, I know
I know I get the feels
Boy I, boy I, boy, I know
I know you feel it too

Boy I, boy I, boy, I know
I know I get the feels
Boy I, boy I, boy, I know
I know you feel it too
`;
};
album2song2.onclick = function(){
  document.getElementById('songtitle').innerHTML = "FANCY";
  albumimg.src = "/pictures/fancy.jpeg";
  audio.src = "/songs/TWICE - FANCY.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Jigeum haneul gureum saegeun tropical, yeah
Jeo taeyang ppalganbit ne du bol gata
Oh tell me I'm the only one, babe
I fancy you, I fancy you, fancy you
(TWICE!)

It's dangerous ttakkeumhae neon jangmi gata
Gwaenchanha jogeumdo nan geopnaji anha
Deo sege kkok jaba take my hand
Jom wiheomhalgeoya deo wiheomhalgeoya baby

Dalkomhan chocolate ice-cream-cheoreom
Nogabeorineun jigeum nae gibun so lovely
Kkamkkamhan uju sok gajang banjjagineun
Jeo byeol jeo byeol geu yeope keun ne byeol

Geogi neo I fancy you
Amuna wonhaji anha
Hey, I love you (love ya!)
Geurae neo I fancy you
Kkumcheoreom haengbokhaedo dwae
'Cause I need you (what?)

Fancy you, ooh
Nuga meonjeo johahamyeon eottae
Fancy you, ooh
Jigeum neoegero gallae
(Fancy, ooh)

Maeilmaeil
Nan jeongmal amugeotdo mothane oh my
Mayday
Ireoda keunil nael geot gateunde
Bang bang
Meoriga hollin deut reset-i dwae
Eojjeomyeon joha
Ige majneungeonji molla S.O.S

Swim swim
Neoran badae jamsuhami dwae
Maeili birthday
Dalkomhae neowa naui fantasy
Dream dream
Machi kkumgata bol kkojibeobwa
Yojeum naui sangtae mesejin la la la baby

Dalkomhan chocolate ice-cream-cheoreom
Nogabeorineun jigeum nae gibun so lovely
Kkamkkamhan uju sok gajang banjjagineun
Jeo byeol jeo byeol geu yeope keun ne byeol

Geogi neo I fancy you
Amuna wonhaji anha
Hey, I love you (love ya!)
Geurae neo I fancy you
Kkumcheoreom haengbokhaedo dwae
'Cause I need you (what?)

Fancy you, ooh
Nuga meonjeo johahamyeon eottae
Fancy you, ooh
Jigeum neoegero gallae
(Fancy, ooh)

Yeongicheoreom huk sarajilkka
Neul gadeukhi dama neol du nune dama
Saenggakmaneuro pogeunhaejyeo
Mollae dwieseo ana neol nohji anheullae

Geogi neo I fancy you (fancy you)
Amuna wonhaji anha
Hey, I love you (love ya!)
Geurae neo I fancy you
Kkumcheoreom haengbokhaedo dwae
'Cause I need you (what?)

Fancy you, ooh
Nuga meonjeo johahamyeon eottae
Fancy you, ooh
Jigeum neoegero gallae
(Fancy, ooh)
`;
};
album2song3.onclick = function(){
  document.getElementById('songtitle').innerHTML = "SET ME FREE";
  albumimg.src = "/pictures/setmefree.png";
  audio.src = "/songs/TWICE - SET ME FREE.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Modeun geol ileobeorindaedo sanggwan eopseo
Jigeum I gamjeongi sunganira haedo
Ijeneun deo isang nae mam sumgigin sileo
Ne nunbichi nal jayuropge mandeuljana

No, no, no, no, no
Uisikaji malgo nal anajwo
Deoneun ileul geotdo sumgil geotdo eopseo

Nae modeun geol georeo Risk it all
I sarang malgoneun Fade out
Gonna set me, set me, set me free
Nae mam kkeutkkaji gal teni
Neon geunyang nal aneumyeon dwae
Come and set me, set me, set me free

Naega wonhadeon Best of me (Best of me)
Ije naneun Ready to be (Gonna be)
Yeah, gonna set me, set me, set me free
Jigeum All eyes on me
Nareul anajwo da borandeusi
Yeah, come and set me, set me, set me free

Eoriseogeun chungdongira haedo sanggwan eopseo
Nal gaduneun siseon ttawin imi Outta sight
Jigeum urin naega kkumkkwowatdeon geudaero
Nunape geuryeojin wanbyeokan Fantasy

No, no, no, no, no
Singyeong sseujimalgo nal anajwo
Deoneun ileul geotdo sumgil geotdo eopseo

Nae modeun geol georeo Risk it all
I sarang malgoneun Fade out
Gonna set me, set me, set me free
Nae mam kkeutkkaji gal teni
Neon geunyang nal aneumyeon dwae
Come and set me, set me, set me free

Naega wonhadeon Best of me (Best of me)
Ije naneun Ready to be (Gonna be)
Yeah, gonna set me, set me, set me free
Jigeum All eyes on me
Nareul anajwo da borandeusi
Yeah, come and set me, set me, set me free

I'm gonna tell you straight
No matter what they say
Du jeomeul inneun Line an kkeunkyeo all my life
Budichigo neomeojyeodo ireukyeo nal
Du nuni matdaeul ttaen Make me feel special
Neoro inhae wanjeonhan naro Completed
I mal mideodo dwae 'Cause this is official, uh!

Nae modeun geol georeo Risk it all
I sarang malgoneun Fade out
Gonna set me, set me, set me free
Nae mam kkeutkkaji gal teni
Neon geunyang nal aneumyeon dwae
Come and set me, set me, set me free

Naega wonhadeon Best of me (Best of me)
Ije naneun Ready to be (Gonna be)
Yeah, gonna set me, set me, set me free
Jigeum All eyes on me
Nareul anajwo da borandeusi
Yeah, come and set me, set me, set me free
`;
};
album2song4.onclick = function(){
  document.getElementById('songtitle').innerHTML = "TALK THAT TALK";
  albumimg.src = "/pictures/talkthattalk.jpg";
  audio.src = "/songs/TWICE - Talk that Talk.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Nal boneun Eyes sshik unneun Lips
Mame deulji I like it (Oh yeah)
Ne A to Z kkwae dalkomhae (That's right)

But I wanna skip (Just skip)
Deo gyeoljeongjeogin Thing (That thing)
Bolloneul weonhae bingbing dollin
Seoron ttawi malgo (I mean L word)

Deo deo deo deo deo deo boyeojweo (boyeojweo)
Neo neo neo neo neo neol allyeojweo (allyeojweo)
Jigeum nan Need some hints
Chaeugo isseo neoran Crosswords

Beep beep beep beep beep, the time is up
Nan imi al geot gajjiman
Ne moksoriro baro deutgo shibeunde

Baby nae dabeun ppeonhajana YES or YES
Milgeona danggineun
Gwaenhan shigan nangbineun shireuni
Gwagamhage Say it now weonhae 1 to 10
Shijakhaebolkka Right now

Tell me what you want
Tell me what you need
A to Z da malhaebwa
But shijageun ireoke hae
Talk that talk ttak han madi
Talk that talk L-O-V-E
Deullyeojweo Ooh
Now now now now now yeah
Yeah turn it up

Neoye nun Look look look
Wiaraero Roll roll roll
Ilkeotjana mweo picha
Nunbit sai ogo ganeun mal

Chageunchageun 1, 2, 3 (Just 1, 2, 3)
Deo chinjeolhage ABC (Like ABC)
Don't stop and just replay replay
(Yeah that's my only request)

Baby nal ango dalkomhage (dalkomhage)
Tell me now (Just tell me now)
Ttaeroneun ppeonhan mari deo
Jotaneun geol aljanhni

Favorite part jigeumiya (Want it more)
Now we're almost there
Shijakhaebolkka Right now

Tell me what you want
Tell me what you need
A to Z da malhaebwa
But shijageun ireoke hae
Talk that talk ttak han madi
Talk that talk L-O-V-E
Deullyeojweo Ooh
Now now now now now yeah

Dansunhan Words saranghandaneun mal
Geuge daya nan kkumimeopshi deutgil weonhaji
Miruji ana neoege dagaga
Nan shimpeulhage
Da malhalge I love you

Tell me what you want
Tell me what you need
A to Z da johjiman
Nan i mari jeil joeunde
Talk that talk ttak han madi
Talk that talk L-O-V-E
Oh yeah it sounds so good
Deo ppajyeodeureo puk

Tell me what you want
Tell me what you need
Han beon deo haejweo
Geurae banggeum geu mal
Talk that talk ttak han madi
Talk that talk L-O-V-E
Deullyeojweo Ooh
Now now now now now yeah
Yeah turn it up
`;
};
album2song5.onclick = function(){
  document.getElementById('songtitle').innerHTML = "SIGNAL";
  albumimg.src = "/pictures/signal.jpg";
  audio.src = "/songs/TWICE - SIGNAL.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Trying to let you know
Signeul bonae signal bonae
I must let you know
Signeul bonae signal bonae

Signeul bonae signal bonae
Signeul bonae signal bonae
Signeul bonae signal bonae
I must let you know

Signeul bonae signal bonae
geunde jeonhyeo an tonghae
nunbicheul bonae nunchireul june
geunde mot aladeutne
dabdabhaeseo michigetda jeongmal
wae geureonji moreugetda jeongmal
dasi han beon himeul naeseo
Signeul bonae signal bonae

nunjitdo sonjitdo eotteon pyojeongdo
soyongi eobtne hanado an tonghae
nunchido kochido jeonhyeo eobtna bwa
deo isang eotteohge nae mameul pyohyeonhae

eonjebuteonga nan nega joha
jigi sijakhaesseo baboya
wae ireohgedo nae mameul molla
eonjekkaji ireohge dunhage
nareul chinguroman daehallae
naega wonhaneun geon geuge aninde

Signal bonae signal bonae
jjirit jjirit jjirit jjirit
nan neoreul wonhae nan neoreul wonhae
wae baneungi eobtni
mannal ttae mada maeumeul dama
jjirit jjirit jjirit jjirit
gidarijanha da boijanha
wae alji mothani

Trying to let you know
Signeul bonae signal bonae
I must let you know
Signeul bonae signal bonae

neol bomyeo useumyeon alachaeyaji
oneulman myeot beonjjae neol bomyeo utneunde
jakku maleul geolmyeon jom neukkyeoyaji
gyesok ne gyeote meomulleoitneunde

eonjebuteonga nan nega joha
jigi sijakhaesseo baboya
wae ireohgedo nae mameul molla
eonjekkaji ireohge dunhage
nareul chinguroman daehallae
naega wonhaneun geon geuge aninde

Signal bonae signal bonae
jjirit jjirit jjirit jjirit
nan neoreul wonhae nan neoreul wonhae
wae baneungi eobtni
mannal ttae mada maeumeul dama
jjirit jjirit jjirit jjirit
gidarijanha da boijanha
wae alji mothani

jjirit jjirit jjirit jjirit
wae baneungi eobtni
jjirit jjirit jjirit jjirit
wae alji mothani

Signeul bonae signal bonae
geunde jeonhyeo an tonghae
nunbicheul bonae nunchireul june
geunde mot aladeutne
dabdabhaeseo michigetda jeongmal
wae geureonji moreugetda jeongmal
dasi han beon himeul naeseo
Signeul bonae signal bonae

`;
};

album3song1.onclick = function(){
  document.getElementById('songtitle').innerHTML = "DO NOT TOUCH";
  audio.src = "/songs/Do not touch.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Not easy, I know
Jirettai kanshō
Demo daijina koto
Hm-mm, no, no
Meiga no mae
Kōkina jewelry no soba de
Kaka re teru words
Do not, do not, touch

Treat me like something so precious
Kichōna mono handle it cautiously
Mamorenainara kawaranai kara chūi
Let me warn ya
Misukasu kimochi o
Chotto dake hold on
Osaete shōdō
Special, and you know

Yes, you can watch me (Watch me)
If, if you love me
But you can't touch me (Touch me)
If, if you love me
Kokoronojunbi (junbi) totonō mae wa
Yes, you can watch me, watch me
But you can't touch me, touch me
When I say
It's okay (No, you can't touch me)
Unmei no toki (toki) made wa sorry but
Yes, you can watch me, watch me
But you can't touch me, touch me

Mazuwa omoi o (Let it come to me first)
Lipsyori kotoba o (You gotta know it's a must)
Onaji omoinaraba
It's great (Yeah)
Let's wait, yeah

Matsu hodo amami masujan
Megumi no amefuru shunkan
Kishōna hodo ni kichōna monodato
You will find out (Find out)
Soon, gōru wa tōkunai
Loom, mie dashita janai
Waruikedo sono shunkan ga kuru sonotoki made wa

Yes, you can watch me (Watch me)
If, if you love me
But you can't touch me (Touch me)
If, if you love me
Kokoronojunbi (junbi) totonō mae wa
Yes, you can watch me, watch me
But you can't touch me, touch me
When I say
It's okay (No, you can't touch me)
Unmei no toki (toki) made wa sorry but
Yes, you can watch me, watch me
But you can't touch me, touch me

Utsukushī hazu sonotoki ni
Karada to kokoro issho ni
When we're ready
To go steady
Dandan to kieru questions tōku ni
Gone, gone, iranaku naru riyū sugu ni
Kuru wa yes, it'll be rope o katadzukeru hi
That's when I touch you, you touch me
Dakara wait for it

Yes, you can watch me (Watch me)
If, if you love me (Ooh)
But you can't touch me (Touch me)
If, if you love me
Kokoronojunbi (junbi) totonō mae wa
Yes, you can watch me, watch me
But you can't touch me, touch me
When I say
It's okay (No, you can't touch me)
Unmei no toki (toki) made wa sorry but
Yes, you can watch me, watch me
But you can't touch me, touch me`;
};
album3song2.onclick = function(){
  document.getElementById('songtitle').innerHTML = "MARSHMALLOW";
  audio.src = "/songs/Marshmallow.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Listen shiranai machikado uh jiyū ni hitori walk on
Yakusoku mo nashi I don't care
Sabishikunai honestly no stress, oh

Fuwafuwa konogoro uh kibun wa marshmallow
Kimi no mae ja sorenari ni
Kirawa renai yō worked on it

Time goes by, when you said good bye
Seiri wa tsuita yo on my side
Kizuato mo chōdo iete
I'm ready to fall in love again

Mahō kakete mirror mirror
Risō wa so far away
Yume wa kirakira shinjiyou telling me so
Watashi ga watashi-girai ja I can not move on
Crystal clear ni warattetai

Everyday my life
Hitori janai yo ashita kitto
Like ding-dong ding-dong happy day
It's sometimes
Ame ga futte mo it will be alright
Just dancing dancing in the rain

Nakanaka naosenai uh kuse toka aru janai
Uh mayonaka tabe chau aisukurīmu
Zaiaku-kan please, shhh give me peace, uh

Dame toka Yada toka uh, people say that wagamama? yeah
Ki ni shi sugite uptight
Yumemi teyou till sunrise

Walk￫rest￫running
Rest￫rest￫running
Jibun de erabu making a move kimete ī yo
Tamani go hōbi mo hitsuyō

Everyday my life
Hitori janai yo ashita kitto
Like ding-dong ding-dong happy day
It's sometimes
Ame ga futte mo it will be alright
Just dancing dancing in the rain

It's something new
Atarashikute okiniiri no kutsu o haite
Aruki dasou find a better place
Someday
Kitto deaeru yo
Muri ni senobi sezu ni

Odayakana risō no someone

Everyday my life
Hitori janai yo ashita kitto
Like ding-dong ding-dong happy day
It's sometimes
Ame ga futte mo it will be alright
Just dancing dancing in the rain`;
};
album3song3.onclick = function(){
  document.getElementById('songtitle').innerHTML = "BOUQUET";
  audio.src = "/songs/Bouquet.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Moshi jikan ga modotte
Ano hi no watashi ni aetara
Sotto dakishimete ageyou
What will be will be, baby
Jibun o suki ni narenakute
Kitai-dōri ni dekinakute
Namida de urunda sekai de
Anata o suki ni nareta

Egao wa tsukurenakute mo it will be fine
Kokoro ga waraeru yō ni narou

Kono mamade ī no
Watashi no mamade ī no
Dakara muri wa shinai yo
Damena jibun mo suki ni nareru hi made
Naite bakari no hibinara
Yasashī kokoro ga sodatte dareka o sukueru hazu
Sotto furueru ashi de tatte
Shinjiru saki e daijōbu
Mirai de waratte irukara
Tsumazuita ishi o narabete
Migaku kō hikaru yo
Kagayaku hōseki ni naru yo

Kidzui teta yo saisho kara
Dareka ni mamora re teta koto
Kioku no e no katasumi ni
Anata no kage ga mieru

Ai ga karete kawaita hi wa
Naze kashira ame ga futte
Ameninurete hieta toki wa
Kasa ga oite atta

Yume kara sameta hoho wa itsu demo
Nuguwa reta ato nukumori ga nokoru

Arigatō kitto
Hitori janakute zutto
Anata ga soba ni itakara
Kako no jibun mo suki ni nareru ki ga suru
Tanoshī dake no hibinara
Kizu ou kokoro ni kidzukezu dare mo sukuenakatta
Sotto furueru yubi nigitte
Yakusoku suru yo daijōbu
Mirai e todokerukara
Fuzoroina hana tabanete
Tsukurou sekai de hitotsu no
My bouquet

Ī no
Watashi no mamade ī no
Dakara muri wa shinai yo
Damena jibun mo suki ni nareru hi made
Naite bakari no hibinara
Yasashī kokoro ga sodatte dareka o sukueru hazu
Sotto furueru ashi de tatte
Shinjiru saki e daijōbu
Mirai de waratte irukara
Tsumazuita ishi o narabete
Migaku kō hikaru yo
Kagayaku hōseki ni naru yo`;
};
album3song4.onclick = function(){
  document.getElementById('songtitle').innerHTML = "FUNNY VALENTINE";
  audio.src = "/songs/Funny Valentine.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Moon night
Anata ga kureta
Aimaina kono kanjō wa
Baby, I do not need, do not need yeah

Tonight
2-ri no jikan no jūyō-sei
Tick tock, Tick tock
Wakattenai no ne
Fuzakete iru no dōshite

You got me
Come closer to me
Just look at me
Shōtai wa?
Mō kamen hazushite Wow-oh-oh

My funny, funny valentine yume made
Funny, funny valentine mitashite
(All of the time)
Jōnetsu de tokeru amai ai no Chocolate
Ah, shōgeki ga hashiru
Be my funny valentine, my valentine
Like a funny, funny
Akai honō atsuku yureru Moon night

Don't like Sunrise
Tokei o minaide
Sa~a tanoshimimashou
Dance La・ta・ta・ta・ta
Sabishiku shinaide
(Don't let me down)
Itsumo soba ni ite
Ki ni naru no?
Tick tock, Tick tock
Semete imadake shūchū shite watashidakeni

You got me
Come closer to me
Just look at me
Shōtai wa?
Massuguna sono-me Wow-oh-oh

My funny, funny valentine ai o ima
Funny, funny valentine shōmei shite
(All of the time)
Jōnetsu de tokeru amai ai no Chocolate
Ah, daitan ni nareru
Be my funny valentine, my valentine
Like a funny, funny
Akai ribon musubu Our butterfly

You're on my mind itsu kara
You stole my heart anata ni
I just want you to hold me tight
Watashi o dakishimete

You don't know me well enough yet
I don't know if you can handle me
Honki to iu nonara

Everyday is valentine

Funny, funny valentine yume made
Funny, funny valentine mitashite
(All of the time)
Jōnetsu de tokeru amai ai no Chocolate
Ah, shōgeki ga hashiru
Be my funny valentine, my valentine
Like a funny, funny
Akai honō atsuku yureru Moon night
`;
};
album3song5.onclick = function(){
  document.getElementById('songtitle').innerHTML = "BEHIND THE CURTAIN";
  audio.src = "/songs/Behind The Curtain.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Ladies and gents
Let's show something to amazing, you know? (Yeah, yeah, yeah)
You are mine Mō nukedasenai
Ooh-oh, baby

Kurai street ni, nijimu jazzy mood
Isshun de Kokoro ubai saru invitation
Izanau yō ni volume o agete
Tamerai wa hitsuyōna i coming closer
Step up, step up, know you wonder
Osorenaide sugu (Oh-oh)
Welcome, welcome, gonna whisper
Kidzukeba mō soko wa my area

Aita maku ni
Kagayakustage

Ooh, ooh, baby
Hitomi, sorasazu ni (Oh-oh)
Hold it tight more and more
Ooh, ooh, baby
Shōjiki ni say what you need (Oh-oh)
Kanaete agerukara
Karei ni kazaru ni-ni-night
Mita koto no nai keshiki more, more, more
Now is the time
Saikō no shīn de (Oh-oh)
Hikarinonakahe izanau

Atsumaru shisen nukete fureta tension (Tension)
Kurayami no naka motto misete hyōjō
Kakushite mo (Ooh)
Barebare yo (Ooh)
Sono han'nō make me crazy
You like it? I'll show more now
Romanceto wa hitoajichigau
Atarashī janru tsukuru no you and I, yeah
Chotto no yosomi demo
Zenbu minogasukara
Focus on, babe
On the stage, on the stage more

Miseru wa my climax
Takamaru stage

Ooh, ooh, baby
Hitomi, sorasazu ni (Oh-oh)
Hold it tight more and more
Ooh, ooh, baby
Shōjiki ni say what you need (Oh-oh)
Kanaete agerukara
Karei ni kazaru ni-ni-night
Mita koto no nai keshiki more, more, more
Now is the time
Saikō no shīn de (Oh-oh)
Hikarinonakahe izanau

Hikiyose michibiku wa
Wanna some breath? tsukanoma intermission
Anata ni turn switch
Hora spotlight's on
Kono makugaoriru mae ni
Take your option

(Yeah, yeah, yeah, uh-huh)
Mayoi nante mō
(Yeah, yeah, yeah, uh-huh)
Imasaradesho?
(Yeah, yeah, yeah, uh-huh)
Sugu ni catch up
Kirameku sekai no repertory wa tsudzuku
Let you go follow your heart, baby (Baby)

Ooh, ooh, baby
Hitomi, sorasazu ni (Oh-oh)
Hold it tight more and more
Ooh, ooh, baby
Shōjiki ni say what you need (Oh-oh)
Kanaete agerukara
Karei ni kazaru ni-ni-night
Mita koto no nai keshiki more, more, more
Now is the time
Saikō no shīn de (Oh-oh)
Hikarinonakahe izanau

Yeah, yeah, yeah, yeah
You are mine mō nukedasenai`;
};


album4song1.onclick = function(){
  document.getElementById('songtitle').innerHTML = "CRAZY";
  albumimg.src = "/pictures/crazy.webp";
  audio.src = "/songs/CRAZY.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Act like an angel and dress like crazy

All the girls are girling, girling
All the girls are girling, girling
All the girls are girling, girling
All the girly girls

Da, da-da-da
Da-da-da-da-da
Da-da-da, da
Act like an angel and dress like crazy
Da, da-da-da
Da-da-da-da-da
Da-da-da, da

Yeah, nae simjange gangnim
Neon CPRgachi
Sondaemyeon like Pikachu
Baengman bolteu jeongi it's pumping
I'm an Otaku, bestie
Michyeo that candy's sassy
Nyureonui chegyereul gaengsin
Nae meoritsok gamok tarokaetji

Galileo
Seuseuro simpanhae maeil
Noesogeseon
Jeokdanghi michira haetji
Why can't you stop?
Molla yukawonchik ttawin jegil nan geureon jaejil
Nae dabeun make me super crazy

Crazy, crazy, crazy, crazy
Crazy, crazy, crazy, crazy
Crazy, crazy, crazy, crazy
Act like an angel and dress like crazy

Da, da-da-da
Da-da-da-da-da
Da-da-da, da
Act like an angel and dress like crazy
Da, da-da-da
Da-da-da-da-da
Da, da-da-da
Da-da, da-da, da

All the girls are girling, girling
All the girls are girling, girling
All the girls are girling, girling
All the girly girls
All the girls are girling, girling
All the girls are girling, girling
All the girls are girling, girling
All the girly girls

Back in the days michime
Michiji mothaetdeon me
Deoisang nae kkeullim ape
Geojit jeungeoneun anchi
Museun uimi tto museun gachi
Ganeunggwa bulganeung ijen da swit
Yeah, me and my girls
Urin nuni meol geoseul arado jeo taeyange kiss, mwah

Galileo
Seuseuro simpanhae maeil
Noesogeseon
Jeokdanghi michira haetji
Why can't you stop?
Molla yukawonchik ttawin jegil nan geureon jaejil
Nae dabeun make me super crazy

Crazy, crazy, crazy, crazy
Crazy, crazy, crazy, crazy
Crazy, crazy, crazy, crazy
Act like an angel and dress like crazy

Da, da-da-da
Da-da-da-da-da
Da, da-da-da
Act like an angel and dress like crazy
Da, da-da-da
Da-da-da-da-da
Da, da-da-da
Da-da, da-da, da

All the girls are girling, girling
All the girls are girling, girling
All the girls are girling, girling
All the girly girls
All the girls are girling, girling
All the girls are girling, girling
All the girls are girling, girling
All the girly girls`;
};
album4song2.onclick = function(){
  document.getElementById('songtitle').innerHTML = "PERFECT NIGHT";
  albumimg.src = "/pictures/perfectnight.jpeg";
  audio.src = "/songs/Perfect Night.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Me and my girlies, we gon' party till it's early
Got me feeling otherworldly tonight
Caught in some traffic, but the radio is blasting
Drop a red light and we'll sing it, "Goodbye"

Ooh
By the morning, feel like magic
I got all I need, you know nothing else can beat
The way that I feel when I'm dancing with my girls
Perfect energy, yeah, we flawless, yeah, we free
There's no better feeling in the whole wide world

Tonight
I don't care what's wrong or right
Don't start blowing up my line
I'd care at 11:59
But nothing counts after midnight

Come and take a ride with me
I got a credit card and some good company
So come through, make the fit real good
Why you still stuck on loading? Waiting on you, babe

Ooh
Night to morning, live slow motion
I got all I need, you know nothing else can beat
The way that I feel when I'm dancing with my girls
Perfect energy, yeah, we flawless, yeah, we free
There's no better feeling in the whole wide world

Tonight
I don't care what's wrong or right
Don't start blowing up my line
I'd care at 11:59
But nothing counts after midnight

Ooh
By the morning, feel like magic
I got all I need, you know nothing else can beat
The way that I feel when I'm dancing with my girls
Perfect energy, yeah, we flawless, yeah, we free
There's no better feeling in the whole wide world

Tonight
I don't care what's wrong or right
Don't start blowing up my line
I'd care at 11:59
Don't start blowing up my line`;
};
album4song3.onclick = function(){
  document.getElementById('songtitle').innerHTML = "SMART";
  albumimg.src = "/pictures/smart.png";
  audio.src = "/songs/Smart.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `(Ah-ah-ah)
(Ah-ah-ah)

I'm a smarter, baby, smarter
Smarter, baby, smarter
Hanal bomyeon yeolkkaji
Ganpahaeseo dolpahaji
Wanna be a winner
Wanna be a winner
Gyehoekdaero dwaegaji
Nan nabiga doel aesongi

Wonhaneun geon seungniran nom
I call it "sugar" (My sugar, sugar)
Plandaeroramyeon nochil riga eopji
Nae sugar, sugar (My sugar)

Nugun malhae, naega mean-mean-mean-mean-mean
Singyeong an sseo swit swit swit swit swit
Nae paebae wie pil areumdaum daesin
Deo ganghan ireum "villain"eul taekaetji
So geuge baro me, me, me, me, me
Naegen boyeo, see, see, see, see, see
LE SSERAFIM, nal ikkeureo
To victory

I'm a smarter, baby, smarter
Smarter, baby, smarter
Hanal bomyeon yeolkkaji
Ganpahaeseo dolpahaji
Wanna be a winner
Wanna be a winner
Gyehoekdaero dwaegaji
Nan nabiga doel aesongi
I'm a smarter, baby

Work hard in secret, agwiga chakchak matge
I planned that, don't be mad
Plandaeroramyeon nan doel suga eopji
Geu loser, loser (The loser)

Nugun malhae, naega mean-mean-mean-mean-mean
Singyeong an sseo swit swit swit swit swit
Nae paebae wie pil areumdaum daesin
Deo ganghan ireum "villain"eul taekaetji
So I just wanna be me, me, me, me
Naegen boyeo, see, see, see, see, see
LE SSERAFIM, nal ikkeureo
To victory

I'm a smarter, baby, smarter
Smarter, baby, smarter
Hanal bomyeon yeolkkaji
Ganpahaeseo dolpahaji
Wanna be a winner
Wanna be a winner
Gyehoekdaero dwaegaji
Nan nabiga doel aesongi
I'm a smarter, baby

Nae sigyeneun tick-tock, pillyohaetdeon shortcut
Chajanaego nan jabatji, huh
Nuguneun malhae, "That's all luck"
Nan malhae, "No, it's not luck"
Nae ttameun not lying, lying
Don't slow down, i saleun superfast
Best scheme, nae meoritsoge
Gatsaeng, nan junbireul kkeunnaesseo
Dinner of the winner, that is what I want to get, alright

Smarter, baby, smarter (Smarter, baby, smarter)
Smarter, baby, smarter (Smarter, baby, smarter)
Hanal bomyeon yeolkkaji (hanal bomyeon yeolkkaji)
Ganpahaeseo dolpahaji (ganpahaeseo dolpahaji)
Wanna be a winner (Wanna be a winner)
Wanna be a winner (Wanna be a winner)
Gyehoekdaero dwaegaji (gyehoekdaero dwaegaji)
Nan nabiga doel aesongi (nan nabiga doel aesongi)
I'm smarter, baby`;
};
album4song4.onclick = function(){
  document.getElementById('songtitle').innerHTML = "EASY";
  albumimg.src = "/pictures/easy.jpeg";
  audio.src = "/songs/Easy.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Dachindaedo, gireul georeo, kiss me
Swipji aneum naega swipge easy
Stage, wien buri twieo, nae body
Pull up and I rip it up like ballet
Damn, I really make it look easy
Yeah, know that I make it look easy

Clap your hands, neodo nawa gatdamyeon
Clap your hands now (Dream, dream, dream)
Uigusim ttawin geunyang chiwo
Geunyang malhae "I'm the real one" (Sheesh, sheesh)
Jomyeong kkeojin dwiui nan wander in the night
Don't know what is right
Don't know 'bout my rights
Sigisim, uisim, bulsin, ijen friends of me, yeah
Sesangege nan banjjokjjari seraphim, yeah

Mm, mm-mm, mm
I've been tryin' so long to show you, show you, show you (Oh)
(I'm the one that you need)

Dachindaedo, gireul georeo, kiss me
Swipji aneum naega swipge easy
Stage, wien buri twieo, nae body
Pull up and I rip it up like ballet
Damn, I really make it look easy
Yeah, know that I make it look easy
Yeah, know that I make it look easy

Sumyeon wiui baekjoga dwae whippin'
Ttaeron pullyeo, naui dari but I keep it
Get, set, go, come and see me, I'm the fearless, mm
Naui balgeoreumeun mae sungan history, igeon my way
Yeongungcheoreom georeo even if I am not flawless
Pyeonhageman watdago?
Nal mollabwatdamyeon you have to know

Mm
I've been tryin' so long to show you, show you, show you
(I'm the one that you need)

Dachindaedo, gireul georeo, kiss me (Kiss)
Swipji aneum naega swipge easy (swipji aneum naega swipge easy)
Stage, wien buri twieo, nae body (That's my body, that's my body)
Pull up and I rip it up like ballet (Yeah, yeah)
Damn, I really make it look easy (Damn, I really make it look easy)
Yeah, know that I make it look easy`;
};
album4song5.onclick = function(){
  document.getElementById('songtitle').innerHTML = "ANTIFRAGILE";
  albumimg.src = "/pictures/antifragile.webp";
  audio.src = "/songs/ANTIFRAGILE.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Anti ti ti ti fragile fragile
Anti ti ti ti fragile
Anti ti ti ti fragile fragile
Antifragile antifragile

Gashibatgil wiro Riding
You made me boost up
Geojiseuro gadeuk chan Party
Garyeopjido ana
Nae dwie maldeuri mana
Nado cheom deunneun nae Rival
Modu gidohae nae Falling
Geu son wiro I'mma jump in
Yes gimme that

Georeobwa wieom Like a lion
Nunppichen geodaehan Desire
Deo bueo Gasoline on fire
Bulgil soge dashi nara Rising

Itji ma naega dugo on Toe shoes
Museun mari deo piryohae
Mushi ma naega georeoon keorieo
I go to ride till I die die

Deo nopi gajulge
Naega baratteon segye jel wie
Tteoreojeodo dwae I'm
Antifragile antifragile
Nan jigeum On my way
Gattabeoryeo jweo neoye Fairy tale
Now you know my name, I'm
Antifragile antifragile

Anti ti ti ti fragile fragile
Anti ti ti ti fragile
Anti ti ti ti fragile fragile
Antifragile antifragile

"Lovey lovey lovey dovey dovey dovey"
Meottaero jeonghane naran aee daehae
I don't know what to say I can't feel it

Tteugeoun gwanshimeun hwanyeong
Gwiyeoun jiltuneun Go ahead
Jul dallin inhyeongeun No thanks
Nae mirael sseul naye norae
Yes gimme that

Georeobwa wieom Like a lion
Nunppichen geodaehan Desire
Deo bueo Gasoline on fire
Bulgil soge dashi nara Rising

Itji ma naega dugo on Toe shoes
Museun mari deo piryohae
Mushi ma naega georeoon keorieo
I go to ride till I die die

Deo nopi gajulge
Naega baratteon segye jel wie
Tteoreojeodo dwae I'm
Antifragile antifragile
Nan jigeum On my way
Gattabeoryeo jweo neoye Fairy tale
Now you know my name, I'm
Antifragile antifragile

Anti ti ti ti fragile fragile
Anti ti ti ti fragile
Anti ti ti ti fragile fragile
Antifragile antifragile

We can break it baby
Rock it twist it lock it baby
All I know is you can't chain me
'Cause I'm gonna break out
Gonna gonna break out out
We can break it baby
Rock it twist it lock it baby
All I know is you can't chain me
'Cause I'm gonna break out
Gonna gonna break out out

Deo nopi gajulge
Naega baratteon segye jel wie
Tteoreojeodo dwae I'm
Antifragile antifragile
Nan jigeum On my way
Gattabeoryeo jweo neoye Fairy tale
Now you know my name, I'm
Antifragile antifragile

Anti ti ti ti fragile fragile
Anti ti ti ti fragile
Anti ti ti ti fragile fragile
Antifragile antifragile`;
};


album5song1.onclick = function(){
  document.getElementById('songtitle').innerHTML = "LOVER";
  audio.src = "/songs/Taylor Swift - Lover.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `We could leave the Christmas lights up 'til January
This is our place, we make the rules
And there's a dazzling haze, a mysterious way about you, dear
Have I known you twenty seconds or twenty years?

Can I go where you go?
Can we always be this close forever and ever?
And ah, take me out and take me home
You're my, my, my, my
Lover

We could let our friends crash in the living room
This is our place, we make the call
And I'm highly suspicious that everyone who sees you wants you
I've loved you three summers now, honey, but I want 'em all

Can I go where you go?
Can we always be this close forever and ever?
And ah, take me out and take me home (Forever and ever)
You're my, my, my, my
Lover

Ladies and gentlemen, will you please stand?
With every guitar string scar on my hand
I take this magnetic force of a man to be my
Lover
My heart's been borrowed and yours has been blue
All's well that ends well to end up with you
Swear to be over-dramatic and true to my
Lover

And you'll save all your dirtiest jokes for me
And at every table, I'll save you a seat
Lover

Can I go where you go?
Can we always be this close forever and ever?
And ah, take me out and take me home (Forever and ever)
You're my, my, my, my
Oh, you're my, my, my, my
Darling, you're my, my, my, my
Lover`;
};
album5song2.onclick = function(){
  document.getElementById('songtitle').innerHTML = "CRUEL SUMMER";
  audio.src = "/songs/Taylor Swift - Cruel Summer.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `(Yeah, yeah, yeah, yeah)

Fever dream high in the quiet of the night
You know that I caught it (Oh yeah, you're right, I want it)
Bad, bad boy, shiny toy with a price
You know that I bought it (Oh yeah, you're right, I want it)

Killing me slow, out the window
I'm always waiting for you to be waiting below
Devils roll the dice, angels roll their eyes
What doesn't kill me makes me want you more

And it's new, the shape of your body
It's blue, the feeling I've got
And it's ooh, whoa oh
It's a cruel summer
It's cool, that's what I tell 'em
No rules in breakable heaven
But ooh, whoa oh
It's a cruel summer
With you

Hang your head low in the glow of the vending machine
I'm not dying (Oh yeah, you're right, I want it)
We say that we'll just screw it up in these trying times
We're not trying (Oh yeah, you're right, I want it)

So cut the headlights, summer's a knife
I'm always waiting for you just to cut to the bone
Devils roll the dice, angels roll their eyes
And if I bleed, you'll be the last to know

Oh, it's new, the shape of your body
It's blue, the feeling I've got
And it's ooh, whoa oh
It's a cruel summer
It's cool, that's what I tell 'em
No rules in breakable heaven
But ooh, whoa oh
It's a cruel summer
With you

I'm drunk in the back of the car
And I cried like a baby coming home from the bar (Oh)
Said, "I'm fine," but it wasn't true
I don't wanna keep secrets just to keep you
And I snuck in through the garden gate
Every night that summer just to seal my fate (Oh)
And I scream, "For whatever it's worth
I love you, ain't that the worst thing you ever heard?"
He looks up, grinning like a devil

It's new, the shape of your body
It's blue, the feeling I've got
And it's ooh, whoa oh
It's a cruel summer
It's cool, that's what I tell 'em
No rules in breakable heaven
But ooh, whoa oh
It's a cruel summer
With you

I'm drunk in the back of the car
And I cried like a baby coming home from the bar (Oh)
Said, "I'm fine," but it wasn't true
I don't wanna keep secrets just to keep you
And I snuck in through the garden gate
Every night that summer just to seal my fate (Oh)
And I scream, "For whatever it's worth
I love you, ain't that the worst thing you ever heard?"
(Yeah, yeah, yeah, yeah)
`;
};
album5song3.onclick = function(){
  document.getElementById('songtitle').innerHTML = "PAPER RINGS";
  audio.src = "/songs/Taylor Swift - Paper Rings.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `The moon is high
Like your friends were the night that we first met
Went home and tried to stalk you on the internet
Now I've read all of the books beside your bed
The wine is cold
Like the shoulder that I gave you in the street
Cat and mouse for a month or two or three
Now I wake up in the night and watch you breathe

(Ayy)
Kiss me once 'cause you know I had a long night (Oh)
Kiss me twice 'cause it's gonna be alright (Uh)
Three times 'cause I waited my whole life (1, 2, 1, 2, 3, 4)

I like shiny things, but I'd marry you with paper rings
Uh huh, that's right
Darling, you're the one I want, and
I hate accidents except when we went from friends to this
Uh huh, that's right
Darling, you're the one I want
In paper rings in picture frames in dirty dreams
Oh, you're the one I want

In the winter, in the icy outdoor pool
When you jumped in first, I went in too
I'm with you even if it makes me blue
Which takes me back
To the color that we painted your brother's wall
Honey, without all the exes, fights, and flaws
We wouldn't be standing here so tall, so

(Ayy)
Kiss you once 'cause I know you had a long night (Oh)
Kiss you twice 'cause it's gonna be alright (Uh)
Three times 'cause you waited your whole life (1, 2, 1, 2, 3, 4)
Ah

I like shiny things, but I'd marry you with paper rings
Uh huh, that's right
Darling, you're the one I want, and
I hate accidents except when we went from friends to this
Uh huh, that's right
Darling, you're the one I want
In paper rings in picture frames in dirty dreams
Oh, you're the one I want

I want to drive away with you
I want your complications too
I want your dreary Mondays
Wrap your arms around me, baby boy
I want to drive away with you
I want your complications too
I want your dreary Mondays
Wrap your arms around me, baby boy
Uh huh

I like shiny things, but I'd marry you with paper rings
Uh huh, that's right, you're the one I want
I hate accidents except when we went from friends to this
Ah-ah, darling, you're the one I want
I like shiny things, but I'd marry you with paper rings
Uh huh, that's right
Darling, you're the one I want, and
I hate accidents except when we went from friends to this
Uh huh, that's right
Darling, you're the one I want
In paper rings in picture frames in all my dreams
You're the one I want
In paper rings in picture frames in all my dreams
Oh, you're the one I want

You're the one I want, one I want
You're the one I want, one I want
`;
};
album5song4.onclick = function(){
  document.getElementById('songtitle').innerHTML = "CORNELIA STREET";
  audio.src = "/songs/Taylor Swift - Cornelia Street.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `We were in the backseat
Drunk on something stronger than the drinks in the bar
"I rent a place on Cornelia Street"
I say casually in the car
We were a fresh page on the desk
Filling in the blanks as we go
As if the street lights pointed in an arrow head
Leading us home

And I hope I never lose you, hope it never ends
I'd never walk Cornelia Street again
That's the kinda heartbreak time could never mend
I'd never walk Cornelia Street again
And baby, I get mystified by how this city screams your name
And baby, I'm so terrified of if you ever walk away
I'd never walk Cornelia Street again
I'd never walk Cornelia Street again

Windows flung right open, autumn air
Jacket 'round my shoulders is yours
We bless the rains on Cornelia Street
Memorize the creaks in the floor
Back when we were card sharks, playing games
I thought you were leading me on
I packed my bags, left Cornelia Street
Before you even knew I was gone

But then you called, showed your hand
I turned around before I hit the tunnel
Sat on the roof, you and I

I hope I never lose you, hope it never ends
I'd never walk Cornelia Street again
That's the kinda heartbreak time could never mend
I'd never walk Cornelia Street again
And baby, I get mystified by how this city screams your name
And baby, I'm so terrified of if you ever walk away
I'd never walk Cornelia Street again
I'd never walk Cornelia Street again

You hold my hand on the street
Walk me back to that apartment
Years ago, we were just inside
Barefoot in the kitchen
Sacred new beginnings
That became my religion, listen

I hope I never lose you
I'd never walk Cornelia Street again
Oh, never again
And baby, I get mystified by how this city screams your name
And baby, I'm so terrified of if you ever walk away
I'd never walk Cornelia Street again
I'd never walk Cornelia Street again

I don't wanna lose you (Hope it never ends)
I'd never walk Cornelia Street again
I don't wanna lose you (Yeah)

"I rent a place on Cornelia Street"
I say casually in the car`;
};
album5song5.onclick = function(){
  document.getElementById('songtitle').innerHTML = "DAYLIGHT";
  audio.src = "/songs/Taylor Swift - Daylight.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Telling myself I won't go there
Oh, but I know that I won't care
Tryna wash away all the blood I've spilt
This lust is a burden that we both share
Two sinners can't atone from a lone prayer
Souls tied, intertwined by pride and guilt

(Ooh) There's darkness in the distance
From the way that I've been livin'
(Ooh) But I know I can't resist it

Oh, I love it and I hate it at the same time
You and I drink the poison from the same vine
Oh, I love it and I hate it at the same time
Hidin' all of our sins from the daylight
From the daylight, runnin' from the daylight
From the daylight, runnin' from the daylight
Oh, I love it and I hate it at the same time

Tellin' myself it's the last time
Can you spare any mercy that you might find
If I'm down on my knees again?
Deep down, way down, Lord, I try
Try to follow your light, but it's nighttime
Please don't leave me in the end

(Ooh) There's darkness in the distance
I'm beggin' for forgiveness
(Ooh) But I know I might resist it, oh

Oh, I love it and I hate it at the same time
You and I drink the poison from the same vine
Oh, I love it and I hate it at the same time
Hidin' all of our sins from the daylight
From the daylight, runnin' from the daylight
From the daylight, runnin' from the daylight
Oh, I love it and I hate it at the same time
Oh, I love it and I hate it at the same time
You and I drink the poison from the same vine
Oh, I love it and I hate it at the same time
Hidin' all of our sins from the daylight
From the daylight, runnin' from the daylight
From the daylight, runnin' from the daylight
Oh, I love it and I hate it at the same time
`;
};


album6song1.onclick = function(){
  document.getElementById('songtitle').innerHTML = "KILLIN ME GOOD";
  audio.src = "/songs/Killin Me Good.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Yeah
Yeah, ooh
L-Lindgren

Something that I can't deny
Cheoeum ibeul daen geu sungan
Onmomi neukkineun mwonga
Something that I can't explain
Hajiman neomu teukbyeolhae
Nuneul gamgoseo jipjunghae

Momi tteooreuneun sigan
Nae ane deullineun soriman
Deutgo geudaero ttaragallae (That's what you do)
I'm losin' all my senses
You're takin' me to places
And you know all that I can say is

You're killin' me, killin' me good, good, good (So good, so good)
Feelin' things I never knew that I could, ooh, ooh, ooh-ooh
Nega mandeureojuneun i gibun (So good, so good)
Sip chomada saenggagi na nae moseube naega nolla
You're killin' me, killin' me good

You're makin' me feel something new, hey
You're makin' me feel so brand new

Naboda nal deo jal aneun geoya
Oh, you keep on making me say
"Oh, my, oh, my"
Don't stop, du daneoman kkeuteopsi
Ne gwie soksagiji
Take me so high

Naege neol matgil sigan
Ije neol wihae junbihan
Nal boyeojulge neoegeman (That's what I'll do)
I'll let you lose your senses
And make you and go to places
Then I know all that you can say is

You're killin' me, killin' me good, good, good (So good, so good)
Feelin' things I never knew that I could, ooh, ooh, ooh-ooh
Nega mandeureojuneun i gibun (So good, so good)
Sip chomada saenggagi na nae moseube naega nolla
You're killin' me, killin' me good

You're makin' me feel something new, hey
You're makin' me feel so brand new

Oh-oh
Nal soljikage hae
Modu pyohyeonhage dwae
Geuraeseo tto nae ibeseo naoneun
Oh-oh
Neon wiheomhage dalkomhae
Geuraeseo nan gyesok wonhae
I just can't help but to say

You're killin' me, killin' me good, good, good (So good, so good; Yeah, yeah)
Feelin' things I never knew that I could, ooh, ooh, ooh-ooh (Ooh)
Nega mandeureojuneun i gibun (So good, so good; nega mandeureojuneun i gibun)
Sip chomada saenggagi na (saenggagi na), nae moseube naega nolla (naega nolla)
You're killin' me, killin' me good

You're makin' me feel something new, hey
You're makin' me feel so brand new
You're makin' me feel something new, hey
You're makin' me feel so brand new
You're killin' me, killin' me good`;
};
album6song2.onclick = function(){
  document.getElementById('songtitle').innerHTML = "CLOSER";
  audio.src = "/songs/Closer.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `I just can't leave you alone
Can we get even closer, babe?
Get closer

I know you only just met me
Uril seoro danggin gravity
Amu maljocha eopseodo imi, it's telepathy
Chakgakage mandeuneun geonji, mm-mm

Unmyeong anin georamyeon seolmyeonghae bwa naege
Tteollyeooneun sumgyeori malhae

I could be wrong
But naege bonaeon neoui sinho
Baby, me too
I could be wrong
But neodo junbiga doen geot gatgo
Baby, me too, me too

I just can't leave you alone
Can we get even closer, babe?
Get closer, babe
Oh, I just can't leave you alone
Can we get even closer, babe?
Get closer

I don't know what you mean to me
Nege nan eotteon uimiinji
Sanggwaneopseo, make it easy
Tell me where this is heading

Sokdoga buteun balgeoreumeul neoegero
Bulkkochi buteun now, lights on

I could be wrong
But naege bonaeon neoui sinho
Baby, me too
I could be wrong
But neodo junbiga doen geot gatgo
Baby, me too, me too

I just can't leave you alone
Can we get even closer, babe?
Get closer, babe
Oh, I just can't leave you alone
Can we get even closer, babe?
Get closer

La-la-la, la-la-la, la-la-la (Ooh, ooh)
La-la-la, la-la-la, la-la-la (Oh, woah, woah, woah)
(Oh, woah, woah, babe)

Get, get closer
`;
};
album6song3.onclick = function(){
  document.getElementById('songtitle').innerHTML = "WISHING ON YOU";
  audio.src = "/songs/Wishing On You.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Maeil achim nuneul tteumyeon
Neoro harul sijakago
Jiteun bam nuneul gamado
Yeojeonhi nega tto tteoolla
Kkeuchi eopsi uril
Sangsanghada boni imi
Eoneusae neoneun jiul su eopsi
Seumyeodeureo gipi

I want you to
To be my every distraction, baby
And if I get another wish from my genie
I might as well just tell the truth

I wanna be wishing on you-ooh, ooh-ooh, ooh-ooh, ooh-ooh
You-ooh, ooh-ooh, ooh-ooh, ooh-ooh
You-ooh, ooh-ooh, ooh-ooh, ooh-ooh
I wanna be, I wanna be wishing on you

Nege nan eotteon uimiilkka?
Gakkeum nal tteoolligin halkka?
Saenggakalsurok eojireowo
Neoreul alge doen sunganbuteo
Taeyange budichin deut
Tteugeowojin mam
Cheoeum boneun natseon na
Modeun ge jeonbu neoro boyeo

I want you to
To be my every distraction, baby
And if I get another wish from my genie
I might as well just tell the truth

I wanna be wishing on you-ooh, ooh-ooh, ooh-ooh, ooh-ooh (I wanna be wishing on you)
You-ooh, ooh-ooh, ooh-ooh, ooh-ooh (I wanna be wishing on you)
You-ooh, ooh-ooh, ooh-ooh, ooh-ooh
I wanna be (I wanna be)
I wanna be wishing on you-ooh, ooh-ooh, ooh-ooh, ooh-ooh (Wishing on you)
You-ooh, ooh-ooh, ooh-ooh, ooh-ooh
You-ooh, ooh-ooh, ooh-ooh, ooh-ooh
I wanna be, I wanna be wishing on you

Nuneul tteugo kkuneun kkumsok
Ipsul kkeute maechyeoinneun love me
And if this was an equation
You plus me means everything (Everything)

I want you to
To be my every distraction, baby (Distraction, baby)
And if I get another wish from my genie (I get another wish)
I might as well just tell the truth

I wanna be wishing on you-ooh, ooh-ooh, ooh-ooh, ooh-ooh (You)
You-ooh, ooh-ooh, ooh-ooh, ooh-ooh
You-ooh, ooh-ooh, ooh-ooh, ooh-ooh (I wanna be wishing on you)
I wanna be (I wanna be)
I wanna be wishing on you-ooh, ooh-ooh, ooh-ooh, ooh-ooh
You-ooh, ooh-ooh, ooh-ooh, ooh-ooh (I wanna be wishing on you)
You-ooh, ooh-ooh, ooh-ooh, ooh-ooh (I wanna be)
I wanna be, I wanna be wishing on you`;
};
album6song4.onclick = function(){
  document.getElementById('songtitle').innerHTML = "ROOM";
  audio.src = "/songs/Room.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Na yeohaengeul tteonal geoya
Meonameon sesang kkeutkkaji
Gutge jamgin bangeul deolkeong susipbeoneul hwaginhan hu meoreojyeo
Ibeonen jeongmal
Doraoji aneul georaneun dajim dasin yeolji ana gyeolsim
Deungeul jinchae bareul ttebojiman
Yeojeonhi nameun chueok janhaedeul
Oneureul kkeuteuro annyeonghi

Heulleogan nae siganui uimi
Geudaero areumdapgil
I'm not coming back to this room
To this room

Mugeoun hansumeul keuge naebaeteumyeo
Chaewojin geotdeureul biwonaeryeo
Mokjeokji eopsi geotda geotda
Meoritsok saenggageun jiwodo tteoolla
Nareul chaja tteona gopa
Apeun gieogeul ditgo dasi ollaga
I'm going my own way
I'm going my own way
Gutge jabeun maeumi mikkeureojil ppeonhae
I bangeul heomulgo manggatteurillae
I girui kkeuteun wae dasi i bangiya
Inneun himkkeot ttwieobwado gateun jariya
Nalgajin neowaui geu maneun heunjeokdeul
Ajigeun da chiuji mothaenna bwa
What can I do? Ooh, ooh
What can I do? Ooh, ooh

Heulleogan nae siganui uimi
Geudaero areumdapgil
I'm not coming back to this room
To this room (To this room)

Ttodasi nawa majuhan dillema
Geureomedo nan dasi igyeonael su itdan mariya
Huhoega millyeowa jibeosamkyeodo
I'm not coming back to this room
Coming back to this room

Heulleogan nae siganui uimi
Geudaero areumdapgil
I'm not coming back to this room
To this room (To this room)

Not coming back, coming back
Not coming back, coming back
Not coming back, coming back
To this room
Not coming back, coming back
Not coming back, coming back
Not coming back, coming back
To this room
`;
};
album6song5.onclick = function(){
  document.getElementById('songtitle').innerHTML = "NIGHTMARE";
  audio.src = "/songs/Nightmare.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Nightmare

Amudo mollae geobeopsi
Sijakdwae beorin neoui jilju
Aseulhi neon meomchul jureul moreugo
Saekkaman siya wi
Ppuyeoke garin eolgullo
Nal sumgin chae barabwa

Maeil beonjyeoganeun goeroum
Geodaehan angmongeuro na oneul
Neol jibeosamkyeo geotteunhage
I bam yeongwonhal nightmare soge
Modu jamdeun bam biroso dulppunin
Gimyohami deopchin gipeojil night
Ppareuge ttwieo eoseo hurry
Run away from me

Ni-nightmare, nightmare
I'm your nightmare, I'm your
Can't escape, can't escape, I'm your nightmare
I'm your nightmare (Ni-nightmare)
Geobe jillin neoui eolgul wiro
Hanassik goeropyeo ga curse on you
Can't escape, can't escape, I'm your nightmare
I'm your nightmare (Ni-nightmare)
Nightmare

Geu ibeseo saeeo naon sumaneun saeppalgan lies
Dachin mam, geudaero just for you
Midong eomneun balbeodunge
Heundeullineun du donggongi nal michyeo nalttwige hae
I don't want you to wake up, idaero
All night and day

Jeomjeom keojineun heartbeat
Deo deo joyeo kkomjjak mothage hae
Neol jibeosamkyeo geotteunhage
I bam yeongwonhal nightmare soge
Ttwieogabwatja han gilppunin road
Goyohami gyeotdeun jiteojin fog
Ppareuge ttwieo eoseo hurry
Run away from me

Ni-nightmare, nightmare
I'm your nightmare, I'm your
Can't escape, can't escape, I'm your nightmare
I'm your nightmare (Ni-nightmare)
Geobe jillin neoui eolgul wiro
Hanassik goeropyeo ga curse on you
Can't escape, can't escape, I'm your nightmare
I'm your nightmare (Ni-nightmare)

Night
Oh, what can I do?
I'm your nightmare
I'm your nightmare
Sullaeneun na ppunin
Hollanui midnight
Chulgu ttawineun eomneun gwanghwalhan bam sok (Woah-oh-oh, yeah)

Ni-nightmare, nightmare
I'm your nightmare, I'm your (Woah-oh-oh)
Can't escape can't escape, I'm your nightmare (Nightmare)
I'm your nightmare (Ni-nightmare)
Geobejillin neoui eolgurwiro
Hanassik goeropyeoga curse on you
Can't escape, can't escape, I'm your nightmare
I'm your nightmare (Ni-nightmare)

Nightmare`;
};


album7song1.onclick = function(){
  document.getElementById('songtitle').innerHTML = "RUN AWAY";
  audio.src = "/songs/Run Away.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Run, run away
Deo neutgi jeone gihoereul julge
Naege angimyeon
You will beg, beg to stay
Now, say okay
Junbidwaesseumyeon nulleobwa, play
Neol wihae junbihan
Nae love symphony
So are you ready tonight?


Igeon nae warning nal hyanghan ne yearning
Jeongmal hwaksilhan geonji
Neol naege turn in, han huen no turning back
Junbidoen geoji?
Majimak gyeolsimhagikkaji watching
Barabogo isseotji
Now I know it's you
Modeun geol da julge neoneun junbidwaenneunji?


Run, run away
Deo neutgi jeone gihoereul julge
Naege angimyeon
You will beg, beg to stay
Now, say okay
Junbidwaesseumyeon nulleobwa, play
Neol wihae junbihan
Nae love symphony
So are you ready tonight?


Are you ready to
Fall in love, so true?
This love I have for you
So are you ready tonight?


Maeumeul meokgikkajineun himdeulji
Meogeumyeon nan bakkwiji
No turning back nae modeun geol julge
Badeul junbidoen geoji?
Amudo mot bon nal ije neoneun bolgeoya
So hold on tight
Hajiman before I give you my all
Majimageuro mureulge


Run, run away
Deo neutgi jeone gihoereul julge
Naege angimyeon
You will beg, beg to stay
Now, say okay
Junbidwaesseumyeon nulleobwa, play
Neol wihae junbihan
Nae love symphony
So are you ready tonight?


Are you ready to
Fall in love, so true?
This love I have for you
So are you ready tonight?


So are you ready tonight?


`;
};
album7song2.onclick = function(){
  document.getElementById('songtitle').innerHTML = "LAZY BABY";
  audio.src = "/songs/Lazy Baby.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Keoteun wiro bichin haetsaldo
Yoranhage ullyeodaeneun allamdo
Jeoldaero nal kkaeul su eopseo
Turn off my phone, phone
Ilsange jichyeo bangjeondoen battery
Gojang nagi jeon chungjeonhae energy
Don't bother me no, no
Yeah, all day long, long


(What you gonna do?) Nothing
(When you gonna do it?) Not yet
(What you gonna do?) Nothing
(When you gonna do it?) Not yet (Hey)
Oneulmankeumeun I'm a lazy baby
Naegeman jipjung nuga mworadeun
Nothing
(When you gonna do it?) Not yet (Hey)


Amu gyehoek eopsi amu gomin eopsi (Okay)
Meokgo nolgo jollimyeon tto natjam jagi
Kkwaena simgakan workaholic (No way)
Nan wae swil ttaega deo buranhan ji (La-la-la-la-la)
Himeul ppaego I'll rest, deo gabyeopge refresh
Ttansaenggak an hallae I'm just watching TV
Right now, now
Need a comedy show, show


(What you gonna do?) Nothing
(When you gonna do it?) Not yet
(What you gonna do?) Nothing
(When you gonna do it?) Not yet (Hey)
Oneulmankeumeun I'm a lazy baby
Naegeman jipjung nuga mworadeun
Nothing
(When you gonna do it?) Not yet (Hey)


Geu nuga mworaedo taim killingeun dalkomhan hilling
Sumgyeowatdeon nae gaeingineun meong ttaerimyeo chilling
Tto seumateuponeun choseungdallo bonae on a rocket ship
Oneul naega bogo sipeun geon ttak urijip cheonjangiji
I'm tryna go swim good, chimdae wireul baeyeongeuro
Then I eat good, jantteuk sikyeo daehyeongeuro
Ttaeron guilty pleasures, feel so nice, yeah
Naeiri doemyeon huhoehalji mollado I'd do it twice


Wol hwa su mok geum to il (kkeuchi eomneun iljuil)
Oneulmaneun little bit (haru jongil little bit)
I am really lazy (You are really lazy)
I am really lazy (You are really lazy)
I am really lazy (You are really lazy)
I am really lazy (You are really lazy)
Wol hwa su mok geum to il (kkeuchi eomneun iljuil)
Swil goseun jipppun naege deo jipjung nuga mworadeun


Nothing
(When you gonna do it?) Not yet
(What you gonna do?) Nothing
(When you gonna do it?) Not yet (Okay; Hey)
Oneulmankeumeun I'm a lazy baby (Huh, woah)
Naegeman jipjung nuga mworadeun (I'm lazy)
Nothing
(When you gonna do it?) Not yet (Hey)
`;
};
album7song3.onclick = function(){
  document.getElementById('songtitle').innerHTML = "HEARTBREAK IN HEAVEN";
  audio.src = "/songs/Heartbreak In Heaven.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `[TZUYU:]
Baby, I'll be, be your heartbreak in heaven
Hurts like hell but it's worth every second
In your dreams, counting your blessings
I-I-I-I'll be your heartbreak in heaven


You say you like the bad ones
Until you go and get one, oh, oh, no
I say I just want fun
Don't you get emotional? No, no


If you feel like going places you ain't ever been tonight
I can show you love under the bright lights
Hope you're down, don't say goodbye
'Cause I-I


Baby, I'll be, be your heartbreak in heaven
Hurts like hell but it's worth every second
In your dreams, counting your blessings
I-I-I-I'll be your heartbreak in heaven
Fireworks in your heart running so deep
Serotonin overflowing when you're with me
Yeah, I'll be everything that you're missing
I-I-I-I'll be your heartbreak in heaven


Oh-oh, oh-oh
I-I-I-I'll be your heartbreak in heaven


I'ma make your head hurt
Have you coming back for more, oh, oh
Changing like a desert
I'ma love you hot then cold, so cold


If you feel like going places you ain't ever been tonight
I can show you love under the bright lights
Hope you're down, don't say goodbye
'Cause I-I


Baby, I'll be, be your heartbreak in heaven
Hurts like hell but it's worth every second
In your dreams, counting your blessings
I-I-I-I'll be your heartbreak in heaven
Fireworks in your heart running so deep
Serotonin overflowing when you're with me
Yeah, I'll be everything that you're missing
I-I-I-I'll be your heartbreak in heaven


Oh-oh, oh-oh
I-I-I-I'll be your heartbreak in heaven
Oh-oh, oh-oh
I-I-I-I'll be your heartbreak in heaven


[PENIEL:]
Your love's so deep then it's shallow (Shallow)
So confused, girl, where'd you go? (Where'd you go?)
You're hot, one second then you switch it up (Switch)
All of a sudden, you be so cold
I know it's not good for me
But I can't help it when I see
You I just keep coming back for more
Can't tell if I'm in heaven or hell anymore, no


[TZUYU:]
Baby, I'll be, be your heartbreak in heaven
Hurts like hell but it's worth every second
In your dreams, counting your blessings
I-I-I-I'll be your heartbreak in heaven
Fireworks in your heart running so deep
Serotonin overflowing when you're with me
Yeah I'll be everything that you're missing
I-I-I-I'll be your heartbreak in heaven


Oh-oh, oh-oh
I-I-I-I'll be your heartbreak in heaven
Oh-oh, oh-oh
I-I-I-I'll be your heartbreak in heaven
`;
};
album7song4.onclick = function(){
  document.getElementById('songtitle').innerHTML = "FLY";
  audio.src = "/songs/Fly.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `You give me wings to fly again, jeo meolli naraga
I hear you always by my side, duryeopji ana
Amudo mollae nareul tto sumgiryeo hal ttaejjeum
Dasi nuntteumyeon ara neon nae yeope itdan geol


You help me on my way
Jichigo himdeul ttae ttatteusi nae mam anatji
I feel it, na ije soneul ppeodeul teni
Kkwak japgo nochijineun ma


I'm a believer, a dreamer
I barameul ttara yaksokae uri hamkke georeoga
I sesangeul jeoksineun huimangbireul neukkyeo
I'm a believer, fly into the blue, blue sky


Fly, fly, little butterfly
Into the blue, blue sky
Fly, fly, little butterfly
Fly, fly, fly, fly


If you can dream it, then you can be it
You got to follow the beat of your heart
Hanbalssik georeo chageunhi with me
Ileun peojeureul chaja


Nal wihan haetsari igose naerimyeon
I'll spread my wings and fly again (I'll fly again)


I'm a believer, gureumdeureul heeomchyeo
Meolli adeuki jeo uju kkeutkkajido
Gieokae modu da urimanui sigan
I'm a believer, fly into the blue, blue sky


Gakkeumeun haneuren gyeopgyeobi ssayeojin
Meokgureumi gadeukaljido molla
Anyway, I'm gonna try
You are the reason why, 'cause I-I-I


I know I'm alive (Fly, fly, little butterfly)
I'll fly (Fly, fly little butterfly)
I'll fly like a butterfly (Fly, fly, fly, fly)
(Fly, fly, little butterfly, fly, fly, little butterfly)
I'll spread my wings and fly away


I'm a believer, gureumdeureul heeomchyeo
Meolli adeuki jeo uju kkeutkkajido
Gieokae modu da urimanui sigan
I'm a believer, fly into the blue, blue sky (I'm a believer)
I'm a believer, nae nalgaereul pyeolchigo
Haneul badaro ttwieo naraollaga (I'll fly)
Jeo nopi uri dulmanui sesangeuro
I'm a believer, fly into the blue, blue sky


Hey, yeah
`;
};
album7song5.onclick = function(){
  document.getElementById('songtitle').innerHTML = "LOSING SLEEP";
  audio.src = "/songs/Losing Sleep.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Staying in my room
Jam mot deuneun bam seonmyeonghan i gibun
Yeah, I know what I want
Mm
Yeminhaejin sense
Illeongin moonlight sai tteooreun face
Baby, oh, it's you
Then my heart is on fire, fire


Sí, I know you bad for me
Geunde wae ireoneunji
Jakku wonhago wonhaji
Neol hyanghan i craving


I've been losing sleep over you
I've been losing sleep over you
Neoman tto saenggangna
Jami ojil anchana
Losing sleep over you
I've been losing sleep over you
Hayake saen ginginbam
Yeah, I need you by my side


Deo gyeondil su eopge
Keojyeoganeun galjeunge beonjineun flame
Bulleo neoui name
Mm
Yeah, meomchul sudo eopdagu
All night, bamsae, yeah, I think of you
Jamsi nun gamado dreamed of you
I'ma dream of you, oh


Neoui modeun A to Z
Naegen dalkomhan toxic
Nugudo anin neomani
Jamjaeul i feeling


I've been losing sleep over you
I've been losing sleep over you
Neoman tto saenggangna
Jami ojil anchana
Losing sleep over you
I've been losing sleep over you
Hayake saen ginginbam
Yeah, I need you by my side


Sí, I know you bad for me
Geunde wae ireoneunji
Jakku wonhago wonhaji
Neol hyanghan i craving
Mm, now


I've been losing sleep over you (Over you)
I've been losing sleep over you
Neon nareul kkaewonwa
Jamdeulge mothajana (mothajana)
Losing sleep over you (Over you)
I've been losing sleep over you (Oh, yeah, yeah, yeah)
Hayake saen ginginbam (i bam)
Yeah, I need you by my side (Side, yeah)


Losing sleep
Losing sleep
Losing sleep
Losing sleep


`;
};

album8song1.onclick = function(){
  document.getElementById('songtitle').innerHTML = "SUPERNATURAL";
  albumimg.src = "/pictures/supernatural.jpeg";
  audio.src = "/songs/Supernatural.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Come on


Stormy night, cloudy sky
In the moment, you and I
One more chance
Neowa na dasi hanbeon mannage
Seoroege hyanghage


My feeling's getting deeper
Nae simbaksureul mideo
Uri inyeoneun gipeo
I gotta see the meaning of it


I don't know what we've done
Doedoragagin sileo
Mō shitte iru
Don't know what we've been sold
Mitsuke rareru yo
So it's sure


Golden moon, diamond stars
In a moment, you and I
Second chance, shōganai
Mōsukoshi matte
Neowa naege hyanghage


My feeling's getting deeper
Nae simbaksureul mideo
Uri inyeoneun gipeo
I gotta see the meaning of it


I don't know what we've done
Doedoragagin sileo
Mō shitte iru
Don't know what we've been sold
Mitsuke rareru yo
So it's sure


It's supernatural
It's supernatural


Geojinmal an hallae
Neodo malhae
Attention we should pay
To what is coming through
We had no idea, it's crystal clear
Love is here, sitting next to you


Watashi to anata
Golden moon, diamond stars
In a moment, we unite


`;
};

album8song2.onclick = function(){
  document.getElementById('songtitle').innerHTML = "HOW SWEET";
  albumimg.src = "/pictures/HowSweet.png";
  audio.src = "/songs/How Sweet.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `All I know is now
Alge dwaesseo na (I know)
Geudongan maennal
Always up and down (No more)
Saenggak tto saenggak
Spinnin' 'round and 'round
Changing my mind


Susanghaeseo geureochi
Ireon heotsori (No more)
How it's supposed to be
Geumanhae 'Cause it's clear (It's simple)
It's like biting an apple


Toxic lover
You're no better geogi sumji malgo eolleun nawa
You little demon in my storyline
Don't knock on my door, I'll see you out


And don't you know how sweet it tastes (How sweet it tastes)
Ya don't you know how sweet it tastes (How sweet it tastes)
Ya don't you know how sweet it tastes
Now that I'm without you


Na deoneun mutji aneullae (How sweet it tastes)
Allyeo juji anado dwae (How sweet it tastes)
Wow, don't you know how sweet it tastes
Now that I'm without you


Modeun ge Typical
So I've been praying so hard for a miracle
Bureugo isseo naui ireumeul
Deoneun an bwa Drama, it's good karma
Done scrolling thousand times
Da algo isseo ppeonhan sujagil ppuniya
Wanjeon swiun gongsigiya
It's like biting an apple


And don't you know how sweet it tastes (How sweet it tastes)
Ya don't you know how sweet it tastes (How sweet it tastes)
Ya don't you know how sweet it tastes
Now that I'm without you


Na deoneun mutji aneullae (How sweet it tastes)
Allyeo juji anado dwae (How sweet it tastes)
Wow don't you know how sweet it tastes
Now that I'm without you


I won't wait, I'm feeling
My own way, I'm in it
'Cause me and you are diﬀerent
So I won't stay, I'm leaving


I won't wait, I'm feeling
My own way, I'm in it
'Cause me and you are diﬀerent
So I won't stay, I'm leaving


And don't you know how sweet it tastes (How sweet it tastes)
Ya don't you know how sweet it tastes (How sweet it tastes)
Ya don't you know how sweet it tastes
Now that I'm without you


Na deoneun mutji aneullae (How sweet it tastes)
Allyeo juji anado dwae (How sweet it tastes)
Wow, don't you know how sweet it tastes
Now that I'm without you


Toxic lover
You're no better geogi sumji malgo ppalli nawa
You little demon in my storyline
Don't knock on my door neo eolleun naga beoryeo


Toxic lover
You're no better geogi sumji malgo eolleun nawa
You little demon in my storyline
Don't knock on my door, I'll see you out
`;
};

album8song3.onclick = function(){
  document.getElementById('songtitle').innerHTML = "SUPER SHY";
  albumimg.src = "/pictures/SuperShy.jpg";
  audio.src = "/songs/Super Shy.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `I'm super shy, super shy
But wait a minute while I make you mine, make you mine
Tteollineun jigeumdo, you're on my mind all the time
I wanna tell you but, I'm super shy, super shy
I'm super shy, super shy
But wait a minute while I make you mine, make you mine
Tteollineun jigeumdo, you're on my mind all the time
I wanna tell you but I'm super shy, super shy


And I wanna go out with you
Where you wanna go? (Huh?)
Find a lil spot, just sit and talk
Looking pretty, follow me
Uri duri naranhi
Boiji? (Bwa)
Nae nuni (Heh)
Gapjagi, binnaji
When you say I'm your dream


You don't even know my name
Do ya?
You don't even know my name
Do ya-a?
Nugubodado


I'm super shy, super shy
But wait a minute while I make you mine, make you mine
Tteollineun jigeumdo, you're on my mind all the time
I wanna tell you but, I'm super shy, super shy
I'm super shy, super shy
But wait a minute while I make you mine, make you mine
Tteollineun jigeumdo, you're on my mind all the time
I wanna tell you but I'm super shy, super shy


Na wollae maldo jalhago geureonde wae ireonji
I don't like that
Something odd about you
Yeah, you're special and you know it
You're the top, babe


I'm super shy, super shy
But wait a minute while I make you mine, make you mine
Tteollineun jigeumdo, you're on my mind all the time
I wanna tell you but, I'm super shy, super shy
I'm super shy, super shy
But wait a minute while I make you mine, make you mine
Tteollineun jigeumdo, you're on my mind all the time
I wanna tell you but I'm super shy, super shy


You don't even know my name
Do ya?
You don't even know my name
Do ya-a?
Nugubodado
You don't even know my name
Do ya?
You don't even know my name
Do ya-a?
`;
};

album8song4.onclick = function(){
  document.getElementById('songtitle').innerHTML = "DITTO";
  albumimg.src = "/pictures/ditto.jpg";
  audio.src = "/songs/Ditto.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Woo woo woo woo ooh
Woo woo woo woo
Stay in the middle
Like you a little
Don't want no riddle
Malhaejwo say it back
Oh say it ditto
Achimeun neomu meoreo
So say it ditto


Huljjeok keobeoryeosseo
Hamkkehan gieokcheoreom
Neol boneun nae maeumeun
Eoneusae yeoreum jina gaeul
Gidaryeotji all this time
Do you want somebody
Like I want somebody
Nal bogo useotjiman
Do you think about me now yeah
All the time yeah
All the time


I got no time to lose
Nae gireotdeon haru
Nan bogo sipeo
Ra-ta-ta-ta ullin simjang (Ra-ta-ta-ta)
I got nothing to lose
Neol joahandago wooah wooah wooah
Ra-ta-ta-ta ullin simjang (Ra-ta-ta-ta)
But I don't want to


Stay in the middle
Like you a little
Don't want no riddle
Malhaejwo say it back
Oh say it ditto
Achimeun neomu meoreo
So say it ditto
I don't want to
Walk in this miro
Da aneun geon anieodo
Baradeon daero
Malhaejwo Say it back
Oh say it ditto
I want you so, want you
So say it ditto


Not just anybody
Neoreul sangsanghaetji
Hangsang daaitdeon
Cheoeum neukkim geudaero nan
Gidaryeotji all this time


I got nothing to lose
Neol joahandago wooah wooah wooah
Ra-ta-ta-ta ullin simjang (Ra-ta-ta-ta)
But I don't want to


Stay in the middle
Like you a little
Don't want no riddle
Malhaejwo say it back
Oh say it ditto
Achimeun neomu meoreo
So say it ditto
I don't want to
Walk in this miro
Da aneun geon anieodo
Baradeon daero
Malhaejwo Say it back
Oh say it ditto
I want you so, want you
So say it ditto


Woo woo woo woo ooh
Woo woo woo woo
`;
};

album8song5.onclick = function(){
  document.getElementById('songtitle').innerHTML = "OMG";
  albumimg.src = "/pictures/omg.jpeg";
  audio.src = "/songs/OMG.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `I noraeneun it's about you baby
Only you
You you you
You you you you


Naega himdeul ttae
Ul geot gateul ttae
Giundo ijen
Naji aneul ttae
It's you nal geokjeonghane
It's you nal utgehane
Mal an haedo dwae
Boy what do you say


(They keep on asking me, "who is he?")
Meollideun eonjedeunji dallyeowa
(They keep on asking me, "who is he?")
Bappeun cheokdo eopshi neon natana
(They keep on asking me, "who is he?")
Ige mari dweni nan mureobwa
(They keep on asking me, "who is he?")
Neoneun marya
He's the one that's living in my system baby


Oh my oh my God
Yesanghaesseo na
I was really hoping
That he will come through
Oh my oh my God
Dan neoppuniya
Asking all the time about what I should do


No I can never let him go
Neoman saenggangna 24
Nan haengunaya jeongmallo I know, I know
Neol algi jeonkkajineun na
Uimi eopseosseo jeonbu da
Nae mami kkeuchi eomneun geol I know, I know
I'm going crazy right?


Eodiseodeun
Myeot beonideun
There ain't nothing else that
I would hold on to
I hear his voice
Through all the noise
Jamshirado nae son nochi ma no, no


Geokjeong eopjana
'Cause I got someone
Honjarado gwaenchana
'Cause I love someone


(They keep on asking me, "who is he?")
Meollideun eonjedeunji dallyeowa
(They keep on asking me, "who is he?")
Bappeun cheokdo eopshi neon natana
(They keep on asking me, "who is he?")
Ige mari dweni nan mureobwa
(They keep on asking me, "who is he?")
Neoneun marya
He's the one that's living in my system baby


Oh my oh my God
Yesanghaesseo na
I was really hoping
That he will come through
Oh my oh my God
Dan neoppuniya
Asking all the time about what I should do


No I can never let him go
Neoman saenggangna 24
Nan haengunaya jeongmallo I know, I know
Neol algi jeonkkajineun na
Uimi eopseosseo jeonbu da
Nae mami kkeuchi eomneun geol I know, I know


(He's the one that's living in my system baby)
(I'm going crazy right? baby)
(I'm going crazy right? baby)


Neowa na
My heart is glowing
It's glowing up
Neorangman isseumyeon museoul ge eopseo
Gadeuk meweojin, da meweojin (bulkeojin)
My heart is glowing, it'd be glowing
'Cause he


Oh my oh my God
Yesanghaesseo na
I was really hoping
That he will come through
Oh my oh my God
Dan neoppuniya
Asking all the time about what I should do
No I can never let him go
He's right there for me 24
Nan haengunaya jeongmallo I know, I know
Neol algi jeonkkajineun na
Uimi eopseosseo jeonbu da
Eotteokhae


My heart is glowing, it's glowing
My heart is glowing up
So I can't sleep at night
`;
};
  
album9song1.onclick = function(){
  document.getElementById('songtitle').innerHTML = "WANNABE";
  albumimg.src = "/pictures/wannabe.jpeg";
  audio.src = "/songs/ITZY - WANNABE.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Jansorineun Stop it araseo halge
Naega mwoga doedeun naega araseo hal tenikka jom
I do what I wanna
Pyeongbeomhage saldeun maldeun naebeoryeo dullae?
Eochapi naega sara nae insaeng naegeonikka
I'm so bad bad charari igijeogillae
Nunchi boneura chakan cheok sangcheobanneun geotboda baekbeon naa
I'm just on my way ganseobeun No No hae
Malhaebeoriljido molla neona jalharago


Nuga mwora haedo nan naya nan geunyang naega doego sipeo
I wanna be me, me, me
Guji mwonga doel pillyoneun eopseo nan geunyang nail ttae wanbyeokanikka
I wanna be me, me, me


I don't wanna be somebody
Just wanna be me, be me
I wanna be me, me, me
I don't wanna be somebody
Just wanna be me, be me
I wanna be me, me, me


Errbody errbody errbody teachin' me (All eyes on me)
Iraera jeoraera modu hanmadissik (Don't touch me)
Ah yeah yeah yeah yeah yeah nae apgarimeun naega hae
I'mma do my thang, Just do your thang
Cuz I'm the one & only
Saramdeureun nam mal hagireul joahae
Namui insaenge mwon gwansimi mana wae
Jeogi mianhajiman singyeong jom kkeojullaeyo


It's none of your business
I do my own business


Nuga mwora haedo nan naya nan geunyang naega doego sipeo
I wanna be me, me, me
Guji mwonga doel pillyoneun eopseo nan geunyang nail ttae wanbyeokanikka
I wanna be me, me, me


No matter if you love me or hate me
I wanna be me
One and only me
If you feel me, turn this beat up
I wanna be me, me, me


Nuga mwora haedo nan naya nan geunyang naega doego sipeo
I wanna be me, me, me
Guji mwonga doel pillyoneun eopseo nan geunyang nail ttae wanbyeokanikka
I wanna be me, me, me


I don't wanna be somebody
Just wanna be me, be me
I wanna be me, me, me
I don't wanna be somebody
Just wanna be me, be me
I wanna be me, me, me
`;
};

album9song2.onclick = function(){
  document.getElementById('songtitle').innerHTML = "LOCO";
  albumimg.src = "/pictures/loco.jpeg";
  audio.src = "/songs/ITZY - LOCO.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `LOCO


Michindaneun mari ihae gandalkka
I'm gettin' LOCO LOCO
Oh gosh igeon dalkomhan dok gata
I'm gettin' LOCO LOCO


Chulgu eomneun bang ane sabangi neoran geouriya
Guji shwipge malhajamyeon
I feel like I was born to love ya


Oashiseu channeun Kitty nan ne juwireul maemdolji
Kongkkakji kkyeo beorin nae du nuneun Yellow
Kyeojweo ne soneuro bul kkeojin nae shimjang


It's too late, want you so bad neoreul gatgo shipeojeosseo
Molla ijen imi nan Blind kkeutkkaji gabollae


Neon nal banjjeum michige mandeureo
You got me like CRAY-CRAY-CRAZY in love
Daeche nega mweonde
Micheo nalttwieo gibuni Up & down
You got me like CRAY-CRAY-CRAZY in love
Nado naega Outta control


I'm gettin' LOCO LOCO
I'm gettin' LOCO LOCO


Naege daeche neon mweol weonhae
Michin i maeumeun da gatta peo jweodo I'm ok
Haruneun cheongugeul gatta watta gado
Narak kkeutkkaji nal mireobeoryeo
So dangerous, so so so dangerous, uh-oh
Nal deo manggatteuryeodo
Neol mideul su bakke eopge haejweo


Oashiseu chajeun Kitty nan ne yeop jaril neomboji
Break ttawin ijeosseo kkeutkkaji ga bollae


Neon nal banjjeum michige mandeureo
You got me like CRAY-CRAY-CRAZY in love
Daeche nega mweonde
Micheo nalttwieo gibuni Up & down
You got me like CRAY-CRAY-CRAZY in love
Nado naega Outta control


LOCO


I'm gettin' LOCO-LOCO-CO
I'm gettin' LOCO-LOCO-CO-oh-oh-oh
I'm gettin' LOCO-LOCO-CO
I'm gettin' LOCO-LOCO-CO-oh-oh-oh


Neon nal wanjeon michige mandeureo
You got me like CRAY-CRAY-CRAZY in love
Daeche nega mweonde
Michyeo nalttwieo gibuni Up & down
You got me like CRAY-CRAY-CRAZY in love
Nado naega Outta control


I'm gettin' LOCO LOCO
I'm gettin' LOCO LOCO
`;
};

album9song3.onclick = function(){
  document.getElementById('songtitle').innerHTML = "UNTOUCHABLE";
  albumimg.src = "/pictures/untouchable.jpg";
  audio.src = "/songs/ITZY - UNTOUCHABLE.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Uh-huh
One, two, three, let's go


Nal tto geondeuryeo
Nun apeul garyeo bojiman
Nae balgeoreum ape
You're gonna know
You're all gonna know
Naega mueol hadeunji
Now, you just keep your eyes on me
Nan mot geondeuryeo jeoldae mot geondeuryeo
Eodi nal han beon jikyeobwa


Blow, imi nan morachyeo I'm on fire
Nareul mangneun geon nugudeun
Naegen amureon uimi eopseul ppunya
Why not? nan jasin isseo mwodeun
Show what I have, nal alsurok nollawo
Meomchul saenggak ttawin eopgeodeun
Here we go now


I'm untouchable, magaseoji mothae sijakdwaesseo
Jigeum flowdaero just going on and on
Deo mess it up now neon swipge knockout
Eotteon geotdo I don't care about
I'm untouchable, kkaejiji anneun form


Bam-bam-bam-ba-li
Mageul su eopseo nobody
Bam-bam-bam-ba-li
Nothing gon' stop me nobody, yeah


Namani nae vision (Yeah)
Geomnaji aneul mission (Oh)
Duryeoul ge eopdago
Yeah, I gotta go
Baby, keep your eyes on me
Jido ttawin an bwa nan
Kkeullin daero ga manjokal ttaekkaji
Hangsang naega wonhan gillo
You know I'm not scared


Blow, imi nan morachyeo I'm on fire
Nareul mangneun geon nugudeun
Naegen amureon uimi eopseul ppunya
Why not? nan jasin isseo mwodeun
Show what I have nal alsurok nollawo
Meomchul saenggak ttawin eopgeodeun, hey


I'm untouchable, magaseoji mothae sijakdwaesseo
Jigeum flowdaero just going on and on
Deo mess it up now neon swipge knockout
Eotteon geotdo I don't care about
I'm untouchable, kkaejiji anneun form


Bam-bam-bam-ba-li
Mageul su eopseo nobody
Bam-bam-bam-ba-li
Nothing gon' stop me nobody, yeah
Deo keuge shout it out, geomnal ge eopjana
Wonhaeon geudaero take it
Bam-bam-bam-ba-li
Nothing gon' stop me nobody, yah


Hey, yeah, nobody
No one can stop me, hangye eopsi run
Here we go now


I'm untouchable, magaseoji mothae sijakdwaesseo
Naui flowdaero just going on and on
Deo mess it up now neon swipge knockout
Soyongeopseo I don't care about
I'm untouchable, kkeokkiji anneun form


Bam-bam-bam-ba-li
Mageul su eopseo nobody
Bam-bam-bam-ba-li
Nothing gon' stop me nobody, yeah
Bam-bam-bam-ba-li
Mageul su eopseo nobody
Bam-bam-bam-ba-li
Nothing gon' stop me nobody, yeah
`;
};

album9song4.onclick = function(){
  document.getElementById('songtitle').innerHTML = "NOT SHY";
  albumimg.src = "/pictures/notshy.jpeg";
  audio.src = "/songs/ITZY - Not Shy.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Not shy, not me (ITZY)
Nan da weonhae dada (Yeah)
Not shy, not me


Nan ppallippalli weonhaneun geol malhae
Mot gajimyeon eottae gwaenhi
Mangseorida shiganman gani
Yeah da malhallae Cuz I like it
Cuz I like it, like it


Gidaryeo wae gidaryeoseo mweohae
Naega nae mameul wae wae malhamyeon an dwae Yeah
Geunyang tak geunyang taktaktaktaktak
Not shy to say I want you


Hey there hey there urineun
Great pair great pair ni mami
Mweonji moreujiman nae saenggagi
Maja geureonikka Yeah yeah
Nae mameun nae geo geureonikka
Joahandago jayunikka
Ni mameun ni geo majeunikka
Malhae bwa da eoseo da Cuz I'm not shy


Not shy, not me (ITZY)
Nan da weonhae dada (Not shy)
Not shy, not me
Give me da dada dadadadada
Not shy, not me (ITZY)
Nan da weonhae dada (Not shy)
Not shy, not me
Neoreul weonhae mweo eottae Cuz I'm not shy


Neon ppallippalli daedapal piryon eopseo
Eochapi nae geonikka Woo
Nal bogo itgiman hamyeon dwae
Yeah you will like it, cuz you like it
Cuz you like it like it


Naega miweo aniramyeon biweo
Dareun geon da jiweo naega ni Only one yeah
Geunyang ssak jiweo ssakssakssakssakssak
Not shy to say I want you


Hey there hey there urineun
Great pair great pair ni mami
Mweonji moreujiman nae saenggagi
Maja geureonikka Yeah yeah
Nae mameun nae geo geureonikka
Joahandago jayunikka
Ni mameun ni geo majeunikka
Malhaebwa da eoseo da Cuz I'm not shy


Not shy, not me (ITZY)
Nan da weonhae dada (Not shy)
Not shy, not me
Give me da dada dadadadada
Not shy, not me (ITZY)
Nan da weonhae dada (Not shy)
Not shy, not me
Neoreul weonhae mweo eottae Cuz I'm not shy


Huhwehagin shireunikka
Ending sanggwaneopseunikka
Go go go modu ssodanae
No yes no mweodeunji eottae
Ireomyeon jeoreomyeon eottae
Eochapi an dwel geo ppaego da dwae
Let's just be who we are
Do what we do ni mamdaero hae
Let the beat drop


Not shy, not me (ITZY)
Nan da weonhae dada (Not shy)
Not shy, not me
Malhaebwa da eoseo da Cuz I'm not shy


Not shy, not me (ITZY)
Nan da weonhae dada (Not shy)
Not shy, not me
Give me da dada dadadadada
Not shy, not me (ITZY)
Nan da weonhae dada (Not shy)
Not shy, not me
Neoreul weonhae mweo eottae Cuz I'm not shy


Not shy, not me
`;
};

album9song5.onclick = function(){
  document.getElementById('songtitle').innerHTML = "CAKE";
  albumimg.src = "/pictures/cake.webp";
  audio.src = "/songs/ITZY - CAKE.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `ITZY ITZY like that!


Cake cake cake cake cake
It's a piece of cake cake cake cake cake
Cake cake cake cake cake
Yeah piece of cake cake cake cake cake
(Ooh wee) Lalala lalala la la
(Ooh wee) Lalala lalala la
Wang hago meogeobeoryeo da Yeah like
Cake cake cake cake cake


Haneureun cham parae tto nae shiganeun Never waits
Ttokkateun geon ppeonhae
Tto dareun geol nan weonhae Chase
Eotteoke modureul da matchweojweo
Jonjunghae jweo I do me, you do you (You & I)
Neoneun neo naneun na jochana


Cake cake can't wait till I bite them
Eochapi insaengeun naekkeo
Baam baam can't wait till I shoot them
Mweol geuri bokjapae maebeon
Shake it shake shake it shake shake it shake
Bust it up bust it up bust it up
Urin neomuna bappa Yeah like my birthday


Maybe
Shwipji ana Anyway
Saenggakdaero Everyday
Gomin gomin daeshine
Naman saenggakae ije
Da gwaenchana eottae kkeomirago nan saenggakae
Alright alright
Wang hago meogeobeoryeo da Yeah like


Cake cake cake cake cake
It's a piece of cake cake cake cake cake
Cake cake cake cake cake
Yeah piece of cake cake cake cake cake
(Ooh wee) Lalala lalala la la
(Ooh wee) Lalala lalala la
Wang hago meogeobeoryeo da Yeah like
Cake cake cake cake cake


Jangdam mot hae nalsshicheoreom
It's up in the air
Naeildo neo haengbokalji
Who can guarantee it so
A T M jigeumi hweolsshin jungyohae
Yeah, your way, just live it up cause


Maybe
Shwipji ana Anyway
Saenggakdaero Everyday
Gomin gomin daeshine
Naman saenggak hae ije
Da gwaenchana eottae kkeomirago nan saenggakhae
Alright alright
Wang hago meogeobeoryeo da Yeah like


Cake cake cake cake cake
It's a piece of cake cake cake cake cake
Cake cake cake cake cake
Yeah piece of cake cake cake cake cake
(Ooh wee) Lalala lalala la la
(Ooh wee) Lalala lalala la
Wang hago meogeobeoryeo da Yeah like
Cake cake cake cake cake


Sometimes sometimes
Shiweonhan barameul weonhae
Himi deo nalji molla Ooh
Sometimes sometimes
Gakkeum mugwanshimi pyeonhae
Ay nugudeun deullige malhae
Ay shwipge jom saenggakae Like that


Shwipji ana Anyway
Saenggakdaero Everyday
Gomin gomin daeshine
Naman saenggak hae ije
Da gwaenchana eottae kkeomirago nan saenggakae
Alright alright
Wang hago meogeobeoryeo da Yeah like


`;
};

album10song1.onclick = function(){
  document.getElementById('songtitle').innerHTML = "SUPERNOVA";
  albumimg.src = "/pictures/supernova.jpeg";
  audio.src = "/songs/Supernova.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `I'm like some kind of supernova
Watch out


Look at me go
Jaemi jom bol
Bichui core
So hot, hot
Muni yeollyeo
Seoroui jonjaereul neukkyeo
Machi Discord
Nal daleun neo neo nuguya (Incoming; Drop)


Sageoneun dagawa ah, oh, ayy
Geosege keojyeoga ah, oh, ayy
That tick, that tick, tick bomb
That tick, that tick, tick bomb
Gamhi geondeuriji mothal geol
Nugudo mariya
Jigeum nae aneseon
Su-su-su-supernova


Nova
Can't stop hyperstellar
Woncho geugeol chaja
Bring the light of a dying star
Bulleonaen nae ujureul bwa bwa
Supernova


Ah, body bang (Bang, bang, bang, bang, bang, bang)
Make it feel too right


Hwipsseullin eneoji it's so special
Janinhan queen imyeo scene ija jonggyeol
Itorok geodaehan nae anui explosion
Nae modeun sepo byeollobuteo mandeureojyeo (Under my control, ah)


Jilmuneun gyesokdwae ah, oh, ayy
Urin eodiseo wanna oh, ayy
Neukkyeo nae aneseon (Huh)
Su-su-su-supernova


Nova
Can't stop hyperstellar
Woncho geugeol chaja
Bring the light of a dying star
Bulleonaen nae ujureul bwa bwa
Supernova


Boiji anneun himeuro
Nege son naemireo bolkka
Ganeunghan modeun ganeungseong
Muhan sogui neoreul manna
It's about to bang-bang
Don't forget my name


Su-su-su-supernova


Sageoneun dagawa ah, oh, ayy
Geosege keojyeoga ah, oh, ayy
Jilmuneun gyesokdwae ah, oh, ayy
Urin eodiseo wanna oh, ayy
Sageoneun dagawa ah, oh, ayy
Geosege keojyeoga ah, oh, ayy
Tell me, tell me, tell me, oh, ayy
Urin eodiseo wanna oh, ayy
Urin eodiseo wanna oh, ayy


Nova (Nova)
Can't stop hyperstellar (Hyperstellar)
Woncho geugeol chaja
Bring the light of a dying star (Light of a dying star)
Bulleonaen nae ujureul bwa bwa (All the way)
Supernova (Hey-huh)


Sageoneun dagawa ah, oh, ayy (New star)
Geosege keojyeoga ah, oh, ayy
Jilmuneun gyesokdwae ah, oh, ayy (Nova)
Urin eodiseo wanna oh, ayy
Sageoneun dagawa ah, oh, ayy (Yeah-yeah-yeah-yeah)
Geosege keojyeoga ah, oh, ayy (Nova)
Jilmuneun gyesokdwae ah, oh, ayy (Bring the light of a dying star)


Supernova


`;
};

album10song2.onclick = function(){
  document.getElementById('songtitle').innerHTML = "ARMAGEDDON";
  albumimg.src = "/pictures/supernova.jpeg";
  audio.src = "/songs/Armageddon.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Armageddon
Shoot
I'ma get 'em
Shoot


Watch, uh
I'ma bite back, uh
Jiteun eodumi magaseol ttaen, uh
Han georeum apeuro naradeun it's bad
Sarajin feedback
Sijakdoen code black, huh
Gipeoga
Hollanseureoun bam
Angmongeun tto jitge beonjyeoga
Mwongal sumgiryeogo hae
I got it, I got it
Hondoneul tago deopchyeo killing like


Bang, chitty, bang, bang, chitty, bang, bang
'Cause I wanna see, I wanna see truly
Bang, chitty, bang, bang, chitty, bang, bang
Naege dagawa dagawa


I'ma get it done (Aw, wayo, wayo)
Neol hyanghae gyeonwo get it, gone (Aw, wayo, wayo)
Ijen neol kkeunnae better run
Kkeuteul moreuneun neowa na you gonna, gonna
Kkaeteuryeo geochimeopsi done (Go way up, way up)
Full shot, pull it up, Armageddon


I'ma get 'em
Shoot
I'ma get 'em


Hey, ya (Yeah)
Tto dareun na (Ah-ah, ah-ah)
Uril makji ma (Oh)
We never play nice
Shoot
Wanbyeokan pair
Neon ttokgateun soul
Three to get ready
Urin shoot and go
Geop eopsi nubyeo
Nal ikkeuneun way


Bang, chitty, bang, bang, chitty, bang, bang
Yes, I'm gonna see
I'm gonna see, want it
Bang, chitty, bang, bang, chitty, bang, bang
Dabi deullyeowa deullyeowa


I'ma get it done (Aw, wayo, wayo)
Neol hyanghae gyeonwo get it, gone (Aw, wayo, wayo)
Ijen neol kkeunnae better run
Kkeuteul moreuneun neowa na you gonna, gonna
Kkaeteuryeo geochimeopsi done (Go way up, way up)
Full shot, pull it up, Armageddon
(I'ma get 'em)


Tto eodumeul moranaego
Sijageul kkotpiun neowa naui story
Deo wanbyeokaejin uri (Armageddon)
Jeonguihae ijen
Namanui complete
Nae modeun geol ikkeureo
Do it all myself
Wanjeonhan nareul irwonae


Drop
Throw it back, throw it back, throw it back
Born like a queen
Born like a king, ya
Throw it back, throw it back, throw it back


Bulleo
I'ma get 'em done (Aw, wayo, wayo)
Neol hyanghae gyeonwo get it, gone (Aw, wayo, wayo)
Ijen neol kkeunnae better run
Kkeuteul moreuneun neowa na you gonna, gonna
Kkaeteuryeo geochimeopsi done (Go way up, way up)
Full shot, pull it up, Armageddon


Armageddon
(Aw, wayo, wayo, wayo, warning all night long)
Armageddon
(Aw, wayo, wayo)
Kkeutgwa sijagui Armageddon
`;
};

album10song3.onclick = function(){
  document.getElementById('songtitle').innerHTML = "DRAMA";
  albumimg.src = "/pictures/drama.png";
  audio.src = "/songs/Drama.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Yeah, yeah
I'm the drama


Ziggy, ziggy, zag, I'm new
'Cause I go biggie, biggie, bad, it's true
Nalkaroun nun ane bichin toxic
Nae bonneungeul danggyeo zoom
Hold up, what? (Oh, my God)
You say, what? (dachyeo neon)
You better watch out
Urin imi geosen boom
Dallyeogago isseo vroom
I li-li like me when I roll
Li-li-like me when I'm savage
Li-li-like me when I go
Li-li-like it when I baddest
Hold up, bicheul ttaraseo
Dara da da dallyeonaga run
Go finally, ra-ta-ta-ta
Daeum segyereul yeoreo nan


One, two, it's time to go
Huhoe eopseo nan
Matseo nan kkaebeoryeotji
Nal ttaraseo umjigil rules
Sonkkeuteuro sesangeul dudeuryeo umjingnyeo
Yeah, I'm coming


I bring, I bring all the
Drama-ma-ma-ma
I bring drama-ma-ma-ma
With my girls in the back
Girls in the back
Drama
Trauma-ma-ma-ma
I break trauma-ma-ma-ma
With MY WORLD in the back
Naro sijakdoeneun drama (All that)


Drama-ma-ma-ma (Bring it that)
Drama-ma-ma-ma
With my girls in the back
Girls in the back, yeah (I break)
Trauma-ma-ma-ma (We them)
Trauma-ma-ma-ma
With MY WORLD in the back
Naro sijakdoeneun
Drama


Drama-ma-ma-ma
Drama-ma-ma-ma (Three, two, one)
Drama-ma-ma
You know I've been kind of like


One, two, three (Yeah, yeah)
Kkamjjak nollal daeum scene (What? What?)
Kireul geomeojwin (Uh)
Juingongeun na, uh-uh-uh (Yeah)
Four, three, two, going down, swipge through (Yeah)
Deja Vu gachi
Geuryeojineun imiji
Nal guji makji mara
Igeon nae drama
Dobareun guji an maga
Uh, I'm a stunner (Hahaha)


One, two, it's time to go
Taoreuneun nal (taneun nal)
Neukkyeo nan and I love it
Saerowojineun rules
Nan nuneul tteo (du nuneul tteo)
Sijakdoen geol (neon)
Ara (Now)
It's coming


I bring, I bring all the
Drama-ma-ma-ma
I bring drama-ma-ma-ma
With my girls in the back
Girls in the back
Drama
Trauma-ma-ma-ma
I break trauma-ma-ma-ma
With MY WORLD in the back
Naro sijakdoeneun drama


Into the REAL WORLD
Dagaon climax (Woah)
Duryeowohaji ma
You and I (Oh, yeah)
Hamkke sseo naeryeoganeun story (Oh, yeah)
Nal garomagatdeon, no (Oh)
Hangyereul ttwieo neomeo every day
Oh, I'ma make it my way
Out of the way, yeah (Oh, yeah)


I bring, I bring all the
Drama-ma-ma-ma
I bring drama-ma-ma-ma (Oh, oh-oh-oh)
With my girls in the back
Girls in the back
Drama
Trauma-ma-ma-ma (Trauma-ma-ma-ma)
I break Trauma-ma-ma-ma (Trauma-ma-ma-ma)
With MY WORLD in the back (With MY WORLD in the back, yeah)
Nawa hamkkehaneun drama (All that)


(Hey) You know, I'm savage
(Hey) geochimeomneun baddest
(Hey) nareul dulleossan thrill
(Hey) geochin yeojeong sogui drama (Drama-ma-ma)
Naega kkaeteuril modeun trauma (Drama-ma-ma)
Jigeum sijakdoeneun drama


Yeah, yeah
Neoro sijakdoel MY drama
`;
};

album10song4.onclick = function(){
  document.getElementById('songtitle').innerHTML = "SPICY";
  albumimg.src = "/pictures/spicy.jpg";
  audio.src = "/songs/Spicy.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Uh Uh Too Spicy


You want my A to the Z
But you won't eorimeopji
Majhyeobwa Sweet ttoneun Freak
What's hiding underneath
(I see)
Mangseolideut gan boneun neo
Gihweneun eopseo Oh
Nah You won't get it
No No, You won't get it


I say
Kkamppak hansungan
Kkeureodanggyeo
You'll be mine (Mine)
Saljjak dagawa
Can cross my borderline
(Line Line Line)
Neol ttabunhage haetteon Every day
Heungmiroun deoteul deonjyeojulge
Ttwieodeureo bwa
Just right now


'Cause I'm too Spicy
For your heart
Ring the fire ararm
Shimjangeul pagodeureo neon
I'm too Spicy
Beonjineun jageuk soge neon
Baro geu sungan
Tto dareun nareul balgyeonhae
I'm too Spicy too too
I'm too Spicy


Don't Stop geomnaeji ma
Bang Bang wechyeobwa
I'm too Spicy
Yeah I'm too Spicy
You know that I
Don't Stop yonggi nae bwa
Next step, Myself


I'm too Spicy
Too Spicy too too
I'm too Spicy


Tell me what you see
When you look at me
'Cause I am a 10
Out of 10 honestly
Gisega dareun Move
Neol apdohaneun Groove
But you keep wasting
Your time Dude
Don't chase me
Gyeonggohae nan
Erase me
Meolli darana
Hey ijen algenni
Weollaebuteo Bad I'm so bad honestly


So bad
Jeonbu gajillae
Jigeumbuteon
Call you mine (Mine)
Domangchil geomyeon
Don't cross my borderline
(Line Line Line)
Neul ppeonhagiman haetteon Every day
Ije geuman Ruleeul beoseonal ttae
Eoryeopji ana
Just right now


'Cause I'm too Spicy
For your heart
Ring the fire ararm
Shimjangeul pagodeureo neon
I'm too Spicy
Beonjineun jageuk soge neon
Baro geu sungan
Tto dareun nareul balgyeonhae
I'm too Spicy too too
I'm too Spicy


Ready? Uh
Jom deo gangdoreul nopyeo
Daeumdaeumdaeum
One of a kind
Urin hangyereul apseo
Wow Wow Wow
That's Right


'Cause I'm too Spicy
For your heart
Ring the fire ararm
Saeroun dojeon kkeute neon
I'm too Spicy
Byeonhwahal shiganiya neon
Jigeum i sungan
Tto dareun nareul chajanae
I'm too Spicy too too
I'm too Spicy


Don't Stop geomnaeji ma
Bang Bang wechyeobwa
I'm too Spicy
Yeah I'm too Spicy
You know that I
Don't Stop yonggi nae bwa
Next step, Myself


I'm too Spicy
I'm too Spicy
I'm too Spicy too too
I'm too Spicy


'Cause I
Oh Yeah
Yeah I'm too Spicy
For your heart
(Yeah I'm too Spicy
For your heart)
Machimnae beonjyeooneun Joy
(Enjoy joy joy joy)
Yeah I'm too Spicy
For your heart
I'm too Spicy too too
I'm too Spicy
For you
`;
};

album10song5.onclick = function(){
  document.getElementById('songtitle').innerHTML = "SAVAGE";
  albumimg.src = "/pictures/savage.jpeg";
  audio.src = "/songs/Savage.mp3";
  audio.play();
  isPlaying = true;
  updateSlider();
  songlyrics.innerHTML = `Oh my gosh!
Don't you know I'm a Savage?


I'm a Killa neoreul kkael ae
Ajikdo garigo hwangageul pyeolchin neo
Paella We Holler
Duryeopji ana neo neo Hit you harder


Nal mireo neoheo Deep fake on me
Junbiga andwen mudaero
Moraneoheo Fake on me
Got everybody mock up to me
Suchireul neukkige mentaleul heundeureonwa
Ssaneulhan gwanjung muneojyeo ae
Deoneun neol mot chama Say No! Yeah yeah


Dugo bwa nan jom Savage
Neoye Dirty han Play
Deoneun dugo bol su eopseo
Nareul muneotteurigo shibeun
Ne hwangakdeuri jeomjeom
Neoreul guchukhal iyuga dwae
I'm a Savage
Neol bushyeo kkae julge Oh
I'm a Savage
Neol jitbalba julge Oh


Get me get me now
Get me get me now
(Zu Zu Zu Zu)
Jigeum nareul japa
Anim nan deo Savage
(Zu Zu Zu Zu)
Get me get me now
Get me get me now
(Zu Zu Zu Zu)
Ijen naega neoreul japa
Now I'm a Savage


Gimme gimme now
Gimme gimme now
(Zu Zu Zu Zu)
Neoye mari boyeo
Ne yakjeom Algorithm
(Zu Zu Zu Zu)
Gimi gimi na
Gimi gimi na
(Zu Zu Zu Zu)
MA ae SYNK banghae malgo
Kkeojyeo Savage
(Zu Zu Zu Zu)


Mmmh Everybody looks at me
Iksukhajanhni
Yangbohae chamayaman dwae
Eoreunseureopge
I'm locked up in the glass
Nan nolgo shibeunde
Neomu kkeumjjikhan gidae
Geureon hwangak teure nareul gadweo nwa


I'm going kwangyaro Game in
Mullichyeo gyomyohan iganjil
And my aerobuteo
Meoreojige mandeul
Hweshimchan ne Trick
We gone kwangyaro Game in
Beeobeoryeo nae biche geom
Demijireul ibeun nege
Injeongsajeong bol geot eomneun punch


Geugeot bwa nan jom Savage
Neoye jaesaengnyeokeul maga
Heuteureonwa ppaenwa
Ijji mara yeogin baro kwangya
Neoye shigongganeun nae tteuttaero
Make It break it
I'm a Savage
Neol bushyeo kkae julge Oh
I'm a Savage
Neol jitbalba julge Oh


Get me get me now
Get me get me now
(Zu Zu Zu Zu)
Jigeum nareul japa
Anim nan deo Savage
(Zu Zu Zu Zu)
Get me get me now
Get me get me now
(Zu Zu Zu Zu)
Ijen naega neoreul japa
Now I'm a Savage


Gimme gimme now
Gimme gimme now
(Zu Zu Zu Zu)
Neoye mari boyeo
Ne yakjeom Algorithm
(Zu Zu Zu Zu)
Gimi gimi na
Gimi gimi na
(Zu Zu Zu Zu)
MA ae SYNK banghae malgo
Kkeojyeo Savage
(Zu Zu Zu Zu)


Wigie ppajin nal jigyeojun geon neoyeosseo
My naevis we love U
My victory hanaye SYNK DIVE
Modu nega mandeureojun gihweran geo
I know your sacrifices Oh
My naevis we love U
Ara urin bandeushi
Ne gieokdeuleul chajajulge
Urin manna kkok buhwal geudaeum


Savage
Savage
Yeah


Get me get me now
Get me get me now
(Zu Zu Zu Zu)
Jigeum nareul japa
Anim nan deo Savage
(Zu Zu Zu Zu)
Get me get me now
Get me get me now
(Zu Zu Zu Zu)
Ijen naega neoreul japa
Now I'm a Savage


Gimme gimme now
Gimme gimme now
(Zu Zu Zu Zu)
Neoye mari boyeo
Ne yakjeom Algorithm
(Zu Zu Zu Zu)
Gimi gimi na
Gimi gimi na
(Zu Zu Zu Zu)
MA ae SYNK banghae malgo
Kkeojyeo Savage
(Zu Zu Zu Zu)


Ha ha, What?
`;
};


document.querySelectorAll('.songalbum').forEach(songalbum => {
  songalbum.addEventListener('click', function() {
    const selectedAlbum = this.getAttribute('data-album');

    document.querySelectorAll('.album-content').forEach(content => {
      content.classList.remove('active');
    });

    switch(selectedAlbum){

      case 'album1': 
      picture.src = "../pictures/nayeon.jpeg";
      document.getElementById('albumtitle').innerHTML = "NAYEON";
      document.getElementById('listeners').innerHTML = "5,015,634 monthly listeners";
      document.getElementById('albumtext').innerHTML = "NAYEON";
      albumimg.src = "../pictures/nayeon.jpeg";
      break;

      case 'album2': 
      picture.src = "../pictures/twice.png";
      document.getElementById('albumtitle').innerHTML = "TWICE";
      document.getElementById('listeners').innerHTML = "8,289,213 monthly listeners";
      albumimg.src = "../pictures/twice.png";
      document.getElementById('albumtext').innerHTML = "TWICE";
      break;

      case 'album3': 
      picture.src = "../pictures/misamo.jpeg";
      document.getElementById('albumtitle').innerHTML = "MISAMO";
      document.getElementById('listeners').innerHTML = "950,801 monthly listeners";
      albumimg.src = "../pictures/misamo.jpeg";
      document.getElementById('albumtext').innerHTML = "MISAMO";
      break;

      case 'album4': 
      picture.src = "../pictures/le sserafim.webp";
      document.getElementById('albumtitle').innerHTML = "LE SSERAFIM";
      document.getElementById('listeners').innerHTML = "15,260,764 monthly listeners";
      albumimg.src = "../pictures/le sserafim.webp";
      document.getElementById('albumtext').innerHTML = "LE SSERAFIM";
      break;

      case 'album5': 
      picture.src = "../pictures/lover.jpeg";
      document.getElementById('albumtitle').innerHTML = "LOVER";
      document.getElementById('listeners').innerHTML = "91,959,582 monthly listeners";
      albumimg.src = "../pictures/lover.jpeg";
      document.getElementById('albumtext').innerHTML = "LOVER";
      break;

      case 'album6': 
      picture.src = "../pictures/zone.jpeg";
      document.getElementById('albumtitle').innerHTML = "ZONE";
      document.getElementById('listeners').innerHTML = "1,180,547 monthly listeners";
      albumimg.src = "../pictures/zone.jpeg";
      document.getElementById('albumtext').innerHTML = "ZONE";
      break;

      case 'album7': 
      picture.src = "../pictures/run away.jpg";
      document.getElementById('albumtitle').innerHTML = "RUN AWAY";
      document.getElementById('listeners').innerHTML = "1,402,453 monthly listeners";
      albumimg.src = "../pictures/run away.jpg";
      document.getElementById('albumtext').innerHTML = "RUN AWAY";
      break;

      case 'album8': 
      picture.src = "../pictures/new jeans.jpg";
      document.getElementById('albumtitle').innerHTML = "NEW JEANS";
      document.getElementById('listeners').innerHTML = "15,589,665 monthly listeners";
      albumimg.src = "../pictures/new jeans.jpg";
      document.getElementById('albumtext').innerHTML = "NEW JEANS";
      break;

      case 'album9': 
      picture.src = "../pictures/itzy.jpg";
      document.getElementById('albumtitle').innerHTML = "ITZY";
      document.getElementById('listeners').innerHTML = "4,512,544 monthly listeners";
      albumimg.src = "../pictures/itzy.jpg";
      document.getElementById('albumtext').innerHTML = "ITZY";
      break;

      case 'album10': 
      picture.src = "../pictures/aespa.webp";
      document.getElementById('albumtitle').innerHTML = "AESPA";
      document.getElementById('listeners').innerHTML = "10,557,424 monthly listeners";
      albumimg.src = "../pictures/aespa.webp";
      document.getElementById('albumtext').innerHTML = "AESPA";
      break;
    }

    document.getElementById(selectedAlbum).classList.add("active");
  });
});




audio.onended = function() {
  audio.currentTime = 0; 
  isPlaying = false; 
};

if (song_duration) {
  song_duration.oninput = function() {
      audio.currentTime = song_duration.value;
  };
}
audio.onended = function() {
  isPlaying = false;
  if (isRepeat) {
      loadSongById(songIds[currentSongIndex]);
  } else {
      next_btn.click();
  }
};

