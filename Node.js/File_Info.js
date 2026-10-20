const fs = require('fs/promises')
const path = require('path')
async function FileInfo() {
    try{


    await fs.mkdir('data', {recursive:true})
    const filepath = path.join('data', 'info.txt')

    await fs.writeFile(filepath, 'Node.js Level 2 recalled')
         const content = await fs.readFile(filepath, 'utf8');
         console.log(content)
    
}
catch (err){
    console.log("Error: ", err.message)

}
    }
    FileInfo()