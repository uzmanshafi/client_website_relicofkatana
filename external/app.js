const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const menubar = document.querySelector('.navbar__container');

var music = document.getElementById("music");
music.volume = 0.1;

menu.addEventListener('click', function()
{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    menubar.classList.toggle('active');
});

window.addEventListener('scroll', reveal);

function reveal()
{
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++)
    {
        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowHeight - revealpoint)
        {
            reveals[i].classList.add('active');
        }
        else
        {
            reveals[i].classList.remove('active');
        }
    }
}