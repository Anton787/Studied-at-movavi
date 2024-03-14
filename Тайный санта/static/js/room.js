// Рандом
function press() {
    let name1 = document.getElementById('1');
    let present1 = document.getElementById('1p');
    var person1 = (name1.value + " Желаемый подарок: " + present1.value)

    let name2 = document.getElementById('2');
    let present2 = document.getElementById('2p');
    var person2 = (name2.value + " Желаемый подарок: " + present2.value)

    let name3 = document.getElementById('3');
    let present3 = document.getElementById('3p');
    var person3 = (name3.value + " Желаемый подарок: " + present3.value)

    let name4 = document.getElementById('4');
    let present4 = document.getElementById('4p');
    var person4 = (name4.value + " Желаемый подарок: " + present4.value)

    let name5 = document.getElementById('5');
    let present5 = document.getElementById('5p');
    var person5 = (name5.value + " Желаемый подарок: " + present5.value)

    let name6 = document.getElementById('6');
    let present6 = document.getElementById('6p');
    var person6 = (name6.value + " Желаемый подарок: " + present6.value)

    let random = [person1, person2, person3, person4, person5, person6]
    let a = Number(random.length) / 2

   console.log(random)

}

let btn = document.getElementById('btn')

btn.addEventListener('click', press)

