// Функции, которые польностью очищают div от всех дочерних элементов

const update_container = () => {
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}


const update_tabs = () => {
    const tabs = document.querySelector('.tabs');
    while (tabs.firstChild) {
        tabs.removeChild(tabs.firstChild)
    }
}

const update_tags = () => {
    const tags = document.querySelector('.tags');
    while (tags.firstChild) {
        tags.removeChild(tags.firstChild)
    }
}



// Полученные JSON с помошью филтрации в поиске 
var search_json = [];

// Условия фильтрации фильмов (в масссиве)
var search_terms;

// Добавленные пользователем теги
var tags_array = [];

// Своя функция indexOf() для сравнения не ссылок на обьекты, а, непосредственно.
// на его содержимое
let mine_index_of = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].title == value.title) {
            return i;
        }
    }
}

// Отображение фильмов с условиями
let show_films_with_conditions = (js) => {
    for (let i = 0; i < js.length; i++) {
        const container = document.querySelector('.container');
        const span = document.createElement('span');
        const result = container.appendChild(span);
        result.setAttribute('class', `films film_${mine_index_of(json_films, js[i])}`)
        result.setAttribute('onclick', `add_or_del_tabs('film_${mine_index_of(json_films, js[i])}', "${js[i].title}")`)
        const class_result = document.querySelector(`.film_${mine_index_of(json_films, js[i])}`)
        result.innerHTML = `${js[i].title} <br> ${js[i].tags} <br><br>`
        class_result.style.color = 'black'
        for (let b = 0; b < json_tabs.length; b++) {
            if (json_tabs[b].title == js[i].title) {
                class_result.style.color = 'rgb(75, 168, 32)'
            }
        }
    }
    const button = document.querySelector('.button');
    button.style.display = 'none'
}

// Отображение закладок пользователя
let show_tabs = (js) => {
    update_container()
    for (let i = 0; i < js.length; i++) {
        const container = document.querySelector('.container');
        const span = document.createElement('span');
        const result = container.appendChild(span);

        result.setAttribute('class', `tab tab_${mine_index_of(json_films, js[i])}`)
        result.setAttribute('onclick', `add_or_del_tabs('tab_${mine_index_of(json_films, js[i])}', "${js[i].title}")`)
        const class_result = document.querySelector(`.tab_${mine_index_of(json_films, js[i])}`)
        result.innerHTML = `${js[i].title} <br> ${js[i].tags} <br><br>`
        class_result.style.color = 'black'
        for (let b = 0; b < json_tabs.length; b++) {
            if (json_tabs[b].title == js[i].title) {
                class_result.style.color = 'rgb(75, 168, 32)'
            }
        }
    }
    const button = document.querySelector('.button');
    button.style.display = 'none'
}

// Отображение фильмов с условиями и тегами
var show_with_tags = (json) => {
    update_container()
    let array_json = []
    json.map(item => {
        for (let i = 0; i < item.tags.length; i++) {
            if (item.tags.some(it => it == tags_array[i])) {
                array_json.push(item)
            }
        }
    })

    array_json = array_json.filter((item, index) => {
        return array_json.indexOf(item) == index
    })
    if (array_json.length == 0) {
        const container = document.querySelector('.container');
        const span = document.createElement('span');
        const result = container.appendChild(span);
        result.innerHTML = `Ничего  не найдено`
    }
    show_films_with_conditions(array_json)

}




// Добавленные пользователем закладки в формате массива
let tabs_array = [];

// Добавленные пользователем закладки в формате JSON
let json_tabs = [];

// Добавление или удаление пользователем закладки в формате JSON
const add_or_del_tabs = (className, json) => {
    const class_query = document.querySelector(`.${className}`)
    if (class_query.style.color == 'rgb(75, 168, 32)') {
        class_query.style.color = 'black'

        delete tabs_array[tabs_array.indexOf(`${json}`)]
        tabs_array = tabs_array.filter(item => item)

        let remove_item = []

        json_films.map(item => {
            for (let i = 0; i < tabs_array.length; i++) {
                if (tabs_array[i] == item.title) {
                    remove_item.push(item)
                }
            }
        })
        json_tabs = remove_item


    } else {
        class_query.style.color = 'rgb(75, 168, 32)'
        tabs_array.push(json)
        for (let b = 0; b < tabs_array.length; b++) {
            for (let i = 0; i < json_films.length; i++) {
                if (json_films[i].title == tabs_array[b]) {
                    json_tabs.push(json_films[i])
                }
            }
        }
    }
    json_tabs = json_tabs.filter((item, index) => {
        return json_tabs.indexOf(item) == index
    })
}


// Количество загружаемых фильмов
let length_load_films = 20;


//  Отображение фильмов с его тегами на странице
const films = () => {

    for (let i = 0; i < json_films.length; i++) {
        const container = document.querySelector('.container');
        const span = document.createElement('span');
        const result = container.appendChild(span);
        result.innerHTML = json_films[i].title + '<br>' + json_films[i].tags + '<br><br>';
        result.setAttribute('class', `films film_${i}`)
        result.setAttribute('onclick', `add_or_del_tabs('film_${i}', "${json_films[i].title}")`)
        const class_result = document.querySelector(`.film_${i}`)
        class_result.style.color = 'black'
        for (let b = 0; b < json_tabs.length; b++) {
            if (json_tabs[b].title == json_films[i].title) {
                class_result.style.color = 'rgb(75, 168, 32)'

            }
        }
        if (length_load_films == i) {
            length_load_films = length_load_films + 20
            break
        }
    }

    const button = document.querySelector('.button');
    button.style.display = 'block'

}


// Вызов функции отображения фильмов с его тегами на странице
films();


// Кнопка, которая показывает + length_load_films фильмов на странице
const button = document.querySelector('.button');
button.addEventListener('click', () => {
    update_container()
    films()
})


