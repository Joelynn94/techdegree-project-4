
// Gets user input
var filterInput = document.getElementById('searchFilter');
// Gets items to be searched through
var filterData = document.querySelectorAll('a[data-title]');

// Event listener to look for user input
filterInput.addEventListener('keyup', filter);

// function that takes the user input and filters images
function filter() {
    var filterValue = filterInput.value.toUpperCase();
    
    // Loop through captions and display images realted to the captions
    for (var i = 0; i < filterData.length; i++ ){
        var title = filterData[i].getAttribute('data-title');

        if (title.toUpperCase().includes(filterValue)) {
            filterData[i].style.display = '';
        } else {
            filterData[i].style.display = 'none';
        }
    }
}




