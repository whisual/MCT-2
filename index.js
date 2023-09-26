// Getting elements

const searchBar = document.getElementById("search");
const btn = document.getElementById("btn2");
const result = document.getElementById("result");

const food = []

// API fetching

function fetchData() {
    const api = fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchBar.value}`)
    api.then((res) => {
        return res.json()
    }).then((data) => {
        data.recipes.map((ele) => {
            const obj = {
                photo: ele.image_url,
                publish: ele.publisher,
                title: ele.title,
                id: ele.recipe_id,
                link: ele.source_url,
                site: ele.publisher_url,
            }
            food.push(obj);
        })
    })
    console.log(food);
    food.map((item) => {
        getRecipe(item)
    })
}

// Creating output

const getRecipe = (item) => {

    //Card HTML

    let img = document.createElement("img")
    let head = document.createElement("h4")
    let p = document.createElement("h5")
    let a1 = document.createElement("a")
    let a2 = document.createElement("a")
    let b = document.createElement("button")
    let card = document.createElement("div")
    img.src = item.photo;

    head.innerText = item.title
    p.innerText = item.publish
    a1.href = item.link
    a2.href = ``
    a1.innerHTML = "Source Url"
    a1.target = `blank`
    b.appendChild(a2)
    a2.innerHTML = "Back To Home"

    card.appendChild(img)
    card.appendChild(head)
    card.appendChild(p)
    card.appendChild(a1)
    card.appendChild(b)
    card.appendChild(a2)
    card.classList.add('card')
    result.appendChild(card)

    // Card CSS

    card.style.width = '400px'
    card.style.height = '500px'
    card.style.border = '1px solid grey'
    card.style.borderRadius = '20px'
    card.style.margin = '50px'
    card.style.boxShadow = '10px 10px 10px 10px grey'
    a1.style.textDecoration = 'none'
    a1.style.color = 'green'
    a2.style.textDecoration = 'none'
    a2.style.color = 'red'
    img.style.height = '400px'
    b.style.backgroundColor = 'red'
}

// Eventlistner for output

btn.addEventListener(`click`, (e) => {
    e.preventDefault()
    fetchData();
})
