//initial data
let r_width = document.querySelector("#r_width"); //select range
let h_width = document.querySelector("#h_width"); //select input number

let r_height = document.querySelector("#r_height"); //select range
let h_height = document.querySelector("#h_height"); //select input number

//change the range input when input box value changes
h_width.addEventListener('change', function () {
    r_width.value = h_width.value;
});
h_height.addEventListener('change', function () {
    r_height.value = h_height.value;
});

//change the input box when range input is moving
r_width.addEventListener('mousemove', function () {
    h_width.value = r_width.value;
});
r_height.addEventListener('mousemove', function () {
    h_height.value = r_height.value;
});

//change the input box when range input is moving on cellphone and tablet
r_width.addEventListener('touchmove', function () {
    h_width.value = r_width.value;
});
r_height.addEventListener('touchmove', function () {
    h_height.value = r_height.value;
});

//functions
function generate() {
    window.open(`https://picsum.photos/${h_width.value}/${h_height.value}`, '_blank');
}