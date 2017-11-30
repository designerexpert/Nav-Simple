const nav = document.querySelectorAll('.nav');

let currentTab;

const toggleSection = (n) => {
    if (n === currentTab) return;
    const sectionArr = document.querySelectorAll('.section');
    const toModify = sectionArr[n];
    if (!toModify.classList.contains('section-show')) {
        toModify.classList.add('section-show');
        sectionArr.forEach((element, index) => {
            if (index !== n && element.classList.contains('section-show')) {
                element.classList.remove('section-show');
            }
        });
        currentTab = n;
    } else {
        return;
    }
}
