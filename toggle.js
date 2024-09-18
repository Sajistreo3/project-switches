// Grab the checkboxes
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

// Array to keep track of the order in which checkboxes are selected
let selected = [];

// Function to handle toggling
function toggleCheckbox(checkbox) {
    // Check if checkbox is being selected
    if (checkbox.checked) {
        // If two checkboxes are already selected, uncheck the oldest one
        if (selected.length === 2) {
            const oldestCheckbox = selected.shift();
            oldestCheckbox.checked = false;
        }
        // Add the newly selected checkbox to the list
        selected.push(checkbox);
    } else {
        // If a checkbox is deselected, remove it from the list
        selected = selected.filter(item => item !== checkbox);
    }
}

// Attach event listeners to the checkboxes
good.addEventListener('change', () => toggleCheckbox(good));
cheap.addEventListener('change', () => toggleCheckbox(cheap));
fast.addEventListener('change', () => toggleCheckbox(fast));