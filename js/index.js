function calcular (){
    
    let strA= document.getElementById("valorA").value
    let strB= document.getElementById("valorB").value
    let strC= document.getElementById("valorC").value

    if (strA===""){
        alert("Valor en Blanco")
    }else if (strB===""){
        alert("Valor en blanco")
    }else if (strC===""){
        alert("Valor en Blanco")
    }else {
        let a = parseInt(strA)
        let b = parseInt(strB)
        let c = parseInt(strC)
    
    if (a===0){
        alert("Valor de A no puede ser igual a Cero")
    }else {
        let discriminante =b * b - 4 * a * c
        if (discriminante >=0){
            let x1= (-b + Math.sqrt(discriminante))/(2*a)
            let x2= (-b - Math.sqrt(discriminante))/(2*a)
            document.getElementById("valorX1").value=x1
            document.getElementById("valorX2").value=x2
            
        }else 
            alert ("la Raiz cuadrada no puede ser negativa")
    }
}
}