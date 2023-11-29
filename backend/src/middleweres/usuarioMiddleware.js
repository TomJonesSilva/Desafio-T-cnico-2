const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJTW = (req,res,next) => {
    const token = req.headers['authorization'];
    jwt.verify(token,process.env.JTW_KEY,(err, decoded)=>{
        if(err) return res.json({mensagem: "Não autorizado"});

        if (decoded.exp && decoded.exp * 1000 < Date.now()) {
            reject res.json({ mensagem: "Sessão inválida" });
          }
          req.decodedToken = decoded;
          next(); 
    });
};

const validateBodyCadastro = (req,res,next) => {
    const { body } = req;

    if ((body.nome === undefined) || (body.email === undefined) || (body.senha === undefined)||(body.email === undefined)){
        return  res.status(400).json({mensagem: 'campos (nome, email e senha) obrigatorios '});
    }
    if ((body.nome === '') || (body.email === '') || (body.senha === '')){
        return res.status(400).json({mensagem: 'campos (nome, email e senha) não podem ser vazio '});
    }
    next();  
};

const validateBodyLogin = (req,res,next) => {
    const { body } = req;

    if ((body.email === undefined) || (body.senha === undefined)){
        return  res.status(400).json({mensagem: 'campos (email e senha) obrigatorios '});
    }

    next();  
};
module.exports = {
    validateBodyCadastro,
    validateBodyLogin,
    verifyJTW
};
