// ^ Write your JavaScript code here
var sections = document.querySelectorAll("section");
var links = document.querySelectorAll(".nav-link");

var modeButton = document.getElementById("theme-toggle-button");

var btnAll = document.querySelector('[data-filter="all"]');
var btnWeb = document.querySelector('[data-filter="web"]');
var btnApp = document.querySelector('[data-filter="app"]');
var btnDesign = document.querySelector('[data-filter="design"]');
var btnEcommerce = document.querySelector('[data-filter="ecommerce"]');
var allCards = document.querySelectorAll(".portfolio-item");

var prevBtn = document.getElementById("prev-testimonial");
var nextBtn = document.getElementById("next-testimonial");
var cards = document.querySelectorAll(".testimonial-card");
var indicators = document.querySelectorAll(".carousel-indicator");

var settingsToggleBtn = document.getElementById("settings-toggle");
var settingsSidebare = document.getElementById("settings-sidebar");
var colseSettingsBtn = document.getElementById("close-settings");
var resetSettingsBtn = document.getElementById("reset-settings");

//1...scroll

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var sectionTop = section.offsetTop;

    if (scrollPosition >= sectionTop - 150) {
      for (var j = 0; j < links.length; j++) {
        links[j].classList.remove(
          "text-primary",
          "border-b-2",
          "border-primary",
        );
        links[j].classList.add("text-slate-600", "dark:text-slate-300");
      }

      var id = section.getAttribute("id");

      var activeLink = document.querySelector('a[href="#' + id + '"]');
      if (activeLink) {
        activeLink.classList.remove("text-slate-600", "dark:text-slate-300");
        activeLink.classList.add(
          "text-primary",
          "border-b-2",
          "border-primary",
        );
      }
    }
  }
});

// 2...theme switch

modeButton.addEventListener("click", function () {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
});

//3...navs-tabs
btnWeb.addEventListener("click", function () {
  for (var i = 0; i < allCards.length; i++) {
    var category = allCards[i].getAttribute("data-category");
    if (category == "web") {
      allCards[i].style.display = "block";
    } else {
      allCards[i].style.display = "none";
    }
  }

  var allButtons = [btnAll, btnWeb, btnApp, btnDesign, btnEcommerce];
  for (var i = 0; i < allButtons.length; i++) {
    btnAll.classList.remove(
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
    );
    btnAll.classList.add(
      "bg-white",
      "text-slate-600",
      "dark:bg-slate-800",
      "dark:text-slate-300",
      "border",
      "border-slate-300",
      "dark:border-slate-700",
    );
  }

  btnWeb.classList.remove(
    "bg-white",
    "text-slate-600",
    "dark:bg-slate-800",
    "dark:text-slate-300",
  );
  btnWeb.classList.add(
    "bg-linear-to-r",
    "from-primary",
    "to-secondary",
    "text-white",
  );
});

btnApp.addEventListener("click", function () {
  for (var i = 0; i < allCards.length; i++) {
    var category = allCards[i].getAttribute("data-category");
    if (category == "app") {
      allCards[i].style.display = "block";
    } else {
      allCards[i].style.display = "none";
    }
  }

  var allButtons = [btnAll, btnWeb, btnApp, btnDesign, btnEcommerce];
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
    );
    allButtons[i].classList.add(
      "bg-white",
      "text-slate-600",
      "dark:bg-slate-800",
      "dark:text-slate-300",
      "border",
      "border-slate-300",
      "dark:border-slate-700",
    );
  }

  btnApp.classList.remove(
    "bg-white",
    "text-slate-600",
    "dark:bg-slate-800",
    "dark:text-slate-300",
  );
  btnApp.classList.add(
    "bg-linear-to-r",
    "from-primary",
    "to-secondary",
    "text-white",
  );
});

btnDesign.addEventListener("click", function () {
  for (var i = 0; i < allCards.length; i++) {
    var category = allCards[i].getAttribute("data-category");
    if (category == "design") {
      allCards[i].style.display = "block";
    } else {
      allCards[i].style.display = "none";
    }
  }

  var allButtons = [btnAll, btnWeb, btnApp, btnDesign, btnEcommerce];
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
    );
    allButtons[i].classList.add(
      "bg-white",
      "text-slate-600",
      "dark:bg-slate-800",
      "dark:text-slate-300",
      "border",
      "border-slate-300",
      "dark:border-slate-700",
    );
  }

  btnDesign.classList.remove(
    "bg-white",
    "text-slate-600",
    "dark:bg-slate-800",
    "dark:text-slate-300",
  );

  btnDesign.classList.add(
    "bg-linear-to-r",
    "from-primary",
    "to-secondary",
    "text-white",
  );
});

