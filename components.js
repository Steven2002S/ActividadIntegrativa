class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                header {
                    background-color: #304eb1;
                    color: black;
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




// hero-component
class HeroComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
        .hero {
            font-family: 'Montserrat', sans-serif;
            text-align: center;
            padding: 2rem;
            background-color: white;
        }
        </style>
            <div class="hero">
                <p>No espere más para cuidar su salud y la de su familia. Agende una cita con nosotros hoy mismo y déjenos ser su socio en el camino hacia una vida más saludable y feliz.
                </p>
            </div>
        `;
    }
}
customElements.define('hero-component', HeroComponent);

//services
class ServicesComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .services {
                    text-align: center;
                    padding: 1rem;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                }
                .service {
                    margin: 1rem 0;
                }
                .service img {
                    max-width: 300px;
                    height: 200px;
                    display: block;
                    margin: 0 auto 0.5rem;
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

// contact-component
class ContactComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
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


// footer-component
class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
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
