export default function handler(req,res){
    const products = [
    {
        id: 1,
        name:"Vannila Cake",
        price:750,
        image:"/images/c1.jpg"
    },
    {
        id: 2,
        name:"Strawberry Cake",
        price:800,
        image:"/images/c2.jpg"
    },
    {
        id: 3,
        name:"Blue Berry Cake",
        price: 850,
        image:"/images/c3.jpg"
    },
    {
        id: 4,
        name:"Pineapple Cake",
        price:600,
        image:"/images/cake.jpg"
    },
    {
        id: 5,
        name:"Chocolate Cake",
        price : 700,
        image:"/images/c5.jpg"
    },
    {
        id: 6,
        name:"Strawberry Cake",
        price :800,
        image:"/images/c6.jpg"
    }
];

res.status(200).json(products);
};