// Datos de los artículos del blog
const articles = [
    {
        id: 1,
        title: "El Expresionismo Abstracto: Más Allá de la Forma",
        date: "15 Nov 2024",
        excerpt: "Explorando cómo los artistas abstractos comunican emociones a través del color y la textura...",
        category: "Arte Visual",
        icon: "🎨"
    },
    {
        id: 2,
        title: "La Banda Sonora que Cambió el Cine Moderno",
        date: "12 Nov 2024",
        excerpt: "Análisis de cómo las composiciones musicales han redefinido la experiencia cinematográfica...",
        category: "Cine",
        icon: "🎬"
    },
    {
        id: 3,
        title: "Fusiones Musicales: Cuando los Géneros Colisionan",
        date: "8 Nov 2024",
        excerpt: "Descubriendo las colaboraciones más innovadoras entre artistas de diferentes escenas musicales...",
        category: "Música",
        icon: "🎵"
    }
];

// Clase principal del blog
class CreativeBlog {
    constructor() {
        this.articles = articles;
        this.init();
    }

    init() {
        this.renderArticles();
        this.addEventListeners();
        console.log('✅ Blog creativo inicializado');
    }

    renderArticles() {
        const grid = document.getElementById('postsGrid');
        
        grid.innerHTML = this.articles.map(article => `
            <article class="post-card" data-id="${article.id}">
                <div class="post-image">
                    ${article.icon}
                </div>
                <div class="post-content">
                    <h3 class="post-title">${article.title}</h3>
                    <div class="post-date">
                        📅 ${article.date} | 🏷️ ${article.category}
                    </div>
                    <p class="post-excerpt">${article.excerpt}</p>
                </div>
            </article>
        `).join('');
    }

    addEventListeners() {
        // Efectos hover mejorados
        const cards = document.querySelectorAll('.post-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });

            // Click en tarjeta
            card.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                this.showArticleDetails(id);
            });
        });

        // Smooth scroll para enlaces del footer
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

    showArticleDetails(articleId) {
        const article = this.articles.find(a => a.id == articleId);
        if (article) {
            alert(`📖 ${article.title}\n\n${article.excerpt}\n\n¡Artículo completo próximamente!`);
        }
    }
}

// Inicializar el blog cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    new CreativeBlog();
});

// Efectos adicionales
function addFloatingEffects() {
    const elements = document.querySelectorAll('.post-card, .author-card');
    
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
        el.classList.add('fade-in-up');
    });
}

// Agregar estilos de animación
const style = document.createElement('style');
style.textContent = `
    .fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
        opacity: 0;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Inicializar efectos cuando la página carga
window.addEventListener('load', addFloatingEffects);