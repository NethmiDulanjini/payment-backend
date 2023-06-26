import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        var sql = "INSERT INTO product (admin_status , type, description ,seller_id , amount) " + "VALUES ('pending','selling','"+req.body.description+"',"+req.body.seller_id+","+req.body.amount+")"
        connection.query(sql, function (err, result, fields) {
        if (err) res.send(err);
        else{
            res.send("success")
        }
        });
        
    }
    catch{
    console.log("catch")
    res.send("not valid")
    return
}
}