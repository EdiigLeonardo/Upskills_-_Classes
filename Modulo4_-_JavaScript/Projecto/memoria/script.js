let cardObjects = [
    {
        name: "quora",
        data: "quora",
        src: "assets/socialmedias/quora.svg",
        color: "#B92B27"
    },
    {
        name: "github",
        data: "github",
        src: "assets/socialmedias/quora.svg"
    },
    {
        name: "twitter",
        data: "twitter",
        src: "assets/socialmedias/twitter.svg"
    },
    {
        name: "youtube",
        data: "youtube",
        src: "assets/socialmedias/youtube.svg"
    },
    {
        name: "linkedin",
        data: "linkedin",
        src: "assets/socialmedias/linkedin.svg"
    },
    {
        name: "spotify",
        data: "spotify",
        src: "assets/socialmedias/spotify.svg"
    },
    {
        name: "discord",
        data: "discord",
        src: "assets/socialmedias/discord.svg"
    },
    {
        name: "messenger",
        data: "messenger",
        src: "assets/socialmedias/messenger.svg"
    },
    {
        name: "microsoft-teams",
        data: "microsoft-teams",
        src: "assets/socialmedias/microsoft-teams.svg"
    },
    {
        name: "instagram",
        data: "instagram",
        src: "assets/socialmedias/instagram.svg"
    },
    {
        name: "reddit",
        data: "reddit",
        src: "assets/socialmedias/reddit.svg"
    },
    {
        name: "signal",
        data: "signal",
        src: "assets/socialmedias/signal.svg"
    },
    {
        name: "snapchat",
        data: "snapchat",
        src: "assets/socialmedias/snapchat.svg"
    },
    {
        name: "skype",
        data: "skype",
        src: "assets/brands/skype.svg"
    },
    {
        name: "stack-overflow",
        data: "stack-overflow",
        src: "assets/socialmedias/stack-overflow.svg"
    },
    {
        name: "twitch",
        data: "twitch",
        src: "assets/socialmedias/twitch.svg"
    },
    {
        name: "vimeo",
        data: "vimeo",
        src: "assets/socialmedias/vimeo.svg"
    }
    ]

/*let pallete = [
    {color: "#7289da"},
    {color: "#ffffff"},
    {color: "#99aab5"},
    {color: "#7289da"},
    {color: "#2c2f33"},
    {color: "#23272a"},
    {color: "#99aab5"}
]*/

const backFace = {name: "playstation",
    src:"assets/brands/playstation.svg",
    alt:"imagem de uma playstation"}

let container = $(".memory-game");
let cards = $(".memory-card");
let header = $(".header");
const difficultyButtons_div = $(".buttons-difficulty-div");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let randomPos, indices;
let difficultyButtons = $(".buttons-difficulty-div>a");
let btn_start = $("#btn-start");
let pontuation = 0;

choose_difficulty()

function choose_difficulty(){
    let btnGenerateDifficulty = 0;
    $(difficultyButtons).each((index, element)=>{
        $(element).click(()=>{
            btnGenerateDifficulty = (index+3)*2
            generateGrid(btnGenerateDifficulty);
            if(index>=2){
                $(container).css("grid-template-columns","repeat(5, 1fr)");
            }
            else{
                $(container).css("grid-template-columns","repeat(4, 1fr)");
            }
            $(difficultyButtons_div).toggle("hidded")
            }
        )
    })
    return btnGenerateDifficulty
}


function generateGrid(grid_value){
    for (let i = 1; i <= grid_value; i++){
        $(container).each((index,table)=>{
            const card = $(`
    <div class="memory-card" data-socialmedia="${cardObjects[i].name}">
        <img class="front-face" src="${cardObjects[i].src}" alt="${cardObjects[i].name}"/>
        <img class="back-face" src="${backFace.src}" alt="${backFace.alt}"/>
    </div>
    <div class="memory-card" data-socialmedia=${cardObjects[i].name}>
        <img class="front-face" src=${cardObjects[i].src} alt=${cardObjects[i].name}/>
        <img class="back-face" src=${backFace.src} alt=${backFace.alt}/>
    </div>`)
            $(table).append(card);
            $(card).click(flipCard);
        })
    }
}
// choose_difficulty()

function flipCard(element) {
    if (lockBoard) return;
    if (element.target.parentNode === firstCard) return;
    $(element.target.parentNode).addClass("flip");
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = $(element.target.parentNode);
        return;
    }
    secondCard = $(element.target.parentNode);
    checkForMatch();
}

function checkForMatch() {
    let isMatch = ()=>{
        if(firstCard.data("socialmedia") === secondCard.data("socialmedia")){
            firstCard.addClass("matched")
            secondCard.addClass("matched")
            disableCards()
        }
        else{
            unflipCards()
        }
        return (firstCard.data("socialmedia") === secondCard.data("socialmedia"))
    }
    console.log(isMatch())
/*    let isMatch = firstCard.data("socialmedia") === secondCard.data("socialmedia");
    isMatch ? disableCards() : unflipCards() ;*/
    return isMatch
}

function disableCards() {
    console.log(firstCard,secondCard)
    firstCard.off('click', flipCard);
    secondCard.off('click', flipCard)
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.removeClass('flip');
        secondCard.removeClass('flip');
        resetBoard();
    }, 300);
}

function shuffle(element) {

    $(element).each((index, card) => {
        let randomPos = 0;
        for (let a=0; a <= 3; a++){
            randomPos = Math.floor(Math.random() * val);
        }
        $(card).css("order", randomPos)
    });
}
/*(function shuffle() {

    $(cards).each((index, card) => {
        let randomPos = 0;
        for (let a=0; a <= 3; a++){
            randomPos = Math.floor(Math.random() * 20);
        }
        $(card).css("order", randomPos)
    });
})();*/

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}




