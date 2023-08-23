class ProductManager{
    constructor(){
        this.products = []
    };

    addProduct(title,description,price,thumbnail,code,stock){
        if(!title || !description || !price || !thumbnail || !code || !stock){
            return console.log("Todos los campos son obligatorios de ingresar")
        }
        let addId;
        if(this.products.length === 0){
            addId = 1;
        }else{
            addId = this.products [this.products.length - 1].id + 1;
        }
        const newProduct = {
          id: addId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        this.products.push(newProduct);
        console.log("producto agregado");
    }
    getProductById(addId) {
       if (this.products.find((prod)=> prod.id === addId)){
        console.log(this.products.find((prod)=>prod.id === addId));
       }else{
        console.log("Producto no encontrado");
       }
    }
}

const manager = new ProductManager();
manager.addProduct("calzas",undefined, 500, "abc123", undefined);
manager.addProduct("buzos","buena calidad", 600, "sin imagen", "abc123");
manager.addProduct("remeras", 500)
manager.addProduct("buzos", "color blanco", 1000, "sin imagen", "abc123", 25)
manager.addProduct("no hay nada")

