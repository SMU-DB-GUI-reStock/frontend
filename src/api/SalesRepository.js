//these are all the http requests related to sales
import axios from 'axios';
 
export class SaleRepository{
  
   url = 'http://localhost:8000'
 
   config = {
      
   };
 
   //GET /sales
   getSales(){
       var config = this.config;
       return new Promise((resolve, reject)=>{
           axios.get(`${this.url}/sales`, config)
               .then(x=>resolve(x.data))
               .catch(x=>{
                   alert(x);
                   reject(x);
               });
       });
   }
 
   //GET /sales/{id}
   getSales(id){
       return new Promise((resolve, reject)=>{
           axios.get(`${this.url}/sales/${id}`)
               .then(x=>resolve(x.data))
               .catch(x=>{
                   alert(x);
                   reject(x);
               })
       })
   }
 
   //DELETE /sales/{id}
   deleteSales(id){
       return new Promise((resolve, reject)=>{
           axios.delete(`${this.url}/sales/${id}`)
               .then(x=>resolve(x.data))
               .catch(x=>{
                   alert(x);
                   reject(x);
               })
       })
   }
}
