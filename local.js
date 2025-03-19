


const savedata=()=>{
const product=document.getElementById('product').value;
const quantity=document.getElementById('quantity').value;
createData(product,quantity)

}


const createData=(product,quantity)=>{
    const dataShow=document.getElementById('dataAshbe');
const li=document.createElement('li');
li.innerHTML=`
Product: ${product} = Quantity: ${quantity}`;
dataShow.appendChild(li)


    console.log(product,quantity)
}


const checkcart=()=>{
    let cart={};
    
}