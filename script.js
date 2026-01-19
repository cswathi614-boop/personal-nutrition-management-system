function showDiet() {
    let condition = document.getElementById("condition").value;
    let result = document.getElementById("result");

    if (condition === "diabetes") {
        result.innerHTML = `
            <h3>Diet for Diabetes</h3>
            <ul>
                <li>Whole grains</li>
                <li>Vegetables</li>
                <li>Low sugar fruits</li>
                <li>Lean proteins</li>
            </ul>
        `;
    } 
    else if (condition === "bp") {
        result.innerHTML = `
            <h3>Diet for Blood Pressure</h3>
            <ul>
                <li>Low salt foods</li>
                <li>Fruits and vegetables</li>
                <li>Low fat dairy</li>
                <li>Whole grains</li>
            </ul>
        `;
    } 
    else if (condition === "obesity") {
        result.innerHTML = `
            <h3>Diet for Obesity</h3>
            <ul>
                <li>High fiber foods</li>
                <li>Fresh fruits</li>
                <li>Vegetables</li>
                <li>Plenty of water</li>
            </ul>
        `;
    } 
    else {
        result.innerHTML = "<p>Please select a health condition.</p>";
    }
}
