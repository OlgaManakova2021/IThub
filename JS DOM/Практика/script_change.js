//Изменение документа

//Блок 1
//Содержимое элемента innerHTML

//Получаем объект
//const textElement = document.querySelector('.italic');

//получаем сожержимое объекта "как есть" вместе с HTML тегами
//const textElementContent = textElement.innerHTML;
//console.log(textElementContent);

//Перезаписываем содержимое объекта
//textElement.innerHTML = "легко и просто!"

//Документ изменится, но содержимое константы textElementContent
//останется прежним. Это позволяет дописывать сожержимое элемента

// textElement.innerHTML = 
//         `${textElementContent}<p>Легко и просто! 
//         <span class="bigred">Отлично</span> получилось!</p>`;

//Получим новый контент textElement
//console.log(textElement.innerHTML);

//Блок 2
//Содержимое элемента целиком outerHTML
//В отличие от innerHTML outerHTML позволяет получить не только содержимое элемента, 
//но и сам элемент

//Получаем объект
//const textElement = document.querySelector('.italic');

//получаем содержимое объекта "как есть" вместе с HTML, а так же сам элемент
// const textElementContent = textElement.outerHTML;
// console.log(textElementContent);

//изменяем документ и проверяем результат на вкладке Element
// textElement.outerHTML = `<p>Легко и просто! 
//              <span class="bigred">Отлично</span> получилось!</p>`;

//в содержимом элемента все еще находится исходная информация
//console.log(textElement.outerHTML);

//Блок 3
//просто текст элемента - textContent.
//полезная особенность  textContent - записывать текст безопасным способом.

//получаем объект
// const textElement = document.querySelector('.italic');
// const textElementContent = textElement.textContent;
// console.log(textElementContent);

//попробуем изменить содержимое
// textElement.textContent = `<p>Легко и просто! 
//             <span class="bigred">Отлично</span> получилось!</p>`;
// console.log(textElement.textContent);
//видим, что теги превратились в строку, т.е. произошла просто вставка строки

//Блок 4 

//Создание элементов и узлов

//Создание нового элемента (тега)
//const newElement = document.createElement('div');
//console.log(newElement);

//наполним новый элемент контентом
// newElement.innerHTML = `Опять легко и просто! <span class="bigred">Отлично</span> получилось!`;
// console.log(newElement);

// //Создание нового текстового узла
// const newText = document.createTextNode('Привет!');
// console.log(newText);

/*
Созданные объекты находятся в константах
и не являются частью документа. Их необходимо вставить в документ,
используя соответствующие методы вставки
*/

//вставляем новый элемент. Для этого сначала получим объект
//const textElement = document.querySelector('.italic');

//Создание нового элемента (тега)
//const newElement = document.createElement('div');

//наполним новый элемент контентом
//newElement.innerHTML = `Опять легко и просто! <span class="bigred">Отлично</span> получилось!`;

//вставляем новый элемент перед объектом
//textElement.before(newElement);

//вставляем новый элемент после объекта
//textElement.after(newElement);

//Самостоятельно вставить новый элемент перед и после элемента "fontsize30"

//Вставка нескольких объектов сразу
//textElement.after(newElement, "Привет!");

//Можно вставлять строку
//textElement.after(`Опять легко и просто! <span class="bigred">Отлично</span> получилось!`);

/*
строки вставляются безопасным способом,
как это делает textContent. Поэтому эти методы могут
использоваться только для вставки DOM-узлов или
текстовых фрагментов
*/

//если необхоимо вставить строку с HTML-тегами, то используется 
//мощный, универсальный метод insertAdjacentHTML/Text/Element, который
//имеет два параметра: куда вставлять и что вставлять

//Получаем объект
//const textElement = document.querySelector('.italic');

//вставляем текст, HTML, элемент

// textElement.insertAdjacentHTML(
//     'afterend',
//     `<p>Опять легко и просто! <span class="bigred">Отлично</span> получилось!`
// );
//в результате HTML-теги вставились как теги, а не как строки

/*
параметры:
beforebegin - вставить HTML непосредственно перед textElement
afterbegin - вставить HTML в начало textElement
beforeend - вставить HTML в конец textElement
afterend - вставить HTML непосредственно после textElement
*/

//самостоятельно вставить HTML с использованием параметров

//Блок 5
//Перенос элемента

/*
Можно не только вставлять новые узлы, но и переносить существующие.
Все методы вставки автоматически удаляют узлы со старых мест.
*/

//Получаем объект
//const lessonBlock = document.querySelector('.italic');
//Получаем объект
//const title = document.querySelector('.fontsize30');
/* или это
const title = document.querySelector('h1');
*/

//Переносим title в конец блока lessonBlock
//lessonBlock.append(title);


//Блок 6
//Клонирование узлов - cloneNode
//т.е. перенос  не нужен, а требуется копия элемента

//Получаем объект
//const tetxElement = document.querySelector('.fontsize30');
//Клонирование без дочерних элементов
//const cloneTextElement = tetxElement.cloneNode();

//Клонирование вместе с содержимым элемента
//const cloneTextElement = tetxElement.cloneNode(true);

// const lessonBlock = document.querySelector('.bigred');
// lessonBlock.append(cloneTextElement);

//Блок 7
//удаление узлов

//Получаем объект
//const tetxElement = document.querySelector('.fontsize30');
//удаляем объект
//tetxElement.remove();



