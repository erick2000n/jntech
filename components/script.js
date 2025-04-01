// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const backToTop = document.querySelector('.back-to-top');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    // Cursor personalizado
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX;
        const y = e.clientY;
        
        cursorFollower.style.left = x + 'px';
        cursorFollower.style.top = y + 'px';
    });
    
    // Efecto hover para enlaces y botones
    const links = document.querySelectorAll('a, button, .service-card, .project-card, .solution-card');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            cursorFollower.style.width = '50px';
            cursorFollower.style.height = '50px';
            cursorFollower.style.opacity = '0.2';
        });
        
        link.addEventListener('mouseleave', function() {
            cursorFollower.style.width = '20px';
            cursorFollower.style.height = '20px';
            cursorFollower.style.opacity = '0.5';
        });
    });
    
    // Menú hamburguesa
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Mostrar/ocultar botón "Back to Top"
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // Crear partículas para el header
    const headerParticles = document.querySelector('.header-particles');
    
    function createParticles() {
        // Limpiar partículas existentes
        if (headerParticles) {
            headerParticles.innerHTML = '';
            
            // Número de partículas basado en el ancho de la pantalla
            const particleCount = Math.floor(window.innerWidth / 100);
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('span');
                particle.className = 'header-particle';
                
                // Posición aleatoria
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                
                // Tamaño aleatorio
                const size = Math.random() * 3 + 1;
                
                // Velocidad aleatoria
                const duration = Math.random() * 20 + 10;
                
                // Retraso aleatorio
                const delay = Math.random() * 5;
                
                // Aplicar estilos
                particle.style.cssText = `
                    position: absolute;
                    top: ${posY}%;
                    left: ${posX}%;
                    width: ${size}px;
                    height: ${size}px;
                    background: ${Math.random() > 0.5 ? 'var(--primary-blue)' : 'var(--primary-teal)'};
                    border-radius: 50%;
                    opacity: ${Math.random() * 0.5 + 0.1};
                    animation: floatParticle ${duration}s ease-in-out ${delay}s infinite;
                `;
                
                headerParticles.appendChild(particle);
            }
        }
    }
    
    // Crear animación para las partículas
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes floatParticle {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            50% {
                opacity: 0.5;
            }
            100% {
                transform: translateY(-20px) translateX(20px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleSheet);
    
    // Inicializar partículas
    if (headerParticles) {
        createParticles();
    }
    
    // Recrear partículas al cambiar el tamaño de la ventana
    window.addEventListener('resize', function() {
        if (headerParticles) {
            createParticles();
        }
    });
    
    // Funcionalidad del botón "Back to Top"
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Animación de aparición al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .project-card, .solution-card, .info-item, .service-detail-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    
    // Iniciar animación al cargar la página
    animateOnScroll();
    
    // Añadir clase para animación CSS
    document.querySelectorAll('.service-card, .project-card, .solution-card, .info-item, .service-detail-content').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Función para animar elementos cuando son visibles
    const animateElements = function() {
        const elements = document.querySelectorAll('.service-card, .project-card, .solution-card, .info-item, .service-detail-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Ejecutar animación al cargar y al hacer scroll
    window.addEventListener('scroll', animateElements);
    window.addEventListener('load', animateElements);
    
    // Crear efecto de holograma
    const hologramImages = document.querySelectorAll('.hologram-image');
    
    hologramImages.forEach(hologram => {
        const icon = hologram.querySelector('i');
        if (icon) {
            const reflection = hologram.parentElement.querySelector('.hologram-reflection');
            if (reflection) {
                reflection.innerHTML = icon.outerHTML;
            }
        }
    });
    
    // Animación de texto con efecto de máquina de escribir
    const typingTexts = document.querySelectorAll('.typing-text');
    
    typingTexts.forEach(text => {
        const content = text.textContent;
        text.textContent = '';
        text.style.width = 'auto';
        
        let i = 0;
        const typeWriter = () => {
            if (i < content.length) {
                text.textContent += content.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 500);
    });
    
    // Crear partículas para secciones CTA
    const ctaParticles = document.querySelector('.cta-particles');
    
    if (ctaParticles) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('span');
            particle.className = 'cta-particle';
            
            // Posición aleatoria
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Tamaño aleatorio
            const size = Math.random() * 5 + 2;
            
            // Aplicar estilos
            particle.style.cssText = `
                position: absolute;
                top: ${posY}%;
                left: ${posX}%;
                width: ${size}px;
                height: ${size}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                filter: blur(1px);
            `;
            
            ctaParticles.appendChild(particle);
        }
    }
    
    // Crear efecto de datos fluyendo en la animación de circuito
    const dataFlow = document.querySelector('.data-flow');
    
    if (dataFlow) {
        for (let i = 0; i < 10; i++) {
            const dataPacket = document.createElement('span');
            dataPacket.className = 'data-packet';
            
            // Posición y dirección aleatoria
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const angle = Math.random() * 360;
            
            // Velocidad aleatoria
            const duration = Math.random() * 3 + 2;
            
            // Retraso aleatorio
            const delay = Math.random() * 2;
            
            // Aplicar estilos
            dataPacket.style.cssText = `
                position: absolute;
                top: ${startY}%;
                left: ${startX}%;
                width: 6px;
                height: 6px;
                background: var(--primary-teal);
                border-radius: 50%;
                filter: blur(1px);
                box-shadow: 0 0 10px var(--primary-teal);
                opacity: 0.7;
                animation: moveDataPacket ${duration}s linear ${delay}s infinite;
                transform: rotate(${angle}deg);
            `;
            
            dataFlow.appendChild(dataPacket);
        }
        
        // Crear animación para los paquetes de datos
        const dataPacketStyle = document.createElement('style');
        dataPacketStyle.innerHTML = `
            @keyframes moveDataPacket {
                0% {
                    transform: translateX(0) translateY(0);
                    opacity: 0;
                }
                10% {
                    opacity: 0.7;
                }
                90% {
                    opacity: 0.7;
                }
                100% {
                    transform: translateX(100px) translateY(100px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(dataPacketStyle);
    }
    
    // Resaltar la página actual en la navegación
    const currentPage = window.location.pathname.split('/').pop();
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        }
    });
});