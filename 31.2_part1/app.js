let favNumber = 12;
let url = "http://numbersapi.com";

//1. 
$.getJSON(`${url}/${favNumber}?json`)
    .then(data => console.log(data));

//2.
let favNumbers = [12, 11, 1]
$.getJSON(`${url}/${favNumbers}?json`)
    .then(data => console.log(data));


//3.
Promise.all(
    Array.from({length: 4}, () => {
        return $.getJSON(`${url}/${favNumber}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
