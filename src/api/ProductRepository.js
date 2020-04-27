//these are all the http requests related to departments 
import axios from 'axios';

export class ProductRepository{
    
    url = 'http://localhost:8000'

    config = {
        
    };

    // //GET /products()
    getProducts(params){
        var config = this.config;
        config.params = params;
        return new Promise((resolve, reject)=>{
            axios.get(`${this.url}/products/`, config)
                .then(x=>resolve(x.data))
                .catch(x=>{
                    alert(x);
                    reject(x);
                });
        });
    }

    //GET /productTypes()
    getProductTypes(params){
        var config = this.config;
        config.params = params;
        return new Promise((resolve, reject)=>{
            axios.get(`${this.url}/product_types`, config)
                .then(x=>resolve(x.data))
                .catch(x=>{
                    alert(x);
                    reject(x);
                });
        });
    }

    //POST productType
    addProductType(product_type){
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/product_types`, product_type, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x); // handle error
                    reject(x);
                });
        });
    }


    deleteProductType(product_type_id){
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/product_types/${product_type_id}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x); // handle error
                    reject(x);
                });
        });
    }
}