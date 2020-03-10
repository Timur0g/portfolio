// Определенные данные
const data = [{
            "name": "product-1"
        },
        {
            "name": "product-2"

        },
        {
            "name": "product-3"

        },
        {
            "name": "product-4"

        },
        {
            "name": "product-5"

        },
        {
            "name": "product-6"

        },
        {
            "name": "product-7"

        },
        {
            "name": "product-8"

        },
        {
            "name": "product-9"

        }
    ]
    // Получение класса для товаров
let class_goods = document.querySelector('.container_goods__goods');
// Получение класса количества товаров в корзине
let class_cart = document.querySelector('.container_goods__cart');
// Получение  класса списка товаров в корзине
let class_list = document.querySelector('.container_goods__cart-list')



// Cоздание тега <span> и добавление его в class_basket
let span = document.createElement('span')
let span_for_cart = class_cart.appendChild(span)



// Создание массива для хранения наименования товаров
let array_goods = [];
// Создание массива для корзины
let cart = []

//Запись в массив array_goods полученные наименования товаров из data
data.map(item => array_goods.push(item.name))

// Обновление состояния корзины
function update_state() {
    while (class_list.lastChild) {
        class_list.removeChild(class_list.lastChild)
    }
    cart.map((item, index) => {
        let class_list = document.querySelector('.container_goods__cart-list')
        let span_for_list = document.createElement('span')
        let append_span_for_list = class_list.appendChild(span_for_list)
        append_span_for_list.innerHTML = `${item}`
            // <div class="container_goods__product" onclick=remove_from_cart(${index})> Del</div>`
        append_span_for_list.setAttribute('class', `container_goods__product ${item}`)
        append_span_for_list.setAttribute('onclick', `remove_from_cart(${index})`)
    })
}
// Получение фильтрованного массива и его запись
function filter_cart() {
    let filter_cart = cart.filter(item => item)
    span_for_cart.innerHTML = filter_cart.length
    update_state()
}

// Удалить из корзины товар
function remove_from_cart(i) {
    delete cart[i]
    filter_cart()
}

// Добавить в корзину товар
function add_to_cart(val) {
    cart.push(val)
    filter_cart()
}

// Отображение полученных данных в HTML документе
array_goods.map(function(item) {
    let div_class_goods = document.createElement('div')
    let added_class_goods = class_goods.appendChild(div_class_goods)
    added_class_goods.innerHTML = `${item}`;
    added_class_goods.setAttribute(`class`, `container_goods__product ${item}`)
    added_class_goods.setAttribute(`onclick`, `add_to_cart("${item}")`)
})