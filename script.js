const delay = ms => new Promise(res => setTimeout(res, ms));

let spin_btn = document.getElementsByClassName("spin-btn")
let slot_1 = document.getElementById("slot-1")
let slot_2 = document.getElementById("slot-2")
let slot_3 = document.getElementById("slot-3")

// The weighted chance of a symbol appearing
// 0 means it will randomize as I know no
// better way of implementing this lmao
const symbols = [{
    symbol: 0,
    chance: 0.30
}, {
    symbol: 1,
    chance: 0.20
},
{
    symbol: 2,
    chance: 0.17
},
{
    symbol: 3,
    chance: 0.13
},
{
    symbol: 4,
    chance: 0.10
},
{
    symbol: 5,
    chance: 0.07
},
{
    symbol: 6,
    chance: 0.03
}]

spin_btn[0].addEventListener("click", play_game)

// Returns the symbol chosen from random
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

// Does the actual animation of the spin
async function spin_slots(symbol_1, symbol_2, symbol_3) {
    const time = 500

    // Randomizes the numbers to make it look like its spinning
    for (let i = 0; i < 30; i++) {
        slot_1.textContent = Math.ceil(Math.random() * 6)
        slot_2.textContent = Math.ceil(Math.random() * 6)
        slot_3.textContent = Math.ceil(Math.random() * 6)
        await delay(Math.sqrt(time))
        time += 150
    }
    slot_1.textContent = symbol_1

    for (let i = 0; i < 25; i++) {
        slot_2.textContent = Math.ceil(Math.random() * 6)
        slot_3.textContent = Math.ceil(Math.random() * 6)
        await delay(Math.sqrt(time))
        time += 200
    }
    slot_2.textContent = symbol_2

    for (let i = 0; i < 15; i++) {
        slot_3.textContent = Math.ceil(Math.random() * 6)
        await delay(Math.sqrt(time))
        time += 600
    }
    slot_3.textContent = symbol_3
}

async function play_game() {
    let symbol_1 = weighted_spin()
    let symbol_2 = symbol_1
    let symbol_3

    // This Spaghetti code makes sure, when the user loses 
    // the output is randomized
    if (symbol_1 == 0) {
        symbol_1 = Math.ceil(Math.random() * 6)
        symbol_2 = Math.ceil(Math.random() * 6)
        symbol_3 = Math.ceil(Math.random() * 6)
        while (symbol_1 == symbol_3) {
            symbol_3 = Math.ceil(Math.random() * 6)
        }
    }

    spin_slots(symbol_1, symbol_2, symbol_3)
}