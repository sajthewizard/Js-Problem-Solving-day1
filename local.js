const savedata=()=>{
    const productField=document.getElementById('product');
    const quantityField=document.getElementById('quantity');
    const product=productField.value;
    const quantity=quantityField.value;
    showdata(product,quantity);
    addproduct(product,quantity)
productField.value='';
quantityField.value='';
}

 const showdata=(product,quantity)=>{
    const dataField=document.getElementById('dataAshbe')
    const ul=document.createElement('ul')
    ul.innerHTML=`
    <li> Product Name: ${product} = Product Quantity: ${quantity} </li>`
    dataField.appendChild(ul)

 }

 const getData=()=>{
    let cart={};
    const getStorage=localStorage.getItem('cart')
    if(getStorage){
        cart=JSON.parse(getStorage)
    }
    return cart;
 }

 const addproduct=(product,quantity)=>{
    const data=getData();
    data[product]=quantity;
    const dataStringify=JSON.stringify(data)
    localStorage.setItem('cart',dataStringify)
 }

const dataVisual=()=>{
    const data=getData();
    for(const product in data){
        const quantity=data[product];
        showdata(product,quantity)
    }
}
 dataVisual();

 