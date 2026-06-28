document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Scroll Animations using Intersection Observer
    const animatedElements = document.querySelectorAll('.fade-in-up');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Form submission handling
    const form = document.getElementById('consultationForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            // Simulate processing
            submitBtn.textContent = 'Sending Request...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.style.backgroundColor = '#28a745'; // Success green
                submitBtn.style.color = '#fff';
                submitBtn.textContent = 'Request Sent Successfully!';
                
                form.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.color = '';
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
