import items from '../json/planets.json' assert {type: 'json'}
//this is a raw
const _planets = items.Planets;
var _arr = _planets;

let _age = document.getElementById("age");

document.getElementById("button").onclick = function() {Calc()};

function Calc(){   
    _arr.forEach(item => {
        let n = _age.value;

        n *= _arr[2].days;
        n /= item.days;
        n = Math.floor(n);
        console.log(n);
    });
}
