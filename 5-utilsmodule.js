const names = require ('./4-namesmodule')
const sayHi = require('./2-modules')
const data = require('./6-altModule')

console.log(data)
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)


//every file is a module... export in the module, and import (require)