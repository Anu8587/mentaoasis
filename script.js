function changeLanguage() {
    const selectedLanguage = document.getElementById('language-dropdown').value;
  
    // Example API request to change language
    fetch(`https://api.example.com/setLanguage?lang=${selectedLanguage}`, {
      method: 'POST', // or 'GET' depending on your API
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_API_KEY` // if needed
      },
      body: JSON.stringify({ language: selectedLanguage }) // Adjust as per your API
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Language changed successfully:', data);
      // Optionally, update the UI based on the language change
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }
  document.getElementById("toggle-button").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
    // This will ensure the DOM is fully loaded
    const gratitudeBox = document.querySelector('.gratitude-box'); // Select the gratitude box

    // Check if the gratitude box is correctly selected
    if (gratitude-box) {
        gratitude-box.addEventListener('click', () => {
            alert('Gratitude journaling can enhance your mental well-being by promoting positive thinking!');
        });
    } else {
        console.error('Gratitude box not found!'); // Log error if the element is not found
    }

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel-item");
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    let currentIndex = 0;

    // Function to update carousel items
    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove("active");
            if (index === currentIndex) {
                item.classList.add("active");
            }
        });
        
        // Adjust the transform property of carousel-inner for smooth sliding
        const carouselInner = document.querySelector('.carousel-inner');
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Next button functionality
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % items.length; // Loop back to the start
        updateCarousel();
    });

    // Previous button functionality
    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Loop back to the end
        updateCarousel();
    });

    updateCarousel(); // Initial update
    });
    document.getElementById('privacyToggle').addEventListener('change', function() {
      if (this.checked) {
          alert("Privacy mode enabled");
      } else {
          alert("Privacy mode disabled");
      }
  });

  
