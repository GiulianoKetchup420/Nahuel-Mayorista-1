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
        id: 9,
        name: "Afnan 9pm",
        category: "Perfumes 100ml",
        marca: "Afnan",
        minQty: 3, minPrice: "$45.000",
        price: "Consultar precio",
        image: "img/Afnaf9pm100ml.jpg",
        available: true
    },
    {
        id: 10,
        name: "Afnan 9pm Night Out",
        category: "Perfumes 100ml",
        marca: "Afnan",
        minQty: 3, minPrice: "$45.000",
        price: "Consultar precio",
        image: "img/afnaf9pmnigthout100ml.jpg",
        available: true
    },
    {
        id: 11,
        name: "Afnan 9pm Rebel",
        category: "Perfumes 100ml",
        marca: "Afnan",
        minQty: 3, minPrice: "$45.000",
        price: "Consultar precio",
        image: "img/afnaf9pmrebel100ml.jpg",
        available: true
    },
    {
        id: 12,
        name: "Al Haramain Amber Oud Gold Edition",
        category: "Perfumes 100ml",
        marca: "Al Haramain",
        price: "Consultar precio",
        image: "img/alharamainambelroudgoldedition.jpg",
        available: true
    },
    {
        id: 13,
        name: "Armaf Club de Nuit Intense",
        category: "Perfumes 100ml",
        marca: "Armaf",
        minQty: 3, minPrice: "$50.000",
        price: "Consultar precio",
        image: "img/armafclubdenuitintense.jpg",
        available: true
    },
    {
        id: 14,
        name: "Asad Bourbon",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$37.000",
        price: "Consultar precio",
        image: "img/asadbourboun.jpg",
        available: true
    },
    {
        id: 15,
        name: "Asad Elixir",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$37.000",
        price: "Consultar precio",
        image: "img/asadelixir.jpg",
        available: true
    },
    {
        id: 16,
        name: "Bharara King",
        category: "Perfumes 100ml",
        marca: "Bharara",
        price: "Consultar precio",
        image: "img/bhararaking.jpg",
        available: true
    },
    {
        id: 17,
        name: "Erba Pura",
        category: "Perfumes 100ml",
        marca: "Xerjoff",
        minQty: 3, minPrice: "$270.000",
        price: "Consultar precio",
        image: "img/erbapura.jpg",
        available: true
    },
    {
        id: 18,
        name: "Rasasi Hawas Atlantis",
        category: "Perfumes 100ml",
        marca: "Rasasi",
        minQty: 3, minPrice: "$49.000",
        price: "Consultar precio",
        image: "img/HawasAtlantis.jpg",
        available: true
    },
    {
        id: 19,
        name: "Rasasi Hawas Fire",
        category: "Perfumes 100ml",
        marca: "Rasasi",
        minQty: 3, minPrice: "$49.000",
        price: "Consultar precio",
        image: "img/HawasFire.jpg",
        available: true
    },
    {
        id: 20,
        name: "Rasasi Hawas Ice",
        category: "Perfumes 100ml",
        marca: "Rasasi",
        minQty: 3, minPrice: "$49.000",
        price: "Consultar precio",
        image: "img/Hawasice.jpg",
        available: true
    },
    {
        id: 21,
        name: "Rasasi Hawas Pink",
        category: "Perfumes 100ml",
        marca: "Rasasi",
        minQty: 3, minPrice: "$49.000",
        price: "Consultar precio",
        image: "img/HawasPink.jpg",
        available: true
    },
    {
        id: 22,
        name: "Mandarin Elixir",
        category: "Perfumes 100ml",
        marca: "Armaf",
        price: "Consultar precio",
        image: "img/mandarinelixir.jpg",
        available: true
    },
    {
        id: 23,
        name: "Naxos",
        category: "Perfumes 100ml",
        marca: "Xerjoff",
        minQty: 3, minPrice: "$270.000",
        price: "Consultar precio",
        image: "img/naxos.jpg",
        available: true
    },
    {
        id: 24,
        name: "Armaf Odyssey Mandarin Sky",
        category: "Perfumes 100ml",
        marca: "Armaf",
        price: "Consultar precio",
        image: "img/odysseymandarinsky.jpg",
        available: true
    },
    {
        id: 25,
        name: "Valentino Uomo Born in Roma",
        category: "Perfumes 100ml",
        marca: "Valentino",
        price: "Consultar precio",
        image: "img/valentinouomoborninroma.jpg",
        available: true
    },
    {
        id: 26,
        name: "Liquid Burn",
        category: "Perfumes 100ml",
        marca: "French Avenue",
        minQty: 3, minPrice: "$55.000",
        price: "Consultar precio",
        image: "img/LiquidBurn.jpg",
        available: true
    },
    {
        id: 27,
        name: "JBL Pro 4",
        category: "Parlantes",
        price: "Consultar precio",
        image: "img/jblpro4.jpg",
        available: true
    },
   
    

  
  {
        id: 10,
        name: "Perfume Odyssey Mandarin Sky",
        category: "Perfumes 100ml",
        brand: "Armaf",
        minQty: 3, minPrice: "$46.000",
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
// Renderizado de escala de precios por mayor
const renderWholesale = (product) => {
    if (product.wholesale && product.wholesale.length > 0) {
        const maxTiers = 3;
        const visibleTiers = product.wholesale.slice(0, maxTiers);
        const hasMore = product.wholesale.length > maxTiers;

        const tiers = visibleTiers.map(w => 
            `<div class="price-tier-big">
                <span class="tier-qty">${w.qty}+ unid.</span>
                <span class="tier-price">${w.price} <small>c/u</small></span>
            </div>`
        ).join('');

        const moreNote = hasMore 
            ? `<p class="more-tiers-note">+ más descuentos llevando mayor cantidad — consultar</p>` 
            : '';

        return `<div class="wholesale-prices-big">${tiers}</div>${moreNote}`;
    }
    if (product.minQty && product.minPrice) {
        return `
            <div class="min-wholesale">
                <p class="min-wholesale-price">Mínimo ${product.minQty} unidades: <strong>${product.minPrice}</strong> c/u</p>
                <p class="wholesale-notice"><i class="fas fa-tag"></i> Llevando más cantidad, el precio mejora aún más — consultar.</p>
            </div>
        `;
    }
    return `<p class="product-price">${product.price}</p>`;
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
                
                
                ${renderWholesale(product)}
                
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
