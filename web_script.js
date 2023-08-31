// 目次のリンクをクリックしたときにスクロールする関数
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// 目次のリンクにクリックイベントを追加
const tocLinks = document.querySelectorAll('.table-of-contents a');
tocLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});