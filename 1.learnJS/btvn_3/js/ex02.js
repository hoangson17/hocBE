const menu = [
    {
        "id": 1,
        "title": "menu 1",
        "parent": 0,
        "children": []
    },
    {
        "id": 2,
        "title": "menu 2",
        "parent": 0,
        "children": [
            {
                "id": 4,
                "title": "menu 2.1",
                "parent": 2,
                "children": []
            },
            {
                "id": 5,
                "title": "menu 2.2",
                "parent": 2,
                "children": [
                    {
                        "id": 6,
                        "title": "menu 2.2.1",
                        "parent": 5,
                        "children": []
                    },
                    {
                        "id": 7,
                        "title": "menu 2.2.2",
                        "parent": 5,
                        "children": []
                    },
                    {
                        "id": 8,
                        "title": "menu 2.2.3",
                        "parent": 5,
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "title": "menu 3",
        "parent": 0,
        "children": []
    }
]


const getMenu = function(dataMenu,level = ""){
    let opt = "";
    var select = document.getElementById("menu");
    for(let i = 0 ;i<dataMenu.length;i++){
        if(dataMenu[i].children!=[]){
            opt += `<option value="${dataMenu[i].id}">${level}${dataMenu[i].title}</>`;
            select.innerHTML = opt;
            opt += getMenu(dataMenu[i].children,level+ "==| ");
        }
    }
    return opt;
}
getMenu(menu);