// Function for filtering elements
function filterSelection(el) {
    let filterEl = document.getElementsByClassName("box");
    if (el === "all") {
        for (let i = 0; i < filterEl.length; i++) {
            filterEl[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < filterEl.length; i++) {
            if (filterEl[i].classList.contains(el)) {
                filterEl[i].style.display = "block";
            } else {
                filterEl[i].style.display = "none";
            }
        }
    }
}
window.onload = function (){
    filterSelection("all")
}
// Event listeners for filter buttons
document.addEventListener('DOMContentLoaded', function() {
    let btnContainer = document.querySelector(".shuffle");
    let btns = btnContainer.getElementsByClassName("btn");

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            let current = document.querySelector(".btn.active");
            if (current) {
                current.classList.remove("active");
            }
            this.classList.add("active");
            filterSelection(this.textContent.toLowerCase());
        });
    }
});

// Function for handling "Load More" button
document.addEventListener('DOMContentLoaded', function() {
    let loadMoreBtn = document.getElementById('more');
    let hiddenElements = document.querySelectorAll('.box1.hidden');
    let hideBtn = document.getElementById('hide');

    loadMoreBtn.addEventListener('click', function() {
        hiddenElements.forEach(function(element) {
            element.classList.remove('hidden');
        });
        // Hide the "Load More" button if there are no more hidden elements
        if (document.querySelectorAll('.box1.hidden').length === 0) {
            loadMoreBtn.style.display = 'none';
        }
    });

    hideBtn.addEventListener('click', function() {
        hiddenElements.forEach(function(element) {
            element.classList.add('hidden');
        });
        loadMoreBtn.style.display = 'block';
    });
});
