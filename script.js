const weddingDate = new Date("2025-05-25T14:00:00");
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "Heute ist unser großer Tag!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  countdownEl.textContent = `Noch ${days} Tage, ${hours} Stunden, ${minutes} Minuten, ${seconds} Sekunden`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Überschreibt das Standardverhalten für sanfteres Scrollen
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60, // optional: 60px Puffer wegen sticky Nav
          behavior: "smooth"
        });
      }
    });
  });
  
  document.getElementById("rsvpForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Optional: hier könntest du die Daten speichern oder per Mail senden
    document.getElementById("rsvpForm").reset();
    document.getElementById("rsvpSuccess").style.display = "block";
  
    // Nachricht nach ein paar Sekunden ausblenden
    setTimeout(() => {
      document.getElementById("rsvpSuccess").style.display = "none";
    }, 5000);
  });
  
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isVisible = answer.style.display === 'block';
  
      // Alle anderen schließen
      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
  
      // Aktuelle togglen
      answer.style.display = isVisible ? 'none' : 'block';
    });
  });

  document.getElementById("burger").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("active");
  });
  

  // Menü automatisch schließen beim Klick auf einen Link (nur mobil)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});
