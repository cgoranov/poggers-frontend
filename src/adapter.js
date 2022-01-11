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
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                game: {
                    name: formInputs["name-input"],
                    platform: formInputs["platform-input"],
                    comment_attributes: [{content: formInputs["comment-input1"]}, {content: formInputs["comment-input2"]}]
                }
            })
        })
        .then(resp => resp.json())
        .then(data => {  
            if (data.status === 201){
                const g = new Game(data.game);
                g.addToDom()
            } else {
                alert(data.errors)
            }
        })
        .catch(err => console.error('Error', err))
    }


}