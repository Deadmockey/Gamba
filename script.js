const delay = ms => new Promise(res => setTimeout(res, ms));

let spin_btn = document.getElementsByClassName("spin-btn")
let slot1 = document.getElementById("slot1")
let slot2 = document.getElementById("slot2")
let slot3 = document.getElementById("slot3")

const symbols = [{
    symbol: 1,
    chance: 0.45
},
{
    symbol: 2,
    chance: 0.2
},
{
    symbol: 3,
    chance: 0.15
},
{
    symbol: 4,
    chance: 0.1
},
{
    symbol: 5,
    chance: 0.07
},
{
    symbol: 6,
    chance: 0.03
}]

spin_btn[0].addEventListener("click", spin_slots)


function weighted_spin() {
    let rand = Math.random()
    for (let i = 0; i < symbols.length; i++) {
        let symbol = symbols[i]
        if (rand < symbol.chance) {
            return symbol.symbol
        }
        rand -= symbol.chance
    }
}

async function spin_slots() {
    let time = 500
    for (let i = 0; i < 30; i++) {
        slot1.textContent = Math.ceil(Math.random() * 7)
        slot2.textContent = Math.ceil(Math.random() * 7)
        slot3.textContent = Math.ceil(Math.random() * 7)
        await delay(Math.sqrt(time))
        time += 150
    }
    slot1.textContent = weighted_spin()

    for (let i = 0; i < 25; i++) {
        slot2.textContent = Math.ceil(Math.random() * 7)
        slot3.textContent = Math.ceil(Math.random() * 7)
        await delay(Math.sqrt(time))
        time += 250
    }
    slot2.textContent = weighted_spin()

    for (let i = 0; i < 15; i++) {
        slot3.textContent = Math.ceil(Math.random() * 7)
        await delay(Math.sqrt(time))
        time += 600
    }
    slot3.textContent = weighted_spin()
}