// Datos de la colección CON URLs
const collectionItems = [
    {
        id: 1,
        title: "Hot Toys Iron Man Mark LXXXV",
        price: "$2,850",
        rarity: "EDICIÓN DIAMANTE",
        category: "FIGURA DE ACCIÓN",
        description: "Figura de 1/6 scale con 42 puntos de articulación, iluminación LED integrada y accesorios intercambiables. Solo 500 unidades mundial.",
        year: "2024",
        edition: "1/500",
        image: "https://i.pinimg.com/736x/86/82/51/86825137953969a623289d90f761c3f9.jpg",
        material: "Aleación",
        articulations: "42",
        ledLights: "15"
    },
    {
        id: 2,
        title: "Batman: The Dark Knight Returns #1 CGC 9.8",
        price: "$15,200",
        rarity: "GRADED MINT",
        category: "CÓMIC",
        description: "Edición CGC 9.8 White Pages. Primer aparición del Batman de Frank Miller. Considerada la versión definitiva del Caballero Oscuro.",
        year: "1986",
        edition: "CGC 9.8",
        image: "https://storage.googleapis.com/hipcomic/p/93f3804df94274e136201f5f96dc14e4-800.jpg",
        grade: "9.8",
        pages: "White",
        signature: "Frank Miller"
    },
    {
        id: 3,
        title: "Spider-Man No Way Home Suit Prop Replica",
        price: "$8,750",
        rarity: "PROP MASTER",
        category: "VESTUARIO",
        description: "Réplica exacta del traje usado por Tom Holland. Incluye certificado de autenticidad de Marvel Studios.",
        year: "2021",
        edition: "Studio",
        image: "https://i.pinimg.com/736x/61/e5/ca/61e5ca4557027c1703577e32ddaeb5b7.jpg",
        material: "Lycra",
        details: "Screen Used",
        authenticity: "Marvel Cert"
    }
];

// Datos de las reseñas CON URLs
const movieReviews = [
    {
        id: 1,
        title: "The Batman: Reinventando la Oscuridad",
        rating: "94%",
        movie: "The Batman (2022)",
        director: "Matt Reeves",
        runtime: "2h 56m",
        image: "https://tse3.mm.bing.net/th/id/OIP.f8IdbtmN_XwqqI2UROw44AHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
        content: "Una obra maestra cinematográfica que redefine el género de superhéroes. La interpretación de Pattinson ofrece un Bruce Wayne traumatizado y obsesivo, mientras que la dirección de Reeves crea un Gotham City que es un personaje en sí mismo. La fotografía y la banda sonora elevan esta película a niveles de cine arte.",
        highlights: ["Dirección Visual", "Actuación", "Banda Sonora", "Narrativa"]
    },
    {
        id: 2,
        title: "Avengers: Endgame - El Epílogo Definitivo",
        rating: "96%",
        movie: "Avengers: Endgame (2019)",
        director: "Hermanos Russo",
        runtime: "3h 1m",
        image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9cf37749b82c4ec7b45d450146f90ef670a07bebfb21d1d0b6a6cc69ff25e153._RI_TTW_.jpg",
        content: "La culminación perfecta de 11 años de narrativa cinematográfica. Endgame logra lo imposible: satisfacer las expectativas mientras ofrece momentos genuinamente sorprendentes. La escena final de Iron Man redefine lo que el cine de superhéroes puede lograr emocionalmente.",
        highlights: ["Emoción", "Escalas", "Conclusión", "Legado"]
    }
];

// Clase principal de HeroVerse
class HeroVerse {
    constructor() {
        this.collection = collectionItems;
        this.reviews = movieReviews;
        this.init();
    }

    init() {
        this.createBatBackground();
        this.renderCollection();
        this.renderReviews();
        this.addInteractions();
        console.log('🦇 HeroVerse Elite Collection inicializado');
    }

    createBatBackground() {
        const background = document.getElementById('batBackground');
        const batCount = 15;
        
        for (let i = 0; i < batCount; i++) {
            const bat = document.createElement('div');
            bat.className = 'bat';
            bat.textContent = '🦇';
            bat.style.left = `${Math.random() * 100}%`;
            bat.style.animationDelay = `${Math.random() * 20}s`;
            bat.style.fontSize = `${Math.random() * 16 + 16}px`;
            bat.style.opacity = Math.random() * 0.3 + 0.1;
            background.appendChild(bat);
        }
    }

