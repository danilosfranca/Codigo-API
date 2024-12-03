require("dotenv").config();

const db = require("./db");

const express = require("express")  ;

const app = express();


app.use(express.json());

app.delete("/clientes/:id",(request, response)=>{
    const id = request.params.id;
    db.removeCliente(id);
    response.sendStatus(204);
});

app.patch("/clientes/:id",(request, response)=>{
    const id = request.params.id;
    const dadoscliente = request.body;
    db.alteraCliente(id, dadoscliente);
    response.sendStatus(200);
});

app.post("/clientes", (request, response)=>{
    const cliente = request.body;
    db.insereCliente(cliente);
    response.sendStatus(201);
});

app.get("/clientes/:id",(request, response)=>{
    const id = request.params.id;
    response.json(db.listaCliente(id));
});

app.get("/clientes",(request, response)=>{
    response.json(db.listaClientes());
});


 app.get("/", (request, response) => {
         response.json({
             message: "Tudo certo pode continuar!"
         })
     })


app.listen(process.env.PORT, ()=>{
    console.log("Aplicativo em processamento") ;   
})

