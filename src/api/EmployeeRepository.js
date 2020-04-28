//these are all the http requests related to departments 
import axios from 'axios';

export class EmployeeRepository{
    
    url = 'http://localhost:8000'

    config = {
        
    };

    login(params){
        console.log(params);
        return new Promise((resolve, reject)=>{
            axios.post(`${this.url}/login`, {
                email: params.email,
                password: params.password
            })
                .then(x=>{resolve(x.data);
                })
                .catch(x=>{
                    console.log(x);
                    alert(x);
                    reject(x);
                });
        });
    }

    //GET /employees
    getEmployees(){
        var config = this.config;
        return new Promise((resolve, reject)=>{
            axios.get(`${this.url}/users`, config)
                .then(x=>resolve(x.data))
                .catch(x=>{
                    alert(x);
                    reject(x);
                });
        });
    }

    getEmployee(id){
        var config = this.config;
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
        deleteEmployee(id){
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