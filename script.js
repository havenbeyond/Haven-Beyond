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






console.log(
"Haven & Beyond V2 Loaded Successfully"
);
