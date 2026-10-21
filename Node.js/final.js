const fs = require('fs/promises')
const path = require('path')
async function Final(){
try{
    await fs.mkdir('practice', {recursive:true})
console.log('Folder Created')
    const pathofFile =  path.join('practice', 'summary.txt')
    console.log("Text File Added")
    await fs.writeFile(pathofFile, 'This is the practice of our fs module using async await\n')
    console.log("File has been written")
    await fs.appendFile(pathofFile,'This is our practice codes')
    const content =await fs.readFile(pathofFile, 'utf8')
    console.log('File has been read', content)
}
catch ( err){
    console.log("Error: ", err.message)
}
}
Final()