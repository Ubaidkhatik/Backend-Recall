const fs = require('fs/promises')
async function Errorhandle(){
    try{
        const errorhandle = await fs.readFile('error.txt','utf8')
    }
    catch(err){
        console.log("File Not Found ",err.message)
    }
}
Errorhandle()