baguetteBox.run('.container');

const search = document.querySelector('#search');
const imgBoxes = document.querySelectorAll('.container a');

const handleSearch = event => {
    const searchTerm = event.target.value.toLowerCase();

    imgBoxes.forEach(imgBox => {
        const text = imgBox.getAttribute("data-caption").toLowerCase();
        const box = imgBox.parentElement;

        if(text.includes(searchTerm)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }

    });
}

search.addEventListener('keyup', handleSearch);
search.addEventListener('search', handleSearch); // clearing the search field resets the gallery