    renderCollection() {
        const grid = document.getElementById('collectionGrid');
        
        grid.innerHTML = this.collection.map(item => `
            <div class="collection-card" data-id="${item.id}">
                <div class="card-image" style="background-image: url('${item.image}')">
                    <div class="image-overlay"></div>
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <h3 class="card-title">${item.title}</h3>
                        <div class="card-price">${item.price}</div>
                    </div>
                    <div class="card-meta">
                        <span class="card-category">${item.category}</span>
                        <span class="card-rarity">${item.rarity}</span>
                    </div>
                    <p class="card-description">${item.description}</p>
                    <div class="card-stats">
                        <div class="card-stat">
                            <div class="stat-value">${item.year}</div>
                            <div class="stat-label">AÑO</div>
                        </div>
                        <div class="card-stat">
                            <div class="stat-value">${item.edition}</div>
                            <div class="stat-label">EDICIÓN</div>
                        </div>
                        ${item.material ? `
                        <div class="card-stat">
                            <div class="stat-value">${item.material}</div>
                            <div class="stat-label">MATERIAL</div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderReviews() {
        const grid = document.getElementById('reviewsGrid');
        
        grid.innerHTML = this.reviews.map(review => `
            <div class="review-card" data-id="${review.id}">
                <div class="review-image" style="background-image: url('${review.image}')"></div>
                <div class="review-content-wrapper">
                    <div class="review-header">
                        <h3 class="review-title">${review.title}</h3>
                        <div class="review-rating">${review.rating}</div>
                    </div>
                    <div class="review-meta">
                        <span>${review.movie}</span>
                        <span>${review.director}</span>
                        <span>${review.runtime}</span>
                    </div>
                    <p class="review-content">${review.content}</p>
                    <div class="review-highlights">
                        ${review.highlights.map(highlight => 
                            `<span class="highlight">${highlight}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    addInteractions() {
        // Efectos hover para tarjetas de colección
        const collectionCards = document.querySelectorAll('.collection-card');
        collectionCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });

            card.addEventListener('click', () => {
                this.showItemDetails(card.getAttribute('data-id'));
            });
        });

        // Efectos hover para reseñas
        const reviewCards = document.querySelectorAll('.review-card');
        reviewCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Smooth scrolling para navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    showItemDetails(itemId) {
        const item = this.collection.find(i => i.id == itemId);
        if (item) {
            // Crear modal de detalles
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                opacity: 0;
                transition: opacity 0.3s ease;
                backdrop-filter: blur(10px);
            `;
            
            modal.innerHTML = `
                <div style="
                    background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
                    border: 2px solid var(--neon-blue);
                    border-radius: 15px;
                    padding: 40px;
                    max-width: 600px;
                    margin: 20px;
                    position: relative;
                    transform: translateY(20px);
                    transition: transform 0.3s ease;
                    box-shadow: 0 0 50px rgba(0, 204, 255, 0.5);
                ">
                    <button onclick="this.parentElement.parentElement.remove()" style="
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        background: none;
                        border: none;
                        font-size: 2em;
                        cursor: pointer;
                        color: var(--neon-blue);
                        text-shadow: 0 0 10px var(--neon-blue);
                    ">×</button>
                    
                    <div style="text-align: center; margin-bottom: 30px;">
                        <div style="
                            background-image: url('${item.image}');
                            background-size: cover;
                            background-position: center;
                            height: 200px;
                            border-radius: 10px;
                            margin-bottom: 20px;
                            position: relative;
                        ">
                            <div style="
                                position: absolute;
                                top: 0;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                background: linear-gradient(45deg, rgba(0,0,0,0.5), transparent);
                                border-radius: 10px;
                            "></div>
                        </div>
                        <h3 style="font-family: 'Orbitron', monospace; color: var(--neon-blue); margin-bottom: 10px;">
                            ${item.title}
                        </h3>
                        <div style="color: var(--accent-gold); font-family: 'Orbitron', monospace; font-size: 1.5em; margin-bottom: 20px;">
                            ${item.price}
                        </div>
                    </div>
                    
                    <div style="background: rgba(0, 204, 255, 0.1); padding: 20px; border-radius: 10px; border: 1px solid rgba(0, 204, 255, 0.3); margin-bottom: 25px;">
                        <p style="color: var(--text-secondary); line-height: 1.7; margin: 0;">
                            ${item.description}
                        </p>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 25px;">
                        <div style="text-align: center;">
                            <div style="color: var(--neon-blue); font-family: 'Orbitron', monospace; font-size: 1.2em;">${item.year}</div>
                            <div style="color: var(--text-secondary); font-size: 0.8em;">AÑO</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="color: var(--neon-blue); font-family: 'Orbitron', monospace; font-size: 1.2em;">${item.edition}</div>
                            <div style="color: var(--text-secondary); font-size: 0.8em;">EDICIÓN</div>
                        </div>
                    </div>
                    
                    <div style="text-align: center;">
                        <button onclick="this.parentElement.parentElement.remove()" style="
                            background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple));
                            color: white;
                            border: none;
                            padding: 15px 40px;
                            cursor: pointer;
                            font-family: 'Orbitron', monospace;
                            font-size: 0.9em;
                            letter-spacing: 2px;
                            border-radius: 25px;
                            text-transform: uppercase;
                        ">SOLICITAR CERTIFICACIÓN</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Trigger animation
            setTimeout(() => {
                modal.style.opacity = '1';
                modal.querySelector('div').style.transform = 'translateY(0)';
            }, 10);
        }
    }
}

// Efecto de carga épica
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';
    
    // Inicializar HeroVerse
    setTimeout(() => {
        document.body.style.opacity = '1';
        new HeroVerse();
    }, 500);
});

// Efecto de sonido para interacciones (opcional)
function playHoverSound() {
    // Podrías agregar sonidos aquí si quieres
    console.log('🔊 Interactive sound triggered');
}

// Agregar event listeners para sonidos
document.addEventListener('DOMContentLoaded', () => {
    const interactiveElements = document.querySelectorAll('.collection-card, .review-card, .nav-glow');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', playHoverSound);
    });
});