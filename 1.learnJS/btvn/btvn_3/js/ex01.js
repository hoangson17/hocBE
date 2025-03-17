const menu = [
    {
        id: 1,
        title: 'menu 1',
        parent: 0,
    },
    {
        id: 2,
        title: 'menu 2',
        parent: 0,
    },
    {
        id: 3,
        title: 'menu 3',
        parent: 0,
    },
    {
        id: 4,
        title: 'menu 2.1',
        parent: 2,
    },
    {
        id: 5,
        title: 'menu 2.2',
        parent: 2,
    },
    {
        id: 6,
        title: 'menu 2.2.1',
        parent: 5,
    },
    {
        id: 7,
        title: 'menu 2.2.2',
        parent: 5,
    },
    {
        id: 8,
        title: 'menu 2.2.3',
        parent: 5,
    }
]




const getMenu = function(menuData,parentId = 0,level=""){
    let opt = "";
    var select = document.getElementById("menu");
    for(let i = 0 ; i < menuData.length ;i++){
        if(menuData[i].parent === parentId){
            opt += `<option value="${menuData[i].id}">${level }${menuData[i].title}</>`;
            select.innerHTML = opt;
            opt += getMenu(menuData,menuData[i].id,level+"==| ");
        }
    }
    return opt;
}

getMenu(menu)