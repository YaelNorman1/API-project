const NUM_OF_FRIENDS=8;

interface Friends {
    fname: string;
    lname: string;
}

interface Address {
    city: string;
    state: string;
}

class User {
    fname: string;
    lname: string;
    address: Address;
    friends: Friends [];
    picture: string;

    constructor(fname: string, lname: string, city: string, state: string, friends: Friends [], picture: string){
        this.fname= fname;
        this.lname= lname;
        this.address= {city, state};
        this.friends= friends;
        this.picture= picture;
    }
}

class AboutMe {
    aboutMe: string;

    constructor(text: string){
        this.aboutMe= text;
    }
}

class Quote {
    quote: string;

    constructor(text: string){
        this.quote= text;
    }
}

class Pokemon {
    name: string;
    url: string;

    constructor(name: string, url: string){
        this.name= name;
        this.url= url;
    }
}

class DataModule {
    
    user: User;
    quote: Quote;
    aboutMe: AboutMe;
    pokemon: Pokemon;

    constructor() {
        this.user= {} as User;
        this.quote= {} as Quote;
        this.aboutMe= {} as AboutMe;
        this.pokemon= {} as Pokemon;

    }

    async generateNewPage() {
        await this.generateNewUser();
        await this.generateNewAboutMe();
        await this.generateNewQuote();
        await this.generateNewPokemon();
    }

    getDataToRender(): any [] {
        return [
            this.user,
            this.quote,
            this.pokemon,
            this.aboutMe
        ];
    }

    async getNewUser() {
        const response= await $.get(`https://randomuser.me/api/?results=${NUM_OF_FRIENDS}`);
        console.log(response);
        return response;
    }

    async generateNewUser(){       
        await this.getNewUser().then(user => {
            const fname= user.results[0].name.first;
            const lname= user.results[0].name.last;
            const city= user.results[0].location.city;
            const state= user.results[0].location.state;
            const picture= user.results[0].picture.thumbnail;
            let friends: Friends []=[];

            for (let i=1; i<user.results.length; i++){
                friends.push({fname: `${user.results[i].name.first}`, lname: ` ${user.results[i].name.last}`});
            }
            this.user= new User(fname,lname,city,state, friends,picture);
        })
    }

    async getNewAboutMe() {
            const response= await $.get(`https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1`);
            console.log(response);
            return response;
    }

    async generateNewAboutMe(){
        await this.getNewAboutMe().then(text =>{
            this.aboutMe= new AboutMe(text);
        })
    }

    async getNewQuote(){
        const response= await $.get("https://api.kanye.rest");
        return response;
    }

    async generateNewQuote(){
        await this.getNewQuote().then(text =>{
        console.log(text);
        this.quote=new Quote(text);
        })
    }

    async getNewPokemon(){
        let rand: number= Math.floor(Math.random() * (30 - 10 + 1) + 10);
        const response= await $.get(`https://pokeapi.co/api/v2/pokemon/${rand}/`);
        return response;
    }

    async generateNewPokemon() {
        await this.getNewPokemon().then(pokemon =>{
            let name: string= pokemon.name;
            let url: string=pokemon.sprites.back_default;
            this.pokemon= new Pokemon (name, url);
            console.log(pokemon);
        })
    }
}
