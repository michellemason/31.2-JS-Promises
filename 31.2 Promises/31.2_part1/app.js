let favNumber = 12;
let url = "http://numbersapi.com";

// //1. 
// $.getJSON(`${url}/${favNumber}?json`)
//     .then(data => console.log(data));

//1. ASYNC & AWAIT
async function part1() {
    let data = await $.getJSON(`${url}/${favNumber}?json`);
    console.log(data);
}
part1();

// //2.
// let favNumbers = [12, 11, 1]
// $.getJSON(`${url}/${favNumbers}?json`)
//     .then(data => console.log(data));

//2. ASYNC & AWAIT
const favNumbers = [12, 11, 1]
async function part2() {
    let data = await $.getJSON(`${url}/${favNumbers}?json`);
    console.log(data);
}
part2();


// //3.
// Promise.all(
//     Array.from({length: 4}, () => {
//         return $.getJSON(`${url}/${favNumber}?json`);
//     })
// ).then(facts => {
//     facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
// });

//3. ASYNC & AWAIT
async function part3() {
    let facts = await Promise.all(
        Array.from({length: 4}, () => $.getJSON(`${url}/${favNumber}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
part3();