// script.js

// Smooth Scrolling for Navigation & Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Only run if it's a valid anchor link pointing to a section on the same page
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            
            // Calculate header offset dynamically
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Subtle Parallax Effect on Hero Background
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        // Shift background position slowly down as you scroll
        hero.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
    }
});

// Interactive hover lift for Stats Boxes (Optional JS enhancer)
const statBoxes = document.querySelectorAll('.stat-box');
statBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'translateY(-12px) scale(1.01)';
    });
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'translateY(0) scale(1)';
    });
});

// Handle Consultation Form Submission
const consultationForm = document.getElementById('consultation-form');
if (consultationForm) {
    consultationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const org = document.getElementById('org').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const size = document.getElementById('size').value;
        const message = document.getElementById('message').value.trim();
        
        const submitBtn = consultationForm.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        
        try {
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            submitBtn.innerHTML = 'PROCESSING BRIEF...';
            
            // Backend endpoint — works both locally and on production
            const API_BASE = window.location.hostname === 'localhost'
                ? 'http://localhost:5000'
                : window.location.origin;
            const response = await fetch(`${API_BASE}/api/consultation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, org, email, phone, size, message })
            });
            
            const result = await response.json();
            
            if (response.ok && result.success) {
                // Render a premium success toast
                showStatusToast('Success! Your brief has been drafted. A Ketu strategist will contact you within 4 hours.', 'success');
                consultationForm.reset();
            } else {
                showStatusToast(result.error || 'Failed to submit request. Please try again.', 'error');
            }
        } catch (err) {
            console.error('Submission error:', err);
            showStatusToast('Network error: Unable to connect to the Ketu server.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.innerHTML = originalBtnText;
        }
    });
}

// Helper to show modern status toasts
function showStatusToast(message, type) {
    // Check if a toast container already exists
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            font-family: 'Inter', sans-serif;
            pointer-events: none;
        `;
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.style.cssText = `
        background-color: #1E293B;
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 0.08);
        padding: 1.2rem 1.6rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        transform: translateY(50px);
        opacity: 0;
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
        max-width: 380px;
        font-size: 0.9rem;
        line-height: 1.45;
        pointer-events: auto;
    `;

    if (type === 'success') {
        toast.style.borderLeft = '4px solid #10B981';
    } else {
        toast.style.borderLeft = '4px solid #EF4444';
    }

    toast.innerText = message;
    toastContainer.appendChild(toast);

    // Trigger animation
    setTimeout(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    }, 10);

    // Remove toast after 6 seconds
    setTimeout(() => {
        toast.style.transform = 'translateY(-20px)';
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 6000);
}

