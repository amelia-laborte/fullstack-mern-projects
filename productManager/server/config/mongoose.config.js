const mongoose = require ("mongoose")
const dbProducts = "dbProducts"
//configuration to the database and creating the database name 
mongoose
    .connect(`mongodb://localhost/${dbProducts}`)
    .then (()=>{
        console.log(`Connected to the db ${dbProducts}`);
    })
    .catch((err)=> console.log (`Error in database connection to ${dbProducts}`, err));