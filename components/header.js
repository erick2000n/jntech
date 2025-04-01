const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// Insertar contenido del header
document.getElementById('header-placeholder').innerHTML = `
    <header>
        <div class="header-bg">
            <div class="header-glow"></div>
            <div class="header-particles"></div>
        </div>
        <div class="container">
            <div class="logo">
                <img src="../assets/img/logo/logo-jntech.png" alt="JN TECH Logo">
                <div class="logo-circuit">
                    <span class="circuit-line"></span>
                    <span class="circuit-dot"></span>
                    <span class="circuit-line"></span>
                </div>
            </div>
            <nav>
                <ul class="nav-links">
                    <li class="nav-item">
                        <a href="index.html" ${currentPage === 'index.html' ? 'class="active"' : ''}>
                            <span class="nav-indicator"></span>
                            <span class="nav-text">Inicio</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="servicios.html" ${currentPage === 'servicios.html' ? 'class="active"' : ''}>
                            <span class="nav-indicator"></span>
                            <span class="nav-text">Servicios</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="nosotros.html" ${currentPage === 'nosotros.html' ? 'class="active"' : ''}>
                            <span class="nav-indicator"></span>
                            <span class="nav-text">Nosotros</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="proyectos.html" ${currentPage === 'proyectos.html' ? 'class="active"' : ''}>
                            <span class="nav-indicator"></span>
                            <span class="nav-text">Proyectos</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="contacto.html" ${currentPage === 'contacto.html' ? 'class="active"' : ''} class="nav-contact">
                            <span class="nav-text">Contacto</span>
                            <span class="nav-icon"><i class="fas fa-arrow-right"></i></span>
                        </a>
                    </li>
                </ul>
                <div class="hamburger">
                    <div class="hamburger-lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="hamburger-glow"></div>
                </div>
            </nav>
        </div>
    </header>
`;