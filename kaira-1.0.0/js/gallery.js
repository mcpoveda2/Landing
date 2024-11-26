// Define the sets of images
const set1 = [
    { src: "images-michael/gallery/img1-1.jpg", caption: "Caption 1" }
  ];
  
  const set2 = [
    { src: "images-michael/gallery/img1-2.jpg", caption: "Caption 4" }
    
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
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
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
  