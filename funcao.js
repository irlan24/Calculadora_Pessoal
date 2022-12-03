
 
 
 
 
 
 Calculadora = () =>{
    
    let visor = document.querySelector('#visor-calc')
    let discador = document.querySelector('.numb-button')
    
    
    switch (discador.value){
        case '1':
            visor.innerHTML += 1
            
            break
        case '2':
            visor.innerHTML += 2
            
            break;
    }
    

}


