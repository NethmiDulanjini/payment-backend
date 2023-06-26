import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        connection.query("SELECT * FROM product WHERE seller_id="+req.params.seller_id, function (err, result, fields) {
            if (err) res.send(err);
            else{
                connection.query("SELECT * FROM bid_product", function (err, result2, fields) {
                    if (err) res.send(err);
                    let product_ids = []
                    for(let i in result){
                      if(result[i].type ==="bid"){
                        product_ids.push(result[i].product_id)
                      }
                     }
                    let response = []
                       for(let i in result2){
                        if(!product_ids.includes(result2[i].product_id)){
                            result[i].status = result2[i].status
                            result[i].base_price = result2[i].base_price
                            result[i].end_time = result2[i].end_time
                            response.push(result[i])
                        }
                        else{
                            response.push(result[i])  
                        }
                       }
                  });
            }
          });   
    }
    catch{
    console.log("catch")
    res.send("not valid")
    return
}
}