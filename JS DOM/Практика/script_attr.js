//DOM

//Атрибуты и свойства

//Блок 1 
//Доспуп к свойствам элемента

/*
У разных DOM-элементов могут быть разные свойства.
Например, у  тега <a>, есть свойства, связанные со ссылками,
а у тега <input> - свойства, связанные с полем ввода и т.д.

В HTML у тегов могут быть атрибуты.
Когда браузер парсит HTML, чтобы создать
DOM- объекты для тегов, он распознаёт стандартные
атрибуты и создает DOM-свойства для них.

Каждый DOM-узел принадлежит соотвествующему
встроенному классу
*/

// const link = document.querySelector('.lesson_link');
// const input = document.querySelector(".lesson_input");

// console.log(link.href);
// console.log(input.value);

//получить список доступных свойств элемента 
//console.dir(link);

//Блок 2 
//Проивольные атрибуты

/*
Стандартные элементы атрибута превращаются в свойства. 
Но если нам необходимо использовать нестандартные атрибуты, то
для этого есть опредленные методы
*/

//Получаем элемент
//const lessonText = document.querySelector('.italic');

// //Проверяем наличие атрибута
// lessonText.hasAttribute('name');
// //Получаем значение атрибута
// lessonText.getAttribute('name');
// //Устанавливаем значение атрибута
// lessonText.setAttribute('name', 'value');
// //Удаляем атрибут
// lessonText.removeAttribute('name');

//Пример
//Устанавливаем значение атрибута
//lessonText.setAttribute('some-attribute', 'some-value');
//Проверяем наличие атрибута
// if (lessonText.hasAttribute('some-attribute')){
//     console.log('some-attribute существует!');
// }

//Блок 3
//Синхронизация между атрибутами и свойствами

/*
Мы можем обратиться к тому или инному свойству через
методы доступа к атрибутам.
Когда стандартный атрибут меняется, соотвествующее 
свойство автоматически обновляется.
Это работает и в обратную сторону (за некоторыми исключениями)
*/

//Получаем элемент
// const input = document.querySelector('.lesson_input');

// input.setAttribute('id', '123');
// console.log(input.id);

// input.id = '321';
// console.log(input.getAttribute('id'));

//Попробуем сделать тоже самое со свойством value

// input.setAttribute('value', 'Привет!');
// console.log(input.value);

// input.value = "Как дела?";
// console.log(input.getAttribute('value'));

//при попытке изменить свойство у нас ничего не получилось -
//мы видим предыдущее значение


//Блок 4
//Нестандартные атрибуты, dataset

/*
Мы уже использовали произвольгые атрибуты,
но это рисковано.

Все атрибуты, начинающиеся с префикса "data-"
зарезервированы для использования программистами.
Они доступны в свойстве dataset
*/

//Получаем элемент
//const lessonText = document.querySelector('.italic');

//Получаем data-атрибут
//console.log(lessonText.dataset.size);

//Перезаписываем data-атрибут
// lessonText.dataset.size = "5810";
// console.log(lessonText.dataset.size);

//Блок 5 
//Полезные свойства

//const link = document.querySelector('.lesson_link');

//Получаем тег элемента
//console.log(link.tagName);

//Скрыть/показать элемент
// console.log(link.hidden);
// link.hidden = true;

