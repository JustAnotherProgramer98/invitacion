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

$(document).ready(function() {
    var loadingText = $("#loadingText");
    var loadingMessages = [
        "Tienes el link?... Que suerte la tuya",
        "Esta invitacion es solo para ti",
        '¡Prepárate para una experiencia increíble!',
        'La espera valdrá la pena, lo prometo.',
        'Bienvenido/a a nuestro rincón especial.',
        'Cargando momentos únicos para ti.',
        'La anticipación hace que todo sea mejor.',
        "Daria lo que sea por estar viendo esta pagina",
        'Preparándonos para un festín virtual',
        'Los mejores momentos están a punto de cargarse',
        'Que empiece la diversión en 3, 2, 1...',
        '¡Estamos creando magia digital para ti!',
        'Saborea la emoción mientras cargamos',
        'Construyendo una experiencia personalizada',
        'Una pizca de paciencia, mucho sabor por venir'
    ];
    
    var currentIndex = -1;

    function changeText() {
        var randomIndex = Math.floor(Math.random() * loadingMessages.length);
    
        // Asegurarse de que el nuevo texto no sea el mismo que el anterior
        if (randomIndex === currentIndex) {
            randomIndex = (randomIndex + 1) % loadingMessages.length;
        }
    
        currentIndex = randomIndex;
    
        loadingText.fadeOut(500, function() {
            loadingText.text(loadingMessages[randomIndex]);
            loadingText.fadeIn(500);
        });
    }
    

    // Cambia el texto cada 2 segundos
    var textInterval = setInterval(changeText, 2000);

    // Simula una carga de 6 segundos
    setTimeout(function() {
        clearInterval(textInterval);
        $(".loading-screen").fadeOut(1000, function() {
            $(".content").fadeIn(500);
        });
    }, 8000);
});
