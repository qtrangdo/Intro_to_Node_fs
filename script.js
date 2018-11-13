const fs= require('fs')

fs.readFile('./hello.txt', (err,data) => {
    if (err) {
        console.log('errrooorrr!');
    }
    console.log('Asynchronous', data.toString());
})

const file = fs.readFileSync('./hello.txt');
console.log('Synchronous',file.toString());

//APPEND - adding stuffs to a file
// fs.appendFile('./hello.txt', ' This is a test', err => {
//     if (err){
//         throw err;
//     }
// })


//WRITE
// fs.writeFile('bye.txt', 'Sad to see you go', err =>{
//     if (err) {
//         throw err;
//     }
// })

//DELETE
fs.unlink('./bye.txt', err => {
    if (err) {
        throw err;
    }
    
} )