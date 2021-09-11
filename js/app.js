let talkDB = {
    "Behavioral economics":[
        {
            name: "10 steps to boost your financial health", 
            link:"https://www.ted.com/talks/wendy_de_la_rosa_10_steps_to_boost_your_financial_health_that_you_can_do_in_a_day",
            speaker:"Zendeya",
            length:"12:10",
            thumbnail:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/8f011d01-08d7-4864-81d5-207a4c47cfbc/YourMoneyYourMind_2021V_E08-embed.jpg?quality=89&w=320"
        },
        {
            name:"Why it's so hard to make healthy decisions",
            link:"https://www.ted.com/talks/david_asch_why_it_s_so_hard_to_make_healthy_decisions/up-next",
            speaker:"Peter",
            length:"12:10",
            thumbnail:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/901cbfdb-61cb-4b3a-bf67-21b849c386bc/Jim+Tamm.jpeg?quality=89&w=320"
        }
    ],
    "Biomimicry":[
        {
            name: "How butterflies self-medicate", 
            link:"https://www.ted.com/talks/jaap_de_roode_how_butterflies_self_medicate/up-next",
            speaker:"Gobblin",
            length:"12:10",
            thumbnail:"https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/bfd9596723d0142dc573c04fd56c2ecbacd21b7f_2880x1620.jpg?quality=89&w=320"
        },
        {
            name: "What humans can learn from semi-intelligent slime", 
            link:"https://www.ted.com/talks/heather_barnett_what_humans_can_learn_from_semi_intelligent_slime/up-next",
            speaker:"Tony",
            length:"12:10",
            thumbnail:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/8f011d01-08d7-4864-81d5-207a4c47cfbc/YourMoneyYourMind_2021V_E08-embed.jpg?quality=89&w=320"
        }
    ],
}

let topicList = Object.keys(talkDB);

let catagoriesDiv = document.querySelector('.div-categories');
let resultsDiv = document.querySelector('.div-results');
// console.log(catagoriesDiv);
// console.log(topicList);
// adding topic list to div-categories
for(let i = 0; i < topicList.length; i++){
    let topic = document.createElement('span');
    topic.setAttribute('class', 'topic');
    topic.textContent = topicList[i];
    topic.addEventListener('click',expandTopic);
    catagoriesDiv.appendChild(topic);
}

function expandTopic(e){
    resultsDiv.innerHTML = '';
    let selectedTopic = e.target.textContent;

    let topicArray = talkDB[selectedTopic];
    console.log(topicArray);


    for(let i = 0; i < topicArray.length; i++){
        let li = document.createElement('li');
        let divLeft = document.createElement('div');
        divLeft.setAttribute('class', 'div-left');
        let divRight = document.createElement('div');
        divRight.setAttribute('class', 'div-right');


        let speaker = document.createElement('p');
        let length = document.createElement('p');
        length.setAttribute('class', 'length');

        let thumbnail = document.createElement('img');
        thumbnail.setAttribute('src', topicArray[i].thumbnail);
        
        let a = document.createElement('a');
        a.setAttribute('href', topicArray[i].link);
        a.setAttribute('target', '_blank');
        a.innerHTML = topicArray[i].name;
        speaker.innerHTML = topicArray[i].speaker;
        length.innerHTML = topicArray[i].length+' min';

        divLeft.appendChild(thumbnail);
        divRight.appendChild(a);
        divRight.appendChild(speaker);
        divRight.appendChild(length);

        li.appendChild(divLeft);
        li.appendChild(divRight);

        resultsDiv.appendChild(li);
    }
}