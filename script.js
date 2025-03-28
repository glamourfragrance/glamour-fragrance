// Toggle Menu Functionality
function toggleMenu() {
    const dropdown = document.getElementById('dropdown');
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded state
    hamburger.setAttribute('aria-expanded', !isExpanded);

    if (header.classList.contains('hidden')) {
        // If the header is hidden, show the header first
        header.classList.remove('hidden');
        dropdown.classList.add('active');
    } else {
        // Toggle the dropdown visibility
        dropdown.classList.toggle('active');
    }
}

// Tab Switching Functionality
function showTab(tabId) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
        tab.classList.remove('ripple'); // Reset ripple effect
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Add active class to the selected tab and content
    const selectedTab = document.querySelector(`#tab-${tabId}`);
    const selectedContent = document.getElementById(tabId);
    selectedTab.classList.add('active');
    selectedTab.setAttribute('aria-selected', 'true');
    selectedTab.classList.add('ripple'); // Trigger ripple effect
    selectedContent.classList.add('active');
}

// Heart (Favorite) Functionality
function toggleFavorite(event) {
    const heartButton = event.currentTarget;
    const isPressed = heartButton.getAttribute('aria-pressed') === 'true';
    heartButton.setAttribute('aria-pressed', !isPressed);
    // In a real app, you’d also save this to a user’s favorites (e.g., via localStorage or a backend)
}

// Add to Cart Functionality
function addToCart(event) {
    const button = event.currentTarget;
    button.classList.add('bounce');
    alert('Added to cart!');
    // In a real app, you’d add the item to a cart (e.g., via localStorage or a backend)
}

// Newsletter Subscription Functionality
function handleSubscribe(event) {
    event.preventDefault();
    const form = event.target;
    const emailInput = form.querySelector('#email');
    const subscribeBtn = form.querySelector('.subscribe-btn');
    const successMessage = form.querySelector('.success-message');

    // Basic email validation
    if (!emailInput.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        emailInput.setCustomValidity('Please enter a valid email address.');
        emailInput.reportValidity();
        return;
    }

    emailInput.setCustomValidity(''); // Clear any previous validation message

    // Simulate loading state
    subscribeBtn.classList.add('loading');
    subscribeBtn.disabled = true;

    // Simulate form submission (replace with actual API call in production)
    setTimeout(() => {
        subscribeBtn.classList.remove('loading');
        subscribeBtn.disabled = false;
        successMessage.classList.add('visible');
        form.reset(); // Clear the form
    }, 2000);
}

// Scroll Behavior for Header
function handleScroll() {
    const header = document.querySelector('header');
    const dropdown = document.getElementById('dropdown');
    const hamburger = document.querySelector('.hamburger');
    let lastScroll = 0;

    return function () {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down and past 100px
            header.classList.add('hidden');
            // Close the dropdown if open
            if (dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        } else if (currentScroll < lastScroll) {
            // Scrolling up
            header.classList.remove('hidden');
        }

        lastScroll = currentScroll;
    };
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', toggleMenu);

    // Tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.id.replace('tab-', '');
            showTab(tabId);
        });
    });

    // Heart Buttons
    const heartButtons = document.querySelectorAll('.heart');
    heartButtons.forEach(button => {
        button.addEventListener('click', toggleFavorite);
    });

    // Add to Cart Buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleSubscribe);
    }

    // Scroll Event for Header
    const onScroll = handleScroll();
    window.addEventListener('scroll', onScroll);
});
