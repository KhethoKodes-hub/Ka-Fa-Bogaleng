// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Generate service cards
    const services = [
        {
            title: "Events Planning",
            icon: "🎉",
            description: "We plan trade events including seminars, conferences, trade shows, executive retreats, and more.",
            link: "#"
        },
        {
            title: "Artists Development",
            icon: "🎨",
            description: "Unearthing talent in fine arts and creating platforms for showcasing beyond Tsantsabane.",
            link: "#"
        },
        {
            title: "Security & Maintenance",
            icon: "🛡️",
            description: "Home and business protection services through our PSIRA accredited technical partners.",
            link: "#"
        },
        {
            title: "Building & Construction",
            icon: "🏗️",
            description: "Construction services through strategic technical partnerships with skill transfer.",
            link: "#"
        },
        {
            title: "Research & Development",
            icon: "🔍",
            description: "Aligning businesses with changing environments through innovative R&D services.",
            link: "#"
        },
        {
            title: "Transport & Mining",
            icon: "🚛",
            description: "Transportation services and mining equipment supply through established partners.",
            link: "#"
        },
        {
            title: "Catering",
            icon: "🍴",
            description: "Exceptional African cuisine and western dishes for corporate and social events.",
            link: "#"
        },
        {
            title: "Business Consulting",
            icon: "💼",
            description: "Enhancing client processes with preventative measures to avoid costly leakages.",
            link: "#"
        },
        {
            title: "Branding",
            icon: "🖋️",
            description: "Developing and maintaining long-lasting brand presence through various media.",
            link: "#"
        },
        {
            title: "Enterprise Development",
            icon: "📈",
            description: "Training, coaching and development programs for entrepreneurs and existing businesses.",
            link: "#"
        }
    ];
    
    const servicesGrid = document.querySelector('.services-grid');
    
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        
        serviceCard.innerHTML = `
            <div class="service-content">
                <div class="service-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <a href="${service.link}" class="service-link">Learn more</a>
            </div>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! We will contact you soon.');
            contactForm.reset();
        });
    }
});