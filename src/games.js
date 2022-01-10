class Game {

    constructor(name, publisher, genres){
        this.name = name
        this.publisher = publisher
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

    

}