//backend er javascript
const path=require("path")
const checkoutShow = async(req,res)=>{
 
    return res.sendFile(path.join(__dirname,"/../views/checkout.html"))
}

const submitPayment = async(req,res)=>{
    console.log(req.body)
    res.status(200).json({msg:"data recieved"})
}
module.exports={checkoutShow,submitPayment}