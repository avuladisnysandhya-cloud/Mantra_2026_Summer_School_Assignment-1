/* ==========================================
   MANTRA LUXURY RESORT & SPA - CORE BRAIN ENGINE
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. MOBILE RESPONSIVE NAVBAR TOGGLE INTERACTION
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // 2. STAY REGISTRATION FORM VALIDATION LOGIC
  const bookingForm = document.getElementById('bookingForm');
  const formMessage = document.getElementById('formMessage');

  if (bookingForm && formMessage) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Default page load submission stop blocks

      // Client Input Fields Extraction Setup[cite: 3]
      const guestName = document.getElementById('name').value.trim();
      const guestEmail = document.getElementById('email').value.trim();
      const guestPhone = document.getElementById('phone').value.trim();
      const suiteSelect = document.getElementById('destination').value;

      // Conditional Field Completeness Verification Steps[cite: 1, 3]
      if (!guestName || !guestEmail || !guestPhone || !suiteSelect) {
        formMessage.style.color = '#e53e3e'; // Alert Warning Red Tone
        formMessage.textContent = '❌ Attention! Please populate all registration input fields properly.';
        return;
      }

      // 10-Digit Indian Mobile Sequence Verification Rule
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(guestPhone)) {
        formMessage.style.color = '#e53e3e';
        formMessage.textContent = '❌ Invalid Input! Mobile lines must contain exactly 10 digital characters.';
        return;
      }

      // Action Successful Event Feedback Transmission Rendering
      formMessage.style.color = '#38a169'; // Success Accent Green Tone
      formMessage.textContent = `🎉 Grandeur Success! Luxury allocation locked for "${guestName}". Reservation transmission verified.`;
      bookingForm.reset(); // Input blocks initialization clear sets
    });
  }
});

// 3. MANDATORY ESTIMATED PRICE CALCULATOR ENGINE
function calculateCost() {
  const roomPrice = parseFloat(document.getElementById('packageSelect').value);
  const stayNights = parseInt(document.getElementById('peopleCount').value);
  const costResult = document.getElementById('costResult');

  if (!costResult) return;

  // Real-Time Calculation Validation Check Rules
  if (isNaN(stayNights) || stayNights < 1) {
    costResult.style.color = '#e53e3e';
    costResult.textContent = 'Please select a valid stay duration (minimum 1 night).';
    return;
  }

  // Simple Matrix Transformation Logic execution
  const aggregatedCost = roomPrice * stayNights;

  // Content Update Loop Rendering Output
  costResult.style.color = '#0b1528';
  costResult.textContent = `Estimated Grand Total: ₹${aggregatedCost.toLocaleString('en-IN')} (for ${stayNights} Nights)`;
}

// 4. INTERACTIVE PHOTO EXHIBIT FILTER SCHEME MODULES
function filterGallery(categoryToken) {
  const visualTiles = document.querySelectorAll('.gallery-item');
  
  visualTiles.forEach(tileItem => {
    if (categoryToken === 'all') {
      tileItem.style.display = 'flex'; // Element visible sequence map look[cite: 11]
    } else if (tileItem.classList.contains(categoryToken)) {
      tileItem.style.display = 'flex';
    } else {
      tileItem.style.display = 'none'; // Clear from view blocks hide
    }
  });
}