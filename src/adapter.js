class Adapter {

    constructor(url) {
        this.url = `${url}/api/v1/games`
    }

    getGames(){
        fetch(this.url) 
        .then(r => r.json())
        .then(games => {
            games.forEach(game => {
                const g = new Game(game)
                g.addToDom()
            })
        })
    }

    createGames(formInputs){
        fetch(this.url, {
            method: "POST",
            headers: {
                "Content Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                game: {
                    name: formInputs["name-input"],
                    platform: formInputs["platform-input"],
                    relase_month: formInputs["release-month-input"],
                    genreAttributes: [{name: formInputs["genre-input1"]}, {name: formInputs["genre-input2"]}]
            })
        })
        
    }


}