let orden = 0;
const $bsModal = new bootstrap.Modal('#productDetail');

// Selecciono todos los productos, y los recorro con forEach para agregarles un evento de tecldo
document.querySelectorAll(".product").forEach(($card) => {
    $card.addEventListener("keydown", (ev) => {
        if(ev.keyCode === 13 || ev.keyCode === 32) {
            $bsModal.show()
        }
    })
})

document.querySelector("#btnBanner1").addEventListener("click", ()=> {
    alert("Por ahora no se puede, vuelva más tarde :)");
})

document.querySelector("#btnBanner3").addEventListener("click", ()=> {
    $bsModal.show()
})

document.querySelectorAll(".product .btn").forEach(($card) => {
    $card.addEventListener("click", (ev) => {
        console.log("Agregar al carrito...");
        ev.stopPropagation();
    })
})

// FONDO
// const imgRuta = "../img/hero.webp";
// const imgWidth = 1920;
// const imgHeight = 1280;

// window.addEventListener("resize", () => {
// })

// TEST
// document.addEventListener("DOMContentLoaded", () => { $bsModal.show() })