//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productoCompra = [];
var precioSumado = 0;
var productoCompra;
var totalGlobal;

function carrito(productoCompra) {
    let articulado = "";

    for (let i = 0; i < productoCompra.articles.length; i++) {
        
        articulado += `
        <a class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3">
                <img src="` + productoCompra.articles[i].src  + `" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ productoCompra.articles[i].name + `</h4>
                    
                </div>
                <input 
                    style="width:50px;" 
                    id="laCantidad${i}" 
                    onchange="calculoPrecio(${productoCompra.articles[i].unitCost},${i})" 
                    type="number" min="1" 
                    value=${productoCompra.articles[i].count}>
                <br><br><br>
                <p class="mb-1">`+ "Precio Unitario" + " " + correccionMoneda(productoCompra.articles[i].currency,i) + `</p>
                <div class="row">
                    <p>Subtotal producto</p>
                    <div class="subTotal"  id="identificador${i}"></div>
                </div>
            </div>
        </div>
        </a>
        `

    }
    document.getElementById("identificadorCarro").innerHTML = articulado;
};

function calculoPrecio(precio,i){
    let cantidad = parseInt(document.getElementById(`laCantidad${i}`).value);
    let subTotal=0;
    let total=0;
    let nuevoPrecio="";
    
    subTotal = cantidad*precio;
    for (let i = 0; i < productoCompra.articles.length; i++) {
        
        if (productoCompra.articles[i].currency === "UYU"){
            nuevoPrecio= ((parseInt(productoCompra.articles[i].unitCost))/40);
            total += nuevoPrecio * parseInt(document.getElementById(`laCantidad${i}`).value);
        }
        else{
        total += productoCompra.articles[i].unitCost * parseInt(document.getElementById(`laCantidad${i}`).value);
        }
    }
    totalGlobal=total;

    document.getElementById(`identificador${i}`).innerHTML =` ` + productoCompra.articles[i].currency + ` ` + subTotal; 
    document.getElementById(`costTot-Env`).innerHTML = "USD"+" "+total;
    document.getElementById("rapido").innerHTML =  "USD"+" "+Math.round(total*0.15);
    document.getElementById("estandar").innerHTML =  "USD"+" "+Math.round(total*0.07)
    document.getElementById("lento").innerHTML = "USD"+" "+Math.round(total*0.05)
    
};

function correccionMoneda(currency,i){
    let nuevaCurrency="";
    let nuevoPrecio="";

    if (currency === "UYU"){
        nuevaCurrency="USD";
        nuevoPrecio= ((parseInt(productoCompra.articles[i].unitCost))/40);
    }
    else{
        nuevaCurrency=currency;
        nuevoPrecio=productoCompra.articles[i].unitCost;

    }
    precioSumado = nuevoPrecio + precioSumado;
    return (nuevaCurrency + ` ` +nuevoPrecio + ` `+ sumarPrecioUY(currency,i));
}

function sumarPrecioUY(currency,i){

    if (currency === "UYU") {
        return( `~` + ` ` + currency + ` ` + productoCompra.articles[i].unitCost  );
        
    }
    else{
        return( `~` + ` ` + "UYU" + ` ` + (productoCompra.articles[i].unitCost*40)  )
    }
};

function desplegoMetodo(variable){
    let tipoDeMetodo

    if ( variable = metodoDePagoT) {
        tipoDeMetodo="usaste tarjeta"
    }
    else{
        tipoDeMetodo="usaste cuenta bancaria"
    }
};

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(CART_INFO_URL).then(function (resultado) { // acá tengo mi único producto
        if (resultado.status === "ok") {

            productoCompra = resultado.data;
            carrito(productoCompra);

        }
    });
    document.getElementById("metodoDePagoT").addEventListener("change", function(){
        metodoDePagoT = this.value;
        console.log("hola")
        desplegoMetodo(metodoDePagoT);
    });

    document.getElementById("metodoDePagoCB").addEventListener("change", function(){
        metodoDePagoCB = this.value;
        desplegoMetodo(metodoDePagoCB);
    });

    document.getElementById("goldradio").addEventListener("change", function(){
        document.getElementById("costTot").innerHTML = "USD"+" "+Math.round(totalGlobal*1.15) 
    });

    document.getElementById("premiumradio").addEventListener("change", function(){
        document.getElementById("costTot").innerHTML = "USD"+" "+Math.round(totalGlobal*1.07) 
    });

    document.getElementById("standardradio").addEventListener("change", function(){
        document.getElementById("costTot").innerHTML = "USD"+" "+Math.round(totalGlobal*1.05) 
    });

    document.getElementById("comprando").addEventListener("click", function () {
        let inputStart = document.getElementById("start");
        let inputCuotas = document.getElementById("cuotas");
        let inputNombreComp = document.getElementById("nombreCompleto");
        let inputNumCuen = document.getElementById("numeroCuenta");
        let inputTel = document.getElementById("telefono");
        let inputDir = document.getElementById("direccionn");
        let camposCompletos = true;

        if (inputCuotas.value === '') {
            camposCompletos = false;
            inputCuotas.classList.add("invalid")
        } 
        else {
            inputCuotas.classList.remove("invalid");         
        }
        if (inputNombreComp.value === '') {
            camposCompletos = false;
            inputNombreComp.classList.add("invalid");
        } 
        else {
            inputNombreComp.classList.remove("invalid");
        }
        if (inputNumCuen.value === '') {
            camposCompletos = false;
            inputNumCuen.classList.add("invalid")
        } 
        else {
            inputNumCuen.classList.remove("invalid");
        }
        if (inputTel.value === '') {
            camposCompletos = false;
            inputNinputTelombreComp.classList.add("invalid");
        } 
        else {
            inputTel.classList.remove("invalid");
        }
        if (inputDir.value === '') {
            camposCompletos = false;
            inputDir.classList.add("invalid");
        } 
        else {
            inputDir.classList.remove("invalid");
        }
        if (camposCompletos) {
            
            alert("Bueno, algún día aremos la compra.. jaja")
        } 
        else {
            alert("Ingresar los datos por favor");
        }
    })
});