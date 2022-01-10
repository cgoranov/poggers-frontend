class Game {

    constructor(name, publisher, genres){
        this.name = name
        this.publisher = publisher
        this.genres = genres
    }

    renderGame(){
        return(
            `<li id="store-${this.id}" data-id=${this.id}>
                <span>${this.name}</span> 
            </li>`
        )
    }

}