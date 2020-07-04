const products = [
    { name:'Mouse Wireless', price: 30 },
    { name:'Pen Drive', price: 25 },
    { name:'Cartucho de tinta', price: 50 },
    { name:'Suporte para Notebbok', price: 23 },
    { name:'Repetidor de Sinal Wi-Fi', price: 44 },
]

const saleProducts = products.map(product => {
    if(product.price >= 30){
        return {name: product.name, price: product.price / 2}
    }

    return product
})

console.log(saleProducts);
console.log(products);