
// ----Data Access----//
// const data = [{name: 'Shahadat', id: 1, address: 'kochu khat'}, {name: 'Shahadat', id: 1, address: 'Goran'}];
// console.log (data[0].address);
// console.log (data[1].address);

const products = {
    count: 5000,
    data : [
        {id: 1, name: 'lenovo', price : 65000 },
        {id: 2, name: 'macbook', price : 165000 }
    ]
    
}
console.log(products.data[1].price);
console.log(products.data[0].price);

const user = {
    id : 5001,
    name : 'Shahadat Hossain',
    address : {
        street : {
            first : '183 East Goran',
            second : 'Khilgoan',
            third : 'Dhaka'
        },
        country : 'Bangladesh'
    }
}
console.log(user.address.street.second);