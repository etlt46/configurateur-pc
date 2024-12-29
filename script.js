document.getElementById("config-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const budget = parseInt(document.getElementById("budget").value);
    const useCase = document.getElementById("use-case").value;

    const components = {
        cpu: [
            { name: "Intel Core i5-12400F", price: 180, img: "https://via.placeholder.com/150", performance: 8 },
            { name: "AMD Ryzen 5 5600X", price: 200, img: "https://via.placeholder.com/150", performance: 9 }
        ],
        gpu: [
            { name: "NVIDIA GTX 1660", price: 250, img: "https://via.placeholder.com/150", performance: 7 },
            { name: "RTX 3060", price: 350, img: "https://via.placeholder.com/150", performance: 9 }
        ]
    };

    let total = 0;
    const selectedComponents = [];

    // Sélection des CPU
    for (const cpu of components.cpu) {
        if (cpu.price + total <= budget) {
            selectedComponents.push(cpu);
            total += cpu.price;
            break;
        }
    }

    // Sélection des GPU
    for (const gpu of components.gpu) {
        if (gpu.price + total <= budget) {
            selectedComponents.push(gpu);
            total += gpu.price;
            break;
        }
    }

    // Affichage des résultats
    const componentsList = document.getElementById("components-list");
    componentsList.innerHTML = "";

    if (selectedComponents.length > 0) {
        selectedComponents.forEach((component) => {
            const componentCard = document.createElement("div");
            componentCard.className = "component-card";
            componentCard.innerHTML = `
                <img src="${component.img}" alt="${component.name}">
                <h4>${component.name}</h4>
                <p>Prix : ${component.price} €</p>
            `;
            componentsList.appendChild(componentCard);
        });
    } else {
        componentsList.innerHTML = "<p>Budget insuffisant pour une configuration complète.</p>";
    }
});
