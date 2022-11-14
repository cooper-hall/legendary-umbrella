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
        let h2 = document.createElement ("h2")
        let p = document.createElement ("p")
        // div.style.width = "300px";
        // div.style.border = "3px solid #333";
        // div.style.margin = "5px";
        img.src = brewery.type_image;
        img.style.width = "5%";
        //img.style.float = "left"
        h2.innerText = brewery.name
        h2.style.textAlign = "center";
        //h2.style.float ="right"
        p.innerText = brewery.city_state
        p.style.textAlign = "center"
        div.append(h2, img, p);
        document.body.append(div);
        // for the image to make it go to the left, we need a img.style.float ("left")
        // and need to make for the text on the right side, need .float ("right")
        img.classList = "icon"
    } )
}
testing()

