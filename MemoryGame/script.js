
const toggle = document.querySelector('.toggle input')

toggle.addEventListener('click', () => {
    const onOff = toggle.parentNode.querySelector('.onoff')
    onOff.textContent = toggle.checked ? 'Player2' : 'Player1'
 })

const cards = document.querySelectorAll(".card");
// let matched = 0;
let player1 = 0;
let player2 = 0;
let cardOne, cardTwo;
let disableDeck = false;
function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
        
        
    }
}
function matchCards(img1, img2) {
    if(img1 === img2) {
        const onOff = toggle.parentNode.querySelector('.onoff')
        if( onOff.textContent == 'Player1'){
            player1++
            document.getElementById("output_player1").innerHTML = player1;
        } 
        else if( onOff.textContent == 'Player2'){
            player2++
            document.getElementById("output_player2").innerHTML = player2;
        } 
       
        if(player1 + player2 == 8) {
            setTimeout(() => {
                return shuffleCard();
            }, 5000);
            player1 = 0;
            player2 = 0;
            document.getElementById("output_player1").innerHTML = player1;
            document.getElementById("output_player2").innerHTML = player2;
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
        
    }toggle.click();
    

    

    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);
    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);

    
}


function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});




