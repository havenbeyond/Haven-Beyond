/* ==========================================
   Haven & Beyond V2
   Final script.js
========================================== */


/* ================= Smooth Navigation ================= */


document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});






/* ================= Hero Animation ================= */


window.addEventListener("load", ()=>{


    const hero = document.querySelector(".hero-content");


    if(hero){

        setTimeout(()=>{

            hero.style.opacity="1";

            hero.style.transform="translateY(0)";


        },300);

    }


});






/* ================= Product Search ================= */


function searchProducts(){


    const input = document.getElementById("searchInput");


    if(!input) return;



    const value = input.value.toLowerCase();



    const products = document.querySelectorAll(
        ".product-card"
    );



    products.forEach(product=>{


        const text = product.innerText.toLowerCase();



        if(text.includes(value)){


            product.style.display="block";


        }else{


            product.style.display="none";


        }


    });


}







/* ================= Scroll To Top ================= */


const topButton = document.getElementById("topBtn");



window.addEventListener("scroll", ()=>{


    if(!topButton) return;



    if(window.scrollY > 300){


        topButton.style.display="block";


    }else{


        topButton.style.display="none";


    }


});







function topFunction(){


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


}





/* ================= Load Products ================= */

const productContainer = document.getElementById("productContainer");


if(productContainer && typeof products !== "undefined"){


    products.forEach(product => {


        productContainer.innerHTML += `

        <div class="product-card">


            <div class="product-image">

                <img src="${product.image}" 
                alt="${product.name}">

            </div>


            <h3>
                ${product.name}
            </h3>


            <h4 class="price">
                ${product.price}
            </h4>


            <p>
                ${product.description}
            </p>


            <a href="https://wa.me/8801350926404?text=${product.whatsapp}"
            class="btn"
            target="_blank">

            Order on WhatsApp

            </a>


        </div>

        `;


    });


}
console.log(
"Haven & Beyond V2 Loaded Successfully"
);
