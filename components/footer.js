// Contenido del footer
document.getElementById('footer-placeholder').innerHTML = `
<footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="assets/img/logo/logo-jntech-bn.png" alt="JN TECH Logo">
                    <p>Soluciones tecnológicas para el mundo digital</p>
                </div>
                <div class="footer-links">
                    <div class="footer-column">
                        <h4>Empresa</h4>
                        <ul>
                            <li><a href="nosotros.html">Sobre Nosotros</a></li>
                            <li><a href="servicios.html">Servicios</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Servicios</h4>
                        <ul>
                            <li><a href="servicios.html#rpa">Automatización RPA</a></li>
                            <li><a href="servicios.html#chatbots">Chatbots</a></li>
                            <li><a href="servicios.html#web">Desarrollo Web</a></li>
                            <li><a href="servicios.html#support">IT Support</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Contacto</h4>
                        <ul>
                            <li>info@jntechnologygt.com</li>
                        </ul>
                    </div>
                    <!--<div class="footer-column">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Términos de Servicio</a></li>
                            <li><a href="#">Política de Privacidad</a></li>
                            <li><a href="#">Cookies</a></li>
                        </ul>
                    </div>-->
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <span id="year"></span> JN TECH. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
`;

// Establecer el año actual en el footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
