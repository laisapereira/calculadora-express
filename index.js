const express = require('express')
const app = express()
const port = 3000

function style(result) {
    return ` 
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculadora Express</title>

        <style>
                * {
                margin: 0 auto;
                padding: 0;
                font-family: 'Raleway', sans-serif;
                border:none;
                box-sizing: border-box;
                
            }
            
            body {
                background-color: #3d405b;
            }
            
            
            header {
                text-align: center;
                padding: 100px;
                padding-bottom: 60px;;
                font-size: 30px;
                color:#ffadad;
            }
            
            #form {
                display: flex;
                flex-direction: column;
                width:max-content;
                gap:10px;
                padding:20px 0;
            }
            
            #forms {
                border-radius: 20px;
                padding:10px;
                width: 40%;
                justify-content: space-between;
                background-color: #f4f1de;
            }
            
            button {
                cursor:pointer;
            }
            
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
            
            #options {
                display:flex;
                align-items: center;
                gap: 10px;
                padding-top: 10px;
            }
            
            label {
                font-size:10px;
                color:black;
            }
            
            input,select {
                outline: none;
                border-radius: 10px;
                margin:0;
                padding: 10px;
                border:1.5px solid;
                border-color: #81b29a;
                cursor: pointer;
            }
            
            input:hover {
                color:rgba(250, 180, 100, 500)
            }
            
            input:active{
                color:rgba(250, 180, 100, 500)
            }
            
            #verificar, select, a {
                margin: 0 auto;
                padding: 10px;
                border-radius: 10px;
                width: max-content;
                background-color: #f4f1de;
            }

            a {
                margin: 40px;
                border-radius:7px;
            }
            
            select {
                padding:7px;
            }

            p {
                font-size:20px;
                padding:10px;
                text-align:center;
            }

        </style>



    </head>

    <body>
        <div>
            <a href="http://localhost:3000"><button id="home"> Voltar </button></a>
        <div>

        <header>
            <h1>Calculadora Express</h1>
        </header>

        <main>
            <div id="forms">
                <section id="form">
                    <input type="number" id="firstNumber" placeholder="Primeiro número">
                    <input type="number" id="secondNumber" placeholder="Segundo número">

                    <div id="options">
                        <label for="operations">Selecione uma operação</label>
                        <select id="operations">
                            <option value="Adição">Adição</option>
                            <option value="Multiplicação">Multiplicação</option>
                            <option value="Subtração">Subtração</option>
                            <option value="Divisão">Divisão</option>
                        </select>
                        <div>
                            <input type="button" id="verificar" value="Verificar" onclick="calculator()">
                        </div>
                    </div>
                </section>
                <p> A resposta é: ${result} </p>
            </div>
        </main>


    </body>
    
    
    `
}

// base route: http: // localhost: 3000 /: operador /: numero1 /: numero2.

// html folder 

app.use(express.static('public'))

// routes and operations

app.get('/soma/:number1/:number2', (req, res) => {
    let n1 = Number(req.params.number1)
    let n2 = Number(req.params.number2)
    let result = (n1 + n2)
    res.send(style(result)
    )
}),

app.get('/subtr/:number1/:number2', (req, res) => {
    let n1 = Number(req.params.number1)
    let n2 = Number(req.params.number2)
    let result = (n1 - n2)
    res.send(style(result)
    )
}),

app.get('/mult/:number1/:number2', (req, res) => {
    let n1 = Number(req.params.number1)
    let n2 = Number(req.params.number2)
    let result = (n1 * n2)
    res.send(style(result)
    )
}),

app.get('/divi/:number1/:number2', (req, res) => {
    let n1 = Number(req.params.number1)
    let n2 = Number(req.params.number2)
    let result = (n1 / n2)
    res.send(style(result)
    )
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})






