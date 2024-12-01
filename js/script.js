// Функція для відображення відповідного контенту
function showContent(pageId) {
    // Сховати всі контент-блоки
    var contentSections = document.querySelectorAll('.content');
    contentSections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Показати вибраний контент
    var activePage = document.getElementById(pageId);
    activePage.classList.add('active');
}
