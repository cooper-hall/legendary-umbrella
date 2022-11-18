console.log ("jello")

const bigDivInfo = document.getElementsByClassName("big-div-info");
const bigBrewName = document.getElementById("big-brewery-name");
const bigBrewType = document.getElementById("big-brewery-type");
const breweryAddress = document.getElementById("brewery-address");
const breweryUrl = document.getElementById("brewery-url");
const bigBrewImage = document.getElementById("big-image");
const cheersImg = document.getElementById("empty-beer-image");
const breweryList = document.getElementById("brewery-list");

const testing = async() => {
    let req = await fetch("http://localhost:3000/brewery");
    let res = await req.json()
    //console.log(res)
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
        cityState.innerText = brewery.city_state
 
        cardDiv.addEventListener('mouseover', () => { 
            cardDiv.classList.add('zoom') })    
         
        cardDiv.addEventListener('mouseout', () => { 
            cardDiv.classList.remove('zoom') })
            cardBreweryName.innerText = brewery.name
        
        cardDiv.addEventListener("click", () => {
          selectBrewery(brewery);
          cheersImg.src =
            "https://www.iconpacks.net/icons/2/free-beer-icon-1786-thumb.png";
          console.log(selectBrewery);
        });

        
           
        infoDiv.append(cardBreweryName, cityState);
        cardDiv.append(smallIcon, infoDiv)   
        breweryList.append(cardDiv)

    } )
}

const selectBrewery = (brewery) => {
    bigBrewName.textContent = brewery.name;
    //console.log(bigBrewName);
    bigBrewType.innerText = brewery.brewery_type;
    breweryAddress.innerText = brewery.address;
    breweryUrl.innerText = brewery.website;
    breweryUrl.href = brewery.website;
    bigBrewImage.src = brewery.image;
    cheersImg.addEventListener("click", () => {
      cheersImg.src =
      "https://i.pinimg.com/564x/c6/1c/a5/c61ca5bebd5fac190227f602ab0d6fe8.jpg";
    });
  };
;

testing()

