function showContent(pageId) {
    var contentSections = document.querySelectorAll('.content');
    contentSections.forEach(function(section) {
        section.classList.remove('active');
        section.style.animation = 'none';
    });

    var activePage = document.getElementById(pageId);
    activePage.classList.add('active');

    activePage.style.animation = 'fadeIn 1s ease-out forwards';

    localStorage.setItem('activePage', pageId);
}

window.onload = function() {
    var activePage = localStorage.getItem('activePage');

    if (activePage) {
        showContent(activePage);
    } else {
        showContent('home');
    }
};
