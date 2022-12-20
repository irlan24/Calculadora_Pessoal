
 
 
 let visor = document.querySelector('#visor-calc')
 

 // Teclado numeral
 
 
 Calc_numb1 = () =>{

    let discador = document.querySelector('#numb_1')
    visor.innerHTML += parseInt(discador.value)
}
    
 Calc_numb2 = () =>{
    let discador = document.querySelector('#numb_2')
    visor.innerHTML += parseInt(discador.value) 
    
 }
 Calc_numb3 = () =>{
    let discador = document.querySelector('#numb_3')
    visor.innerHTML += parseInt(discador.value)
 }
 Calc_numb4 = () =>{
    let discador = document.querySelector('#numb_4')
    visor.innerHTML += parseInt(discador.value)
 }
 Calc_numb5 = () =>{
    let discador = document.querySelector('#numb_5')
    visor.innerHTML += parseInt(discador.value)
 }
 Calc_numb6 = () =>{
    let discador = document.querySelector('#numb_6')
    visor.innerHTML += parseInt(discador.value)
 }
 Calc_numb7 = () =>{
    let discador = document.querySelector('#numb_7')
    visor.innerHTML += parseInt(discador.value)
 }
 Calc_numb8 = () =>{
    let discador = document.querySelector('#numb_8')
    visor.innerHTML += parseInt(discador.value)
 }
 Calc_numb9 = () =>{
    let discador = document.querySelector('#numb_9')
    visor.innerHTML += parseInt(discador.value)
 }
 Calc_numb0 = () =>{
    let discador = document.querySelector('#numb_0')
    visor.innerHTML += parseInt(discador.value)
 }

 // zerar contador
 let armazenar = []
 Clean = () =>{
    visor.innerHTML = null
    armazenar.length = 0

 }

// operadores matematicos

Res = () =>{
   
   

   return visor.innerHTML = Soma()
}

Soma = () =>{
   
   let valor = armazenar.push(parseInt(visor.textContent))
   visor.innerHTML = null 
   let valorSoma = null 
   for (i in armazenar){
      valorSoma += armazenar[i]
   }
   console.log(valorSoma) 
   return valorSoma
}
