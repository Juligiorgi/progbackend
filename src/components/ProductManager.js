export class ProductManager {
      constructor(){
        this.patch = "./productos.txt";
        this.products = []
       }

     static id = 0;

     addProduct = async (title,description,price,thumbnail,code,stock) => {
        ProductManager.id++
        let newProduct ={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductManager.id
        };

           this.products.push(newProduct)

          await fs.writeFile(this.patch, JSON.stringify(this.products));
      };

     readProducts = async ()  => {
        let respuesta1 = await fs.readFile(this.patch, "utf-8")
        return JSON.parse(respuesta1);
     }
 
    getProducts = async () => {
        let respuesta2 = await this.readProducts()
        return console.log(respuesta2);
    }


    getProductsById = async (id) => {
       let respuesta3 = await this.readProducts()
       if(!respuesta3.find(product => product.id === id)){
        console.log("Producto no encontrado");
       }else{
        console.log(respuesta3.find((products)=> products.id === id));
       }
      };
       
     deleteProductById = async () =>{
        let respuesta3 = await this.readProducts();
        let productFilter = respuesta3.filter(products =>products.id != id)
        await fs.writeFile(this.patch, JSON.stringify(productFilter));
        console.log("Producto ha sido eliminado");
     };

      updateProducts = async ({id, ...producto}) => {
           await this.deleteProductById(id);
        let oldProduct = await this.readProducts()
           let prodMofic = [{id, ...producto}, ...oldProduct];
           await fs.writeFile(this.patch, JSON.stringify(prodMofic));
      };
}

const productos = new ProductManager()

productos.addProduct("Title1","Description1",500,"Imagen1","abc123",10);
productos.addProduct("Title2","Description2",1500,"Imagen2","abc321",8);
productos.addProduct("Title3","Description3",2000,"Imagen3","abc213",12);
productos.addProduct("Title4","Description4",3000,"Imagen4","abc856",8);
productos.addProduct("Title5","Description5",5000,"Imagen5","abc194",6);
productos.addProduct("Title6","Description6",5000,"Imagen6","abc789",10);
productos.addProduct("Title7","Description7",6000,"Imagen7","abc563",5);
productos.addProduct("Title8","Description8",4000,"Imagen8","abc254",5);
productos.addProduct("Title9","Description9",1000,"Imagen9","abc589",8);
productos.addProduct("Title10","Description10",2000,"Imagen10","abc693",10);


productos.getProducts()

productos.getProductsById()


productos.deleteProductById()