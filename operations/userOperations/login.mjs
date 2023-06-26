import {connection_function} from '../../service/connection.mjs'
import {issue_token} from '../../authentication/index.mjs'

export function operation(req , res){
    const connection = connection_function()
    try{
    connection.query("select * from user where email = '"+req.body.email+"'", function (err, result, fields) {
        if (err) res.send(err);
        else{
            if(result.length===0){
                res.send("error username or password")
            }
            else{
            if(req.body.password===result[0].password){
                const token = issue_token(result[0].user_id , result[0].role,result[0].email,result[0].password)
                res.send({
                    token:token,
                    role:result[0].role
                })
            }
            else{
                res.send("error username or password")
            } 
        }
        }  
      });
    }
    catch{
        res.send("error username or password")
    }
}