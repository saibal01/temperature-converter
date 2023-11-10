let celcicusInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document. querySelector('.button button')


function roundNumber (number){
    return Math.round(number*100)/100
}

/*ctemp to ftemp & ktemp*/

celcicusInput. addEventListener('input',function(){
let cTemp = parseFloat(celcicusInput.value)
let fTemp = (cTemp*(9/5))+32
let kTemp = cTemp +273.15

fahrenheitInput.value = roundNumber(fTemp)
kelvinInput.value = roundNumber(kTemp)
})

/*ftemp to ctemp & ktemp*/

fahrenheitInput. addEventListener('input',function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp -32)*(5/9)
    let kTemp = (fTemp -32)*(5/9) + 273.15
    
    celcicusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
    })

/*ktemp to ctemp & ftemp*/

    kelvinInput. addEventListener('input',function(){
        let kTemp = parseFloat(kelvinInput.value)
        let cTemp = kTemp - 273.15
        let fTemp = (kTempTemp - 273.15)*(9/5) + 32
        
        celcicusInput.value = roundNumber(cTemp)
        fahrenheitInput.value = roundNumber(fTemp)
        })

        btn.addEventListener('click',()=>{
            celcicusInput.value=""
            fahrenheitInput.value=""
            kelvinInput.value=""
        
        })