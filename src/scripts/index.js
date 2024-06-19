import './style.css';
import { homePage } from './home';
import { menuPage } from './menu';
import { contactPage } from './contact';
homePage();
document.getElementById('home').addEventListener('click', () =>{
    document.getElementById('content').innerHTML = '';
    homePage();
});
document.getElementById('menu').addEventListener('click', () =>{
    document.getElementById('content').innerHTML = '';
    menuPage();
});
document.getElementById('contact').addEventListener('click', () =>{
    document.getElementById('content').innerHTML = '';
    contactPage();
});

