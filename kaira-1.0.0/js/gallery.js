// Define the sets of images
const set1 = [
    { src: "images-michael/gallery/img1-1.jpg", caption: "Caption 1", description : "¡Una experiencia única en Animal Park! Vive la emoción de interactuar con la fauna de Baños en un entorno natural impresionante." },
    { src: "images-michael/gallery/img1-2.jpg", caption: "Caption 1", description : "Admira la imponente Cascada Pailón del Diablo, un destino que te dejará sin aliento con su belleza y presencia natural." },
    { src: "images-michael/gallery/img1-3.jpg", caption: "Caption 1", description : "Atrévete a cruzar el Puente de Cristal de Baños, donde las vistas espectaculares te harán sentir en el cielo." },
    { src: "images-michael/gallery/img1-4.jpg", caption: "Caption 1", description : "Comparte momentos inolvidables rodeado de paisajes de ensueño, ¡Baños es el escenario perfecto para cualquier aventura!" },
    { src: "images-michael/gallery/img1-5.jpg", caption: "Caption 1" , description : "Disfruta de la magia nocturna de Baños desde la Casa del Árbol, un lugar que te ofrece una vista impresionante bajo las estrellas."},
    { src: "images-michael/gallery/img1-6.jpg", caption: "Caption 1" , description : "Haz que tu visita a Baños sea aún más especial con una foto frente a las icónicas letras del lugar, ¡el recuerdo perfecto de tu aventura!"},
    { src: "images-michael/gallery/img1-7.jpg", caption: "Caption 1" , description : "Siente la adrenalina en el Columpio del Fin del Mundo, un lugar único para quienes buscan emociones fuertes y vistas inigualables."},
    { src: "images-michael/gallery/img1-8.jpg", caption: "Caption 1" , description : "Relájate y disfruta de la mejor vista de Baños desde la Casa del Árbol, un lugar perfecto para desconectar con el mundo y conectarte con la vida."},
    { src: "images-michael/gallery/img1-9.jpg", caption: "Caption 1" , description : "Conéctate con la naturaleza y los animales en Animal Park, un lugar donde puedes vivir momentos tranquilos y llenos de encanto"},
  ];
  
  const set2 = [
    { src: "images-michael/gallery/img2-1.jpg", caption: "Caption 1", description : "Bienvenidos a la Amazonia, donde la naturaleza se despliega en su máxima expresión. Esta vista panorámica desde el miramera te dejará sin palabras" },
    { src: "images-michael/gallery/img2-2.jpg", caption: "Caption 1", description : "Sumérgete en la selva de Puyo y vive una experiencia ancestral mientras te purificas con cera natural, conectando cuerpo y alma con la Amazonía." },
    { src: "images-michael/gallery/img2-3.jpg", caption: "Caption 1", description : "Refresca tus sentidos en la cascada Hola Vida, un paraíso oculto en la selva que te invita a disfrutar de la naturaleza en su estado más puro." },
    { src: "images-michael/gallery/img2-4.jpg", caption: "Caption 1", description : "Vive la cultura amazónica de cerca al vestirte con trajes tradicionales dentro de las acogedoras casas de Wayary Llakta, donde las costumbres ancestrales cobran vida." },
    { src: "images-michael/gallery/img2-5.jpg", caption: "Caption 1", description : "Adéntrate en el corazón de la Amazonía al conocer la tribu Wayary Llakta, un lugar donde la tradición y la sabiduría ancestral se mantienen vivas." },
    { src: "images-michael/gallery/img2-6.jpg", caption: "Caption 1", description : "Explora la belleza de los ríos de Puyo a bordo de una canoa, una experiencia única para conectarte con la naturaleza en su estado más puro." },
    { src: "images-michael/gallery/img2-7.jpg", caption: "Caption 1", description : "Vive la experiencia amazónica al ser parte de Wayary Llakta, donde las pinturas tradicionales de la tribu te permiten sumergirte en su rica herencia cultural." },
    { src: "images-michael/gallery/img2-8.jpg", caption: "Caption 1", description : "Conoce la majestuosidad de la fauna amazónica, como la imponente anaconda, mientras exploras la comunidad Wayary Llakta en plena jungla." },
    { src: "images-michael/gallery/img2-9.jpg", caption: "Caption 1", description : "Admira la espectacular vista desde el mirador Indichuris, donde la selva y los paisajes amazónicos se mezclan para ofrecerte una de las panorámicas más impresionantes de la región." },
    
  ];
  
  // Get references to the buttons and gallery row
  const btnPrimary = document.getElementById("btnPrimary");
  const btnSecondary = document.getElementById("btnSecondary");
  const galleryRow = document.getElementById("galleryRow");
  
  // Function to display images
  function displayImages(images) {
    galleryRow.innerHTML = ""; // Clear the existing images
    images.forEach((image) => {
      // Create the card for each image
      const col = document.createElement("div");
      col.className = "col-md-4";

      col.innerHTML = `
            <div class="card mb-4 box-shadow">
              <img class="card-img-top" src="${image.src}" alt="${image.caption}" style="height: 225px; width: 100%; display: block;">
              <div class="card-body">
                <p class="card-text">${image.description}</p>
                
              </div>
            </div>
          </div>`;
      
      galleryRow.appendChild(col);
    });
  }
  
  // Add event listeners to buttons
  btnPrimary.addEventListener("click", () => displayImages(set1));
  btnSecondary.addEventListener("click", () => displayImages(set2));
  
  // Display the first set by default
  displayImages(set1);
  