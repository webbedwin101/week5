// Created with assistance from: 
// https://fakerjs.dev/
// https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js
// https://youtu.be/SeHT0ee4waU


let btnGen = document.querySelector('button');

btnGen.addEventListener('click', () => {
    let randomCard = faker.helpers.createCard(); 

    // console.log(randomCard); 
    //object destructuring to pull the data 
    let {name, email, address: {city, country, zipcode}} = randomCard; 

    document.querySelector('#name').value = name; 
    document.querySelector('#email').value = email; 
    document.querySelector('#city').value = city; 
    document.querySelector('#zipcode').value = zipcode; 
    document.querySelector('#country').value = country; 

}); 