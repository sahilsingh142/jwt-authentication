import schemaData from '../Schema/userSchema.js'

export const signup = async (req, res) => {
    try {
        const userSchema = new schemaData(req.body);
        const saveData = await userSchema.save();

        res.status(200).json({ message: "Signup Sucessfull", data: saveData });
    }catch(err){
        if(err.code == 11000){
            return res.status(400).json({
                message:"Email already exit"
            });
        }
        res.status(500).json({message: "Server Err"})
    }
}

export const login = (req, res) => {
    try{
        const {email,password} = req.body;

        const matchData = schemaData.findOne({email});

        if(!matchData){
           return res.status(401).json({message:"Invalid Email"});
        }

        if(matchData.password !== password){
           return res.status(401).json({message:"Invalid Password"})
        }

        res.status(200).json({message:"Login successful", data: matchData});
    }catch(err){
        res.status(500).json({message:"Server Err"});
    }
}
