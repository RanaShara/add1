
function calculateSum(event) {
    event.preventDefault(); 
    
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "يرجى إدخال أرقام صالحة.";
        return;
    }

    
    const sum = num1 + num2;

    
    document.getElementById("result").textContent = `المجموع: ${sum}`;
}


document.getElementById("sumForm").addEventListener("submit", calculateSum);
