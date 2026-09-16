// Base de datos de productos de Nahuel Importador
const products = [
    {
        id: 1,
        name: "Elfbar Ice King 40k Puffs - Blue Razz Ice",
        category: "Vapers",
        price: "$28.000",
        wholesale: [
            { qty: 2, price: "$24.000" },
            { qty: 5, price: "$22.000" },
            { qty: 10, price: "$21.000" }
        ],
        image: "img/BlueRazzIce.jpg",
        available: true
    },
    {
        id: 6,
        name: "Perfume Hawas Atlantis",
        category: "Perfumes 100ml", // Cambiá por la categoría que prefieras
        brand: "Rasasi",
        price: "$0", // Poné el precio real
        wholesale: [],
        image: "img/HawasAtlantis.jpg", // Ajustá la extensión si es .jpg o .jpeg
        available: true
    },
    {
        id: 7,
        name: "Perfume Hawas Fire",
        category: "Perfumes 100ml",
        brand: "Rasasi",
        price: "$0",
        wholesale: [],
        image: "img/HawasFire.jpg",
        available: true
    },
    {
        id: 8,
        name: "Perfume Hawas Ice",
        category: "Perfumes 100ml",
        brand: "Rasasi",
        price: "$0",
        wholesale: [],
        image: "img/HawasIce.jpg",
        available: true
    },
    {
        id: 9,
        name: "Perfume Hawas Pink",
        category: "Perfumes 100ml",
        brand: "Rasasi",
        price: "$0",
        wholesale: [],
        image: "img/HawasPink.jpg",
        available: true
    },
    {
        id: 10,
        name: "Perfume Odyssey Mandarin Sky",
        category: "Perfumes 100ml",
        brand: "Armaf",
        price: "$0",
        wholesale: [],
        image: "img/odysseymandarinsky.jpg",
        available: true
    },
   {
        id: 4,
        name: "Cremas Karseell 500ml",
        category: "Belleza",
        brand: "Karseell",
        price: "$22.000",
        wholesale: [
            { qty: 5, price: "$16.000" },
            { qty: 10, price: "$15.000" }
        ],
        image: "img/CremasKerasel.jpeg", // Revisá la extensión (.png o .jpg) según cómo guardaste la foto
        available: true
    },
  {
        id: 5,
        name: "Battery Pack MagSafe",
        category: "Apple",
        brand: "Apple",
        price: "$18.000",
        wholesale: [
            { qty: 10, price: "$15.500" },
            { qty: 20, price: "$14.500" },
            { qty: 30, price: "$13.000" },
            { qty: 50, price: "$11.500" }
        ],
        image: "img/BatteryPack.jpeg", // Revisá la extensión (.png o .jpg) según cómo guardaste la foto
        available: true
    },
    {
        id: 3,
        name: "Adaptador 35W + Cable iPhone",
        category: "Apple",
        brand: "Apple",
        price: "$12.000",
        wholesale: [
            { qty: 2, price: "$20.000" },
            { qty: 5, price: "USD $4,50" },
            { qty: 10, price: "USD $4,40" },
            { qty: 20, price: "USD $4,00" },
            { qty: 30, price: "USD $3,80" }
        ],
        image: "img/cargador.jpeg",
        available: true
    },
    {
        id: 6,
        name: "Elfbar Ice King 40k Puffs - Cherry Strazz",
        category: "Vapers",
        price: "$28.000",
        wholesale: [
            { qty: 2, price: "$24.000" },
            { qty: 5, price: "$22.000" },
            { qty: 10, price: "$21.000" }
        ],
        image: "img/CherryStrazz.jpg",
        available: true
    },
    {
        id: 7,
        name: "Elfbar Ice King 40k Puffs - Grape Ice",
        category: "Vapers",
        price: "$28.000",
        wholesale: [
            { qty: 2, price: "$24.000" },
            { qty: 5, price: "$22.000" },
            { qty: 10, price: "$21.000" }
        ],
        image: "img/GrapeIce.jpg",
        available: true
    },
    {
        id: 8,
        name: "Elfbar Ice King 40k Puffs - Strawberry Ice",
        category: "Vapers",
        price: "$28.000",
        wholesale: [
            { qty: 2, price: "$24.000" },
            { qty: 5, price: "$22.000" },
            { qty: 10, price: "$21.000" }
        ],
        image: "img/StrawberryIce.jpg",
        available: true
    },
    {
        id: 2,
        name: "Body Splash 250ml",
        category: "Belleza", 
        price: "$22.000",
        image: "img/bodysplash.jpeg",
        available: true
    },

    {
        id: 4,
        name: "AirPods Pro 2",
        category: "Apple",
        price: "$22.000",
        wholesale: [
            { qty: 5, price: "$16.200" },
            { qty: 10, price: "$15.150" },
            { qty: 15, price: "$14.250" },
            { qty: 20, price: "$13.350" }
        ],
        image: "img/airpodspro2.jpeg",
        available: true
    },
    {
        id: 5,
        name: "Vaso Stanley Térmico",
        category: "Otros",
        price: "$35.000",
        image: "img/vasosstanley.jpg",
        available: true
    }
];

