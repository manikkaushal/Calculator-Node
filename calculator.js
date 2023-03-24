const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))

// app.get('/', function (req,res){
//     res.sendFile(__dirname + '/index.html')
// })

// app.post('/', function (req,res){
//     let number1 = Number(req.body.num1);
//     let number2 = Number(req.body.num2);

//     let result = number1 + number2 ;
//     res.send('Result is ' + result)
// })

app.get('/bmicalculator', function (req,res){
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', function (req,res){
    let h = Number(req.body.num1);
    let w = Number(req.body.num2)

    let bmi = Math.floor(h/Math.pow(w,2));
    res.send(String('Your BMI is ' + bmi))
})

app.listen(3000, function(){
    console.log('Server is running at 3000')
})