// header-component
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                header {
                    background-color: #4CAF50;
                    color: white;
                    text-align: center;
                    padding: 1rem;
                }
            </style>
            <header>
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
                    background: url('../assets/hospital.jpg') no-repeat center center;
                    background-size: cover;
                    height: 300px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    text-align: center;
                    padding: 1rem;
                }
            </style>
            <div class="hero">
                <h2>Bienvenido al Hospital</h2>
                <p>Su salud es nuestra prioridad</p>
            </div>
        `;
    }
}
customElements.define('hero-component', HeroComponent);

// services-component
class ServicesComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .services {
                    text-align: center;
                    padding: 1rem;
                }
                .service {
                    margin: 1rem 0;
                }
            </style>
            <section class="services">
                <h2>Nuestros Servicios</h2>
                <div class="service">Emergencias</div>
                <div class="service">Pediatría</div>
                <div class="service">Cirugía</div>
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
                .contact {
                    text-align: center;
                    padding: 1rem;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                input, textarea {
                    margin: 0.5rem 0;
                    padding: 0.5rem;
                    width: 80%;
                    max-width: 400px;
                }
                button {
                    padding: 0.5rem 1rem;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
            </style>
            <section class="contact">
                <h2>Contacto</h2>
                <form>
                    <input type="text" placeholder="Nombre" required>
                    <input type="email" placeholder="Email" required>
                    <textarea placeholder="Mensaje" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </section>
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
                    background-color: #4CAF50;
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
