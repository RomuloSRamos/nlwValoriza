import express from "express";
// @type/express

const app = express();
/**
 * GET    => Buscar uma Informação
 * POST   => Inserir (criar) ums informação
 * PUT    => Alter uma informção
 * DELETE => Remover um dado
 * PATCH  => Alterar uma Informação específica
 */
app.get("/test",(request,response)=>{
    /**
     * request => entrando
     * reponse => saindo
     **/
    return response.send("olá NLW");
});

app.post("/test-post",(request,response)=>{
    /**
     * request => entrando
     * reponse => saindo
     **/
    return response.send("olá NLW post");
});

// http://localhost:300
app.listen(3000,()=>console.log("server is running"));
