module.exports ={
    index:(req,res)=>{
        res.json({
            title:"Product"
        });
    },
    find:(req,res)=>{
        res.json(
            {
                title:"Product"
            }
        )
    }
};