let cart = []; 
// Abrir/Cerrar la ventana emergente del carrito
function toggleCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.toggle('active');
    }
}

// Agregar producto al carrito
function addToCart(id, name) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, name, quantity: 1 });
    }
    updateCartUI();
}

// Modificar cantidad (+ / -)
function changeQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    updateCartUI();
}

// Actualizar el contador y la lista dentro de la ventana
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItemsList = document.getElementById('cartItemsList');
    
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    
    if (cartCount) {
        cartCount.innerText = totalItems;
    }

    if (cartItemsList) {
        if (cart.length === 0) {
            cartItemsList.innerHTML = '<p class="cart-empty">El carrito está vacío.</p>';
        } else {
            cartItemsList.innerHTML = cart.map(item => `
                <div class="cart-item-row">
                    <span class="cart-item-name">${item.name}</span>
                    <div class="cart-item-controls">
                        <button type="button" onclick="changeQuantity('${item.id}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button type="button" onclick="changeQuantity('${item.id}', 1)">+</button>
                    </div>
                </div>
            `).join('');
        }
    }
}

// Enviar el pedido formateado a WhatsApp
function sendOrderToWhatsApp() {
    if (cart.length === 0) {
        alert("El carrito está vacío. Agregá productos para pedir.");
        return;
    }

    let message = "Hola Nahuel! Quisiera cotizar el siguiente pedido:\n\n";
    cart.forEach(item => {
        message += `• ${item.quantity}x ${item.name}\n`;
    });
    message += "\n¿Me confirmás stock disponible y costo total?";

    window.open(`https://wa.me/5493865389429?text=${encodeURIComponent(message)}`, '_blank');
}

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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 78,
        name: "Elfbar Ice King 40k Puffs - Blueberry Raspberry Watermelon",
        category: "Vapers",
        price: "$28.000",
        wholesale: [
            { qty: 2, price: "$24.000" },
            { qty: 5, price: "$22.000" },
            { qty: 10, price: "$21.000" }
        ],
        image: "img/ELFBARIceKing40kBlueberryRaspberryWatermelon1.jpg",
        available: true
    },
    {
        id: 79,
        name: "Elfbar Ice King 40k Puffs - Dragon Strawnana",
        category: "Vapers",
        price: "$28.000",
        wholesale: [
            { qty: 2, price: "$24.000" },
            { qty: 5, price: "$22.000" },
            { qty: 10, price: "$21.000" }
        ],
        image: "img/ELFBARIceKing40kDragonStrawnana.jpg",
        available: true
    },
    {
        id: 80,
        name: "Elfbar Ice King 40k Puffs - Mango Magic",
        category: "Vapers",
        price: "$28.000",
        wholesale: [
            { qty: 2, price: "$24.000" },
            { qty: 5, price: "$22.000" },
            { qty: 10, price: "$21.000" }
        ],
        image: "img/ELFBARIceKing40kMangoMagic.jpg",
        available: true
    },
    {
        id: 81,
        name: "Elfbar Ice King 40k Puffs - Peach",
        category: "Vapers",
        price: "$28.000",
        wholesale: [
            { qty: 2, price: "$24.000" },
            { qty: 5, price: "$22.000" },
            { qty: 10, price: "$21.000" }
        ],
        image: "img/ELFBARIceKing40kPeach.jpg",
        available: true
    },
    {
        id: 82,
        name: "Elfbar Ice King 40k Puffs - Ribena Lychee",
        category: "Vapers",
        price: "$28.000",
        wholesale: [
            { qty: 2, price: "$24.000" },
            { qty: 5, price: "$22.000" },
            { qty: 10, price: "$21.000" }
        ],
        image: "img/ELFBARIceKing40kRibenaLychee.jpg",
        available: true
    },
    {
        id: 83,
        name: "Elfbar Ice King 40k Puffs - Sour Apple Ice",
        category: "Vapers",
        price: "$28.000",
        wholesale: [
            { qty: 2, price: "$24.000" },
            { qty: 5, price: "$22.000" },
            { qty: 10, price: "$21.000" }
        ],
        image: "img/ELFBARIceKing40kSourAppleIce.jpg",
        available: true
    },
    {
        id: 84,
        name: "Elfbar Ice King 40k Puffs - Sour Lush Gummy",
        category: "Vapers",
        price: "$28.000",
        wholesale: [
            { qty: 2, price: "$24.000" },
            { qty: 5, price: "$22.000" },
            { qty: 10, price: "$21.000" }
        ],
        image: "img/ELFBARIceKing40kSourLushGummy.jpg",
        available: true
    },
    {
        id: 85,
        name: "Elfbar Ice King 40k Puffs - Sour Strawberry Dragonfruit",
        category: "Vapers",
        price: "$28.000",
        wholesale: [
            { qty: 2, price: "$24.000" },
            { qty: 5, price: "$22.000" },
            { qty: 10, price: "$21.000" }
        ],
        image: "img/ELFBARIceKing40kSourStrawberryDragonfruit.jpg",
        available: true
    },
    {
        id: 86,
        name: "Elfbar Ice King 40k Puffs - Strawberry Berries",
        category: "Vapers",
        price: "$28.000",
        wholesale: [
            { qty: 2, price: "$24.000" },
            { qty: 5, price: "$22.000" },
            { qty: 10, price: "$21.000" }
        ],
        image: "img/ELFBARIceKing40kStrawberryBerries.jpg",
        available: true
    },
   
    {
        id: 88,
        name: "Elfbar Ice King 40k Puffs - Strawberry Kiwi Ice",
        category: "Vapers",
        price: "$28.000",
        wholesale: [
            { qty: 2, price: "$24.000" },
            { qty: 5, price: "$22.000" },
            { qty: 10, price: "$21.000" }
        ],
        image: "img/ELFBARIceKing40kStrawberryKiwiIce.jpg",
        available: true
    },
    {
        id: 89,
        name: "Elfbar Ice King 40k Puffs - Watermelon",
        category: "Vapers",
        price: "$28.000",
        wholesale: [
            { qty: 2, price: "$24.000" },
            { qty: 5, price: "$22.000" },
            { qty: 10, price: "$21.000" }
        ],
        image: "img/ELFBARIceKing40kWatermelon.jpg",
        available: true
    },
    {
        id: 90,
        name: "Elfbar Ice King 40k Puffs - Watermelon Lemonberry",
        category: "Vapers",
        price: "$28.000",
        wholesale: [
            { qty: 2, price: "$24.000" },
            { qty: 5, price: "$22.000" },
            { qty: 10, price: "$21.000" }
        ],
        image: "img/ELFBARIceKing40kWatermelonLemonberry.jpg",
        available: true
    },
    {
        id: 5,
        name: "Body Splash 250ml",
        category: "Belleza",
        price: "$22.000",
        image: "img/bodysplash.jpeg",
        available: true
    },
    {
        id: 6,
        name: "Cremas Karseell 500ml",
        category: "Belleza",
        marca: "Karseell",
        price: "$22.000",
        wholesale: [
            { qty: 5, price: "$16.000" },
            { qty: 10, price: "$15.000" }
        ],
        image: "img/CremasKerasel.jpeg",
        available: true
    },
    {
        id: 7,
        name: "Adaptador 35W + Cable iPhone",
        category: "Apple",
        marca: "Apple",
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
        id: 8,
        name: "Battery Pack MagSafe",
        category: "Apple",
        marca: "Apple",
        price: "$18.000",
        wholesale: [
            { qty: 10, price: "$15.500" },
            { qty: 20, price: "$14.500" },
            { qty: 30, price: "$13.000" },
            { qty: 50, price: "$11.500" }
        ],
        image: "img/BatteryPack.jpeg",
        available: true
    },
    {
        id: 9,
        name: "AirPods Pro 2",
        category: "Apple",
        marca: "Apple",
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
        id: 10,
        name: "Vaso Stanley Térmico",
        category: "Otros",
        price: "$35.000",
        image: "img/vasosstanley.jpg",
        available: true
    },
    {
        id: 11,
        name: "JBL Pro 4",
        category: "Parlantes",
        price: "Consultar precio",
        image: "img/jblpro4.jpg",
        available: true
    },
    {
        id: 12,
        name: "Afnan 9pm",
        category: "Perfumes 100ml",
        marca: "Afnan",
        minQty: 3, minPrice: "$45.000",
        price: "Consultar precio",
        image: "img/Afnaf9pm100ml.jpg",
        available: true
    },
    {
        id: 13,
        name: "Afnan 9pm Night Out",
        category: "Perfumes 100ml",
        marca: "Afnan",
        minQty: 3, minPrice: "$45.000",
        price: "Consultar precio",
        image: "img/afnaf9pmnigthout100ml.jpg",
        available: true
    },
    {
        id: 14,
        name: "Afnan 9pm Rebel",
        category: "Perfumes 100ml",
        marca: "Afnan",
        minQty: 3, minPrice: "$45.000",
        price: "Consultar precio",
        image: "img/afnaf9pmrebel100ml.jpg",
        available: true
    },
    {
        id: 15,
        name: "Al Haramain Amber Oud Gold Edition",
        category: "Perfumes 100ml",
        marca: "Al Haramain",
        price: "Consultar precio",
        image: "img/alharamainambelroudgoldedition.jpg",
        available: true
    },
    {
        id: 16,
        name: "Armaf Club de Nuit Intense",
        category: "Perfumes 100ml",
        marca: "Armaf",
        minQty: 3, minPrice: "$50.000",
        price: "Consultar precio",
        image: "img/armafclubdenuitintense.jpg",
        available: true
    },
    {
        id: 17,
        name: "Asad Bourbon",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$37.000",
        price: "Consultar precio",
        image: "img/asadbourboun.jpg",
        available: true
    },
    {
        id: 18,
        name: "Asad Elixir",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$37.000",
        price: "Consultar precio",
        image: "img/asadelixir.jpg",
        available: true
    },
    {
        id: 19,
        name: "Bharara King",
        category: "Perfumes 100ml",
        marca: "Bharara",
        price: "Consultar precio",
        image: "img/bhararaking.jpg",
        available: true
    },
    {
        id: 20,
        name: "Erba Pura",
        category: "Perfumes 100ml",
        marca: "Xerjoff",
        minQty: 3, minPrice: "$270.000",
        price: "Consultar precio",
        image: "img/erbapura.jpg",
        available: true
    },
    {
        id: 21,
        name: "Rasasi Hawas Atlantis",
        category: "Perfumes 100ml",
        marca: "Rasasi",
        minQty: 3, minPrice: "$49.000",
        price: "Consultar precio",
        image: "img/HawasAtlantis.jpg",
        available: true
    },
    {
        id: 22,
        name: "Rasasi Hawas Fire",
        category: "Perfumes 100ml",
        marca: "Rasasi",
        minQty: 3, minPrice: "$49.000",
        price: "Consultar precio",
        image: "img/HawasFire.jpg",
        available: true
    },
    {
        id: 23,
        name: "Rasasi Hawas Ice",
        category: "Perfumes 100ml",
        marca: "Rasasi",
        minQty: 3, minPrice: "$49.000",
        price: "Consultar precio",
        image: "img/Hawasice.jpg",
        available: true
    },
    {
        id: 24,
        name: "Rasasi Hawas Pink",
        category: "Perfumes 100ml",
        marca: "Rasasi",
        minQty: 3, minPrice: "$49.000",
        price: "Consultar precio",
        image: "img/HawasPink.jpg",
        available: true
    },
    {
        id: 25,
        name: "Mandarin Elixir",
        category: "Perfumes 100ml",
        marca: "Armaf",
        price: "Consultar precio",
        image: "img/mandarinelixir.jpg",
        available: true
    },
    {
        id: 26,
        name: "Naxos",
        category: "Perfumes 100ml",
        marca: "Xerjoff",
        minQty: 3, minPrice: "$270.000",
        price: "Consultar precio",
        image: "img/naxos.jpg",
        available: true
    },
    {
        id: 27,
        name: "Armaf Odyssey Mandarin Sky",
        category: "Perfumes 100ml",
        marca: "Armaf",
        minQty: 3, minPrice: "$46.000",
        price: "Consultar precio",
        image: "img/odysseymandarinsky.jpg",
        available: true
    },
    {
        id: 28,
        name: "Valentino Uomo Born in Roma",
        category: "Perfumes 100ml",
        marca: "Valentino",
        price: "Consultar precio",
        image: "img/valentinouomoborninroma.jpg",
        available: true
    },
    {
        id: 29,
        name: "Liquid Burn",
        category: "Perfumes 100ml",
        marca: "French Avenue",
        minQty: 3, minPrice: "$55.000",
        price: "Consultar precio",
        image: "img/LiquidBurn.jpg",
        available: true
    },
    
    {
        id: 38,
        name: "Asad Bourbon 50ml",
        category: "Perfumes 50ml",
        marca: "Lattafa",
        price: "Consultar precio",
        image: "img/50mlasadBourbonlataffa.jpg",
        available: true
    },
    {
        id: 39,
        name: "Asad Clásico 50ml",
        category: "Perfumes 50ml",
        marca: "Lattafa",
        price: "Consultar precio",
        image: "img/50mlasadclasicolataffa.jpg",
        available: true
    },
    {
        id: 40,
        name: "Yara Tous EDP 50ml",
        category: "Perfumes 50ml",
        marca: "Lattafa",
        price: "Consultar precio",
        image: "img/50mlLattafaYaraTousEDpMujer.jpg",
        available: true
    },
    {
        id: 41,
        name: "Yara Moi 50ml",
        category: "Perfumes 50ml",
        marca: "Lattafa",
        price: "Consultar precio",
        image: "img/50mlYaraMoiLattaffaMujer.jpg",
        available: true
    },
    {
        id: 42,
        name: "Yara Pink EDP 50ml",
        category: "Perfumes 50ml",
        marca: "Lattafa",
        price: "Consultar precio",
        image: "img/50mlYaraPinkLataffaEdPMujer.jpg",
        available: true
    },
  {
        id: "perfumes-30ml-general",
        name: "Perfumes 30ml (Surtidos)",
        category: "Perfumes 30ml",
        marca: "Todas",
        image: "img/perfumes30ml.png", // Aquí podés poner la foto del collage cuando la armes
        description: "Modelos y marcas con rotación diaria.",
        isSpecial30ml: true,
        prices: [
            { qty: "1 Unidad", price: "$12.000" },
            { qty: "2 Unidades", price: "$20.000 ($10.000 c/u)" },
            { qty: "5 Unidades", price: "$7.000 c/u" },
            { qty: "10 Unidades", price: "$6.000 c/u" },
            { qty: "20 Unidades", price: "$5.800 c/u" },
            { qty: "50+ Unidades", price: "$5.100 c/u", highlight: true }
        ]
    },

    {
        id: 44,
        name: "Afnan Turathi Electric",
        category: "Perfumes 100ml",
        marca: "Afnan",
        minQty: 3, minPrice: "$53.000",
        price: "Consultar precio",
        image: "img/AfnafTurathiElectric.jpg",
        available: true
    },
    {
        id: 45,
        name: "Armaf Odyssey Aqua",
        category: "Perfumes 100ml",
        marca: "Armaf",
        minQty: 3, minPrice: "$46.000",
        price: "Consultar precio",
        image: "img/armafodysseyaqua100ml.jpg",
        available: true
    },
    {
        id: 46,
        name: "Armaf Odyssey Artisto 100ml",
        category: "Perfumes 100ml",
        marca: "Armaf",
        minQty: 3, minPrice: "$46.000",
        price: "Consultar precio",
        image: "img/armafodysseyartisto100ml.jpg",
        available: true
    },
    {
        id: 47,
        name: "Armaf Odyssey Candy Special Edition",
        category: "Perfumes 100ml",
        marca: "Armaf",
        minQty: 3, minPrice: "$46.000",
        price: "Consultar precio",
        image: "img/armafODYSSEYCANDEESPECIALEDITION100ml.jpg",
        available: true
    },
    {
        id: 48,
        name: "Armaf Odyssey Dubai Chocolate",
        category: "Perfumes 100ml",
        marca: "Armaf",
        minQty: 3, minPrice: "$46.000",
        price: "Consultar precio",
        image: "img/armafodysseydubaichocolate100ml.jpg",
        available: true
    },
    {
        id: 49,
        name: "Armaf Odyssey Homme in Black",
        category: "Perfumes 100ml",
        marca: "Armaf",
        minQty: 3, minPrice: "$46.000",
        price: "Consultar precio",
        image: "img/armafodysseyhommeblack100ml.jpg",
        available: true
    },
    {
        id: 50,
        name: "Armaf Odyssey Marshmallow",
        category: "Perfumes 100ml",
        marca: "Armaf",
        minQty: 3, minPrice: "$46.000",
        price: "Consultar precio",
        image: "img/armafODYSSEYMARSHMALLOW100ml.jpg",
        available: true
    },
    {
        id: 51,
        name: "Armaf Odyssey Soda Pop",
        category: "Perfumes 100ml",
        marca: "Armaf",
        minQty: 3, minPrice: "$46.000",
        price: "Consultar precio",
        image: "img/armafODYSSEYSODAPOP100ml.jpg",
        available: true
    },
    {
        id: 52,
        name: "Armaf Odyssey Toffee Coffee 100ml",
        category: "Perfumes 100ml",
        marca: "Armaf",
        minQty: 3, minPrice: "$46.000",
        price: "Consultar precio",
        image: "img/ArmafOdysseytoffeecoffee100ml.jpg",
        available: true
    },
    {
        id: 53,
        name: "Armaf Odyssey Wild One Gold Edition",
        category: "Perfumes 100ml",
        marca: "Armaf",
        minQty: 3, minPrice: "$46.000",
        price: "Consultar precio",
        image: "img/ArmafOdysseyWildOneGoldEdition100ml.jpg",
        available: true
    },
    {
        id: 54,
        name: "Armaf Yum Yum",
        category: "Perfumes 100ml",
        marca: "Armaf",
        minQty: 3, minPrice: "$58.000",
        price: "Consultar precio",
        image: "img/ArmafYumYum100ml.jpg",
        available: true
    },
    {
        id: 55,
        name: "Creed Aventus",
        category: "Perfumes 100ml",
        marca: "Creed",
        minQty: 3, minPrice: "$390.000",
        price: "Consultar precio",
        image: "img/CreedAventus100ml.jpg",
        available: true
    },
    {
        id: 56,
        name: "Creed Green Irish Tweed",
        category: "Perfumes 100ml",
        marca: "Creed",
        minQty: 3, minPrice: "$390.000",
        price: "Consultar precio",
        image: "img/creedGreenIrishTweed100ml.jpg",
        available: true
    },
    {
        id: 57,
        name: "Creed Original Vetiver",
        category: "Perfumes 100ml",
        marca: "Creed",
        minQty: 3, minPrice: "$390.000",
        price: "Consultar precio",
        image: "img/CreedOriginalVetiver100ml.jpg",
        available: true
    },
    {
        id: 58,
        name: "Creed Silver Mountain Water",
        category: "Perfumes 100ml",
        marca: "Creed",
        minQty: 3, minPrice: "$390.000",
        price: "Consultar precio",
        image: "img/creedSilverMountainWater100ml.jpg",
        available: true
    },
    {
        id: 59,
        name: "Her Confession",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$57.000",
        price: "Consultar precio",
        image: "img/HerConfessionLatafa100ml.jpg",
        available: true
    },
    {
        id: 60,
        name: "His Confession",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$57.000",
        price: "Consultar precio",
        image: "img/HisConfessionLataffa100ml.jpg",
        available: true
    },
    {
        id: 61,
        name: "Asad Men",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$37.000",
        price: "Consultar precio",
        image: "img/LataffaASADMEN100ml.jpg",
        available: true
    },
    {
        id: 62,
        name: "Asad Zanzibar",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$37.000",
        price: "Consultar precio",
        image: "img/LataffaASADZANZIBAR100ml.jpg",
        available: true
    },
    {
        id: 63,
        name: "Bade'e Al Oud Amethyst",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$49.000",
        price: "Consultar precio",
        image: "img/LataffaBADE'EALOUDAMETHYST100ml.jpg",
        available: true
    },
    {
        id: 64,
        name: "Bade'e Al Oud For Glory",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$49.000",
        price: "Consultar precio",
        image: "img/LataffaBADE'EALOUDFORGLORY100ml.jpg",
        available: true
    },
    {
        id: 65,
        name: "Bade'e Al Oud Honor & Glory",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$49.000",
        price: "Consultar precio",
        image: "img/LataffaBADE'EALOUDHONOR&GLORY100ml.jpg",
        available: true
    },
    {
        id: 66,
        name: "Bade'e Al Oud Noble Blush (Mujer)",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$49.000",
        price: "Consultar precio",
        image: "img/LataffaBADE'EALOUDNOBLEBLUSHWOMAN100ml.jpg",
        available: true
    },
    {
        id: 67,
        name: "Bade'e Al Oud Sublime",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$49.000",
        price: "Consultar precio",
        image: "img/LataffaBADE'EALOUDSUBLIME100ml.jpg",
        available: true
    },
    {
        id: 68,
        name: "Eclaire",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$49.000",
        price: "Consultar precio",
        image: "img/LataffaEclaire100ml.jpg",
        available: true
    },
    {
        id: 69,
        name: "Fakhar Platinum",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$45.000",
        price: "Consultar precio",
        image: "img/LataffaFakharPlatin100ml.jpg",
        available: true
    },
    {
        id: 70,
        name: "Yara Candy (Mujer)",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$37.000",
        price: "Consultar precio",
        image: "img/LataffaYARACANDYWOMAN100ml.jpg",
        available: true
    },
    {
        id: 71,
        name: "Yara Elixir (Mujer)",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$37.000",
        price: "Consultar precio",
        image: "img/LataffaYARAELIXIRWOMAN100ml.jpg",
        available: true
    },
    {
        id: 72,
        name: "Yara Moi 100ml",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$37.000",
        price: "Consultar precio",
        image: "img/LataffaYaraMoi100ml.jpg",
        available: true
    },
    {
        id: 73,
        name: "Yara Tous 100ml",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$37.000",
        price: "Consultar precio",
        image: "img/LataffaYaraTous100ml.jpg",
        available: true
    },
    {
        id: 74,
        name: "Yara (Mujer) 100ml",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$37.000",
        price: "Consultar precio",
        image: "img/LataffaYARAWOMAN100ml.jpg",
        available: true
    },
    {
        id: 75,
        name: "Fakhar Black",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$45.000",
        price: "Consultar precio",
        image: "img/LATTAFAFakharBlack100ml.jpg",
        available: true
    },
    {
        id: 76,
        name: "Fakhar Rose",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$45.000",
        price: "Consultar precio",
        image: "img/LATTAFAFakharRose100ml.jpg",
        available: true
    },
    {
        id: 77,
        name: "The Kingdom",
        category: "Perfumes 100ml",
        marca: "Lattafa",
        minQty: 3, minPrice: "$56.000",
        price: "Consultar precio",
        image: "img/LattafaTheKingdom100ml.jpg",
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
const fragancesBanner = document.getElementById('fragancesBanner');
const perfumeCategories = ['Perfumes 100ml',];

let selectedCategory = 'Todos';
let selectedBrand = 'Todas';
let galleryIntervals = [];

// Generador de enlace de WhatsApp
const generateWALink = (productName) => {
    const message = `Hola Nahuel Importador, quiero consultar por el producto: ${productName}`;
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
};

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
    galleryIntervals.forEach(clearInterval);
    galleryIntervals = [];

    productsGrid.innerHTML = '';

    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color: #fff;">No se encontraron productos.</p>';
        return;
    }

    productsToRender.forEach(product => {
        // Tarjeta especial para Perfumes 30ml
        if (product.isSpecial30ml) {
            const pricesHTML = product.prices.map(tier => `
                <div class="price-tier-big ${tier.highlight ? 'highlight-tier' : ''}">
                    <span class="tier-qty">${tier.qty}</span>
                    <span class="tier-price">${tier.price}</span>
                </div>
            `).join('');

            productsGrid.innerHTML += `
                <div class="product-card card-special-30ml">
                    <div class="product-img-container">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <span class="product-category">${product.category}</span>
                        <h3 class="product-title">${product.name}</h3>
                        
                        <p class="stock-notice">
                            <i class="fas fa-sync-alt"></i> ${product.description}
                        </p>

                        <div class="wholesale-prices-big">
                            ${pricesHTML}
                        </div>
<button onclick="addToCart('${product.id}', '${product.name}')" class="btn-add-cart">
                    <i class="fas fa-cart-plus"></i> Agregar al Pedido
                </button>
        
                    </div>
                </div>
            `;
            return;
        }
        const statusText = product.available ? 'En stock' : 'Sin stock';
        const statusClass = product.available ? 'status-available' : 'status-unavailable';
        const waLink = generateWALink(product.name);
        const isGallery = product.gallery && product.gallery.length > 0;
        const firstImage = isGallery ? product.gallery[0] : product.image;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-container">
                <img src="${firstImage}" alt="${product.name}" class="${isGallery ? 'gallery-img' : ''}" onerror="this.src='https://via.placeholder.com/300x300?text=Nahuel+Importador'">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                ${isGallery ? '<p class="gallery-note"><i class="fas fa-images"></i> Surtido variado — la foto rota entre modelos</p>' : ''}
                
                ${renderWholesale(product)}

                <p class="product-status ${statusClass}"><i class="fas fa-circle" style="font-size:8px; vertical-align:middle; margin-right:5px;"></i>${statusText}</p>
                <button onclick="addToCart('${product.id || product.name}', '${product.name}')" class="btn-add-cart">
    <i class="fas fa-cart-plus"></i> Agregar al Pedido
</button>
            </div>
        `;
        productsGrid.appendChild(card);

        if (isGallery) {
            const imgEl = card.querySelector('.gallery-img');
            let index = 0;
            const intervalId = setInterval(() => {
                index = (index + 1) % product.gallery.length;
                imgEl.src = product.gallery[index];
            }, 2500);
            galleryIntervals.push(intervalId);
        }
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

// Controlar visibilidad del cartel "+50 fragancias" (solo en Perfumes 30ml)
const updateFragancesBanner = () => {
    if (selectedCategory === 'Perfumes 30ml' || selectedCategory === 'Perfumes 50ml') {
        fragancesBanner.style.display = 'block';
    } else {
        fragancesBanner.style.display = 'none';
    }
};
// Aplicar filtros combinados (categoría + marca)
const applyFilters = () => {
    let filtered = products;

    if (selectedCategory !== 'Todos') {
        filtered = filtered.filter(product => product.category === selectedCategory);
    }
    if (selectedBrand !== 'Todas') {
        filtered = filtered.filter(product => product.marca === selectedBrand);
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
        updateFragancesBanner();
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
        updateFragancesBanner();
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

        updateFragancesBanner();

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

// Ventana flotante "No ves tu perfume" — aparece al scrollear al catálogo
const popup = document.getElementById('perfumeRequestPopup');
const popupClose = document.getElementById('popupClose');
const catalogSection = document.getElementById('catalogo');

if (popup && popupClose && catalogSection) {
    const alreadyClosed = sessionStorage.getItem('perfumePopupClosed') === 'true';

    if (!alreadyClosed) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    popup.classList.add('show');
                    observer.unobserve(catalogSection);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(catalogSection);
    }

    popupClose.addEventListener('click', () => {
        popup.classList.remove('show');
        sessionStorage.setItem('perfumePopupClosed', 'true');
    });
}

// Inicialización
updateBrandsVisibility();
updateFragancesBanner();
applyFilters();
