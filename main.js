console.log ("jello")

const divThing = document.getElementById("card")

const testing = async() => {
    let req = await fetch("http://localhost:3000/brewery");
    let res = await req.json()
    console.log(res)
    res.forEach((brewery) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        div.style.width = "400px";
        div.style.border = "3px solid #333";
        div.style.margin = "10px";
        div.classList = "card"
        //div.style.float = "left"
        img.src = brewery.type_image;
        img.style.width = "10%";
        //let div2 = document.createElement("div")
        //let divParent = document.createElement("div")
        let h2 = document.createElement ("h2")
        let p = document.createElement ("p")
        h2.innerText = brewery.name
        h2.style.textAlign = "center";
        p.innerText = brewery.city_state
        p.style.textAlign = "center"
        div.addEventListener("click", () => {
         div.style.border = "3px solid dodgerblue"})
        // p.style.float = "right"
        div.append(img,h2,p);
        document.body.append(div);
        // for the image to make it go to the left, we need a img.style.float ("left")
        // and need to make for the text on the right side, need .float ("right")
    } )
}
testing()

