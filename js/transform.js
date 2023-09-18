const txt1 = '<div class="profile__image" style="background-image: url("images/';
const txt2 = '");"></div><div class="profile__infos"><div class="profile__name">';
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




const person1 = new Person("Bob", "12", "3.jpg", "T'as terminé ton travail ?");
const person2 = new Person("Andy", "16", "2.jpg", "Woof, Woof !");
const person3 = new Person("Wawa Sensei", "42", "1.jpg", "Je saurai faire de vrais devs de vous (Mulan)"); 

const l = [person1, person2, person3];

/* alert(person1.createHTML()); */
