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
    constructor(fname, lname, city, state, friends, picture) {
        this.fname = fname;
        this.lname = lname;
        this.address = { city, state };
        this.friends = friends;
        this.picture = picture;
    }
}
class AboutMe {
    constructor(text) {
        this.aboutMe = text;
    }
}
class Quote {
    constructor(text) {
        this.quote = text;
    }
}
class Pokemon {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}
class DataModule {
    constructor() {
        this.user = {};
        this.quote = {};
        this.aboutMe = {};
        this.pokemon = {};
    }
    generateNewPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.generateNewUser();
            yield this.generateNewAboutMe();
            yield this.generateNewQuote();
            yield this.generateNewPokemon();
        });
    }
    getDataToRender() {
        return [
            this.user,
            this.quote,
            this.pokemon,
            this.aboutMe
        ];
    }
    getNewUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield $.get(`https://randomuser.me/api/?results=${NUM_OF_FRIENDS}`);
            console.log(response);
            return response;
        });
    }
    generateNewUser() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNewUser().then(user => {
                const fname = user.results[0].name.first;
                const lname = user.results[0].name.last;
                const city = user.results[0].location.city;
                const state = user.results[0].location.state;
                const picture = user.results[0].picture.thumbnail;
                let friends = [];
                for (let i = 1; i < user.results.length; i++) {
                    friends.push({ fname: `${user.results[i].name.first}`, lname: ` ${user.results[i].name.last}` });
                }
                this.user = new User(fname, lname, city, state, friends, picture);
            });
        });
    }
    getNewAboutMe() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield $.get(`https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1`);
            console.log(response);
            return response;
        });
    }
    generateNewAboutMe() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNewAboutMe().then(text => {
                this.aboutMe = new AboutMe(text);
            });
        });
    }
    getNewQuote() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield $.get("https://api.kanye.rest");
            return response;
        });
    }
    generateNewQuote() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNewQuote().then(text => {
                console.log(text);
                this.quote = new Quote(text);
            });
        });
    }
    getNewPokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            let rand = Math.floor(Math.random() * (30 - 10 + 1) + 10);
            const response = yield $.get(`https://pokeapi.co/api/v2/pokemon/${rand}/`);
            return response;
        });
    }
    generateNewPokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNewPokemon().then(pokemon => {
                let name = pokemon.name;
                let url = pokemon.sprites.back_default;
                this.pokemon = new Pokemon(name, url);
                console.log(pokemon);
            });
        });
    }
}
//# sourceMappingURL=dataModule.js.map