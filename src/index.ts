const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());
app.use(function (req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next()
})

app.get('/', (req: any, res: any) => {
    res.json({ req: 'aaa' })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})