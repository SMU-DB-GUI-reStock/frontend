//these are all the http requests related to departments 
import axios from 'axios';

export class ProductRepository{
    
    url = 'http://localhost:8000'

    config = {
        
    };

    //GET /products
    getProducts(){
        var config = this.config;
        return new Promise((resolve, reject)=>{
            axios.get(`${this.url}/products`, config)
                .then(x=>resolve(x.data))
                .catch(x=>{
                    alert(x);
                    reject(x);
                });
        });
    }

    getProductTypes(){
        var config = this.config;
        return new Promise((resolve, reject)=>{
            axios.get(`${this.url}/product_types`, config)
                .then(x=>resolve(x.data))
                .catch(x=>{
                    alert(x);
                    reject(x);
                });
        });
    }

}