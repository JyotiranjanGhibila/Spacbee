let Speakers = [
    {
      image: "https://avatars.githubusercontent.com/u/107979908?v=4",
      name: "Jyoti Ranjan",
      role: "Full Stack Developer",
      company: "Masai School",
      desc: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
      social: ["twitter", "linkedin", "github"]
    },
    {
      image: "https://avatars.githubusercontent.com/u/111347444?s=100&v=4",
      name: "Avi Kr",
      role: "Chief Engagement Officer",
      company: "Acquia",
      desc: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
      social: ["twitter", "linkedin", "github"]
    },
    {
        image: "https://avatars.githubusercontent.com/u/110032728?s=100&v=4",
        name: "Bhavnesh Arora",
        role: "Chief Marketing Officer",
        company: "Google",
        desc: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        social: ["twitter", "linkedin", "github"],
      },
      {
        image: "https://avatars.githubusercontent.com/u/94675329?s=100&v=4",
        name: "Atanu Karma",
        role: "CEO",
        company: "Tech Innovations",
        desc: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        social: ["twitter", "linkedin"],
      },
      {
        image: "https://avatars.githubusercontent.com/u/107555012?s=100&v=4",
        name: "Nirav Khatri",
        role: "COO",
        company: "Global Solutions",
        desc: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        social: ["linkedin", "github"],
      },
      {
        image: "https://avatars.githubusercontent.com/u/109168129?s=100&v=4",
        name: "Amit Pal",
        role: "Founder",
        company: "Loop Mind",
        desc: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        social: ["twitter", "linkedin"],
      },
    // Add more speaker objects as needed
  ];
  
  let currentIndex = 0;

function renderCarousel() {
  const carouselCards = document.querySelector('.carousel-cards');
  carouselCards.innerHTML = '';

  for (let i = 0; i < 4; i++) {
    const speaker = Speakers[(currentIndex + i) % Speakers.length];
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => showPopup((currentIndex + i) % Speakers.length);
    card.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}">
      <h4 class="name">${speaker.name}</h4>
      <p class="role">${speaker.role}</p>
      <p class="company">${speaker.company}</p>
    `;
    carouselCards.appendChild(card);
  }
}

function showPopup(index) {
  const speaker = Speakers[index];
  document.getElementById('popup-image').src = speaker.image;
  document.getElementById('popup-name').textContent = speaker.name;
  document.getElementById('popup-role').textContent = speaker.role;
  document.getElementById('popup-company').textContent = speaker.company;
  document.getElementById('popup-desc').textContent = speaker.desc;
  
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

document.querySelector('.prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 4 + Speakers.length) % Speakers.length;
  renderCarousel();
});

document.querySelector('.next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 4) % Speakers.length;
  renderCarousel();
});

renderCarousel();