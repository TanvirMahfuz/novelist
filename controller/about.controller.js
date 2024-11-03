const path = require("path")
const aboutShow= async(req,res)=>{
    return res.status(200).sendFile(path.join(__dirname,"/../views/about.html"))
}
module.exports={aboutShow}