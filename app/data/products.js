export const products=[
    {
        name:"ram-ddr4",
        imageUrl:"ram.png",
        rating:4.5,
        cost:50,
        id:1
    },
    {
        name:"samusung",
        imageUrl:"phone.png",
        rating:4,
        cost:70,
        id:2
    },
    {
        name:"shirt",
        imageUrl:"shirt.png",
        rating:3,
        cost:90,
        id:3
    }
]
export const categories=[
    {
        name:"electronics",
        id:1,
        productCount:2,
        description:"Electronic devices and accessories"
},
{
    name:"fashion",
    id:2,
    productCount:5
}
]


export function getAllProducts(){
    return products;
}