




// for links
let links = [];
for(i = 0; i <= 36; i++){
let link = document.querySelectorAll(`#browse-results > div.row.row-sm-4up.row-lg-6up.row-skinny > div:nth-child(${i}) > div > div > div > div.media__message > h4.f-w\\:700.h9.m5 > a`);
links.push(link);
}

for(i = 1; i < links.length; i++){
    console.log(links[i][0]["href"]);
}
// for title
for(i = 1; i < links.length; i++){
    console.log(links[i][0]["innerText"]);
}


// Completely different appraoch 
let cards = [];
for(i = 0; i<= 35;i++){
let card = document.querySelector(`#browse-results > div.row.row-sm-4up.row-lg-6up.row-skinny > div:nth-child(${i}) > div > div > div`);
cards.push(card);
}

for(i = 1; i <= 35; i++){
let title = cards[i]["childNodes"][3]["innerText"];
let speaker = title.substring(0, title.indexOf('\n')); //for speaker


// title = title.substring(speaker.length+1);
// title = title.substring(0, title.indexOf('\nPosted'));
// console.log("Speaker: " + speaker)
// console.log("Title: " + title);
}

// for thumbnail
let thumbnails = [];
for(i = 0; i <= 36; i++){
let thumbnail = document.querySelectorAll(`#browse-results > div.row.row-sm-4up.row-lg-6up.row-skinny > div:nth-child(${i}) > div > div > div > div.media__image.media__image--thumb.talk-link__image > a > span > span.thumb__sizer > span > img`)
thumbnails.push(thumbnail);
}
for(i = 1; i < thumbnails.length; i++){
    console.log(thumbnails[i][0]["currentSrc"]);
}

// for length
let lengths = [];
for(i = 0; i <= 36; i++){
    let length = document.querySelector(`#browse-results > div.row.row-sm-4up.row-lg-6up.row-skinny > div:nth-child(${i}) > div > div > div > div.media__image.media__image--thumb.talk-link__image > a > span > span.thumb__duration`)
    lengths.push(length);
}
for (i = 1; i < lengths.length; i++){
    console.log(lengths[i].innerText);
}


















// complete approche

















