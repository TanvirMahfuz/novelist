const path=require("path")
const cartShow=async(req,res)=>{
    return res.sendFile(path.join(__dirname,"/../views/cart.html"))
}
module.exports={cartShow}