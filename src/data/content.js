export const moonData = {
  date: "May 6, 2000",
  phase: "Waxing Crescent",
  illumination: "around 10%",
  age: "around 3 days",
};

// Replace these messages with your own words whenever you are ready.
export const responses = {
  happy:
    "Ana kman mabsut, khaleky 3arfa w hassa w mut'keda en ay lahza te3ady 3aleky wenty mabsuta eny hases beky w mabsut aktar menk enk mabsuta, 3shan ehna taw'am ya Laila, taw'am fe kul haga w dayman hassen beba3d fa eta'kedy enu mahma hasal ana m3aky fe kul lahza w daymann batkhyal wana mabsut enena benr'us sawa w neghany sawa w a3den sawa w bnedhak sawa w sahraneen sawa taht el amar w bnetfarag 3aleh sawa w shayfen el shams w heya btetla3 wehna lesa makhlsnash kalam wla hatta zeh'na mn ba3d, 3shan mahma hasal w mahma 3ada el wa't ana 3umry wla azha' menk wla habatal ahebk w tewhasheny.",
  sad:
    "Mahma kunty meday'a aw za3lana, khaleky 3arfa en ana ganbek w m3aky fe kul lahza w hases beky 3shan ana zayekk bs ana 3ayzek teb'y akwa mn kda, mahma kan hubena kawy bs ehna lazem neb'a akwa w 3ayshen 3la el helw w mabsuten bel helw w bendhak 3l memories w mabusten beha, mabsuten bmasha3erna w et'kedy eny bahebek kul youm aktar w eny m3aky fe kul lahza bet3ady 3alekyy.",
  missing: "WRITE YOUR MISSING ME MESSAGE HERE",
  angry: "WRITE YOUR ANGRY MESSAGE HERE",
  tired: "WRITE YOUR TIRED MESSAGE HERE",
  love: "WRITE YOUR NEED LOVE MESSAGE HERE",
};

// Edit this to change the question journey.
// Each answer moves to a message by matching the next value to another id below.
export const questionJourney = {
  start: {
    type: "question",
    eyebrow: "Question One",
    title: "How are you feeling today?",
    subtitle: "Choose the answer closest to your heart right now.",
    answers: [
      { label: "Happy", next: "happy" },
      { label: "Sad", next: "sad" },
      { label: "Missed Us", next: "missing" },
      { label: "Angry", next: "angry" },
      { label: "Tired", next: "tired" },
      { label: "Need love", next: "love" },
    ],
  },
  happy: {
    type: "message",
    eyebrow: "For Her Smile",
    title: "Keep that little light glowing.",
    body: responses.happy,
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/track/1QSMPPfQD7uMBbT0KN1ey2?utm_source=generator&theme=0",
    spotifyEmbedHeight: "152",
    spotifyCaption: "Would you take this dance with me?",
  },
  sad: {
    type: "message",
    eyebrow: "For Heavy Days",
    title: "Come rest here for a minute.",
    body: responses.sad,
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/track/345lSp1DYHYk3owbmodz3c?utm_source=generator&theme=0",
    spotifyEmbedHeight: "152",
    spotifyCaption: "M3aya fe youmy w numy alby w ruhy",
  },
  missing: {
    type: "message",
    eyebrow: "For Missing Us",
    title: "Some distances are just love stretching.",
    body: responses.missing,
  },
  angry: {
    type: "message",
    eyebrow: "For Stormy Moments",
    title: "Even here, you are loved gently.",
    body: responses.angry,
  },
  tired: {
    type: "message",
    eyebrow: "For Soft Rest",
    title: "Let the world be quiet for a while.",
    body: responses.tired,
  },
  love: {
    type: "message",
    eyebrow: "For Needing Love",
    title: "Then take all of this.",
    body: responses.love,
  },
};