btnEcommerce.addEventListener("click", function () {
  for (var i = 0; i < allCards.length; i++) {
    var category = allCards[i].getAttribute("data-category");
    if (category == "ecommerce") {
      allCards[i].style.display = "block";
    } else {
      allCards[i].style.display = "none";
    }
  }

  var allButtons = [btnAll, btnWeb, btnApp, btnDesign, btnEcommerce];
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
    );
    allButtons[i].classList.add(
      "bg-white",
      "text-slate-600",
      "dark:bg-slate-800",
      "dark:text-slate-300",
      "border",
      "border-slate-300",
      "dark:border-slate-700",
    );
  }

  btnEcommerce.classList.remove(
    "bg-white",
    "text-slate-600",
    "dark:bg-slate-800",
    "dark:text-slate-300",
  );

  btnEcommerce.classList.add(
    "bg-linear-to-r",
    "from-primary",
    "to-secondary",
    "text-white",
  );
});

btnAll.addEventListener("click", function () {
  for (var i = 0; i < allCards.length; i++) {
    allCards[i].style.display = "block";
  }
  var allButtons = [btnAll, btnWeb, btnApp, btnDesign, btnEcommerce];
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
    );
    allButtons[i].classList.add(
      "bg-white",
      "text-slate-600",
      "dark:bg-slate-800",
      "dark:text-slate-300",
      "border",
      "border-slate-300",
      "dark:border-slate-700",
    );
  }
  btnAll.classList.add(
    "bg-linear-to-r",
    "from-primary",
    "to-secondary",
    "text-white",
  );
});

//4...Carousel

var currentIndex = 0;
var cardsShow = 3;
var totalCards = cards.length;

function updateCarousel() {
  for (var i = 0; i < totalCards; i++) {
    if (i >= currentIndex && i < currentIndex + cardsShow) {
      cards[i].style.display = "flex";
      cards[i].classList.add("animate-fade");
    } else {
      cards[i].style.display = "none";
      cards[i].classList.remove("animate-fade");
    }
  }

  if (currentIndex === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (currentIndex >= totalCards - cardsShow) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }

  updateIndicatorsColor();
}

nextBtn.addEventListener("click", function () {
  if (currentIndex < totalCards - cardsShow) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

for (let i = 0; i < indicators.length; i++) {
  indicators[i].addEventListener("click", function () {
    currentIndex = i;
    updateCarousel();
    updateIndicatorsColor();
  });
}

function updateIndicatorsColor() {
  for (let j = 0; j < indicators.length; j++) {
    if (j === currentIndex) {
      indicators[j].classList.remove("dark:bg-slate-600");
      indicators[j].classList.add("bg-accent");
    } else {
      indicators[j].classList.remove("bg-accent");
      indicators[j].classList.add("dark:bg-slate-600");
    }
  }
}

updateCarousel();

//5...sidebar

settingsToggleBtn.addEventListener("click", function () {
  settingsSidebare.classList.remove("translate-x-full");
});

function closeSidebare() {
  settingsSidebare.classList.add("translate-x-full");
}

colseSettingsBtn.addEventListener("click", closeSidebare);

resetSettingsBtn.addEventListener("click", function () {
  closeSidebare();
});

var fontButtons = document.querySelectorAll(".font-option");

for (var i = 0; i < fontButtons.length; i++) {
  fontButtons[i].addEventListener("click", function (e) {
    var selsctFont = e.currentTarget.getAttribute("data-font");
    document.body.style.fontFamily = selsctFont;

    for (var j = 0; j < fontButtons.length; j++) {
      fontButtons[j].classList.remove("active");
    }

    e.currentTarget.classList.add("active");
  });
}

var themeGradients = [
  { from: "#6366f1", to: "#8b5cf6" },
  { from: "#ec4899", to: "#f97316" },
  { from: "#10b981", to: "#059669" },
  { from: "#3b82f6", to: "#06b6d4" },
  { from: "#ef4444", to: "#f43f5e" },
  { from: "#f59e0b", to: "#ea580c" },
];

var colorGrid = document.getElementById("theme-colors-grid");

for (let k = 0; k < themeGradients.length; k++) {
  var colorBtn = document.createElement("button");
  colorBtn.className =
    "w-8 h-8 rounded-full border border-slate-300 dark:border-slate-700 transition-all cursor-pointer";

  colorBtn.style.backgroundImage = `linear-gradient(135deg, ${themeGradients[k].from}, ${themeGradients[k].to})`;

  colorBtn.addEventListener("click", function (e) {
    document.documentElement.style.setProperty(
      "--color-secondary",
      themeGradients[k].from,
    );
    document.documentElement.style.setProperty(
      "--color-accent",
      themeGradients[k].to,
    );

    document.documentElement.style.setProperty(
      "--tw-gradient-from",
      themeGradients[k].from,
    );
    document.documentElement.style.setProperty(
      "--tw-gradient-to",
      themeGradients[k].to,
    );
    var allColorButtons = colorGrid.querySelectorAll("button");
    for (var m = 0; m < allColorButtons.length; m++) {
      allColorButtons[m].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  });
  colorGrid.appendChild(colorBtn);
}

//6...scroll to top

var scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.remove("opacity-0", "invisible");
    scrollToTopBtn.classList.add("opacity-100", "visible");
  } else {
    scrollToTopBtn.classList.add("opacity-0", "invisible");
    scrollToTopBtn.classList.remove("opacity-100", "visible");
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
