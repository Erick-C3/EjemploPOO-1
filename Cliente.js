class Cliente{
    #producto = "def prod";
    #nombre;
    #saldo;
    #tengoDescuento;
    
    constructor(nombre = "def nombre", saldo = 0, tengoDescuento = false){
        this.#nombre = nombre;
        this.#saldo = saldo;
        this.#tengoDescuento = tengoDescuento;
    }

    compra(unProducto){
        // this.#saldo = this.#saldo - x ; 
        if (this.getSaldo() > unProducto.getPrecio(this.#tengoDescuento)) {
            this.#saldo -= unProducto.getPrecio(this.#tengoDescuento);
            this.#producto = unProducto;
            console.log("Compre " + unProducto.getNombre() + " a " + unProducto.getPrecio(this.#tengoDescuento)+ "$");
            console.log("Me queda: "+ this.getSaldo());
        }else{
            console.log("Esta re caro!");
        }
        
    }
    mostrameTusProductos(){
        if (this.#producto.constructor.name === "Producto") {
            console.log("Tengo el producto: " + this.#producto.getNombre());
        }else{
            console.log("No compre nada aun");
        }
    }

    getSaldo(){
        return this.#saldo;
    }
}

module.exports = Cliente;