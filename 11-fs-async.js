const {readFile, writeFile} = require('fs');
console.log('start');

readFile('./content/first.txt','utf8', (err, data)=>{
    if(err) {
        console.log(err);
        return null;
    }
    const first = data;
    readFile('./content/second.txt', 'utf8', (err, data)=> {
        if(err) {
            console.log(err);
            return null;
        }
        const second = data;
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, data)=> {
            if(err){
                console.log(err);
                return null;
            }
            console.log('done with this task');
        } )
    })
})
console.log('starting next task');
