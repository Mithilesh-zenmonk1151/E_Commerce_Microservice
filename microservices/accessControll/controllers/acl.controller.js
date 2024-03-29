const { aclService } = require('../service');
exports.getRole = async (req,res) => {
    try{
        const response = await aclService.getRole(req);
        if(response === 400){
            return res.status(400).json({message: "Service does mot exist"})
        }
        else if(response === 404){
            return res.status(404).json({message: "Role does not exist"})
        }
        else if(response === false){
            return res.status(401).json({message: "Unauthorized"})
        }
        else if(response === true){
            return res.status(200).json(response)
        }
    }
    catch(err) {
        console.log(err)
        return res.status(500).send(err)
    }
}


