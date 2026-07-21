// Smooth scrolling for menu links

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});





// Buy Now Button Action

document.querySelectorAll('.product-card button')
.forEach(button => {


    button.addEventListener('click', function(){


        let productName =
        this.parentElement.querySelector('h3').innerText;


        let message =
        "Hello Haven & Beyond, I want to order: "
        + productName;


        let whatsappNumber = "8801XXXXXXXXX";


        let whatsappURL =
        "https://wa.me/"
        + whatsappNumber
        + "?text="
        + encodeURIComponent(message);



        window.open(
            whatsappURL,
            "_blank"
        );


    });


});





// Simple welcome animation

window.addEventListener("load",()=>{


    document.querySelector(".hero-content")
    .style.opacity="1";


});
function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {
        let text = product.innerText.toLowerCase();

        if (text.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
