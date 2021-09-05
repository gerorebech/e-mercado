//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productos = [];

function muestroproductos(array) {

    let contenido = "<br><hr><br>";
    for (let i = 0; i < array.length; i++) {
        let articulo = array[i];

        contenido += `
            <a href="category-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + articulo.imgSrc + `" alt="` + articulo.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ articulo.name + `</h4>
                            <small class="text-muted">` + articulo.soldCount + ` artículos</small>
                        </div>
                        <p class="mb-1" >` + articulo.description + `</p>
                        <br><br><br>
                        <p class="mb-1">`+ "Precio" + " " + articulo.currency + articulo.cost + `</p>
                        
                    </div>
                </div>
            </a>
            `
        //contenido += "Artículo:" + articulo.name + "<br>"
        //contenido += "Descripción:" +articulo.description +"<br>"
        //contenido += "Costo:" + articulo.currency + articulo.cost + "<br><br>"
    }
    document.getElementById("identificador").innerHTML = contenido
}

function mostrar() {
    let precios = '';

    for (let i = 0; i < precios.length; i++) {
        let producto = producto[i]

        if (producto.precio.toLowerCase().indexOf(buscar) != -1) {

            producto += `
            <a href="category-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + articulo.imgSrc + `" alt="` + articulo.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ articulo.name + `</h4>
                            <small class="text-muted">` + articulo.soldCount + ` artículos</small>
                        </div>
                        <p class="mb-1" >` + articulo.description + `</p>
                        <br><br><br>
                        <p class="mb-1">`+ "Precio" + " " + articulo.currency + articulo.cost + `</p>
                        
                    </div>
                </div>
            </a>
            `
        }

    }
    document.getElementById("mostrar").innerHTML = precios;

}
document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL).then(function (resultado) {
        if (resultado.status === "ok") {

            productos = resultado.data;
            muestroproductos(productos);
        }
    })

    document.getElementById("buscar").addEventListener('input', function () {
        productos = document.getElementById("buscar").value.toLowerCase();
        mostrar(PRODUCTS_URL)
    })
});

