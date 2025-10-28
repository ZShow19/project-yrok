/*let sveta = (30 + 50 + 40) / 3
console.log(sveta, 'Sveta');

let dima = (48 + 60 + 55) / 3
console.log(dima, 'Dima');

let maksim = (52 + 39 + 45) / 3
console.log(maksim, 'Maksim');

switch(true) {
    case sveta > dima && sveta > maksim:
        console.log('Win Sveta');
        break;
    case dima > sveta && dima > maksim:
        console.log('Win Dima');
        break;
    case maksim > sveta && maksim > dima:
        console.log('Win Maksim');
        break; 
    default:
        console.log('Pat');
        break;   
}*/

/*let country = ['Poland ', 'Norvegia ', 'Kazahstan ', 'Findland ', 'Italia ']

country.push('Brazil ', 'China ')
console.log('Push ' + country)
country.splice(2,2)
console.log('Splice ' + country)

country.unshift('Mongolia')
console.log('Unshift ' + country)

country[1] = 'Sweden'
console.log('Change 2 ' + country)

country.forEach(function(country,index) {
    console.log (country, index)
})*/

/*t calculator = {
    num1: null,
    num2: null,
    read() {
        this.num1 = +prompt('Entry first num', 0)
        this.num2 = +prompt('Entry second num', 0)
    },
    sum() {
        return this.num1 + this.num2
    },
    mul() {
        return this.num1 * this.num2
    }
}

calculator.read()
console.log(calculator.sum());
console.log(calculator.mul());*/


const iPhone = document.querySelector('.iPhone')
const samsung = document.querySelector('.samsung')
iPhone.addEventListener('click', function(event) {
    let clickTarget = event.target 
    let activeButton = iPhone.querySelector('.active')
    let priceItem = iPhone.querySelector('.price')
    let currentPrice
    let activeButtonColor = iPhone.querySelector('.active-border')

    if (clickTarget.classList.contains('color-btn') && !clickTarget.classList.contains('active-border')) {
        clickTarget.classList.add('active-border')
        activeButtonColor.classList.remove('active-border')
    }

    if (clickTarget.classList.contains('btn') && !clickTarget.classList.contains('active')) {
        clickTarget.classList.add('active')
        activeButton.classList.remove('active')
    }

    currentPrice = clickTarget.getAttribute('data-size')
    if (currentPrice === 'medium') {
        priceItem.textContent = 'Price 80.000$'
    }
    if (currentPrice === 'large') {
        priceItem.textContent = 'Price 180.000$'
    }
})

