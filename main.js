console.log ("jello")

const testing = async() => {
    let req = await fetch("http://localhost:3000/brewery");
    let res = await req.json()
    console.log(res)
    res.forEach((brewery) => {
        let cardDiv = document.createElement("div");
        cardDiv.classList ='card'
        
        let infoDiv = document.createElement('div')
        infoDiv.classList = "info-div"
       
        let smallIcon = document.createElement('img')
        smallIcon.classList = "small-icon"
        smallIcon.src = brewery.type_image
       
        const cardBreweryName = document.createElement('h2')
        cardBreweryName.classList = "card-brew-name"
       
        const cityState = document.createElement('p')
        cityState.classList = "city-state"

        cardDiv.addEventListener('mouseover', () => {
            document.getElementById('card').style.height = "50px"
        })


        cardBreweryName.innerText = brewery.name
        cityState.innerText = brewery.city_state
        infoDiv.append(cardBreweryName, cityState);
        cardDiv.append(smallIcon, infoDiv)
        document.body.append(cardDiv)
    } )
}
testing()

