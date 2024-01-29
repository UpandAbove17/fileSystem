const fs = require("fs");

// Read , Write , Update and Delete

// .........>>>....Read
 
// const content = fs.readFileSync("f1.txt");
//  console.log("content - " + content)


// .............>>>>...Write

// const content = fs.writeFileSync("f2.txt","This is File two")

// >>>>>>>>>>>>.....UPDATE

// content gets added in existing File
// fs.appendFileSync("f3.txt" ,  "append File Sync")

// file has the content which is given here > all other would be removed
// fs.writeFileSync("f3.txt" ,"file three")

// ............>>.....DELETE

// fs.unlinkSync("f3.txt")



// ....................DIRECTORY/FOLDER ..............//


// creation of folder
// fs.mkdirSync("myDirectory")

//removal 
// fs.rmdirSync("myDirectory")

// exist Sync > if file exist or not > returns a boolean value

// console.log(fs.existsSync("myDirectory"))

fs.writeFileSync("path.js" , "")




 
 