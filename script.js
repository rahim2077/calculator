let display = document.getElementById("display");

function append(value) {

    // যদি শুধু 0 থাকে এবং নতুন number দেওয়া হয়
    if (display.value === "0" && value !== "." && value !== "%" 
        && value !== "/" && value !== "*" 
        && value !== "-" && value !== "+") {
        
        display.value = value; // 0 replace করবে
    } 
    else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0"; // Clear করলে আবার 0 দেখাবে
}

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
