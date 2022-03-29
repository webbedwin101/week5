let name = ['edwin', 'larry', 'dave', 'sammy']
console.log("name")
greetingDisplay(name)

function keepGoing(name){
        for (i=0; i < name.length; i++){
            if (name[i] == 'larry'){
                return name[i];
            }
    }
    console.log(person);
}

let person = 'Larry';
function greetingDisplay(name) {
    document.getElementById('para').innerHTML = "HELLO " + keepGoing(name) + '!';
}