// Массив с названиями фильмов, разделенные по буквам для поиска 
let str_films = [];
for (let i = 0; i < json_films.length; i++) {
    let string = `${json_films[i].title}`;
    str_films.push(string.split(''))
}


// Функция для сравнения названия фильмов с поиском
let str_terms = (n) => {
    let first_terms = `item[0] == str_search[0]`
    let array = []
    array.push(first_terms)
    for (let i = 1; i < n; i++) {
        array.push(` && item[${i}] == str_search[${i}]`)
    }
    return array.join('')
}


// Берет со станицы input
let search = document.querySelector('#search');

// Обработчик событий, показывающий список фильмов, соответствующие значению input
search.oninput = function() {
    update_container()
    let string = `${search.value}`;
    let str_search = string.split('');
    let search_length = str_search.length;


    search_terms = str_films.filter(function(item) {
        if (search_length == 1) {
            return item[0] == str_search[0]
        } else if (search_length >= 1) {
            return eval(str_terms(search_length));
        }
    })

    str_join_value = []

    search_terms.map(item => {
        str_join_value.push(item.join(''))
    })
    search_json = []


    str_join_value.map(item => {
        for (let i = 0; i < json_films.length; i++) {
            if (json_films[i].title == item) {
                let tags_array_for = [];
                for (let b = 0; b < json_films[i].tags.length; b++) {
                    tags_array_for.push(`${json_films[i].tags[b]}`)
                }
                var json_template = { "title": item, "tags": tags_array_for }
                search_json.push(json_template)
            }
        }
    })


    if (search.value.length > 0 && search_json.length == 0) {
        update_container()
        const container = document.querySelector('.container');
        const span = document.createElement('span');
        const result = container.appendChild(span);
        result.innerHTML = `По запросу "${string}" ничего не найдено`;

        const show_tags = document.querySelector('.show_tags');
        show_tags.style.display = 'none'
        const button = document.querySelector('.button');
        button.style.display = 'none'

        update_tags()

    } else {
        update_tags()
        show_json_tags()
        const show_tags = document.querySelector('.show_tags');
        show_tags.style.display = 'block'

        if (search.value.length > 0 && tags_array.length > 0) {
            show_with_tags(search_json)

        } else if (search.value.length == 0 && tags_array.length > 0) {
            show_with_tags(json_films)

        } else if (search.value.length == 0 && tags_array.length == 0) {
            update_container()
            films()

        } else if (search.value.length > 0 && search_json.length > 0) {
            show_films_with_conditions(search_json)

        }
    }
}


// Функцияя добавляет или удаляет в tags_array выбранные элементы для 
// дальнейшей манипуляций
const tags_choice = (tag, nom) => {
    let tags_clean = []
    const added_tag = () => {
        search_json.map(item => {
            tags_clean.push(item.tags)
        })
    }

    const tag_class = document.querySelector(`.${nom}`)
    if (tag_class.style.color == "blue") {
        const remove_index = tags_array.indexOf(tag, 0)
        delete tags_array[remove_index]
        tags_array = tags_array.filter(item => item)
        tag_class.style.color = "black";
        if (search.value.length > 0 && tags_array.length == 0) {
            update_container()
            show_films_with_conditions(search_json)
        } else if (search.value.length > 0 && tags_array.length > 0) {
            show_with_tags(search_json)

        }

    } else {
        tags_array.push(tag)
        tag_class.style.color = "blue";
        added_tag()
        if (search.value.length > 0 && tags_array.length == 0) {
            update_container()
            show_films_with_conditions(search_json)

        } else if (search.value.length > 0 && tags_array.length > 0) {
            show_with_tags(search_json)

        }
    }

    if (search_json.length == 0 && tags_array.length > 0) {
        show_with_tags(json_films)

    } else if (search_json.length == 0 && tags_array.length == 0) {
        update_container()
        films()

    }

}

// Отображение тегов
const show_json_tags = () => {
    for (let i = 0; i < json_tags.length; i++) {
        const tags = document.querySelector('.tags');
        const span = document.createElement('span');
        const result = tags.appendChild(span);
        result.setAttribute('onclick', `tags_choice('${json_tags[i]}', 'tag${i}')`)
        result.setAttribute('class', `tag tag${i}`)
        result.innerHTML = `${json_tags[i]} `;
    }
}
show_json_tags()

const tags = document.querySelector('.tags');
const show_tags = document.querySelector('.show_tags');

const show_tab = document.querySelector('.show_tab');

const container = document.querySelector('.container');
const input = document.querySelector('.input');

show_tab.innerHTML = "Показать закладки"

show_tab.addEventListener('click', function() {
    if (show_tab.innerHTML == "Показать закладки") {
        input.style.display = "none"
        show_tags.style.display = "none"
        tags.style.display = "none"
        tags_array = []
        update_container()
        update_tags()
        show_json_tags()
        search.value = ''
        show_tabs(json_tabs)
        show_tab.innerHTML = "Скрыть закладки"
    } else if (show_tab.innerHTML == "Скрыть закладки") {
        input.style.display = "block"
        show_tags.style.display = "block"
        tags_array = []
        update_container()
        update_tags()
        show_json_tags()
        tags.style.display = "none"
        search.value = ''
        update_container()
        films()
        show_tab.innerHTML = "Показать закладки"
        show_tags.innerHTML = "Показать теги"
    }
})

tags.style.display = 'none'
show_tags.addEventListener('click', function() {
    if (tags.style.display == 'none') {
        tags.style.display = 'flex'
        show_tags.innerHTML = "Скрыть теги"
    } else if (tags.style.display == 'flex') {
        tags.style.display = 'none'
        show_tags.innerHTML = "Показать теги"
    }
})