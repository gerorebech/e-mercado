//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productos = [];

function MuestroProductos(array) {

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
    }
    document.getElementById("identificador").innerHTML = contenido
};
function PrecioParecido(buscar) {
    let contenido = "";
    //buscar = document.getElementById("buscar").innerHTML
    for (let i = 0; i < productos.length; i++) {
        let articulo = productos[i];
        //console.log(product,parseInt(buscar))


        if (articulo.cost.toString().indexOf(buscar) != -1) {
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

        }
    }
    document.getElementById("identificador").innerHTML = contenido;


}


function sortbyMayor() {
    let resultado = [];
    resultado = productos.sort(function (a, b) {
        if (a.cost > b.cost) { return -1; }
        if (a.cost < b.cost) { return 1; }
        return 0;
    });
    return resultado;
};

function sortbyMenor() {
    let resultado = [];
    resultado = productos.sort(function (a, b) {
        if (a.cost < b.cost) { return -1; }
        if (a.cost > b.cost) { return 1; }
        return 0;
    });
    return resultado;
};

function sortbyRelevancia() {
    let resultado = [];
    resultado = productos.sort(function (a, b) {
        if (a.soldCount > b.soldCount) { return -1; }
        if (a.soldCount < b.soldCount) { return 1; }
        return 0;
    });
    return resultado;
};


document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL).then(function (resultado) {
        if (resultado.status === "ok") {

            productos = resultado.data;
            MuestroProductos(productos);
        }
    });

    document.getElementById("buscar").addEventListener('input', function () {
        let buscar = document.getElementById("buscar").value;
        //console.log(buscar);
        PrecioParecido(buscar);
        
    });

    document.getElementById("mayor").addEventListener('click', function () {
        let OrdenarPorMayor = sortbyMayor();
        MuestroProductos(OrdenarPorMayor);

    });
    document.getElementById("menor").addEventListener('click', function () {
        let OrdenadoPorMenor = sortbyMenor();
        MuestroProductos(OrdenadoPorMenor);

    });

    document.getElementById("relevancia").addEventListener('click', function () {
        let OrdenadoPorRelevancia = sortbyRelevancia();
        MuestroProductos(OrdenadoPorRelevancia);

    });
});

