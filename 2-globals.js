// GLOBALS - NO WINDOW !!!!

// __dirname - path to current directory
//__filename - file name
//require - info about current module (CommonJS)
//module - info about current module (file)
//process - info about env where the program is being executed

console.log(`dirname ${__dirname}`)
console.log(`filename ${__filename}`)

setInterval(()=>{
    console.log("hello world");
}, 1000)