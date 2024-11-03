const path=require("path")
const blogShow = async (req,res)=>{
    return res.status(200).sendFile(path.join(__dirname,"/../views/blog.html"))

}
module.exports={blogShow}