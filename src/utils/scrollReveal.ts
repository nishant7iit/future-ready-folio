
// Simple scroll reveal utility to animate elements when they enter the viewport
export const setupScrollReveal = () => {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  const reveal = () => {
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('scroll-revealed');
      }
    });
  };
  
  // Initial check on load
  reveal();
  
  // Add scroll event listener
  window.addEventListener('scroll', reveal);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', reveal);
  };
};
