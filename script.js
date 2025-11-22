// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// // Scroll to Top Button
// const scrollBtn = document.getElementById('scrollTopBtn');
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 300) {
//     scrollBtn.classList.add('show');
//   } else {
//     scrollBtn.classList.remove('show');
//   }
// });
// scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Dark/Light Mode
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.innerHTML = document.body.classList.contains('dark-mode') 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
});






/* ===== معرض الصور Full Screen ===== */
const galleryImages = document.querySelectorAll(".gallery-img");
const viewer = document.getElementById("fullscreenViewer");
const fullImage = document.getElementById("fullImage");
const closeViewer = document.getElementById("closeViewer");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    fullImage.src = img.src;
    viewer.style.display = "flex";
  });
});

closeViewer.addEventListener("click", () => {
  viewer.style.display = "none";
});

viewer.addEventListener("click", (e) => {
  if (e.target === viewer) viewer.style.display = "none";
});







// const canvas = document.getElementById("stars");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let stars = [];
// let mouse = { x: null, y: null };

// window.addEventListener("mousemove", (e) => {
//   mouse.x = e.x;
//   mouse.y = e.y;
// });

// function createStars() {
//   for (let i = 0; i < 350; i++) {
//     stars.push({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       size: Math.random() * 2,
//       speed: Math.random() * 0.5,
//     });
//   }
// }

// function animateStars() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   stars.forEach((star) => {
//     // حركة بسيطة
//     star.y -= star.speed;
//     if (star.y <= 0) star.y = canvas.height;

//     // تأثير الماوس (سحب النجوم)
//     if (mouse.x && mouse.y) {
//       let dx = star.x - mouse.x;
//       let dy = star.y - mouse.y;
//       let dist = Math.sqrt(dx * dx + dy * dy);

//       if (dist < 120) {
//         star.x += dx / dist * 2;
//         star.y += dy / dist * 2;
//       }
//     }

// ctx.shadowColor = "#ffd700";
// ctx.shadowBlur = 10;
// ctx.fillStyle = "#fff8b0";


//     ctx.fillRect(star.x, star.y, star.size, star.size);
//   });

//   requestAnimationFrame(animateStars);
// }

// createStars();
// animateStars();

// window.addEventListener("resize", () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// });




    window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 2000); // ثانيتين للـ loader
  });



  















try {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 500,
        "density": {
          "enable": true,
          "value_area": 1600
        }
      },
      "color": {"value": "#fff"},
      "shape": {"type": "star"},
      "opacity": {"value": 0.9, "random": true},
      "size": {"value": 3, "random": true},
      "line_linked": {"enable": false},
      "move": {
        "enable": true,
        "speed": 0.6,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onmousemove": {"enable": true, "mode": "repulse"},
        "onclick": {"enable": false}
      },
      "modes": {
        "repulse": {"distance": 100, "duration": 0.4}
      }
    },
    "retina_detect": true
  });
} catch (e) {
  console.warn("particles.js error:", e.message);
}


const rocketBtn = document.getElementById("rocketBtn");
const smokeContainer = document.getElementById("smokeContainer");

rocketBtn.addEventListener("click", () => {
  // التمرير لأعلى فورًا
  window.scrollTo({ top: 0, behavior: "smooth" });

  // إضافة كلاس الانطلاق للدخان والصاروخ
  rocketBtn.classList.add("rocket-launch");

  // إنشاء دخان أثناء الانطلاق
  const puffCount = 5;
  for (let i = 0; i < puffCount; i++) {
    setTimeout(() => {
      const puff = document.createElement("div");
      puff.classList.add("smoke-puff");
      puff.style.left = `${Math.random() * 30 - 15}px`;
      smokeContainer.appendChild(puff);
      puff.addEventListener("animationend", () => puff.remove());
    }, i * 200);
  }

  // إزالة كلاس الانطلاق بعد انتهاء الانميشن
  setTimeout(() => {
    rocketBtn.classList.remove("rocket-launch");
  }, 2500);
});

// إظهار الزر عند التمرير لأسفل أكثر من 200px
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    rocketBtn.classList.add("rocket-show");
  } else {
    rocketBtn.classList.remove("rocket-show");
  }
});





const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

// شيل أي هيلايت قديم
function clearHighlights() {
  document.querySelectorAll(".highlight-search").forEach(span => {
    const txt = document.createTextNode(span.textContent);
    span.parentNode.replaceChild(txt, span);
  });
}

function highlightFirstMatch() {
  const q = searchInput.value.trim();
  if (!q) return;

  clearHighlights();

  const lowerQ = q.toLowerCase();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const text = node.nodeValue;
    if (!text.trim()) continue; // نص فاضي — تجاهل
    const parent = node.parentElement;
    if (!parent) continue;
    // تجاهل العناصر المخفية
    if (parent.offsetParent === null) continue;

    const lowerText = text.toLowerCase();
    const idx = lowerText.indexOf(lowerQ);
    if (idx !== -1) {
      // نقسم نود النص بحيث نخرج نود يحوي الكلمة فقط
      // node: "قبلالكلمةكلمةوبعد"
      // matchedNode = node.splitText(idx) -> matchedNode starts with الكلمة...
      // afterNode = matchedNode.splitText(q.length) -> matchedNode becomes الكلمة فقط
      const matchedNode = node.splitText(idx);
      const afterNode = matchedNode.splitText(q.length);

      // نبدّل نود الكلمة بـ span
      const span = document.createElement("span");
      span.className = "highlight-search";
      span.textContent = matchedNode.nodeValue;

      matchedNode.parentNode.replaceChild(span, matchedNode);

      // نعمل scroll و نحدد التركيز
      span.scrollIntoView({ behavior: "smooth", block: "center" });
      span.focus?.(); // لو العنصر يقبل فوكاس

      return; // وقف عند أول نتيجة بس
    }
  }

  alert("لا توجد نتائج!");
}

searchBtn.addEventListener("click", highlightFirstMatch);
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") highlightFirstMatch();
});
