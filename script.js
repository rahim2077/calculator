let display = document.getElementById("display");

function append(value) {

    
    if (display.value === "0" && value !== "." && value !== "%" 
        && value !== "/" && value !== "*" 
        && value !== "-" && value !== "+") {
        
        display.value = value; 
    } 
    else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";

function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
