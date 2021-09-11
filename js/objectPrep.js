




// for speakers
let speakers = document.querySelectorAll('.talk-link__speaker');
for(i = 0; i < speakers.length; i++){
    console.log(speakers[i].innerHTML);
}

let speakersString = 
'Susan Graham,Freeman H. Shen,Hélène Morlon and Anna Papadopoulou,Ma Jun,Jean-Baptiste P. Koehl,Aaron Morris,Brittany Young,Beth Ford,Katie Mack,Dan Goods,Nadya Bartol,Cory Combs,The TED Interview,Rebecca J. Barthelmie and Sara C. Pryor,Kalika Bali,Jens Burchardt,TED-Ed,Jacques S. Abramowicz,Michael Levin,Natsai Audrey Chieza,TED-Ed,Bill Gates,TED-Ed,Briana Brownell,Antoine Gourévitch,TED-Ed,William Collis,TED-Ed,Olivia Arthur,Gbenga Sesan,Matt Langione,Juan Enriquez,Moriba Jah,Jack Dangermond,John Kitching,Max Rashbrooke'

let speakers = speakersString.split(',');
console.log(speakers);

// for titles
let titles = [];
for(i = 1; i <= 36; i++){
let title = document.querySelectorAll(`#browse-results > div.row.row-sm-4up.row-lg-6up.row-skinny > div:nth-child(${i}) > div > div > div > div.media__message > h4.f-w\\:700.h9.m5 > a`);
titles.push(title);
}
for(i = 0; i < titles.length; i++){
    console.log(titles[i][0].innerText);
}

let titleString = 
'A new way to restore Earth\'s biodiversity — from the air,A future with fewer cars,How we can detect pretty much anything,An interactive map to track (and end) pollution in China,Iceland\'s superpowered underground volcanoes,How your body could become its own diagnostic lab,How dirt bikes and STEM ignite ingenuity in Baltimore,What farmers need to be modern,climate-friendly and profitable,The death of the universe — and what it means for life,How NASA invented a ventilator for COVID-19 ... in 37 days,Better cybersecurity starts with honesty and accountability,The future of flying is electrifying,The race to build AI that benefits humanity with Sam Altman,How do wind turbines work?,The giant leaps in language technology — and who\'s left behind,How we can curb climate change by spending two percent more on everything,Why good ideas get trapped in the valley of death — and how to rescue them,How does ultrasound work?,The electrical blueprints that orchestrate life,Possible futures from the intersection of nature,tech and society,What\'s the best fuel for your car?,The innovations we need to avoid a climate disaster,How much land does it take to power the world?,How does artificial intelligence learn?,What is deep tech? A look at how it could shape the future,How much electricity does it take to power the world?,How video game skills can get you ahead in life,The world\'s biggest battery looks nothing like a battery,Meditations on the intersection of humanity and technology,Technology can\'t fix inequality — but training and opportunities could,The promise of quantum computers,How technology changes our sense of right and wrong,What if every satellite suddenly disappeared?,How a geospatial nervous system could help us design a better future,Who decides how long a second is?,3 ways to upgrade democracy for the 21st century';


let titles = titleString.split(',');
console.log(titles);


// for links
let links = [];
for(i = 0; i < 36; i++){
let link = document.querySelectorAll(`#browse-results > div.row.row-sm-4up.row-lg-6up.row-skinny > div:nth-child(${i}) > div > div > div > div.media__message > h4.f-w\\:700.h9.m5 > a`);
links.push(link);
}

for(i = 1; i < links.length; i++){
    console.log(links[i][0]["href"]);
}
for(i = 1; i < links.length; i++){
    console.log(links[i][0]["innerText"]);
}
















// Completely different appraoch 
document.querySelector("#browse-results > div.row.row-sm-4up.row-lg-6up.row-skinny > div:nth-child(1) > div > div > div")