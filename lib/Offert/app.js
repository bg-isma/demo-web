const backBtn = document.getElementById('back');
backBtn.addEventListener('click', () => {
    document.referrer ? location.href = document.referrer : location.href = './offerts.html';
})
