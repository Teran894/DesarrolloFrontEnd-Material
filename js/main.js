
console.log("Hola mundo!");

function mostrarMensajeInicial(params){

    if(confirm('Este sitio esta en desarrollo, manda tu informacion para cubrir los gastos')){
        alert('Has ganado un Iphone X10, pon tu informacion!')
    
    }else{
        alert('Danos tu dinero o te doxxeamos.')
    }

}

document.addEventListener("DOMContentLoaded",()=>{
    const scrollToBottomButton = document.getElementById('btn-ir-arriba');

    window.addEventListener("scroll" , ()=>{
        if(window.scrollY > 100) {
            scrollToBottomButton.style.display='block';
        } else{
            scrollToBottomButton.style.display='none';
        }
    })

    scrollToBottomButton.addEventListener("click",()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
})