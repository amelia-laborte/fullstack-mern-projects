const mongoose = require ("mongoose")
const dbAuthors = "dbAuthors"
//configuration to the database and creating the database name 
mongoose
    .connect(`mongodb://localhost/${dbAuthors}`)
    .then (()=>{
        console.log(`Connected to the db ${dbAuthors}`);
    })
    .catch((err)=> console.log (`Error in database connection to ${dbAuthors}`, err));
