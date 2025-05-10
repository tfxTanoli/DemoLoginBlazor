// Animations for login page
window.initializeAnimations = function () {
  // Add entrance animations for login card
  const loginCard = document.querySelector(".login-card");
  if (loginCard) {
    loginCard.style.opacity = "0";
    loginCard.style.transform = "translateY(20px)";
    loginCard.style.transition =
      "opacity 0.5s ease-out, transform 0.5s ease-out";

    setTimeout(() => {
      loginCard.style.opacity = "1";
      loginCard.style.transform = "translateY(0)";
    }, 100);
  }

  // Add staggered animations for form elements
  const formElements = document.querySelectorAll(".form-group");
  formElements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(10px)";
    element.style.transition = "opacity 0.4s ease-out, transform 0.4s ease-out";

    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, 300 + index * 150);
  });

  // Add wave animation to the background
  const waveBackground = document.querySelector(".wave-background");
  if (waveBackground) {
    waveBackground.style.animation = "wave 8s ease-in-out infinite";
  }

  // Add pulse animation to logo
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.style.animation = "pulse 3s infinite";
  }
};

// Animation to run before login navigation
window.animateLogin = function () {
  return new Promise((resolve) => {
    const loginCard = document.querySelector(".login-card");
    if (loginCard) {
      loginCard.style.transition =
        "transform 0.5s ease-out, opacity 0.5s ease-out";
      loginCard.style.transform = "scale(0.95)";
      loginCard.style.opacity = "0";

      setTimeout(resolve, 500);
    } else {
      resolve();
    }
  });
};

// Add keyframe animations to the document
(function addKeyframes() {
  const styleSheet = document.createElement("style");
  styleSheet.innerHTML = `
        @keyframes wave {
            0%, 100% { 
                transform: translateY(0); 
            }
            50% { 
                transform: translateY(-15px); 
            }
        }
        
        @keyframes pulse {
            0%, 100% { 
                transform: scale(1); 
            }
            50% { 
                transform: scale(1.05); 
            }
        }
    `;
  document.head.appendChild(styleSheet);
})();
