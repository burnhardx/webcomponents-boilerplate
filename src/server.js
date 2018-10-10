const express = require('express');
const app = express();

const port = !process.argv[2] ? 8044 : process.argv[2];

app.use(express.static('public'));
app.listen(port,() =>{
    console.log('Webcomponents boilerplated on '+port);
});


