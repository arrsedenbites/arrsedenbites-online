// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 500);
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target) && navLinks.classList.contains('active')) {
        closeMenu();
    }
});

// Menu filter
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    const tabs = document.querySelectorAll('.menu-tab');

    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.5s ease';
        } else {
            item.style.display = 'none';
        }
    });
}

// Toggle item details
function toggleDetails(button) {
    const detailsDiv = button.closest('.menu-item').querySelector('.item-full-details');
    const isOpen = detailsDiv.classList.contains('show');
    // Close all other open details first
    document.querySelectorAll('.item-full-details.show').forEach(div => {
        if (div !== detailsDiv) {
            div.classList.remove('show');
            const otherBtn = div.closest('.menu-item').querySelector('.btn-details');
            if (otherBtn) {
                otherBtn.classList.remove('open');
                otherBtn.innerHTML = 'Details ▼';
            }
        }
    });
    if (isOpen) {
        detailsDiv.classList.remove('show');
        button.classList.remove('open');
        button.innerHTML = 'Details ▼';
    } else {
        detailsDiv.classList.add('show');
        button.classList.add('open');
        button.innerHTML = 'Details ▲';
    }
}
