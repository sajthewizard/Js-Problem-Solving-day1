


const savedata=()=>{
const productField=document.getElementById('product');
const quantityField=document.getElementById('quantity');

const product=productField.value;
const quantity=quantityField.value;

createData(product,quantity);
setProduct(product,quantity);
productField.value='';
quantityField.value='';


}


const createData=(product,quantity)=>{
    const dataShow=document.getElementById('dataAshbe');
const li=document.createElement('li');
li.innerHTML=`
Product: ${product} = Quantity: ${quantity}`;
dataShow.appendChild(li)

}


const addProduct=()=>{
    let cart={};
  
    const getstorage=localStorage.getItem('cart')
 
    console.log(getstorage)
    if(getstorage){
        cart=JSON.parse(getstorage);       
    }
    return cart;
    
}
const setProduct=(product,quantity)=>{
    const data=addProduct();
   
   
    data[product]=quantity;
    const datamodified=JSON.stringify(data)
     localStorage.setItem('cart',datamodified)

}
const jala=()=>{
    const data=addProduct();
    for(const product in data){
        const quantity=data[product]
        createData(product,quantity)

    }
    
}
jala()