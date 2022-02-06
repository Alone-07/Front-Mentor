const shareIcon = document.querySelector('.share');
const toggleContainer = document.querySelector('#toggle');
const hideShare = document.querySelector('.hiding_share');
const displayProfile = document.querySelector('.displaying_profile');
let customerScreen = screen.availWidth;
shareIcon.addEventListener('click', () => {
    console.log(customerScreen);
    if (customerScreen < 834) { //when the screen size less than 834px t
        if (hideShare.style.opacity == 0) {
            hideShare.style.opacity = 1
            toggleContainer.style.backgroundColor = 'hsl(217, 19%, 35%)'
        } else {
            hideShare.style.opacity = 0
            toggleContainer.style.backgroundColor = 'white'
        }
    }
    if (customerScreen > 834) {

        if (hideShare.style.opacity == 0) {
            hideShare.style.opacity = 1;
        } else {
            hideShare.style.opacity = 0;
        }
    }
})

// 'hsl(217, 19%, 35%)';