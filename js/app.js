let talkDB = {
    "Behavioral economics":[
        {
            name: "10 steps to boost your financial health — that you can do in a day", 
            link:"https://www.ted.com/talks/wendy_de_la_rosa_10_steps_to_boost_your_financial_health_that_you_can_do_in_a_day"},
        {
            name:"Why it's so hard to make healthy decisions",
            link:"https://www.ted.com/talks/david_asch_why_it_s_so_hard_to_make_healthy_decisions/up-next"
        }
    ],
    "Biomimicry":[
        {
            name: "How butterflies self-medicate", 
            link:"https://www.ted.com/talks/jaap_de_roode_how_butterflies_self_medicate/up-next",
        },
        {
            name: "What humans can learn from semi-intelligent slime", 
            link:"https://www.ted.com/talks/heather_barnett_what_humans_can_learn_from_semi_intelligent_slime/up-next",
        }
    ]
    

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
    let selectedTopic = e.target.textContent;

    let topicArray = talkDB[selectedTopic];
    console.log(topicArray);


    for(let i = 0; i < topicArray.length; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', topicArray[i].link);
        a.innerHTML = topicArray[i].name;

        li.appendChild(a);
        resultsDiv.appendChild(li);
    }
}