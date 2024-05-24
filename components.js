// HeaderComponent
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <style>
                header {
                    background-color: #304eb1;
                    color: white;
                    text-align: center;
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                }
                nav {
                    display: flex;
                    margin-left: auto; /* Mover a la derecha */
                }
                nav a {
                    color: white;
                    text-decoration: none;
                    margin: 0 1rem;
                }
                nav a:hover {
                    color: #ffcc00; 
                }
            </style>
            <header>
                <img src="img/logo.png" alt="Logo" style="width: 100px; height: auto;">
                <h1>Hospital</h1>
                <nav>
                    <a href="#">Inicio</a>
                    <a href="#">Servicios</a>
                    <a href="#">Contacto</a>
                </nav>
            </header>
        `;
    }
}

customElements.define('header-component', HeaderComponent);


// HeroComponent
class HeroComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <style>
        .hero {
            font-family:  font-family: "Helvetica";
            text-align: justify;
            padding: 2rem;
            background-color: white;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 4rem; /* Opcional: añade espacio entre las columnas */
            
        }
        .column {
            grid-column: span 6;
        }
        .carousel {
            position: relative;
            width: 100%;
            overflow: hidden;
        }
        .carousel img {
            width: 100%;
            display: none;
        }
        .carousel img.active {
            display: block;
        }
        .carousel-controls {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
        }
        .carousel-control {
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            cursor: pointer;
        }
        </style>
        <div class="hero">
            <div class="column">
            <h1>Instalaciones y Servicios</h1>
            <ul>
                <li><strong>Sala de Urgencias:</strong> Atiende emergencias médicas y traumas, con personal capacitado para manejar situaciones críticas.</li>
                <li><strong>Consultorios Médicos:</strong> Espacios donde se realizan consultas médicas y evaluaciones de rutina.</li>
                <li><strong>Quirófanos:</strong> Áreas equipadas para realizar intervenciones quirúrgicas.</li>
                <li><strong>Unidad de Cuidados Intensivos (UCI):</strong> Proporciona atención avanzada a pacientes en estado crítico.</li>
                <li><strong>Laboratorio Clínico:</strong> Realiza análisis de muestras biológicas para apoyar en el diagnóstico de enfermedades.</li>
                <li><strong>Imágenes Diagnósticas:</strong> Incluye rayos X, tomografías, resonancias magnéticas y ultrasonidos para diagnóstico por imagen.</li>
                <li><strong>Farmacia:</strong> Dispensación de medicamentos prescritos a los pacientes hospitalizados y ambulatorios.</li>
                <li><strong>Áreas de Hospitalización:</strong> Habitaciones para la estancia de pacientes que requieren cuidados continuos.</li>
            </ul>
            </div>
            <div class="column">
                <div class="carousel">
                    <img src="img/imagen1.jpg" class="active">
                    <img src="img/imagen2.png" alt="Imagen 2">
                    <img src="img/imagen3.jpg" alt="Imagen 3">
                    <div class="carousel-controls">
                        <button class="carousel-control prev">&lt;</button>
                        <button class="carousel-control next">&gt;</button>
                    </div>
                </div>
            </div>
        </div>
       <hr> 
        `;
    }

    connectedCallback() {
        class Carousel {
            constructor(carouselElement) {
                this.carouselElement = carouselElement;
                this.images = carouselElement.querySelectorAll('img');
                this.currentIndex = 0;
                this.initControls();
                this.showImage(this.currentIndex);
            }
            
            initControls() {
                this.carouselElement.querySelector('.prev').addEventListener('click', () => this.prevImage());
                this.carouselElement.querySelector('.next').addEventListener('click', () => this.nextImage());
            }
            
            showImage(index) {
                this.images.forEach((img, i) => {
                    img.classList.toggle('active', i === index);
                });
            }
            
            prevImage() {
                this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
                this.showImage(this.currentIndex);
            }
            
            nextImage() {
                this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
                this.showImage(this.currentIndex);
            }
        }

        this.querySelectorAll('.carousel').forEach(carouselElement => {
            new Carousel(carouselElement);
        });
    }
}

customElements.define('hero-component', HeroComponent);



// ServicesComponent
class ServicesComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <style>
                .services {
                    text-align: center;
                    padding: 4rem;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 4rem;
                    animation: fadeIn 1s ease-in-out;
                }
                .service {
                    margin: 1rem 0;
                    opacity: 0;
                    animation: fadeIn 2s ease-in-out forwards;
                }
                .service img {
                    max-width: 300px;
                    height: 200px;
                    display: block;
                    margin: 0 auto 0.5rem;
                    transition: transform 0.3s ease-in-out;
                }
                .service img:hover {
                    transform: scale(1.05);
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .service:nth-child(1) {
                    animation-delay: 0.5s;
                }
                .service:nth-child(2) {
                    animation-delay: 1s;
                }
                .service:nth-child(3) {
                    animation-delay: 1.5s;
                }
            </style>
            <section class="services">
                <h2 style="grid-column: span 3;">Nuestros Servicios</h2>
                <div class="service">
                    <img src="img/emergencia.jpg" alt="Emergencias">
                    Emergencias
                </div>
                <div class="service">
                    <img src="img/pediatria.jpg" alt="Pediatría">
                    Pediatría
                </div>
                <div class="service">
                    <img src="img/cirugia.jpg" alt="Cirugía">
                    Cirugía
                </div>
            </section>
        `;
    }
}
customElements.define('services-component', ServicesComponent);


// ContactComponent
class ContactComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <style>
                .contact-card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    margin-bottom: 2rem; /* Espacio con el footer */
                }
                .contact {
                    text-align: center;
                    padding: 2rem; /* Más padding para mayor tamaño */
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    max-width: 800px; /* Más ancho */
                    width: 100%;
                    background-color: white;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                label {
                    margin: 0.5rem 0 0.2rem 0;
                    width: 100%;
                    max-width: 600px; /* Ajuste en relación con la tarjeta */
                    text-align: left;
                }
                input, textarea {
                    margin: 0.5rem 0;
                    padding: 0.5rem;
                    width: 90%; /* Más ancho */
                    max-width: 600px; /* Ajuste en relación con la tarjeta */
                }
                button {
                    padding: 0.5rem 1rem;
                    background-color: #304eb1;
                    color: white;
                    border: none;
                    cursor: pointer;
                    border-radius: 4px;
                }
            </style>
            <div class="contact-card">
                <section class="contact">
                    <h2>Contacto</h2>
                    <form>
                        <label>Nombre</label>
                        <input type="text" required>
                        <label>Correo electrónico</label>
                        <input type="email" required>
                        <label>Mensaje</label>
                        <textarea required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </section>
            </div>
        `;
    }
}
customElements.define('contact-component', ContactComponent);


// FooterComponent
class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <style>
                footer {
                    background-color: #304eb1;
                    color: white;
                    text-align: center;
                    padding: 1rem;
                }
            </style>
            <footer>
                <p>&copy; 2024 Hospital. Todos los derechos reservados.</p>
            </footer>
        `;
    }
}
customElements.define('footer-component', FooterComponent);
