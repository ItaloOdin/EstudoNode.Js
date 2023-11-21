let express = require('express');
let app = express();

const path = require('path')
let publicPath =  path.join(__dirname, 'public')
app.set('view engine', 'ejs');




app.get('/', (req,res) => {
    res.sendFile(`${publicPath}/index.html`)
});

app.get('/student',(req,res)=>{
    const data = {
        name: 'jon doe',
        email: 'jon@gmail.com',
        age: 30
    }
    res.render('student', {student:data});
})

app.get('/blog', (req,res)=> {
    res.sendFile(`${publicPath}/blog.html`)
});
app.get('/contact-us', (req,res) => {
    res.sendFile(`${publicPath}/contact_us.html`)
});

app.listen(4000);