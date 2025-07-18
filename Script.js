function mostraSezione(sezione) {
  // Al momento gestiamo solo "ospiti"
  if (sezione === 'ospiti') {
    caricaOspiti();
  } else {
    document.getElementById('guest-list').innerHTML = `<p>Sezione "${sezione}" in sviluppo...</p>`;
  }
}
