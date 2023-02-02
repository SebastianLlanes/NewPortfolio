let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
const $form = document.querySelector('#datos-formulario')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
   event.preventDefault();
   const formulario = new FormData(this);
   const response = await fetch(this.action, {
        method: this.method,
        body: formulario, 
        headers: {
            'Accept': 'application/json'
        }
   })
    if (response.ok) {
        this.reset();
    //     Swal.fire({
    //         title: 'Gracias por contactar un nuevo talento.',
    //         footer: '"El límite es el cielo.🚀"',
    //         padding: '3em',
    //         color: '#fff',
    //         background: '#1e2326 ',
    //         backdrop: `
    //         rgba(255, 128, 9, 0.781)
    //           left top
    //           no-repeat
    //         `,
    //         // timer: '7000',
    //         allowOutsideClick: true,
    //         allowEscapeKey: true,
    //         allowEnterKey: true,
    //         stopKeydownPropagation: false,
    //         confirmButtonColor: '#1e2326',
    
    // })
    const Toast = Swal.mixin({
        width:'40%',
        toast: true,
        position: 'top-end',
        background: '#cf5b09',
        color:'#1e2326',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Gracias por contactar un nuevo talento 🚀',
      })
        
    }
}
