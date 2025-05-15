document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Menu items data
    const menuItems = [
        {
            name: "Bruschetta",
            description: "Toasted bread topped with tomatoes, garlic, and fresh basil",
            price: "$8.99",
            category: "starters",
            image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Caesar Salad",
            description: "Romaine lettuce, croutons, parmesan cheese with Caesar dressing",
            price: "$10.99",
            category: "starters",
            image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Grilled Salmon",
            description: "Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables",
            price: "$22.99",
            category: "mains",
            image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Filet Mignon",
            description: "8oz tender beef filet with red wine reduction and mashed potatoes",
            price: "$32.99",
            category: "mains",
            image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Tiramisu",
            description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
            price: "$7.99",
            category: "desserts",
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Chocolate Lava Cake",
            description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
            price: "$8.99",
            category: "desserts",
            image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Craft Cocktails",
            description: "Selection of our signature cocktails made with premium spirits",
            price: "$12.99",
            category: "drinks",
            image: "https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Wine Selection",
            description: "Glass of our finest red, white or rosé wines from local vineyards",
            price: "$9.99",
            category: "drinks",
            image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ];
    
    // Display menu items
    const menuItemsContainer = document.querySelector('.menu-items');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    function displayMenuItems(category = 'all') {
        menuItemsContainer.innerHTML = '';
        
        const filteredItems = category === 'all' 
            ? menuItems 
            : menuItems.filter(item => item.category === category);
        
        filteredItems.forEach(item => {
            const menuItemElement = document.createElement('div');
            menuItemElement.className = 'menu-item';
            menuItemElement.innerHTML = `
                <div class="menu-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="menu-item-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span class="price">${item.price}</span>
                </div>
            `;
            menuItemsContainer.appendChild(menuItemElement);
        });
    }
    
    // Initial display
    displayMenuItems();
    
    // Filter menu items by category
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Filter items
            const category = this.dataset.category;
            displayMenuItems(category);
        });
    });
    
    // Active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});