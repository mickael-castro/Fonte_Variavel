const textElement = document.querySelector(".text");
        const textInput = document.getElementById("textInput");
        const weightSlider = document.getElementById("weight");
        const widthSlider = document.getElementById("width");
        const spacingSlider = document.getElementById("spacing");

        function updateFont() {
            const weight = weightSlider.value;
            const width = widthSlider.value / 100;
            const spacing = spacingSlider.value + "px";
            textElement.style.fontVariationSettings = `'wght' ${weight}`;
            textElement.style.transform = `scaleX(${width})`;
            textElement.style.letterSpacing = spacing;
        }

        textInput.addEventListener("input", () => {
            textElement.textContent = textInput.value || "Texto Dinâmico";
        });

        weightSlider.addEventListener("input", updateFont);
        widthSlider.addEventListener("input", updateFont);
        spacingSlider.addEventListener("input", updateFont);

document.getElementById("textInput").addEventListener("input", function() {
        const textInput = document.getElementById("textInput").value;
        const dynamicText = document.getElementById("dynamicText");
            
        let fontSize = 5 - (textInput.length / 30); 
        
        if (fontSize > 10) fontSize = 10;
        if (fontSize < 1) fontSize = 1;
        
        dynamicText.style.fontSize = fontSize + "rem"; // Ajusta o tamanho da fonte dinamicamente
    });
        