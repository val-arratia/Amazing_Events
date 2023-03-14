let eventsList= data.events;


const cards = document.getElementById('cards')
const card = document.getElementById('card')
const fragment = document.createDocumentFragment()


function complete(events){
    events.forEach(element => {
        card.querySelector('.card-img img').src = element.image
        card.querySelector('.card-title').textContent = element.name
        card.querySelector('.card-text').textContent = element.description
        card.querySelector('.card-date').textContent = element.date
        card.querySelector('.card-price p').textContent = "Price: $"+element.price
        

        const clone = card.cloneNode(true)
        fragment.appendChild(clone)
        cards.appendChild(fragment)
    });

}

complete(eventsList)

