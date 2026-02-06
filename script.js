var grow = 0;
var btn = document.querySelector('button');
var h2 = document.querySelector('h2');
var inner = document.querySelector('.inner');

btn.addEventListener('click', function() {
    // 1. Assign the interval to a variable named 'int'
    var int = setInterval(() => {
        // 2. Add a condition to stop at 100
        if (grow < 100) {
            grow++;
            h2.innerHTML = grow + '%';
            inner.style.width = grow + '%';
        } else {
            // 3. Stop the interval once it reaches 100
            clearInterval(int);
            btn.innerHTML = "Downloaded";
            btn.style.opacity = "0.5";
            btn.style.pointerEvents = "none"; // Prevent clicking again
        }
    }, 50);
});