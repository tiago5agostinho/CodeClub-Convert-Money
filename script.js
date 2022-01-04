const button = document.getElementById("button-convert")
const select = document.getElementById("select")
const dólar = 5.2
const euro = 5.9
const bitcoin = 265582.41

const convert = () => {
    const input = document.getElementById("input")
    const pDinheiro = document.getElementById("dinheiro")
    const pCurrency = document.getElementById("currency")
    

  pDinheiro.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL",
    }).format(input.value)

    if(select.value === "US$ Dólar americano"){
        pCurrency.innerHTML = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD",
    }).format(input.value / dólar)
}
    
    if(select.value === "€ Euro"){
        pCurrency.innerHTML = new Intl.NumberFormat('de-DE', {
        style: "currency",
        currency: "EUR",
    }).format(input.value / euro)
    }

    if(select.value === "Bitcoin"){
        pCurrency.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "BTC",
        }).format(input.value / bitcoin)
    }
}

const country  = () =>{
    const countryImg = document.getElementById("flag-image")
    const  moneyName = document.getElementById("name-do-currency")

    if(select.value === "US$ Dólar americano"){
        countryImg.src="./assets/estados-unidos (1) 1.png"
        moneyName.innerHTML= "Dolar Americano"
    }

    if(select.value === "€ Euro"){
        countryImg.src="./assets/euro.png"
        moneyName.innerHTML = "Euro"
    }

    if(select.value === "Bitcoin"){
        countryImg.src = "./assets/bitcoin.png"
        moneyName.innerHTML = "Bitcoin"
    }
    convert()
}


button.addEventListener('click', convert)
select.addEventListener('change', country)