class Render{
    
    renderPage(data: any []) {         
        this.renderUser(data[0]);
        this.renderQuote(data[1]);
        this.renderPokemon(data[2]);
        this.renderAboutMe(data[3]);
        
    }

    renderUser(user: any){
        $(".user-container").empty();
        const source = $('#user-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({user});
        $('.user-container').append(newHTML);
        this.renderFriends(user);
    }

    renderFriends(user: any){
        $(".friends-container").empty();
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({user});
        $('.friends-container').append(newHTML);
    }

    renderQuote(quote: any){
        $(".quote-container").empty();
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template( quote );
        $('.quote-container').append(newHTML);
    }

    renderPokemon(pokemon: any){
        $(".pokemon-container").empty();
        const source = $('#pokemon-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template( {pokemon} );
        $('.pokemon-container').append(newHTML);
    }

    renderAboutMe(aboutMe: any){
        $(".meat-container").empty();
        const source = $('#aboutMe-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template( {aboutMe} );
        $('.meat-container').append(newHTML);
    }
}