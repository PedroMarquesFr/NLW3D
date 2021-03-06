let map = L.map("mapid").setView([-3.6856882, -40.3523146], 16); //-3.6856882,-40.3523146,16.04z

//cria e adiciona tyle layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//cria icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//cira re adicionar marcador (caixa de texto)
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>'
);

L.marker([-3.6856882, -40.3523146], { icon }).addTo(map).bindPopup(popup);
