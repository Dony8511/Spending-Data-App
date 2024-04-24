let data = [
    {
        "day": "mon",
        "amount": 15.25
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 62.36
    },
    {
        "day": "thu",
        "amount": 20.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]


let AllNums = []

for (let item of data) {
    AllNums.push(item.amount);
}
// console.log(AllNums)
let date = new Date()
console.log(date.getDay())
let CurrDay = '';
if (date.getDay() === 1) {
    CurrDay = 'mon'
} else if (date.getDay() === 2) {
    CurrDay = 'tue'

} else if (date.getDay() === 3) {
    CurrDay = 'wed'

} else if (date.getDay() === 4) {

    CurrDay = 'thu'

} else if (date.getDay() === 5) {
    CurrDay = 'fri'

} else if (date.getDay() === 6) {
    CurrDay = 'sat'

} else if (date.getDay() === 7) {
    CurrDay = 'sun'

}


let MaxNum = Math.max(...AllNums)

let Summ = 0;
for (let item of data) {
    Summ += item.amount;
}
document.querySelector('h2.total').innerText = '$' + Summ * 4;

let grph = document.querySelector('.graph');


for (let item of data) {
    // console.log(item.day + ' ' + item.amount)

    let gph = document.createElement('div');
    gph.setAttribute("class", 'gph col');

    let vis = document.createElement('div');
    vis.setAttribute('id', '0');
    vis.setAttribute('class', 'vis');
    vis.style.height = item.amount / MaxNum * 100 + '%';

    if (item.amount === MaxNum) {
        vis.style.backgroundColor = 'var(--accent2)'
    }


    let day = document.createElement('p')
    day.setAttribute('class', 'day')
    day.innerText = item.day;
    if(CurrDay === item.day){
        day.setAttribute('class', 'Curr')
    }

    let tip = document.createElement('p');
    tip.setAttribute('class', 'tip');
    tip.innerText = '$' + item.amount;


    gph.appendChild(vis);
    gph.appendChild(day);
    gph.appendChild(tip);


    grph.appendChild(gph);
}

//<div class="gph col">
//
//      <div id="0" class="vis">
//      </div> <p class="day">Mon</p>
//
// </div>