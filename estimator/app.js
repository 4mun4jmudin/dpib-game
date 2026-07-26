// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}

// Custom Element definition
class MaterialCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title = this.getAttribute('title') || 'Material Name';
        const price = parseFloat(this.getAttribute('price')) || 0;
        
        // Format price to IDR
        const formattedPrice = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price);

        // Check if already selected in localStorage
        const storedItems = JSON.parse(localStorage.getItem('bimSelectedMaterials')) || {};
        const isSelected = !!storedItems[title];
        const btnClass = isSelected ? 'btn selected' : 'btn';
        const btnText = isSelected ? 'Selected' : 'Add to Estimate';

        // Render HTML
        this.innerHTML = `
            <div class="card">
                <div class="card-title">${title}</div>
                <div class="card-price">${formattedPrice}</div>
                <button class="${btnClass}">${btnText}</button>
            </div>
        `;

        // Add Event Listener
        const btn = this.querySelector('.btn');
        // Use pointerdown for faster touch response instead of click
        btn.addEventListener('pointerdown', (e) => {
            // Prevent default behavior (like emulated clicks)
            e.preventDefault(); 
            this.toggleSelection(title, price, btn);
        });
    }

    toggleSelection(title, price, btn) {
        let storedItems = JSON.parse(localStorage.getItem('bimSelectedMaterials')) || {};
        
        if (storedItems[title]) {
            // Remove selection
            delete storedItems[title];
            btn.classList.remove('selected');
            btn.textContent = 'Add to Estimate';
        } else {
            // Add selection
            storedItems[title] = price;
            btn.classList.add('selected');
            btn.textContent = 'Selected';
        }

        // Save back to localStorage
        localStorage.setItem('bimSelectedMaterials', JSON.stringify(storedItems));
    }
}

// Register the custom element
customElements.define('material-card', MaterialCard);

// Inject initial data upon DOM load
document.addEventListener('DOMContentLoaded', () => {
    const appContent = document.getElementById('app-content');
    
    const materialsData = [
        { title: 'Bata Merah (per biji)', price: 1200 },
        { title: 'Bata Ringan (per kubik)', price: 650000 },
        { title: 'Panel Beton (per lembar)', price: 185000 },
        { title: 'Semen 50kg (per sak)', price: 75000 },
        { title: 'Pasir Cor (per kubik)', price: 250000 }
    ];

    materialsData.forEach(material => {
        const card = document.createElement('material-card');
        card.setAttribute('title', material.title);
        card.setAttribute('price', material.price);
        appContent.appendChild(card);
    });
});
