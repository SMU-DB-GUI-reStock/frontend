//these are all the http requests related to departments 
import axios from 'axios';

export class EmployeeRepository{
    
    url = 'http://localhost:8000'

    config = {
        
    };

    //GET /employees
    getEmployees(){
        var config = this.config;
        return new Promise((resolve, reject)=>{
            axios.get(`${this.url}/employees`, config)
                .then(x=>resolve(x.data))
                .catch(x=>{
                    alert(x);
                    reject(x);
                });
        });
    }

}