const waNumber = "5493865389429";
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const brandBtns = document.querySelectorAll('.brand-btn');
const categoryCards = document.querySelectorAll('.category-card');
const searchInput = document.getElementById('searchInput');
const brandsSection = document.querySelector('.brands-section');
const perfumeCategories = ['Perfumes 100ml', 'Perfumes 50ml', 'Perfumes 30ml', 'Testers 60ml'];
let selectedCategory = 'Todos';
let selectedBrand = 'Todas';

// Generador de enlace de WhatsApp
const generateWALink = (productName) => {
    const message = `Hola Nahuel Importador, quiero consultar por el producto: ${productName}`;
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
};

// Renderizado de escala de precios por mayor
const renderWholesale = (product) => {
    if (product.wholesale && product.wholesale.length > 0) {
        const tiers = product.wholesale.map(w => 
            `<p class="price-tier">${w.qty}+ u. → <strong>${w.price}</strong> c/u</p>`
        ).join('');
        return `<div class="wholesale-prices">${tiers}</div>`;
    }
    return '';
};

// Renderizar tarjetas de productos
const renderProducts = (productsToRender) => {
    productsGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color: #fff; padding: 20px;">No se encontraron productos.</p>';
        return;
    }

    productsToRender.forEach(product => {
        const statusText = product.available ? 'En stock' : 'Sin stock';
        const statusClass = product.available ? 'status-available' : 'status-unavailable';
        const waLink = generateWALink(product.name);

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-container">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x300?text=Nahuel+Importador'">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                
                <p class="product-price">${product.price}</p>
                ${renderWholesale(product)}
                
                <p class="wholesale-notice"><i class="fas fa-tag"></i> Llevando más de 1 unidad se mejora el precio.</p>
                <p class="product-status ${statusClass}"><i class="fas fa-circle" style="font-size:8px; vertical-align:middle; margin-right:5px;"></i>${statusText}</p>
                
                <a href="${waLink}" target="_blank" class="btn-whatsapp">
                    <i class="fab fa-whatsapp"></i> Consultar
                </a>
            </div>
        `;
        productsGrid.appendChild(card);
    });
};

// Controlar visibilidad de las marcas de perfume
const updateBrandsVisibility = () => {
    if (perfumeCategories.includes(selectedCategory)) {
        brandsSection.style.display = 'block';
    } else {
        brandsSection.style.display = 'none';
        selectedBrand = 'Todas';
        brandBtns.forEach(b => b.classList.remove('active'));
        const todasBtn = document.querySelector('[data-brand="Todas"]');
        if (todasBtn) todasBtn.classList.add('active');
    }
};

// Aplicar filtros combinados
const applyFilters = () => {
    let filtered = products;

    if (selectedCategory !== 'Todos') {
        filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (selectedBrand !== 'Todas') {
        filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    renderProducts(filtered);
};

// Listeners de botones de categorías
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        selectedCategory = e.target.dataset.filter;
        updateBrandsVisibility();
        applyFilters();
    });
});

// Listeners de botones de marcas
brandBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        brandBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        selectedBrand = e.target.dataset.brand;
        applyFilters();
    });
});

// Listeners de tarjetas de categorías del inicio
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.filter;
        selectedCategory = category;
        updateBrandsVisibility();
        filterBtns.forEach(b => {
            b.classList.remove('active');
            if (b.dataset.filter === category) {
                b.classList.add('active');
            }
        });
        applyFilters();
        document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
    });
});

// Listener de barra de búsqueda
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        selectedCategory = 'Todos';
        selectedBrand = 'Todas';
        filterBtns.forEach(b => b.classList.remove('active'));
        brandBtns.forEach(b => b.classList.remove('active'));
        
        const todosBtn = document.querySelector('[data-filter="Todos"]');
        if (todosBtn) todosBtn.classList.add('active');
        const todasBtn = document.querySelector('[data-brand="Todas"]');
        if (todasBtn) todasBtn.classList.add('active');

        const searched = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.category.toLowerCase().includes(searchTerm) ||
            (product.marca && product.marca.toLowerCase().includes(searchTerm))
        );
        renderProducts(searched);
    });
}

// Menú Mobile Hamburger
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Inicialización
updateBrandsVisibility();
applyFilters();