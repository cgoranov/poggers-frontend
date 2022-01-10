class Game {

    constructor({name, platform, genres}){
        this.name = name
        this.platform = platform
        this.genres = genres
    }

    renderGame(){
        return(
            `<li id="game-${this.id}" data-id=${this.id}>
                <div>${this.name}</div>
                <div>${this.publisher}</div>
                <div>${this.genres}</div>
            </li>`
        )
    }

    addToDom(){
        const gamesContainer = document.getElementById("games-container");
        gamesContainer.innerHTML += this.renderGame()
    }



}