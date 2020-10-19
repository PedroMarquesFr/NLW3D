const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

let map = L.map("mapid", options).setView([-3.6856882, -40.3523146], 16); //-3.6856882,-40.3523146,16.04z

//cria e adiciona tyle layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//cria icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

L.marker([-3.6856882, -40.3523146], { icon }).addTo(map);

//galeria
function selectImage(event) {
  const button = event.currentTarget;

  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  //selecionar a imagem clicada clicada
  const image = event.target; //button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img");
  imageContainer.src = image.src;

  //atualizar o container de image
  button.classList.add("active");
}
