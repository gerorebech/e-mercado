//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var producto = [];
    listaDeProductos = [];


function MuestroProductos(producto) {
    let contenido="";

    contenido = `
            <a class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + producto.images[2] + `" alt="` + producto.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ producto.name + `</h4>
                        
                        <small class="text-muted">` + producto.soldCount + ` artículos</small>
                    </div>
                    <p class="mb-1" >` + producto.description + `</p>
                    <br><br><br>
                    <p class="mb-1">`+ "Precio" + " " + producto.currency + producto.cost + `</p>

                </div>
            </div>
            </a>
            `
    document.getElementById("identificador").innerHTML = contenido;

};

function seRelacionan(listaDeProductos){
    let contenidos="";
    
    for (let i = 0; i < listaDeProductos.length; i++) {
       
       if (contains(producto.relatedProducts,i)){
            contenidos += `
            <a href="product-info.html" class="list-group-item list-group-item-action" >
                <div class="row">
                    <div class="col-3">
                        <img src="` + listaDeProductos.imgSrc + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ listaDeProductos.name + `</h4>
                        </div>
                        <p class="mb-1">`+ "Precio" + " " + listaDeProductos.currency + listaDeProductos.cost + `</p>
                    </div>
                </div>
            </a><br>
            `
        }
    }
    document.getElementById("identificador2").innerHTML = contenidos;      
};
function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCT_INFO_URL).then(function (resultado) { // acá tengo mi único producto
        if (resultado.status === "ok") {

            producto = resultado.data;
            MuestroProductos(producto);
        }
    });

    getJSONData(PRODUCTS_URL).then(function (resultado2) { //acá estan todos los productos
        if (resultado2.status === "ok") {

            listaDeProductos = resultado2.data;
            seRelacionan(listaDeProductos);

        }
    });

    /*document.getElementById("submitComent").addEventListener('click', function (resultado) {

        let nuevoComentario = {
            calificacion: getRating(),
            comentario: document.getElementById('comentarios').nodeValue,
        };
        comentarios.push(nuevoComentario);
        muestroComentario(comentarios);
    });*/
});