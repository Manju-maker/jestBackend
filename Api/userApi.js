const userApi = require("../Schema/userSchema");

module.exports={
    Register: function(data){
        return new Promise((resolve,reject)=>{
            userApi.create(data).then(response=>{
                resolve(response)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    Login: function(data){
        return new Promise((resolve,reject)=>{
            userApi.findOne({email:data["email"],password:data["password"]}).then(response=>{
                console.log("response",response);
                resolve(response)
            }).catch(err=>{
                reject(err)
            })
        })
    }
}