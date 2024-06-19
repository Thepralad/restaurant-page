function contactPage(){
    const h1 = document.createElement('h1');
    const div = document.createElement('div');
    const address = document.createElement('p');
    const emailAndPn = document.createElement('p');
    const btn = document.createElement('button');
    const content = document.getElementById('content');

    h1.textContent = 'Contacts';
    address.textContent = 'Suite 123 4460 Cartwright Drive, Port Myrnamouth, NC 80619';
    emailAndPn.textContent = 'valluecafe@yahoo.com (352) 351-5953 (334) 298-8217'
    btn.textContent = 'Call us';

    div.appendChild(address);
    div.appendChild(emailAndPn);
    div.appendChild(btn);

    content.appendChild(h1);
    content.appendChild(div);
}

export {
    contactPage
}
