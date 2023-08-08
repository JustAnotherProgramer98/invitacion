$(function () {
    if ($(window).width() <= 450) {
        $('#clock-c').countdown('2023/09/9', function(event) {  
            var $this = $(this).html(event.strftime(''
                + '<span class="h1 font-weight-bold">%D</span> Dias '
                + '<br><span class="h1 font-weight-bold">%H</span> Horas'
                + '<br><span class="h1 font-weight-bold">%M</span> Minutos'
                + '<br><span class="h1 font-weight-bold">%S</span> Segundos'));
            });
    }else{
        $('#clock-c').countdown('2023/09/9', function(event) {  
        var $this = $(this).html(event.strftime(''
            + '<span class="h1 font-weight-bold">%D</span> Dias '
            + '<span class="h1 font-weight-bold">%H</span> Horas'
            + '<span class="h1 font-weight-bold">%M</span> Minutos'
            + '<span class="h1 font-weight-bold">%S</span> Segundos'));
        });
    };
});
const animatedSections = document.querySelectorAll('.animated-section');

function checkScroll() {
    animatedSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('fade-in'); // Agrega clase para animación
        } else {
            section.classList.remove('fade-in'); // Remueve clase si el elemento no está visible
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll); // Para verificar el estado inicial

