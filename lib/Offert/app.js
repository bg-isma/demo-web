const backBtn = document.getElementById('back');
backBtn.addEventListener('click', () => {
    location.href = document.referrer;
})

if (document.referrer) //si es verdadero quiere decir que vienes de algun lado
    alert("Aqui vienes desde: " + document.referrer);
else
    alert("Aqui entras directamente"); 