const express = require("express");
const router = express.Router();

let hamburgers = [
    { id: 1, nome: "X-Burger", descricao: "Pão integral, hambúrguer grelhado, queijo branco, alface, tomate, cebola roxa, pepino, molho de iogurte temperado", preco: 19.00, promo: true },
    { id: 2, nome: "Chicken Salada", descricao: "Pão integral, frango grelhado, queijo branco, alface, tomate, cenoura ralada, molho de mostarda e mel", preco: 22.00, promo: true },
    { id: 3, nome: "Veggie Delight", descricao: "Pão integral, hambúrguer de grão-de-bico, alface, tomate, cebola roxa, pimentão, molho tahine", preco: 20.00 },
    { id: 4, nome: "Fish Burger", descricao: "Pão integral, filé de peixe grelhado, alface, tomate, pepino, molho tártaro", preco: 24.00 },
    { id: 5, nome: "Cheese Lover", descricao: "Pão integral, hambúrguer grelhado, queijo cheddar, queijo branco, alface, tomate, molho barbecue", preco: 23.00 },
    { id: 6, nome: "Spicy Beef", descricao: "Pão integral, hambúrguer de carne apimentada, queijo pepper jack, alface, tomate, jalapeños, molho chipotle", preco: 25.00 }
];

let refri = [
    { id: 1, nome: "Coca-cola", descricao: "Coca-cola gelada", promo: false, preco: 5.00 },
    { id: 2, nome: "Guaraná Antarctica", descricao: "Guaraná Antarctica gelado", promo: true, preco: 4.50 },
    { id: 3, nome: "Pepsi", descricao: "Pepsi gelada", promo: false, preco: 4.75 },
    { id: 4, nome: "Suco de Laranja", descricao: "Suco de laranja natural e gelado", promo: false, preco: 6.00 },
    { id: 5, nome: "Suco de Morango", descricao: "Suco de morango natural e gelado", promo: false, preco: 6.50 },
    { id: 6, nome: "Suco de Abacaxi", descricao: "Suco de abacaxi natural e gelado", promo: false, preco: 6.00 }
];


let sobremesas = [
    { id: 1, nome: "Brownie", descricao: "Brownie de chocolate com nozes", promo: true, preco: 12.50 },
    { id: 2, nome: "Cheesecake", descricao: "Cheesecake com calda de frutas vermelhas", promo: false, preco: 15.00 },
    { id: 3, nome: "Sorvete de Baunilha", descricao: "Sorvete de baunilha com cobertura de chocolate", promo: false, preco: 10.00 },
    { id: 4, nome: "Petit Gâteau", descricao: "Petit gâteau com sorvete de creme", promo: true, preco: 18.00 },
    { id: 5, nome: "Mousse de Maracujá", descricao: "Mousse de maracujá com chantilly", promo: false, preco: 14.00 },
    { id: 6, nome: "Torta de Limão", descricao: "Torta de limão com merengue", promo: false, preco: 13.50 }
];

router.get("/promo", (req, res) => {
    const promoItems = [...hamburgers, ...refri, ...sobremesas].filter(item => item.promo);
    res.json(promoItems);
});

router.get("/refri", (req, res) => {
    res.json(refri);
});

router.get("/hamburgers", (req, res) => {
    res.json(hamburgers);
});

router.get("/sobremesas", (req, res) => {
    res.json(sobremesas);
});


module.exports = router;
