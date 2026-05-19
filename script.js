const button = document.getElementById('runaway-btn');
const triggerDistance = 100; // Radius in pixels where the button starts fleeing

document.addEventListener('mousemove', (event) => {
    // Get the center position of the button
    const btnRect = button.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    // Calculate distance between cursor and button center
    const distX = event.clientX - btnCenterX;
    const distY = event.clientY - btnCenterY;
    const distance = Math.hypot(distX, distY);

    // Trigger dodge if cursor gets too close
    if (distance < triggerDistance) {
        // Safe boundaries to keep the button completely on screen
        const maxTop = window.innerHeight - btnRect.height;
        const maxLeft = window.innerWidth - btnRect.width;

        // Generate coordinates (ensures values stay between 0 and max)
        const newTop = Math.max(0, Math.min(Math.random() * maxTop, maxTop));
        const newLeft = Math.max(0, Math.min(Math.random() * maxLeft, maxLeft));

        // Apply new smooth position
        button.style.top = `${newTop}px`;
        button.style.left = `${newLeft}px`;
    }
});

// *the following was an attempt to make a button that turns to say error after you click it
// <script>
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Error";
// }
// </script>

const btn = document.getElementById('myButton');

btn.addEventListener('click', function () {
    btn.textContent = 'Error ;p';
});
