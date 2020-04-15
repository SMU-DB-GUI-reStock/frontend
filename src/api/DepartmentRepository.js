import axios from 'axios';

export class DepartmentRepository{
    url = 'localhost:3000'

    config = {
        
    };

    getDepartments(params){
        var config = this.config;
        config.params = params;
        return new Promise((resolve, reject)=>{
            axios.get(`${this.url}/departments`, config)
                .then(x=>resolve(x.data))
                .catch(x=>{
                    alert(x);
                    reject(x);
                });
        });
    }

    // getDepartment(id){
    //     return new Promise((resolve, reject)=>{
    //         axios.get(`${this.url}/departments/${id}`)
    //             .then(x=>resolve(x.data))
    //             .catch(x=>{
    //                 alert(x);
    //                 reject(x);
    //             })
    //     })
    // }

    // getProduct(id){
    //     return new Promise((resolve, reject)=>{
    //         axios.get(`${this.url}/inventory/${id}`)
    //             .then(x=>resolve(x.data))
    //             .catch(x=>{
    //                 alert(x);
    //                 reject(x);
    //             })
    //     })
    // }
}