const path= require("path")
const contactShow= async(req,res)=>{
    return res.sendFile(path.join(__dirname,"/../views/contact.html")) 
}
module.exports = {contactShow}
