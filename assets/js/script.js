'use strict';

// Fonction de basculement d'élément
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Variables de la barre latérale
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Fonctionnalité de basculement de la barre latérale pour mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// Variables des témoignages
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Variables du modal
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Fonction de basculement du modal
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Ajouter un événement à tous les éléments du modal
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

// Ajouter un événement au bouton de fermeture du modal
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Variables de sélection personnalisée
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// Ajouter un événement à tous les éléments de sélection
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.dataset.category;
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// Variables de filtrage
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// Ajouter un événement à tous les boutons de filtrage pour les grands écrans
let lastClickedBtn = filterBtns[0];
for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function () {
    let selectedValue = this.dataset.category;
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// Variables du formulaire de contact
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Ajouter un événement à tous les champs de saisie du formulaire
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // Vérifier la validation du formulaire
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Variables de navigation de page
const liensDeNavigation = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Ajouter un événement à tous les liens de navigation
for (let i = 0; i < liensDeNavigation.length; i++) {
  liensDeNavigation[i].addEventListener("click", function () {
    for (let j = 0; j < pages.length; j++) {
      if (this.dataset.navLink === pages[j].dataset.page) {
        pages[j].classList.add("active");
        liensDeNavigation[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        liensDeNavigation[j].classList.remove("active");
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', (event) => {
  const projects = [
    {
      id: 1,
      title: "Mettre en place une solution informatique",
      description: "Mise en place d'une solution informatique, pour un prestataire fictif. Adressage réseau, configuration des VLANs pour des clients.",
      image: "./assets/images/Creer_une_solution_informatique.png",
      download: "./assets/files/solution_informatique.pdf",
      downloadText: "Cliquer sur lien pour consulter un compte rendu du projet."
    },
    {
      id: 2,
      title: "Traiter des données",
      description: "Conception d'un programme Python qui traite de manière automatique une large quantité de données. Exploitation des données sous forme de graphiques, et calculs de nouvelles données.",
      image: "./assets/images/Traiter_des_données.png",
      download: "./assets/files/traiter_donnees.pdf",
      downloadText: "Cliquez sur le lien pour être redirigé vers le site de traitement de données"
    },
    {
      id: 3,
      title: "Créer un réseau informatique",
      description: "Conception d'un réseau informatique, composé de machines physiques, de switches, et de routeurs. Mise en place d'un routage statique, dynamique avec RIPv2 et OSPFv1. Attribution dynamique d'adresses IP avec DHCP. Translation d'adresses avec NAT/PAT.",
      image: "./assets/images/Construire_un_reseau_informatique.png",
      download: "./assets/rapports/SAE_21_Rapport.pdf",
      downloadText: "Cliquez sur le lien pour voir un compte rendu détaillé du projet"
    },
    {
      id: 4,
      title: "Mesurer et Caractériser un signal",
      description: "Mesure et caractérisation d'un signal électrique. Utilisation d'un oscilloscope pour mesurer la tension et la fréquence d'un signal électrique. Observation du phénomène de modulation de fréquence, et de modulation radio",
      image: "./assets/images/Mesurer_et_caracteriser_un_signal.png",
      download: "./assets/rapports/SAE_22_P1_Rapport.pdf",
      downloadText: "Cliquez sur le lien pour voir un compte rendu détaillé du projet"
    },
    {
      id: 5,
      title: "Initiation aux réseaux informatiques",
      description: "Création et virtualisation d'un réseau Informatique sur marionnet. Mise des services réseaux, DNS, DHCP, IPTABLES.",
      image: "./assets/images/Initiation_au_reseaux_informatiques.png",
      download: "./assets/files/reseau_informatique.pdf",
      downloadText: "Cliquez sur le lien pour voir le réseau mis en place"
    },
    {
      id: 6,
      title: "Projet intégratif",
      description: "Attaque ManInTheMiddle, empoisonnement ARP, sniffing de paquets, analyse de trames, détection d'attaques, sécurisation du réseau, avec un switch Cisco.",
      image: "./assets/images/Projet_integratif.png",
      download: "./assets/files/reseau_informatique.pdf",
      downloadText: "Cliquez sur le lien pour voir les scripts crées et un compte rendu détaillé"
    },
    {
      id: 7,
      title: "Se présenter sur Internet",
      description: "Création, d'un portfolio servant à se créer une identité numérique. Utilisation de HTML, CSS, et JavaScript pour la création du site.",
      image: "./assets/images/Portfolio.png",
      download: "./assets/files/reseau_informatique.pdf",
      downloadText: "C'est le projet actuel."
    },
    {
      id: 8,
      title: "Découvrir un support de transmission",
      description: "Découverte des différents supports de transmission. Transmission par: câbles coaxiaux, fibre optique, support hertzien. Création d'un câble RJ45 droit.",
      image: "./assets/images/Procedure_de_fabrication.png",
      download: "./assets/files/reseau_informatique.pdf",
      downloadText: "Cliquez ici, pour voir un compte rendu sur la création d'un câble RJ45."
    },
    {
      id: 9,
      title: "Création d'un site d'aide aux devoirs",
      description: "Création d'un site d'aide aux devoirs (statique), pour mon lycée. Utilisation de HTML, CSS pour la création du site.",
      image: "./assets/images/SITE_AIDE.png",
      download: "./assets/files/reseau_informatique.pdf",
      downloadText: "Cliquez ici, pour voir le rendu du site."
    },
  ];

  const projectItems = document.querySelectorAll('.project-item a');
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');
  const modalDownload = document.getElementById('modalDownload');
  const closeModal = document.getElementsByClassName('close')[0];

  projectItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const project = projects[index];
      modalTitle.innerText = project.title;
      modalImage.src = project.image;
      modalDescription.innerText = project.description;
      modalDownload.href = project.download;
      modalDownload.innerText = project.downloadText; // Définir le texte du lien de téléchargement
      modal.style.display = 'block';
    });
  });

  closeModal.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
});

document.addEventListener('DOMContentLoaded', (event) => {
  const skills = [
    /*
    Compétence 1: Administrer les Réseaux et l'Internet
    */
    {
      id: 1,
      title: "Administrer les Réseaux et l'Internet",
      image: "./assets/images/Administrer_les_reseaux.jpg",
      details: [
        "[R101] Iniation aux réseaux informatiques",
        "[R102] Principes et architectures des réseaux.",
        "[R103] Réseaux locaux",
        "[R106] Architecture des systèmes numériques et informatiques",
        "[SAE 12] S'initier aux réseaux informatiques",
        "[R201] Technologie de l'Internet",
        "[R202] Administration systèmes et fondamentaux de la virtualisation",
        "[R203] Bases des services réseaux",
        "[R206] Numérisation de l'information",
        "[R207] Sources de données",
        "[R210] Anglais Technique",
        "[SAE 12] S'initier aux réseaux informatiques",
        "[SAE 14] Portfolio",
        "[SAE 21] Construire un réseau informatique",
        "[SAE 24] Projet Intégratif"
      ]
    },

    /*
    Compétence 2: Connecter les entreprises et les usagers
    */
    {
      id: 2,
      title: "Connecter les entreprises et les usagers",
      image: "./assets/images/Connecter_les_entreprises1.png",
      details: [
        "[R101] Initiation aux réseaux informatiques",
        "[R103] Réseaux Locaux",
        "[R104] Fondamentaux des systèmes éléctroniques",
        "[R105] Support de transmission",
        "[R201] Technologie de l'Internet",
        "[R204] Initiations à la téléphonie d'entreprise",
        "[R205] Signaux et Systèmes de transmission",
        "[R206] Numérisation de l'information",
        "[R210] Anglais Technique",
        "[SAE 13] Découvrir un support de transmission",
        "[SAE 14] Portfolio",
        "[SAE 22] Mesurer et caractériser un signal",
        "[SAE 24] Projet Intégratif"
      ]
    },

    /*
    Compétence 3: Créer des outils et des applications informatiques pour les R&T
    */ 
    {
      id: 3,
      title: "Créer des outils et des applications informatiques pour les R&T",
      image: "./assets/images/Creer_des_outils.jpg",
      details: [
        "[R101] Initiation aux réseaux informatiques",
        "[R103] Réseaux Locaux",
        "[R106] Architecture of Computer Systems",
        "[R107] Fondamentaux de la programmation",
        "[R108] Base des systèmes d'exploitation",
        "[R109] Introduction aux Technologies Web",
        "[R201] Technologie de l'Internet",
        "[R202] Administration systèmes et fondamentaux de la virtualisation",
        "[R204] Initiations à la téléphonie d'entreprise",
        "[R207] Sources de données",
        "[R209] Initiation développement Web",
        "[R210] Anglais Technique",
        "[SAE 14] Portfolio",
        "[SAE 15] Traiter des données",
        "[SAE 24] Projet Intégratif",
      ]
    },

    /*
    Compétence 4: Rédiger des rapports techniques
    */
    {
      id: 4,
      title: "Rédaction de Rapports Techniques",
      image: "./assets/images/Redaction_de_rapports.jpg",
      details: [
        "[R111] Expression, Culture et Communication Professionnelle",
        "[R112] Projet Personnel et Professionnel",
        "[R115] Gestion de Projet",
      ]
    }

  ];

  const skillItems = document.querySelectorAll('.blog-post-item a');
  const skillModal = document.getElementById('skillModal');
  const modalSkillTitle = document.getElementById('modalSkillTitle');
  const modalSkillImage = document.getElementById('modalSkillImage');
  const modalSkillList = document.getElementById('modalSkillList');
  const closeSkillModal = document.querySelector('#skillModal .close');

  skillItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const skill = skills[index];
      modalSkillTitle.innerText = skill.title;
      modalSkillImage.src = skill.image;
      modalSkillList.innerHTML = '';
      skill.details.forEach(detail => {
        const li = document.createElement('li');
        li.innerText = detail;
        modalSkillList.appendChild(li);
      });
      skillModal.style.display = 'block';
    });
  });

  closeSkillModal.onclick = () => {
    skillModal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target === skillModal) {
      skillModal.style.display = 'none';
    }
  };
});

