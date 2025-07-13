//alterar icono de la barra de navegcacipon
let menuIcon = document.getElementById('menu-icon');
let navbar = document.getElementById('navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

//Eliminar el icono de alternancia y la barra de 
// navegaciòn al hacer clic en el enlace

navHambur=document.querySelectorAll('header nav ul li a')

window.onscroll = () =>{
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}
navHambur.forEach(link => {
    link.addEventListener('click', () =>{
        menuIcon.classList.remove('bx-x')
        navbar.classList.remove('active')
    })
})


//Desplasarse por la secciones en la barra de navegación
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav ul li a')

window.onscroll = () => {
    
    sections.forEach (sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ('id');

        if (top >= offset && top < offset + height){
            //Enlaces de la barra denavegaciòn activa
            navLinks.forEach( links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id +']').classList.add('active')
            })
            
        }    
    })

    //encabezado fijo
    const header = document.getElementById('idHeader')
    header.classList.toggle('sticky', window.scrollY > 100)
}



//habilidades: completar el porcentaje de Circulo  ==============================================================
function animarCircles (){
    const circles = document.querySelectorAll ('.skills__main__right__profecnl__box__circle')
circles.forEach(elem => {
    let dots = elem.getAttribute("data-dots")
    let marked = elem.getAttribute("data-percent")
    let percent = Math.floor(dots*marked/100)
    let points= ''
    let rotate = 360 / dots;

    for ( let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i};--rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent ; i++){
        pointsMarked[i].classList.add('marked')
    }

})

}

//Scroll habilidades -------------------------------------------
function reiniciarAnimaciones() {
  const barras = document.querySelectorAll("#skills .bar span");

  barras.forEach(span => {
    span.classList.remove("animar");
    void span.offsetWidth;
    span.classList.add("animar");
  });

  animarCircles()
}

// Clic manual con scroll suave
const btnHabilidades = document.getElementById("skills");
if (btnHabilidades) {
  btnHabilidades.addEventListener("click", (e) => {
    e.preventDefault(); // <- detiene el salto automático
    document.querySelector("#skills").scrollIntoView({ behavior: "smooth" });

    // Espera a que el scroll termine antes de reiniciar animación
    setTimeout(() => {
      reiniciarAnimaciones();
    }, 500);
  });
}

// Scroll automático (por scroll natural del usuario)
const skillsSection = document.getElementById("skills");
if (skillsSection) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        reiniciarAnimaciones();
      }
    });
  }, { threshold: 0.6 });

  observer.observe(skillsSection);
}


// Proyectos: Cambiar el tipo activo a los botones al momento de hacer clic

const options = document.querySelectorAll('.projects__container__filtrer__btn')

options.forEach( option => {
    option.addEventListener('click', ()=> {
        options.forEach(opn =>{
            opn.classList.remove('active1')
        })

        option.classList.add('active1')
    })
})

//Proyectos: opciones

document.addEventListener("DOMContentLoaded", () => {
  const enlaces = document.querySelectorAll(".projects__container__filtrer .projects__container__filtrer__btn");
  const proyectos = document.querySelectorAll(".projects__container__gallery__port--box");

  
  // Evita que salte arriba en la página
  enlaces.forEach(enlace => {
    enlace.addEventListener("click", e => {
      e.preventDefault();  

      const filtro = enlace.getAttribute("data-filter");

      // Activar sólo el enlace presionado
      enlaces.forEach(a => a.classList.remove("activo"));
      enlace.classList.add("activo");

      proyectos.forEach(proyecto => {
        if (filtro === "all") {
          proyecto.style.display = "block";
        } else {
          proyecto.style.display = proyecto.classList.contains(filtro) ? "block" : "none";
        }
      });
    });
  });
});



//Paralage ==========================================================

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add("show-items");
        }else{
            entrada.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll("scroll-scale");
scrollScale.forEach((el) =>observer.observe(el));

const scrollBottom = document.querySelectorAll("scroll_bottom");
scrollBottom.forEach((el) =>observer.observe(el));

const scrollTop = document.querySelectorAll("scroll_top");
scrollTop.forEach((el) =>observer.observe(el));