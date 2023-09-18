const txt1 = `<div class="profile__image" style="background-image: url('images/`;
const txt2 = `');"></div><div class="profile__infos"><div class="profile__name">`;
const txt3 = '<span class="profile__age">';
const txt4 = '</span></div><div class="profile__description">';
const txt5 = '</div></div>';

class Person {
    
    constructor(name, age, photo, text) {
        this.name = name;
        this.age = age;
        this.photo = photo;
        this.text = text;
    
    }

    createHTML() {
        let htmltext = txt1 + this.photo + txt2 + this.name + txt3 + this.age + txt4 + this.text + txt5;
        return htmltext;
    }
}

const person1 = new Person("Bob ", "12", "3.jpg", "T'as terminé ton travail ?");
const person2 = new Person("Andy ", "16", "2.jpg", "Woof, Woof !");
const person3 = new Person("Wawa Sensei ", "42", "1.jpg", "Je saurai faire de vrais devs de vous (Mulan)"); 

const l = [person1, person2, person3];

let number = 0;

function removeImg() {
    // Get a reference to the button element
    const ProfilToRemove = document.getElementById('topProfile');

    // Remove the profile__age element
    ProfilToRemove.remove();
}

function addImg(text) {
    const container = document.getElementById('profiles');

    const newDiv = document.createElement('div');
    newDiv.classList.add('profile');
    newDiv.id = 'topProfile';
    newDiv.innerHTML = text;
    container.appendChild(newDiv);
}

function getNewProfile(i) {

    /* let nextProfil = new Person(arr[0], arr[1], arr[2], arr[3], arr[4]); */ 
    nextProfil = l[i];
    nextTxt = nextProfil.createHTML();

    return nextTxt;
}
function getRandomInt(max) {
    // Use Math.floor() to round down to the nearest integer
    return Math.floor(Math.random() * (max));
  }
  
  // Example: Generate a random integer between 1 and 100 (inclusive)
  // const randomInt = getRandomInt(1, 100);
  // console.log(randomInt);

function boucle() {
    number += 1;
    removeImg();
    i = getRandomInt(l.length);
    text = getNewProfile(i);
    addImg(text);
}

function boucleini() {
    i = getRandomInt(l.length);
    text = getNewProfile(i);
    addImg(text);
}

document.addEventListener('DOMContentLoaded', function() {

    boucleini();
    // Get references to the buttons by their IDs
    const button0 = document.getElementById('button0');
    const button3 = document.getElementById('button3');
    const button7 = document.getElementById('button7');
    const button10 = document.getElementById('button10');

    // Add click event listeners to the buttons
    button0.addEventListener('click', function() {
        alert('Button 0 clicked!');
        boucle();
    });

    button3.addEventListener('click', function() {
        alert('Button 3 clicked!');
        boucle();
    });

    button7.addEventListener('click', function() {
        alert('Button 7 clicked!');
        boucle();
    });
    
    button10.addEventListener('click', function() {
        alert('Button 10 clicked!');
        boucle();
    });

});

