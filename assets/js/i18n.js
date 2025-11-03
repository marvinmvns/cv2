// Internationalization script for resume
(function() {
  'use strict';

  // Default language
  let currentLang = localStorage.getItem('resumeLang') || 'pt';

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function() {
    initLanguageSelector();
    setLanguage(currentLang);
  });

  function initLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        setLanguage(lang);

        // Update active state
        langButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // Set initial active button
    document.querySelector(`.lang-btn[data-lang="${currentLang}"]`)?.classList.add('active');
  }

  function setLanguage(lang) {
    if (!translations[lang]) {
      console.error(`Language ${lang} not found`);
      return;
    }

    currentLang = lang;
    localStorage.setItem('resumeLang', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'en' ? 'en-US' : 'es-ES';

    // Update page title and meta description
    document.title = translations[lang].pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', translations[lang].metaDescription);
    }

    // Translate all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });

    // Translate specific sections
    translateWorkExperience(lang);
    translateProjects(lang);
    translateHobbies(lang);
    translateSidebar(lang);
  }

  function translateWorkExperience(lang) {
    const t = translations[lang];

    // F1RST Digital Services
    const f1rstItems = document.querySelectorAll('.work-section .item');

    if (f1rstItems[0]) {
      const f1rst = f1rstItems[0];
      f1rst.querySelector('.item-title').textContent = t.f1rstTitle1;
      f1rst.querySelector('.item-meta').textContent = `${t.f1rstCompany} | ${t.f1rstPeriod}`;

      const f1rstContent = f1rst.querySelector('.item-content');
      f1rstContent.innerHTML = `
        <p><strong>${t.f1rstRole1}</strong> ${t.f1rstDesc1}</p>
        <p><strong>${t.f1rstRole2}</strong> ${t.f1rstDesc2}</p>
        <ul class="resume-list">
          <li>${t.f1rstSkill1}</li>
          <li>${t.f1rstSkill2}</li>
          <li>${t.f1rstSkill3}</li>
          <li>${t.f1rstSkill4}</li>
          <li>${t.f1rstSkill5}</li>
          <li>${t.f1rstSkill6}</li>
          <li>${t.f1rstSkill7}</li>
        </ul>
      `;
    }

    // Itaú
    if (f1rstItems[1]) {
      const itau = f1rstItems[1];
      itau.querySelector('.item-title').textContent = t.itauTitle;
      itau.querySelector('.item-meta').textContent = `${t.itauCompany} | ${t.itauPeriod}`;

      const itauContent = itau.querySelector('.item-content');
      itauContent.innerHTML = `
        <p><strong>${t.itauRole1}</strong> ${t.itauDesc1}</p>
        <p><strong>${t.itauRole2}</strong> ${t.itauDesc2}</p>
        <p><strong>${t.itauRole3}</strong> ${t.itauDesc3}</p>
        <ul class="resume-list">
          <li>${t.itauSkill1}</li>
          <li>${t.itauSkill2}</li>
          <li>${t.itauSkill3}</li>
          <li>${t.itauSkill4}</li>
          <li>${t.itauSkill5}</li>
          <li>${t.itauSkill6}</li>
        </ul>
      `;
    }

    // Harlio
    if (f1rstItems[2]) {
      const harlio = f1rstItems[2];
      harlio.querySelector('.item-title').textContent = t.harlioTitle;
      harlio.querySelector('.item-meta').textContent = `${t.harlioCompany} | ${t.harlioPeriod}`;

      const harlioContent = harlio.querySelector('.item-content');
      harlioContent.innerHTML = `
        <p>${t.harlioDesc}</p>
        <ul class="resume-list">
          <li>${t.harlioSkill1}</li>
          <li>${t.harlioSkill2}</li>
          <li>${t.harlioSkill3}</li>
        </ul>
      `;
    }

    // FastrackGPS
    if (f1rstItems[3]) {
      const fastrack = f1rstItems[3];
      fastrack.querySelector('.item-title').textContent = t.fastrackTitle;
      fastrack.querySelector('.item-meta').textContent = `${t.fastrackCompany} | ${t.fastrackPeriod}`;

      const fastrackContent = fastrack.querySelector('.item-content');
      fastrackContent.innerHTML = `
        <p>${t.fastrackDesc}</p>
        <ul class="resume-list">
          <li>${t.fastrackSkill1}</li>
          <li>${t.fastrackSkill2}</li>
          <li>${t.fastrackSkill3}</li>
          <li>${t.fastrackSkill4}</li>
        </ul>
      `;
    }

    // IBM
    if (f1rstItems[4]) {
      const ibm = f1rstItems[4];
      ibm.querySelector('.item-title').textContent = t.ibmTitle;
      ibm.querySelector('.item-meta').textContent = `${t.ibmCompany} | ${t.ibmPeriod}`;

      const ibmContent = ibm.querySelector('.item-content');
      ibmContent.innerHTML = `
        <p><strong>${t.ibmRole1}</strong> ${t.ibmDesc1}</p>
        <p><strong>${t.ibmRole2}</strong> ${t.ibmDesc2}</p>
        <p><strong>${t.ibmRole3}</strong> ${t.ibmDesc3}</p>
        <ul class="resume-list">
          <li>${t.ibmSkill1}</li>
          <li>${t.ibmSkill2}</li>
          <li>${t.ibmSkill3}</li>
          <li>${t.ibmSkill4}</li>
          <li>${t.ibmSkill5}</li>
        </ul>
      `;
    }

    // Systemplan
    if (f1rstItems[5]) {
      const systemplan = f1rstItems[5];
      systemplan.querySelector('.item-title').textContent = t.systemplanTitle;
      systemplan.querySelector('.item-meta').textContent = `${t.systemplanCompany} | ${t.systemplanPeriod}`;

      const systemplanContent = systemplan.querySelector('.item-content');
      systemplanContent.innerHTML = `
        <p>${t.systemplanDesc}</p>
        <ul class="resume-list">
          <li>${t.systemplanSkill1}</li>
          <li>${t.systemplanSkill2}</li>
          <li>${t.systemplanSkill3}</li>
        </ul>
      `;
    }
  }

  function translateProjects(lang) {
    const t = translations[lang];
    const projectButtons = document.querySelectorAll('.project-card button[aria-controls]');
    const projectContents = document.querySelectorAll('.project-details');

    // Project 1 - FastrackGPS
    if (projectButtons[0]) {
      projectButtons[0].childNodes[0].textContent = t.projectFastrackTitle + ' ';
      const parent = projectButtons[0].closest('.item-heading');
      parent.querySelector('.item-meta').textContent = t.projectFastrackPeriod;
    }
    if (projectContents[0]) {
      const wrapper = projectContents[0].querySelector('.project-details-wrapper');
      wrapper.innerHTML = `
        <p>${t.projectFastrackDesc}</p>
        <ul class="resume-list">
          <li>${t.projectFastrackSkill1}</li>
          <li>${t.projectFastrackSkill2}</li>
          <li>${t.projectFastrackSkill3}</li>
          <li>${t.projectFastrackSkill4}</li>
          <li>${t.projectFastrackSkill5}</li>
          <li>${t.projectFastrackSkill6}</li>
          <li>${t.projectFastrackSkill7}</li>
          <li>${t.projectFastrackSkill8}</li>
        </ul>
        <div class="video-container mb-3">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/F2yOt6oenyA" title="YouTube video player - FastrackGPS Demo 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/sEYYsOFPMF8" title="YouTube video player - FastrackGPS Demo 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p class="mt-3">
          <a href="https://github.com/marvinmvns" target="_blank" rel="noopener noreferrer" class="resume-link me-3"><i class="fab fa-github me-1"></i>${t.projectFastrackLink1}</a>
          <a href="https://github.com/marvinmvns/androidFastrackGPS" target="_blank" rel="noopener noreferrer" class="resume-link me-3"><i class="fab fa-android me-1"></i>${t.projectFastrackLink2}</a>
          <a href="https://www.dx.com" target="_blank" rel="noopener noreferrer" class="resume-link me-3"><i class="fas fa-shopping-cart me-1"></i>${t.projectFastrackLink3}</a>
        </p>
      `;
    }

    // Project 2 - Marvin
    if (projectButtons[1]) {
      projectButtons[1].childNodes[0].textContent = t.projectMarvinTitle + ' ';
      const parent = projectButtons[1].closest('.item-heading');
      parent.querySelector('.item-meta').textContent = t.projectMarvinPeriod;
    }
    if (projectContents[1]) {
      const wrapper = projectContents[1].querySelector('.project-details-wrapper');
      wrapper.innerHTML = `
        <p>${t.projectMarvinDesc}</p>
        <ul class="resume-list">
          <li>${t.projectMarvinSkill1}</li>
          <li>${t.projectMarvinSkill2}</li>
          <li>${t.projectMarvinSkill3}</li>
          <li>${t.projectMarvinSkill4}</li>
          <li>${t.projectMarvinSkill5}</li>
          <li>${t.projectMarvinSkill6}</li>
          <li>${t.projectMarvinSkill7}</li>
          <li>${t.projectMarvinSkill8}</li>
        </ul>
        <p class="mt-3">${t.projectMarvinFlowTitle}</p>
        <ol class="resume-list">
          <li>${t.projectMarvinFlow1}</li>
          <li>${t.projectMarvinFlow2}</li>
          <li>${t.projectMarvinFlow3}</li>
          <li>${t.projectMarvinFlow4}</li>
          <li>${t.projectMarvinFlow5}</li>
          <li>${t.projectMarvinFlow6}</li>
        </ol>
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/th6H-Qm_IjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      `;
    }

    // Project 3 - Harlio
    if (projectButtons[2]) {
      projectButtons[2].childNodes[0].textContent = t.projectHarlioTitle + ' ';
      const parent = projectButtons[2].closest('.item-heading');
      parent.querySelector('.item-meta').textContent = t.projectHarlioPeriod;
    }
    if (projectContents[2]) {
      const wrapper = projectContents[2].querySelector('.project-details-wrapper');
      wrapper.innerHTML = `
        <p>${t.projectHarlioDesc}</p>
        <ul class="resume-list">
          <li>${t.projectHarlioSkill1}</li>
          <li>${t.projectHarlioSkill2}</li>
          <li>${t.projectHarlioSkill3}</li>
          <li>${t.projectHarlioSkill4}</li>
          <li>${t.projectHarlioSkill5}</li>
          <li>${t.projectHarlioSkill6}</li>
          <li>${t.projectHarlioSkill7}</li>
          <li>${t.projectHarlioSkill8}</li>
        </ul>
        <p class="mt-3">
          <a href="https://www.behance.net/gallery/75286441/HARLIO-ChatBot-Buddy" target="_blank" rel="noopener noreferrer" class="resume-link me-3"><i class="fas fa-palette me-1"></i>${t.projectHarlioLink1}</a>
        </p>
      `;
    }

    // Project 4 - SVDMPRA
    if (projectButtons[3]) {
      projectButtons[3].childNodes[0].textContent = t.projectSvdmpraTitle + ' ';
      const parent = projectButtons[3].closest('.item-heading');
      parent.querySelector('.item-meta').textContent = t.projectSvdmpraPeriod;
    }
    if (projectContents[3]) {
      const wrapper = projectContents[3].querySelector('.project-details-wrapper');
      wrapper.innerHTML = `
        <p>${t.projectSvdmpraDesc}</p>
        <ul class="resume-list">
          <li>${t.projectSvdmpraSkill1}</li>
          <li>${t.projectSvdmpraSkill2}</li>
          <li>${t.projectSvdmpraSkill3}</li>
          <li>${t.projectSvdmpraSkill4}</li>
          <li>${t.projectSvdmpraSkill5}</li>
          <li>${t.projectSvdmpraSkill6}</li>
          <li>${t.projectSvdmpraSkill7}</li>
        </ul>
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SvlAtqTVdFQ" title="YouTube video player - SVDMP-RA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p class="mt-3">
          <a href="https://github.com/marvinmvns/SVDMPRA" target="_blank" rel="noopener noreferrer" class="resume-link me-3"><i class="fab fa-github me-1"></i>${t.projectSvdmpraLink1}</a>
          <a href="https://www.youtube.com/watch?v=SvlAtqTVdFQ" target="_blank" rel="noopener noreferrer" class="resume-link me-3"><i class="fas fa-video me-1"></i>${t.projectSvdmpraLink2}</a>
        </p>
      `;
    }
  }

  function translateHobbies(lang) {
    const t = translations[lang];
    const hobbies = document.querySelectorAll('.hobbies-section .hobby-item');

    // Support up to 6 hobby items. If hobby0 exists, map it to the first card.
    if (hobbies[0]) {
      const title = t.hobby0Title || t.hobby1Title;
      const desc = t.hobby0Desc || t.hobby1Desc;
      hobbies[0].querySelector('.item-title').textContent = title;
      hobbies[0].querySelector('p').textContent = desc;
    }
    if (hobbies[1]) {
      hobbies[1].querySelector('.item-title').textContent = t.hobby1Title;
      hobbies[1].querySelector('p').textContent = t.hobby1Desc;
    }
    if (hobbies[2]) {
      hobbies[2].querySelector('.item-title').textContent = t.hobby2Title;
      hobbies[2].querySelector('p').textContent = t.hobby2Desc;
    }
    if (hobbies[3]) {
      hobbies[3].querySelector('.item-title').textContent = t.hobby3Title;
      hobbies[3].querySelector('p').textContent = t.hobby3Desc;
    }
    if (hobbies[4]) {
      hobbies[4].querySelector('.item-title').textContent = t.hobby4Title;
      hobbies[4].querySelector('p').textContent = t.hobby4Desc;
    }
    if (hobbies[5]) {
      hobbies[5].querySelector('.item-title').textContent = t.hobby5Title;
      hobbies[5].querySelector('p').textContent = t.hobby5Desc;
    }
  }

  function translateSidebar(lang) {
    const t = translations[lang];
    const skillsSections = document.querySelectorAll('.resume-aside .skills-section');

    // Skills titles
    if (skillsSections[0]) {
      const skillTitles = skillsSections[0].querySelectorAll('.item-title');
      if (skillTitles[0]) skillTitles[0].textContent = t.skillsCloudTitle;
      if (skillTitles[1]) skillTitles[1].textContent = t.skillsDevTitle;
      if (skillTitles[2]) skillTitles[2].textContent = t.skillsSpecTitle;
    }

    // Languages section
    if (skillsSections[1]) {
      const langItems = skillsSections[1].querySelectorAll('.resume-lang-list li');
      if (langItems[0]) langItems[0].innerHTML = `${t.lang1} <span class="text-muted">${t.lang1Level}</span>`;
      if (langItems[1]) langItems[1].innerHTML = `${t.lang2} <span class="text-muted">${t.lang2Level}</span>`;
    }

    // Interests section
    if (skillsSections[2]) {
      const interestItems = skillsSections[2].querySelectorAll('.resume-interests-list li');
      if (interestItems[0]) interestItems[0].textContent = t.interest1;
      if (interestItems[1]) interestItems[1].textContent = t.interest2;
      if (interestItems[2]) interestItems[2].textContent = t.interest3;
      if (interestItems[3]) interestItems[3].textContent = t.interest4;
      if (interestItems[4]) interestItems[4].textContent = t.interest5;
    }

    // Education
    const educationSection = document.querySelector('.education-section');
    if (educationSection) {
      const eduItems = educationSection.querySelectorAll('.resume-degree');
      if (eduItems[0]) eduItems[0].textContent = t.edu1Degree;
      if (eduItems[1]) eduItems[1].textContent = t.edu2Degree;
      if (eduItems[2]) eduItems[2].textContent = t.edu3Degree;
      if (eduItems[3]) eduItems[3].textContent = t.edu4Degree;

      const eduTime = educationSection.querySelectorAll('.resume-degree-time');
      if (eduTime[0]) eduTime[0].textContent = t.edu1Time;
      if (eduTime[1]) eduTime[1].textContent = t.edu2Time;
      if (eduTime[2]) eduTime[2].textContent = t.edu3Time;
      if (eduTime[3]) eduTime[3].textContent = t.edu4Time;
    }

    // Certifications
    const certSection = document.querySelectorAll('.education-section')[1];
    if (certSection) {
      const certTitle = certSection.querySelector('.font-weight-bold');
      const certOrg = certSection.querySelector('.text-muted');
      if (certTitle) certTitle.innerHTML = `<i class="fab fa-aws text-warning me-2"></i>${t.cert1Title}`;
      if (certOrg) certOrg.textContent = t.cert1Org;
    }
  }

})();
