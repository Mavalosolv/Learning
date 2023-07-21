
    function validarima(input){

    let imagen = input.files[0]
    let arr = ['image/jpg','image/jpeg','image/png']

    if(arr.indexOf(imagen.type) != -1){
    console.log('Es Valido')
}else{
    input.value =""
    console.log('No es Valido')
    alert('Selecciona un archivo valido')
}
    console.log(input)
}