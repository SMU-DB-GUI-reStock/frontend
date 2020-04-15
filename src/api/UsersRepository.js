//these are all the http requests related to users
import axios from 'axios';

export class DepartmentRepository{  

    url = 'localhost:3000'

    config = {
        
    };

   //GET /users
    getUsers(params){
        var config = this.config;
        config.params = params;
        return new Promise((resolve, reject)=>{
            axios.get(`${this.url}/users`, config)
                .then(x=>resolve(x.data))
                .catch(x=>{
                    alert(x);
                    reject(x);
                });
        });
    }

    //GET /users/{id}
    getUser(id){
        return new Promise((resolve, reject)=>{
            axios.get(`${this.url}/users/${id}`)
                .then(x=>resolve(x.data))
                .catch(x=>{
                    alert(x);
                    reject(x);
                })
        })
    }


    //DELETE /users/{id}
    deleteUser(id){
        return new Promise((resolve, reject)=>{
            axios.delete(`${this.url}/users/${id}`)
                .then(x=>resolve(x.data))
                .catch(x=>{
                    alert(x);
                    reject(x);
                })
        })
    }
}