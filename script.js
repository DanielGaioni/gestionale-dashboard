const ospiti = [
  {
    nome: "Daniel",
    cognome: "Gaioni",
    checkin: "15/07/2025",
    checkout: "25/07/2025",
    appartamento: "Riva 2",
    numero_ospiti: 4,
    telefono: "3452727395",
    email: "danielgaioni0@gmail.com"
  },
  {
    nome: "Kevin",
    cognome: "Gaioni",
    checkin: "18/07/2025",
    checkout: "24/07/2025",
    appartamento: "Riva 6",
    numero_ospiti: 3,
    telefono: "3452727395",
    email: "danielgaioni0@gmail.com"
  }
];

function caricaOspiti() {
  const container = document.getElementById("guest-list");
  container.innerHTML = "";

  ospiti.forEach(o => {
    const div = document.createElement("div");
    div.className = "guest-card";
    div.innerHTML = `
      <strong>${o.nome} ${o.cognome}</strong><br>
      Check-in: ${o.checkin}<br>
      Check-out: ${o.checkout}<br>
      Appartamento: ${o.appartamento}<br>
      Ospiti: ${o.numero_ospiti}<br>
      Telefono: ${o.telefono}<br>
      Email: ${o.email}
    `;
    container.appendChild(div);
  });
}

window.onload = caricaOspiti;