// Add, remove, or rename letters here. The page will update automatically.
export const letters = [
  {
    title: "Part 1",
    body: `KUL SANAAAAA WENTYYYYY TAYEBAAAAA YA HAYATYYYYY W RUHY W ALBYYYYY W 3A'LYYY W 3UMRYYYY W DENYTYYYY KULAAHAAAAAAAAAAA.

Ana bgd ya lailaaaaa mestanyyy el youm da ba'aly kter awy, mestany a'ulk aktar ana bahebk ad eh (3la ad ma'dar la'en mafesh haga twsef), w ad ehhh entyy kbeera awy 3andy w ghalya awy 3andy w hubek msh mugarad hub 3adyy, da hayah w gannaaa, wugudek lewahdu ne3maa fe hayaty w hayat ay had ya Laila.

Ana bahebek ya Laila w baheb ghertekk lma tkun magnunaa w mn gher wla 3a'l wla tafkeer mugarad bsss enkkk ghyranaaa w hatetganenyyy ely hwaaa la maynbstsh m3 had tany aw ghery,wana kda kda 3umry manbst m3 had ghere, w baheb dehktekkkk el 3, wahdaaa wentyy btetkalemy wenty met3saba w btetla3 ghasb 3anek, w wahda wentyyy methamesa w betb'aa 3alyaa awyy w TEGANENNNN, w hatta el dehka el semga ely btetla3 mn taht dersek dy lma tegy seret ay wahda mn el ashkal el weskha ely 3arefha w tetkalemy kda ely hwa nenene dy BETB'YYYYY AMAAAARRR AMAAARRRR  OKSEMBELLAH.Bahebekk ya lailaaa hattaa w baheb hermonatekk ely btetla3 w baheb wehna el etnen khayfen w al'aneen 3la ba3d, bahebekkkk wehnaa dayman hassen beba3d w hassen enena sawa dayman w benfakar fe ba3d, BAHEBEKKKKKK WANA BATKHYLEKKK A3DA GANBY BNTFARAG 3LA FILM W MUTKHYEL REACTIONATEK EL OVERRR ELY BGDDD MSH HAKAMEL FEHA EL FILM MN KUTR MAHEYAAA AMAR W HAN3UD NEDHAK W NEGRYYY WARA BA3D MN EL 3ABAT ELY HANKUN FEEHHH WA'TAHAAA.

Ana bahebekk ya Laila, ana bgdd bahebekk awy awy awyyyy, hattaa wenty 3a'la bahebekk, wenty magnunaaa ba3sha'ekk w bamotfekyyyyy bel ma3na el harfy. Ana bahebekk bkul tafaselekkk, w aktar aktar aktar hagaaa bahebahaa awy awy awyyyyyy, henytekkk, ana bgd mahmaa fedlt atkalem 3anha walahy ma hadeky ha'ekk, bsss bgddddd bgdddd henytekk dyy aktar haga teganenn fekyyy, wenty aslun kulekk hagat teganenn bs henytekk fe Hetta tanyaaa, henytekk dy tekafy el kun kulu, bgd hubek w henytek dul mahma 3abartelek 3anhum ad eh huma yeganenu ana msh ha'dar awfeky ha'ekk, ana must3ed a work from home hayaty kulahaa tul manty m3aya w ganby msh ha'dar aruh fe hettaaa, hab'a 24 sa3a 3ayez a3ud m3akyy w ashba3 menk w mn henytekk w hubekk w gamalekk w dehktekk w nazrety le 3younkkk, 3younkk ely mafesh agmal menhaa fel kun kulu.

Ana bahebekk ya lailaa bkul helwekk w wehshekk la'en hatta 3youbk bensbaly leha gamal lewahdaha leha hub tany lewahduuu, leha masha3er tany mukhtalefa w TEGANENNNN, bgddd kul tafaselek agmal mn b3daha.

BAHEBEKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK`,
  },
  {
    title: "Part 2",
    body: `Aktar youm kunt mestaneeh mn awel ma 3erftek w habeitek, aktar youm kan nefsy akun ganbek w m3aky w shayfek odamy wana bahtafel beky w bakhleeh ahla youm fe hayatek, 3shan bensbaly da ahla youm 3shan da etawaldt feh aktar bane'adma ana habeitha fe hayaty.

Enty aktar omneya kan nefsy feha w ahla helm ana helmtu 3ada 3alya fe hayaty w hayfdal dayman mahfur gwaya tul mana batnafes w 3ayesh, 3ayesh 3la ahla hub gwayaa, 3ayesh 3la ahla zekra le aktar wahda henayna w tayeba w gameela w amar w helwaa ana shuftaha fe hayaty,ana harfeyan hafdal afakar feky kul youm ye3ady 3alya w a'ul w atkhyal kul haga nefsy feha m3aky m3 nafsy w mugarad el takhyul hykhleny hamut mn el farhaa, 3la ad ma hatwhasheny bshakl ana 3aref enu hayganeny w hayegy 3alya aw'at hahes feha bekt'ab gamed, 3la ad mana hafdal afakar feky w akun mabsut w ashuf kalamna w hezarna w masha3ernaa w hubna w kul haga gwanaa lma aftkerha hathawen 3alya el bu3d.

Laila ana 3umry ma habeit kda fe hayaty, wl akeed aktar mn da eny ba'aly sneen kteeraaaa awyyyyyyy makansh 3andy shaghaf wla farha b ay haga lehad manty zaharty, zaharty habebteny fel hayah w fe nafsy w fekyyyyyy, ana habeitek btaree'a mekhlyany hases eny tayer mn 3l ard mn kutr mana hases eny mabsut enk mawguda fe hayaty.

El youm ely etwaladty feh da makansh mugarad youm, da kan bedayet kul haga helwa fel denya.
Ana bahebek ya Laila, w hafdal ahebek le akher youm leya fe 3umry.`,
  },
];

// Add your real photos inside src/assets/memories/ with these names,
// or change each image path below to match your own files.
export const memories = [
  {
    image: "/src/assets/memories/photo1.jpeg",
    title: "The Day I knew that I loved you more than I thought",
    description: "Da ana hageb ta'm bedal gdeed 3shan khater tehbeny aktar bsbb el youm da",
    text: "",
  },
  {
    image: "/src/assets/memories/photo2.jpeg",
    title: "Love Record",
    description: "Ana hena et'akedt eny msh ha'dar a3esh mn gherek, w eny lw kunt bahebek awy, fana ba3d el call dy ba3sha'ekk aktar mn el awyy bzeyada, hub msh genan bs, hub edman",
    text: "",
  },
  {
    image: "/src/assets/memories/photo3.jpeg",
    title: "Youm w ehsas 3umry ma hansah",
    description: "Ana hena bgd hasseit enk m3aya w ganby w gy w hanakul sawa w netntat sawa w neshar sawa, w aheb feky lehad ma el shams tetla3",
    text: "",
  },
];

// Replace this with another Spotify embed URL if you want to change the playlist.
export const spotifyPlaylist = {
  title: "Our Playlist, Our Universe",
  embedUrl:
    "https://open.spotify.com/embed/playlist/0jugfi3Kiv1t7C3qPwaMNL?utm_source=generator&theme=0",
};

// Replace these with tiny messages she can discover at random.
export const surpriseMessages = [
  "WRITE RANDOM MESSAGE 1 HERE",
  "WRITE RANDOM MESSAGE 2 HERE",
  "WRITE RANDOM MESSAGE 3 HERE",
];
