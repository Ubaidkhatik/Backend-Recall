const fs = require('fs/promises')
async function managedata(){

try{
 await fs.writeFile('notes3.txt', 'I am Learning async/await')
 const append = await fs.appendFile('notes3.txt', '\nThis is my second line ')
 console.log(append)
 console.log("File Appended successfully")
const data = await fs.readFile('notes3.txt', 'utf8')
console.log('File Created and Read SuccessFully !')
console.log(data)
} 
catch(err){
    console.log("Err:", err.message)
}

}
managedata()
