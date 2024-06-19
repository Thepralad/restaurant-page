function contactPage(){
    const h1 = document.createElement('h1');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const btn = document.createElement('button');
    const content = document.getElementById('content');

    h1.textContent = 'Contacts';
    p.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod asperiores maiores natus incidunt, dignissimos delectus quasi, laboriosam recusandae eaque commodi, omnis magni. Praesentium laudantium, cupiditate, officia autem sint et doloribus soluta voluptatum nesciunt aut molestias ut minus atque saepe rem!'
    btn.textContent = 'Book a table';

    div.appendChild(p);
    div.appendChild(btn);

    content.appendChild(h1);
    content.appendChild(div);
}

export {
    contactPage
}
