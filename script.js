const shareIcon = document.querySelector('.share');
const toggleContainer = document.querySelector('#toggle');
const hideShare = document.querySelector('.hiding_share');
const displayProfile = document.querySelector('.displaying_profile');

shareIcon.addEventListener('click', () => {

    if (hideShare.style.opacity == 0) {
        hideShare.style.opacity = 1;

    } else {
        hideShare.style.opacity = 0;

    }
})


// 'hsl(217, 19%, 35%)';