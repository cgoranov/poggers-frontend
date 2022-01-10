class Game {

    constructor({id, name, platform, genres}){
        this.id = id
        this.name = name
        this.platform = platform
        this.genres = genres
    }

    renderGame(){
        return(
            `<li id="game-${this.id}" data-id=${this.id}>
                <div class="game-title" > Title: ${this.name}</div>
                <div class="game-platform" > Platform: ${this.platform}</div>
                <div> Genres: </div>
            </li>`
                )
    }

    renderGenres(){
        const gamesLi = document.getElementById(`game-${this.id}`)
        this.genres.forEach(g => {
            gamesLi.innerHTML += `<div class="game-genre">${g.name}</div>`
        })
    }


    addToDom(){
        const gamesContainer = document.getElementById("games-container");
        gamesContainer.innerHTML += this.renderGame()
        this.renderGenres()
    }

}