let url = "http://deckofcardsapi.com/api/deck"

// //1.
// $.getJSON(`${url}/new/draw/`).then(data => {
//     let {suit, value} = data.cards[0];
//     console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
// });

//1. ASYNC & AWAIT
async function part1() {
    let data = await $.getJSON(`${url}/new/draw`);
    let {suit, value} = data.cards[0];
    console.log(`${value} of ${suit}`);
}
// part1();

// //2. 
// let firstCard = null;
// $.getJSON(`${url}/new/draw/`).then(data => {
//     firstCard = data.cards[0];
//     let deckId = data.deck_id;
//     return $.getJSON(`${url}/${deckId}/draw/`);
// })
// .then(data => {
//     let secondCard = data.cards[0];
//     [firstCard, secondCard].forEach(function(card) {
//         console.log(
//             `${card.value} of ${card.suit}`
//         );
//     });
// });

//2. ASYNC & AWAIT
async function part2() {
    let firstCard = await $.getJSON(`${url}/new/draw`);
    let deckId = firstCard.deck_id;
    let secondCard = await $.getJSON(`${url}/${deckId}/draw/`);
    [firstCard, secondCard].forEach(card => {
        let {suit, value} = card.cards[0];
        console.log(`${value} of ${suit}`)
    });
}

// //3.
// let deckId = null;
// let $btn = $('button');
// let $cardArea = $('#card-area');

// $.getJSON(`${url}/new/shuffle/`).then(data => {
//     deckId = data.deck_id;
//     $btn.show();
// });

// $btn.on('click', function() {
//     $.getJSON(`${url}/${deckId}/draw/`).then(data => {
//         let cardSrc = data.cards[0].image;
//         let angle = Math.random() * 90 - 45;
//         let randomX = Math.random() * 40 - 20;
//         let randomY = Math.random() * 40 - 20;
//         $cardArea.append(
//             $('<img>', {
//                 src: cardSrc,
//             })
//         );
//         if (data.remaining === 0 ) $btn.remove();
//     });
// });

//3. ASYNC & AWAIT 
async function part3() {
    let $btn = $('button');
    let $cardArea = $('#card-area');

    let deckData = await $.getJSON(`${url}/new/shuffle`);
    $btn.show().on('click', async function() {
        let cardData = await $.getJSON(`${url}/${deckData.deck_id}/draw/`);
        let cardSrc = cardData.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardArea.append(
            $('<img>', {
                src: cardSrc,
                css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                }
            })
        );
        console.log(cardData.remaining);
        if (cardData.remaining === 0) $btn.remove();
    });
}
part3();