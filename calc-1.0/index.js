var x = 0
var y = 0
var len = 0
var dat = false
var sign = ""
var minus = false
var first = true
var liczba = true
var xx = 0
var output = document.getElementById('op')
var mp = document.getElementById('minus')

function num(numer) {
    if(len < 8){
        if(first == true & numer !== 11){
            output.innerHTML = numer
            first = false
            len += 1 
        }else if(first == false){
            if(numer == 11 & dat == false){
                output.innerHTML += "."
                len += 1 
                dat = true
            }else if(numer !== 11){
                output.innerHTML += numer
                len += 1 
            }else {}
        }
    }
}

function nr() {
    if(sign == "-"){
        x = x - y
        //console.log(x)
        if(x.toString().length <= 10){
            output.innerHTML = x
        }else{
            output.innerHTML = "ERROR"
        }
    }else if(sign == "+"){
        x = Number(x) + Number(y)
        //console.log(x)
        if(x.toString().length <= 10){
            output.innerHTML = x
        }else{
            output.innerHTML = "ERROR"
        }
    }else if(sign == "/"){
        x = x / y
        //console.log(x)
        if(x.toString().length <= 10){
            output.innerHTML = x
        }else{
            output.innerHTML = "ERROR"
        }
    }else if(sign == "*"){
        x = x * y
        //console.log(x)
        if(x.toString().length <= 10){
            output.innerHTML = x
        }else{
            output.innerHTML = "ERROR"
        }
    }else if(sign == '='){
        if(x.toString().length <= 10){
            output.innerHTML = x
        }else{
            output.innerHTML = "ERROR"
        }
        //console.log('wynik: ' + x)
    }
}

function action(smf) {
    dat = false
    len = 0
    first = true
    if(liczba == true){
        x = output.innerHTML
        if(minus == true){
            x = x - 2 * x
        }
        //console.log(x)
        liczba = false
    }else{
        y = output.innerHTML
        if(minus == true){
            y = y - 2 * y
        }
    }
    nr()
    liczby = true
    sign = smf
    //console.log(sign)
}

function czysc() {
    len = 0
    x = 0
    y = 0
    sign = ""
    first = true
    liczba = true
    output.innerHTML = ""
}

function min() {
    if(minus == true){
        mp.innerHTML = "+"
        output.innerHTML = 
        minus = false
    }else if(minus == false){
        mp.innerHTML = "-"
        minus = true
    }
}
