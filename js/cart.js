//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productoCompra = [];
var precioSumado = 0;

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
                <input style="width:50px;" id="laCantidad${i}" onchange="calculoPrecio(${productoCompra.articles[i].unitCost},${i})" type="number" min="1" value=${productoCompra.articles[i].count} >
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
    document.getElementById("costTot-Env").innerHTML = ` `+ `USD` + ` ` + precioSumado;
};

function calculoPrecio(precio,i){
    let cantidad = parseInt(document.getElementById(`laCantidad${i}`).value);

    subTotal = cantidad*precio;
    document.getElementById(`identificador${i}`).innerHTML =` ` + productoCompra.articles[i].currency + ` ` + subTotal; 
    
};

/*function calcTotal(){
    let total = 0;
    let subs = document.getElementsByClassName("subTotal");
    for (let i = 0; i < subs.length; i++) {
        total += parseInt(subs[i].innerHTML);
        console.log(total);
    }
    document.getElementById("costTot").innerHTML = total;
}*/

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


document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(CART_INFO_URL).then(function (resultado) { // acá tengo mi único producto
        if (resultado.status === "ok") {

            productoCompra = resultado.data;
            carrito(productoCompra);
        }
    });
});