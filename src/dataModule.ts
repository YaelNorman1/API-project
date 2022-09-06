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

    constructor(){
        this.fname= '';
        this.lname= '';
        this.address= {city:'',state:''};
        this.friends= [];
    }
    setValues(fname: string, lname: string, city: string, state: string, friends: Friends []){
        this.fname= fname;
        this.lname= lname;
        this.address= {city, state};
        this.friends= friends;
    }
}

class AboutMe {
    aboutMe: string;

    constructor(){
        this.aboutMe= '';
    }
    setValue(text: string){
        this.aboutMe= text;
    }
}

class Quote {
    quote: string;

    constructor(){
        this.quote= '';
    }
    setValue(text: string){
        this.quote= text;
    }
}


class DataModule {
    
    user: User;
    quote: Quote;
    aboutMe: AboutMe;

    constructor() {
        this.user= {} as User;
        this.quote= {} as Quote;
        this.aboutMe= {} as AboutMe;

    }

    generateNewPage() {
        this.generateNewUser();
        this.generateNewAboutMe();
        // this.generateNewQuote();
    }

    async getNewUser() {
        const response= await $.get(`https://randomuser.me/api/?results=${NUM_OF_FRIENDS}`);
        return response;
    }

    generateNewUser(){       
        this.getNewUser().then(user => {
            const fname= user.results[0].name.first;
            const lname= user.results[0].name.last;
            const city= user.results[0].location.city;
            const state= user.results[0].location.state;
            let friends: Friends []=[];

            for (let i=1; i<user.results.length; i++){
                friends.push({fname: `${user.results[i].name.first}`, lname: ` ${user.results[i].name.last}`});
            }
            this.user.setValues(fname,lname,city,state, friends);
        })
    }

    async getNewAboutMe() {
            const response= await $.get(`https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1`);
            return response;
    }

    generateNewAboutMe(){
        this.getNewAboutMe().then(text =>{
            this.aboutMe.setValue(text);
        })
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
