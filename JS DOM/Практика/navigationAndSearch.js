//DOM
//Навигация по документу

/*
Самые верхние элементы дерева (это html head body)
доступны как свойства объекта document
*/

// const htmlElement = document.documentElement;
// const headElement = document.head;
// const bodyElement = document.body;

// console.log(htmlElement);
// console.log(headElement);
// console.log(bodyElement);

//Первый и последний дочерние элементы
// const firstChildNode = bodyElement.firstChild;
// const lastChildNode = bodyElement.lastChild;

// console.log(firstChildNode);
// console.log(lastChildNode);

/*В документе, возможно, есть еще какой-то HTML-код,
но на момент выполнения скрипта браузер еще
до него не дошел.
Поэтому, следует размещать скрипт в самом конце
документа
*/

//Коллекция childNodes одержит список всех детей,
//включая текстовые узлы.
//const childNodes = bodyElement.childNodes;
//console.log(childNodes);

//Для проверки наличия дочерних узлов
//существует специальная функция
//console.log(bodyElement.hasChildNodes());

/*
childNodes похож на массив, но на самом деле
это коллекция - особый перебираемый объект - псевдомассив

Отличия от массивов:
1. Для перебора коллекции используется for .. of
2. Методы массива работаь не будут.
*/

//Перебор коллеции

// for (let node of childNodes){
//     console.log(node); //покажет все узлы коллекции
// }

//соседние и родительские узлы
// const previousSiblingNode = bodyElement.previousElementSibling; //предыдущий узел объекта на том же уровне вложенности
// const nextSiblingNode = bodyElement.nextSibling; //следующий узел объекта
// const parentNode = bodyElement.parentNode; //непосредственный родитель элемента

// console.log(previousSiblingNode);
// console.log(nextSiblingNode);
// console.log(parentNode);

//Навигация только по элементам
/*Навигационные свойства, описанные выше, относятся
ко всем узлам документа. но для большинства задач текстовые узлы
и узлы-комментарии не нужны. Нам нужно манипулировать узлами-элементами,
которые представляют собой теги и формируют структуру страницы.
Для этого существуют отдельные свойства:
*/
//свойство children, которое отображает только теги (в  отличие от childNodes)
// const childNodes = bodyElement.childNodes;
// console.log(childNodes);

// const bodyChildren = bodyElement.children;
// console.log(bodyChildren);

//аналогичные свойства навигации для элементов (тегов)

//первый и последний дочерние элементы
// const firstChild = bodyElement.firstElementChild;
// const lastChild = bodyElement.lastElementChild;
// console.log(firstChild);
// console.log(lastChild);

//Соседние и родительские элементы
// const previousSibling = bodyElement.previousElementSibling; //предыдущий элемент объекта на том же уровне вложенности
// const nextSibling = bodyElement.nextElementSibling; //следующий элемент объекта
// const parentElement = bodyElement.parentElement; //непосредственный родитель элемента

// console.log(previousSibling);
// console.log(nextSibling);
// console.log(parentElement);

//Поиск произвольного элемента
//elem.querySelectorAll
/* самый универсальный метод поиска,
он возвращает все элементы внутри elem,
удовлетворяющие данному CSS-селектору.
Метод позволяет использовать любой  CSS-селектор.
*/

//Поиск по селектору класса
// const elemsOne = document.querySelectorAll(".lesson_list");
// console.log(elemsOne);

// //Поиск по селектору тега
// const elemsTwo = document.querySelectorAll("li");
// console.log(elemsTwo);

//Поиск по смешанному селектору тега и класса
// const elemsThree = document.querySelectorAll('li.lesson_item-list');
// console.log(elemsThree);

//Поиск по тегу первого уровня вложенности
// const elemsFour = document.querySelectorAll('.lesson_list>li')
// console.log(elemsFour);

//Поиск по нескольким классам
// const elemsFive = document.querySelectorAll('.lesson_list, .lesson_text');
// console.log(elemsFive);

//Поиск по вложенным классам
// const elemsSix = document.querySelectorAll('.lesson .lesson_text');
// console.log(elemsSix);

// //Поиск по id
// const elemsSeven = document.querySelectorAll('#listItem');
// console.log(elemsSeven);

//Поиск по арибуту
// const elemsEight = document.querySelectorAll('[data-item]');
// console.log(elemsEight);

//Поиск по арибуту со значением
// const elemsNine = document.querySelectorAll('[data-item="85"');
// console.log(elemsNine);

//Поиск произвольного элемента
//elem.querySelector
//возвращает первый элемент внутри elem, соответствующий 
//данному CSS-селектору

// const lessonList = document.querySelector('.lesson_list');
// console.log(lessonList);

//Поиск произвольного элемента
//document.getElementById(ID) elem.getElementBy
//На данный момент они используются редко, 
//т.к. querySelectorAll может их заменить

//document.getElementById(ID)
//если у элемента есть атрибут id,
//то можно получить его вызовом document.getElementById(ID)
//id уникален
//поиск ведется только внутри document 
// const elem = document.getElementById('listItem');
// console.log(elem);

//document.getElementsByTagName(TagName)
//ищет элементы с данным тегом и возвращает их коллекцию.
//Передав "*" вместо тега, можно получить всех потомков
// const elems = document.getElementsByTagName('li');
// console.log(elems);

//document.getElementsByClassName(TagName)
//возвращает элементы, имеющие данный CSS-класс
// const elems = document.getElementsByClassName('lesson_item-list');
// console.log(elems);

//document.getElementsByName(TagName)
//возвращает элементы, имеющие заданный атрибут name. Редко используется.
// const elems = document.getElementsByName('list');
// console.log(elems);