/* ==========================================
   Haven & Beyond
   Product Details Script
========================================== */


const params = new URLSearchParams(
    window.location.search
);


const productId = params.get("id");



const product = products[productId];



if(product){


document.getElementById("productImage").src =
product.image;


document.getElementById("productName").innerText =
product.name;


document.getElementById("productPrice").innerText =
product.price;


document.getElementById("productDescription").innerText =
product.description;



document.getElementById("orderBtn").href =
"https://wa.me/8801350926404?text=" 
+ product.whatsapp;


}
