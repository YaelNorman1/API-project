"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const NUM_OF_FRIENDS = 8;
class User {
    constructor() {
        this.fname = '';
        this.lname = '';
        this.address = { city: '', state: '' };
        this.friends = [];
    }
    setValues(fname, lname, city, state, friends) {
        this.fname = fname;
        this.lname = lname;
        this.address = { city, state };
        this.friends = friends;
    }
}
class AboutMe {
    constructor() {
        this.aboutMe = '';
    }
    setValue(text) {
        this.aboutMe = text;
    }
}
class Quote {
    constructor() {
        this.quote = '';
    }
    setValue(text) {
        this.quote = text;
    }
}
class DataModule {
    constructor() {
        this.user = {};
        this.quote = {};
        this.aboutMe = {};
    }
    generateNewPage() {
        this.generateNewUser();
        this.generateNewAboutMe();
        // this.generateNewQuote();
    }
    getNewUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield $.get(`https://randomuser.me/api/?results=${NUM_OF_FRIENDS}`);
            return response;
        });
    }
    generateNewUser() {
        this.getNewUser().then(user => {
            const fname = user.results[0].name.first;
            const lname = user.results[0].name.last;
            const city = user.results[0].location.city;
            const state = user.results[0].location.state;
            let friends = [];
            for (let i = 1; i < user.results.length; i++) {
                friends.push({ fname: `${user.results[i].name.first}`, lname: ` ${user.results[i].name.last}` });
            }
            this.user.setValues(fname, lname, city, state, friends);
        });
    }
    getNewAboutMe() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield $.get(`https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1`);
            return response;
        });
    }
    generateNewAboutMe() {
        this.getNewAboutMe().then(text => {
            this.aboutMe.setValue(text);
        });
    }
}
// class AboutMe {
//     aboutMe: string;
//     constructor (){
//         this.aboutMe= '';
//     }
// }
// interface Pokemon {
//     name: string;
//     url: string;
// }
// interface Quote {
//     quote: string;
// }
// interface Friends {
//     fname: string;
//     lname: string;
// }
// interface Address {
//     city: string;
//     state: string;
// }
// class User {
//     fname: string;
//     lname: string;
//     address: Address;
//     friends: Friends [];
//     constructor(fname: string, lname: string, city: string, state: string, friends: Friends []){
//         this.fname= fname;
//         this.lname= lname;
//         this.address= {city, state};
//         this.friends= friends;
//     } 
// }
// const getNewUser= async function () {
//     const response= await $.get(`https://randomuser.me/api/?results=${NUM_OF_FRIENDS}`);
//     return response;
// }
// getNewUser().then(user => {
//     const fname= user.results[0].name.first;
//     const lname= user.results[0].name.last;
//     const city= user.results[0].location.city;
//     const state= user.results[0].location.state;
//     let friends: Friends []=[];
//     for (let i=1; i<user.results.length; i++){
//         friends.push({fname: `${user.results[i].name.first}`, lname: ` ${user.results[i].name.last}`});
//     }
//     let newUser= new User (fname,lname,city,state, friends);
//     console.log(newUser);
// })
// const getNewQuote= async function () {
//     const response= await $.get("https://api.kanye.rest");
//     return response;
// }
// getNewQuote().then(quote =>{
//     console.log(quote);
//     const newQuote: Quote =quote;
// })
// const getNewPokemon= async function () {
//     let rand: number= Math.floor(Math.random() * (30 - 10 + 1) + 10);
//     const response= await $.get(`https://pokeapi.co/api/v2/pokemon/${rand}/`);
//     return response;
// }
// getNewPokemon().then(pokemon =>{
//     let name: string= pokemon.name;
//     let url: string=pokemon.sprites.back_default;
//     const newPokemon: Pokemon ={name, url};
//     console.log(newPokemon);
// })
// const getNewAboutMe= async function () {
//     const response= await $.get(`https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1`);
//     return response;
// }
// getNewAboutMe().then(aboutMe =>{
//     console.log(aboutMe);
//     // const newAboutMe: AboutMe =aboutMe;
// })
//# sourceMappingURL=dataModule.js.map