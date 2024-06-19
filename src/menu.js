function menuPage(){
    const itemArr = [
        {
            name: 'Lasagna',
            description: 'A taste of wholesome cheese!',
            price: 9.99,
        },
        {
            name: 'Pizza',
            description: 'Wonder in every bite',
            price: 11.99,
        },
        {
            name: 'Tacos',
            description: 'More protien than your whey powder',
            price: 5.99,
        },
        {
            name: 'Burrittos',
            description: 'You will not even finish one!',
            price: 7.99,
        },
        {
            name: 'Virgin Moito',
            description: 'Just incase, you are stuck',
            price: 2.99,
        }
    ]
    const h1 = document.createElement('h1');
    const menuList = document.createElement('div');
    const content = document.getElementById('content');
    const menu = document.createElement('div');

    menu.setAttribute("id", "menuContent");
    menuList.setAttribute('id', "menuList");
    h1.textContent = 'Menu';
    h1.setAttribute("id", "Heading");

    for (let i = 0; i < itemArr.length; i++) {
        const item = document.createElement('div');
        const itemName = document.createElement('h3');
        const descriptionPara = document.createElement('p');
        const price = document.createElement('p');
    
        itemName.textContent = itemArr[i].name;
        descriptionPara.textContent = itemArr[i].description;
        price.textContent = `$${itemArr[i].price}`;
    
        item.appendChild(itemName);
        item.appendChild(descriptionPara);
        item.appendChild(price);

        item.setAttribute("class", "item");
        menuList.appendChild(item);
    }
    menu.appendChild(h1);
    menu.appendChild(menuList);
    content.appendChild(menu);
}

export {
    menuPage
}
