
// UPGRATE
var buy_card = document.getElementById("buyCard")
var buy_cooler = document.getElementById("buyCooler")



function upgrate_card() {
    let IlonCoin = document.getElementById("coins").innerHTML
    if (Number(IlonCoin) >= 100) {
        let card = document.getElementById("card").innerHTML
        document.getElementById("card").innerHTML = Number(card) + 1
        document.getElementById("coins").innerHTML = Number(IlonCoin) - 100
    } else {
        let lack = 100 - Number(IlonCoin)
        alert("Вам не хватает " + lack + " IlonCoins")
    }
}

buy_card.addEventListener("click", upgrate_card)

function upgrate_cooler() {
    let IlonCoin = document.getElementById("coins").innerHTML
    if (Number(IlonCoin) >= 10) {
        let coolers = document.getElementById("cooler").innerHTML
        document.getElementById("cooler").innerHTML = Number(coolers) + 1
        document.getElementById("coins").innerHTML = Number(IlonCoin) - 10
    } else {
        let lack = 10 - Number(IlonCoin)
        alert("Вам не хватает " + lack + " IlonCoins")
    }
}

buy_cooler.addEventListener("click", upgrate_cooler)
