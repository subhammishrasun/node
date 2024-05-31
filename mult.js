/*const exprees=require('exprees');
const multer=require('multer');
const app=exprees();

const upload=multer({
    stroage:multer.diskStorage({
        destination:function(req,file,callback){
            callback(null,"upload");
        },
        filename:function(req,file,callback){
            callback(null,file.fieldname+"-"+Data.now()+".jpg")
        }
    })
}).single("user_file");

app.post("/upload",upload,(req,resp) => {
    resp.send("file uploaded")
});app.listen(5000);*/

const menuItems = [
    { name: "Pizza", price: 10 },
    { name: "Burger", price: 8 },
    { name: "Salad", price: 6 },
    { name: "Pasta", price: 12 }
];

let order = [];
let totalBill = 0;

function renderMenu() {
    const menuElement = document.getElementById('menu');

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `<span>${item.name}</span> - $${item.price} <button onclick="addToOrder('${item.name}', ${item.price})">Add</button>`;
        menuElement.appendChild(menuItem);
    });
}

function addToOrder(name, price) {
    order.push({ name, price });
    totalBill += price;
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderListElement = document.getElementById('orderList');
    const totalBillElement = document.getElementById('totalBill');

    orderListElement.innerHTML = '';
    order.forEach(item => {
        const orderItem = document.createElement('li');
        orderItem.classList.add('order-item');
        orderItem.innerText = `${item.name} - $${item.price}`;
        orderListElement.appendChild(orderItem);
    });

    totalBillElement.innerText = `Total: $${totalBill}`;
}

// Initialize the menu when the page loads
window.onload = function() {
    renderMenu();
};

