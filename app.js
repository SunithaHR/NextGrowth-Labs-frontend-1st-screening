
// Section A (Task1)
function updateSliderValue(value) {
    console.log(value);
    var range = value;
    document.getElementById('rangeValue').innerText = value;

    // Reset background color on all plans
    document.getElementById('plan1').style.backgroundColor = "";
    document.getElementById('plan2').style.backgroundColor = "";
    document.getElementById('plan3').style.backgroundColor = "";

    if (range <= 10) {
        document.getElementById('plan1').style.backgroundColor = "blue";
    } else if (range >= 11 && range <= 20) {
        document.getElementById('plan2').style.backgroundColor = "blue";
    } else {
        document.getElementById('plan3').style.backgroundColor = "blue";
    }
}
