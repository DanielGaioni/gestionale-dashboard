// Dati finti iniziali
const ospiti = [
  {
    nome: "Giovanni",
    cognome: "Rossi",
    email: "giovanni.rossi@email.com",
    telefono: "1234567890",
    appartamento: "Lago Blu",
    numeroOspiti: 4,
    checkIn: "2025-07-19",
    checkOut: "2025-07-22"
  },
  {
    nome: "Luca",
    cognome: "Bianchi",
    email: "luca.bianchi@email.com",
    telefono: "0987654321",
    appartamento: "Valle Verde",
    numeroOspiti: 2,
    checkIn: "2025-07-19",
    checkOut: "2025-07-23"
  },
  {
    nome: "Anna",
    cognome: "Verdi",
    email: "anna.verdi@email.com",
    telefono: "333111222",
    appartamento: "Casa Bianca",
    numeroOspiti: 3,
    checkIn: "2025-07-18",
    checkOut: "2025-07-20"
  }
];

// Ordina ospiti per data di check-in e poi per cognome
function ordinaOspiti(lista) {
  return lista.sort((a, b) => {
    if (a.checkIn === b.checkIn) {
      return a.cognome.localeCompare(b.cognome);
    }
    return new Date(a.checkIn) - new Date(b.checkIn);
  });
}

// Mostra lista nella parte sinistra
function caricaOspiti() {
  const guestList = document.getElementById("guest-list");
  guestList.innerHTML = "";

  const ospitiOrdinati = ordinaOspiti(ospiti);

  ospitiOrdinati.forEach((ospite, index) => {
    const card = document.createElement("div");
    card.className = "guest-card";
    card.innerHTML = `<strong>${ospite.nome} ${ospite.cognome}</strong><br>Check-in: ${ospite.checkIn}`;
    card.onclick = () => mostraDettagli(ospite);
    guestList.appendChild(card);
  });
}

// Mostra dettagli nella sezione principale
function mostraDettagli(ospite) {
  const main = document.querySelector(".main-content");
  main.innerHTML = `
    <h1>Dettagli Ospite</h1>
    <div class="guest-card">
      <p><strong>Nome:</strong> ${ospite.nome} ${ospite.cognome}</p>
      <p><strong>Email:</strong> ${ospite.email}</p>
      <p><strong>Telefono:</strong> ${ospite.telefono}</p>
      <p><strong>Appartamento:</strong> ${ospite.appartamento}</p>
      <p><strong>Numero Ospiti:</strong> ${ospite.numeroOspiti}</p>
      <p><strong>Check-in:</strong> ${ospite.checkIn}</p>
      <p><strong>Check-out:</strong> ${ospite.checkOut}</p>
      <button onclick="caricaOspiti()">🔙 Torna alla lista</button>
    </div>
  `;
}

// Gestione cambio sezione (solo ospiti attivo per ora)
function mostraSezione(sezione) {
  if (sezione === "ospiti") {
    document.querySelector(".main-content").innerHTML = `
      <h1>Dashboard Ospiti</h1>
      <div id="guest-list">Caricamento ospiti...</div>
    `;
    caricaOspiti();
  } else if (sezione === "checkin") {
    mostraCheckInOggi();
  } else if (sezione === "checkout") {
    mostraCheckOutOggi();
  } else {
    document.querySelector(".main-content").innerHTML = `
      <h1>${sezione.toUpperCase()}</h1>
      <p>Sezione in sviluppo...</p>
    `;
  }
}



// Carica ospiti al primo avvio
window.onload = caricaOspiti;

function mostraCheckInOggi() {
  const oggi = new Date().toISOString().split("T")[0]; // formato YYYY-MM-DD
  const ospitiOggi = ospiti.filter(o => o.checkIn === oggi);
  const container = document.querySelector(".main-content");

  container.innerHTML = `<h1>Check-in di oggi</h1>`;

  if (ospitiOggi.length === 0) {
    container.innerHTML += `<p>Nessun ospite in arrivo oggi.</p>`;
    return;
  }

  ospitiOggi.forEach((ospite) => {
    const card = document.createElement("div");
    card.className = "guest-card";
    card.innerHTML = `<strong>${ospite.nome} ${ospite.cognome}</strong><br>Appartamento: ${ospite.appartamento}`;
    card.onclick = () => mostraDettagli(ospite);
    container.appendChild(card);
  });
}

function mostraCheckOutOggi() {
  const oggi = new Date().toISOString().split("T")[0];
  const ospitiOut = ospiti.filter(o => o.checkOut === oggi);
  const container = document.querySelector(".main-content");

  container.innerHTML = `<h1>Check-out di oggi</h1>`;

  if (ospitiOut.length === 0) {
    container.innerHTML += `<p>Nessun ospite in partenza oggi.</p>`;
    return;
  }

  ospitiOut.forEach((ospite) => {
    const card = document.createElement("div");
    card.className = "guest-card";
    card.innerHTML = `<strong>${ospite.nome} ${ospite.cognome}</strong><br>Appartamento: ${ospite.appartamento}`;
    card.onclick = () => mostraDettagli(ospite);
    container.appendChild(card);
  });
}
