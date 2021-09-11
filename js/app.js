let talkDB = {
    "Technology":[
        {
            name: "A future with fewer cars", 
            link:"https://www.ted.com/talks/freeman_h_shen_a_future_with_fewer_cars/up-next",
            speaker:"Freeman H. Shen",
            length:"06:57",
            thumbnail:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/343b8c48-a5d6-4d3a-b827-123bc50f3eac/FreemanHShen_2021-embed.jpg?quality=89&w=320",
        },
        {
            name: "The future of flying is electrifying", 
            link:"https://www.ted.com/talks/cory_combs_the_future_of_flying_is_electrifying/up-next",
            speaker:"Cory Combs",
            length:"04:19",
            thumbnail:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/a9da09c3-a3f5-4707-872c-9eb919ec6034/CoryCombs_2021F-embed.jpg?quality=89&w=320",
        },
        {
            name: "How NASA invented a ventilator for COVID-19 ... in 37 days", 
            link:"https://www.ted.com/talks/dan_goods_how_nasa_invented_a_ventilator_for_covid_19_in_37_days/up-next",
            speaker:"Dan Goods",
            length:"07:04",
            thumbnail:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/611638fe-5764-4e05-a137-02b912e8338d/DanGoods_2020X-embed.jpg?quality=89&w=320",
        },
        {
            name: "Better cybersecurity starts with honesty and accountability", 
            link:"https://www.ted.com/talks/nadya_bartol_better_cybersecurity_starts_with_honesty_and_accountability/up-next",
            speaker:"Nadya Bartol",
            length:"09:51",
            thumbnail:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/416bc029-1d1a-4be9-adf1-21180227765e/NadyaBartol_2021S-embed.jpg?quality=89&w=320",
        },
        {
            name: "A new way to restore Earth's biodiversity — from the air", 
            link:"https://www.ted.com/talks/susan_graham_a_new_way_to_restore_earth_s_biodiversity_from_the_air/up-next",
            speaker:"Susan Graham",
            length:"02:22",
            thumbnail:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/3494d7ab-8377-4dff-9489-95828fa7cc0d/SusanGraham_2021-embed.jpg?quality=89&w=320",
        },
        {
            name: "How we can detect pretty much anything", 
            link:"https://www.ted.com/talks/susan_graham_a_new_way_to_restore_earth_s_biodiversity_from_the_air/up-next",
            speaker:"Hélène Morlon and Anna Papadopoulou",
            length:"05:40",
            thumbnail:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/7e24de04-20e9-456d-a84e-11d132e88ad7/environmentalDNAtextless.jpg?quality=89&w=320",
        },
        {
            name: "How your body could become its own diagnostic lab", 
            link:"https://www.ted.com/talks/aaron_morris_how_your_body_could_become_its_own_diagnostic_lab",
            speaker:"Aaron Morris",
            length:"05:19",
            thumbnail:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/a18fbf7c-0ea1-4769-9fd7-d200183c7c16/AaronMorris_2021F-embed.jpg?quality=89&w=320",
        },
        {
            name: "What farmers need to be modern, climate-friendly and profitable", 
            link:"https://www.ted.com/talks/beth_ford_what_farmers_need_to_be_modern_climate_friendly_and_profitable/up-next",
            speaker:"Beth Ford",
            length:"13:46",
            thumbnail:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/4bc4978d-f052-46b7-8cb3-6bbb1e7b4c3b/BethFord_2021S-embed.jpg?quality=89&w=320",
        },
        {
            name: "The death of the universe — and what it means for life", 
            link:"https://www.ted.com/talks/beth_ford_what_farmers_need_to_be_modern_climate_friendly_and_profitable",
            speaker:"Katie Mack",
            length:"06:24",
            thumbnail:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/2fd67762-b308-4131-9414-034c855303a1/KatieMack_2021F-embed.jpg?quality=89&w=320",
        },
        {
            name: "The giant leaps in language technology", 
            link:"https://www.ted.com/talks/kalika_bali_the_giant_leaps_in_language_technology_and_who_s_left_behind/up-next",
            speaker:"Kalika Bali",
            length:"16:21",
            thumbnail:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/f546d184-50e3-4226-bea6-ae8c09647d0b/KalikaBali_2020X-embed.jpg?quality=89&w=320",
        },
        {
            name: "How we can curb climate change by spending two percent more on everything", 
            link:"https://www.ted.com/talks/jens_burchardt_how_we_can_curb_climate_change_by_spending_two_percent_more_on_everything/up-next",
            speaker:"Jens Burchardt",
            length:"11:33",
            thumbnail:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/1d8a1c10-3a0f-4052-8ad3-6555ce9d5576/JensBurchardt_2021S-embed.jpg?quality=89&w=320",
        },
    ],
    "Biomimicry":[],
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




// OnScroll Animation Code


