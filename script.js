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