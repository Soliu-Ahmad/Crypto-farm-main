const bcrypt = require('bcrypt');
const saltRounds = 10;

const helper=()=>{
    hashPassword =(password) =>{
        return  bcrypt.hash(password, saltRounds, function(err, hash) {
            //Store hash in your password DB.
            return hash;
        });
    },
    
    checkPassword = (password, hash) =>{
        try{
            return bcrypt.compare(password, hash, function(err, result) {
                return true
            });
        }catch(e){
            return false
        }
    }
};


//module.exports = {helper};
exports.helper=helper;