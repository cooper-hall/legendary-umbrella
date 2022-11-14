console.log ("jello")

const divThing = document.getElementById("card")

const testing = async() => {
    let req = await fetch("http://localhost:3000/brewery");
    let res = await req.json()
    console.log(res)
    res.forEach((brewery) => {
        let div = document.createElement("div");
        div.classList ='card'
        let img = document.createElement("img");

        h2.innerText = brewery.name
        h2.style.textAlign = "center";
        p.innerText = brewery.city_state
        p.style.textAlign = "center"
        div.append(h2, img, p);

        div.addEventListener("click", () => {
         div.style.border = "3px solid dodgerblue"})
        // p.style.float = "right"
        div.append(img,h2,p);

        document.body.append(div);
        // for the image to make it go to the left, we need a img.style.float ("left")
        // and need to make for the text on the right side, need .float ("right")
        img.classList = "icon"
    } )
}
testing()

