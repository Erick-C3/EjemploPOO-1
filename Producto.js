const DEF_PRECIO = 999999;

class Producto{
    #nombre;
    #precio;
    #precioConDescuento;

    /**
     * Inicializa un producto
     * @param {String} nombre del producto
     * @param {Number} precio del producto
     */
    constructor(
        nombre = "def nombre",
        precio = DEF_PRECIO,
        precioConDescuento = DEF_PRECIO
        ){
        this.#nombre = nombre;
        this.#precio = precio;
        this.#precioConDescuento = precioConDescuento;
    }

    getPrecio(hayDescuento){
        let precio = this.#precio;
        if (hayDescuento) {
            precio = this.#precioConDescuento;
        }
        return precio;
    }

    getNombre(){
        return this.#nombre;
    }
}

module.exports = Producto;