const fs = require("fs");

fs.writeFile(
  "file1.txt",
  "Hello this is our file module in node.js\n",
  (error) => {
    if (error) {
      console.log("Write Error:", error);
    } else {
      console.log("File Created Successfully");

      fs.appendFile("file1.txt", "This is my second line.\n", (error) => {
        if (error) {
          console.log("Append Error:", error);
        } else {
          console.log("Content Appended Successfully");

          fs.readFile("file1.txt", "utf8", (error, data) => {
            if (error) {
              console.log("Read Error:", error);
            } else {
              console.log("Updated File Content:");
              console.log(data);
            //   fs.unlink('file1.txt', (err)=>{
            //     if(err){
            //         console.log("Error: ", err)
            //     }
            //     else{
            //         console.log("File Deleted Successfully!!")
            //     }
            //   })
            }
          });
        }
      });
    }
  },
);

