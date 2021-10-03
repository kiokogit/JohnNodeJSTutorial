const {writeFile, readFile} = require('fs');

//asyncrounous functions run using callbacks - that respond whrn we click a button
console.log('Starting task...');

readFile('./content/first.txt','utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) =>{
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', 
            `Here's the result of my work: ${first} 'and then' ${second}. Enjoy!!`
            ,(err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log('Done with this task');
            });
    })
});

console.log('Starting the next task...'); //console logs to show diff with the sync approaches

//results in: starts, then starting next task, with the other task offloading