    const fs = require('fs/promises')
    const path = require('path')
    async function Folderdetails(){
        try{
            await fs.mkdir('data2', {recursive:true})
            const filepath = path.join('data2', 'info.txt')
            await fs.writeFile(filepath, 'This is our mkdir and path practice in Node.js')
            const filecontent = await fs.readFile(filepath, 'utf8')
            console.log(filecontent)
            }
            catch(err){
                console.log("Error: ",err.message)
            }
        
    }
    Folderdetails()