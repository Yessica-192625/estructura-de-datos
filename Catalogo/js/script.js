async function cargarComponente(id, ruta){

    const respuesta = await fetch(ruta);
    const html = await respuesta.text();
    
    document.getElementById(id).innerHTML = html;
    
    }
    
    cargarComponente(
    "header",
    "./components/header/header.html"
    );
    
    cargarComponente(
    "footer",
    "./components/footer/footer.html"
    );
    
    
    
    /* PRODUCTOS */
    
    const productos = [
    
    {
    nombre:"Laptop",
    descripcion:"16GB RAM - 512GB SSD",
    precio:"$3500"
    },
    
    {
    nombre:"Mouse Gamer",
    descripcion:"Mouse RGB inalámbrico",
    precio:"$120"
    },
    
    {
    nombre:"Teclado Mecánico",
    descripcion:"Teclado con switches azules",
    precio:"$250"
    },
    
    {
    nombre:"Monitor 24 pulgadas",
    descripcion:"Resolución Full HD",
    precio:"$900"
    }
    
    ];
    
    const catalogo = document.getElementById("catalogo");
    
    productos.forEach(producto => {
    
    const card = document.createElement("div");
    
    card.classList.add("card");
    
    card.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p class="precio">${producto.precio}</p>
    `;
    
    catalogo.appendChild(card);
    
    });