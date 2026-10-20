const fs = require('fs/promises')
    async function manageFile(){
     try{
        await fs.writeFile("notes.txt", 'Learning Node.js')
        console.log("File Creatde Successfully")
        const data = await fs.readFile("notes.txt", 'utf8')
        console.log("File Content: ", data);    
     }catch (error){
      console.log("Error: ",error.message)
     }
    }
manageFile();


// Performing fs module with two different files
async function ManageTwoFiles(){
    try{
        const content = await fs.readFile("content.txt", 'utf8')
        await fs.writeFile('notes2.txt', content)
        console.log('Text Copied Successfully')
    }
    catch(err){
        console.log("Error: ", err.message)
    }
}
ManageTwoFiles()