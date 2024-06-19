function homePage(){
    const h1 = document.createElement('h1');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const btn = document.createElement('button');
    const content = document.getElementById('content');
    const home = document.createElement('div');

    home.setAttribute("id", "homeContent");
    h1.setAttribute("id", "homeHeading")
    h1.textContent = 'Vallue Cafe';
    p.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod asperiores maiores natus incidunt, dignissimos delectus quasi, laboriosam recusandae eaque commodi, omnis magni. Praesentium laudantium, cupiditate, officia autem sint et doloribus soluta voluptatum nesciunt aut molestias ut minus atque saepe rem!'
    btn.textContent = 'Book a table';
    home.setAttribute("id", "homeContent");
    div.appendChild(p);
    div.appendChild(btn);

    home.appendChild(h1);
    home.appendChild(div);
    content.appendChild(home);
}

export {
    homePage
}
