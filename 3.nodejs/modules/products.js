module.exports = {
    index:(req,res)=>{
        const products = ["product 1","product 2","product 3","product 4"]
        return res.end(JSON.stringify(products))
    },
}