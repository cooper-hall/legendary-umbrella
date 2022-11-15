console.log ("jello")


// const card = document.getElementById('card')
// const breweryName = document.getElementById('name')
// const cityState = document.getElementById('city_state')

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

        // cardDiv.addEventListener('mouseleave', () => {
            
            // })  
         cardDiv.addEventListener('mouseover', () => { 
            cardDiv.classList.add('zoom') })    
         
         cardDiv.addEventListener('mouseout', () => { 
            cardDiv.classList.remove('zoom') })
            cardBreweryName.innerText = brewery.name
            //cardBreweryName.style.textAlign = "center";
            cityState.innerText = brewery.city_state
            //cityState.style.textAlign = "center"
            infoDiv.append(cardBreweryName, cityState);
            cardDiv.append(smallIcon, infoDiv)
            //div.addEventListener("click", () => {
                //div.style.border = "3px solid dodgerblue"})
                
                //document.body.append(div);
                // for the image to make it go to the left, we need a img.style.float ("left")
                // and need to make for the text on the right side, need .float ("right")
                //img.classList = "icon"
                document.body.append(cardDiv)
    } )
}
testing()

