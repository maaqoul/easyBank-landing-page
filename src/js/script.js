const hamburgerBtn = document.querySelector('#hamburger-btn');
const header = document.querySelector('.header');
const overly = document.querySelector('#overlay');
hamburgerBtn.addEventListener('click', () => {
    const {classList: headerClassList} = header;
    const {classList: overlayClassList} = overlay;
    if (headerClassList.contains('open')) {
        headerClassList.remove('open');
        overlayClassList.remove('fade-in');
        overlayClassList.add('fade-out')
    } else {
        headerClassList.add('open');
        overlayClassList.remove('fade-out');
        overlayClassList.add('fade-in')
    }
})