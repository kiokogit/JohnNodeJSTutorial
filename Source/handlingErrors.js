//using try---catch

function beforeTryCatch() {  //forcing ann error
    let obj = undefined;
    console.log(obj.a);
    console.log('Cant be reached');
}

function afterTryCatch() {
    try {
        let obj = undefined;
        console.log(obj.a);
        console.log('Still not reachable');

    } catch (error) {
        console.log('I found an exception error: ' + error.message);
        
    } finally {
        //cleans up every issue in application
        console.log('This runs nevertheless');
    }

    console.log('application is still running!');

}

afterTryCatch();