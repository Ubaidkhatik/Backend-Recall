const fs = require('fs')
fs.writeFile('file2.txt', "New File Created", (err)=>{
    if(err){
        console.log("Error is file", err)
    }
    else{
        console.log("File Created Successfully")
        fs.access('file2.txt', (err)=>{
    if(err){
        console.log("File Does Not Exist")
    }
    else{
        console.log("File Exists")
        fs.rename("file2.txt", "updated.txt", (e)=>{
         if(e){
            console.log("Error : ", e)
         }
         else{
            console.log("File has been renamed: ")
            fs.stat("updated.txt", (e,stats)=>{
                if(e){
                    console.log("Error")
                }
                else{
                    console.log("File Size: ",stats.size, "Bytes")
                    console.log(stats.isFile());
                   if(stats.isFile()){
                    console.log("This is a file")
                   }
                   else{
                    console.log("This is not a file")
                   
                   }
                      console.log("Is Directory:", stats.isDirectory());
 
                }
            })
         }
        })
    }
})
    }
})
