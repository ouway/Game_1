// Первый урок
var drawCats = function(howManyTimes) {
	for (var i = 0; i < howManyTimes; i++) {
		console.log(i + "=^.^=");
    }
};

//Второй урок
"Просто длинная строка" . slice(0,3); // . slice - Отрезает от нулевого элемента до 3-его 

//Третий урок
"Супердлиннаястрока".length; // Узнать длину строки
var name = "Alexey";
name . toUpperCase(); // Перевод всех букв в заглавные
name . toLowerCase(); // Перевод всех букв в стр 
name[0]; // Вывод первого символа
var name1 = name.slice(1).toLowerCase();

//Пятый урок
var myArray = ["Велоцираптор", "Тиранозавр", "Диплодок"];
myArray[3] = "Брахиозавр";
myArray1 = [3, "Строка", ["буква", "запятая", "диплодок", 10.65], 9.1];
myArray[myArray.length-1]; // Получаем последний элемент массива
myArray.push("Трицерапторс"); // Добавляем элемент в конец массива
myArray.unshift("Апатозавр"); // Добавляем элемент начало массива
myArray.pop(); // Удаляет последний элемент массива и выводит его
myArray.shift(); // Удаляет первый элемент масисва и выводит его
var newArray = myArray.contact(myArray1); // Соединяет 2 массива
myArray.indexOf("Велоцираптор"); // Выводит индекс элемента
newArray = myArray.join(" - "); // Делает строку из массива и разделяет тем, что в скобках

//Шестой урок
Math.random(); // Вывод случайного числа от 0 до 1
Math.floor(Math.random()); // Округляет число в нижнюю сторону
Math.floor(Math.random()*10); // Случайные числа от 0 до 10
myArray[Math.floor(Math.random()*myArray.lenght)]; // выберает случайное значение из массива

//Седьмой урок
var murka = {
	"legs": 4,
	"name": "Мурка",
	"color": "черный"
};
murka["name"]; // Получаем результат
murka.name; // Получаем результат
Object.keys(dog); //Получаем все наши ключи
var cat1 = {}; // Создаем пустой объект
cat1["legs"] = 4; // Заполняем пустой объект
dog1.legs = 4; // Заполняем пустой объект с помощью точки
denosaurs[0]["name"]; // Получение объекта внутри массива
denosaurs[0].name; // Тоже самое
myCrazyObject["some array"][3].number

//Восьмой урок
	var message = "Привет, мир!";
	console.log(message); // Выводит значение переменной message в консоль
	if () {
		
	} else {

	}

//Десятый урок. Игра "Слова"
var name = prompt("Как вас зовут?"); // Выводит сообщение на экран
console.log("Привет ", + name);

var likesDogs = confirm("Тебе нравятся пёсики?"); // Выводит на экран сообщение с выбором ответов "Да" или "Нет"
if (likesDogs) {
	console.log("Все любят пёсиков");
} else {
	console.log("Что ж, не проблема. Все равно ты молодец!");
}

alert("JavaScript - Это здорово!"): // Выводит сообщение на экран

/*
	1. Случайным образом выбирать слово.
	2. Запрашивать у игрока вариант ответа (букву).
	3. Завершать игру по желанию игрока.
	4. Проверять, является ли введенный ответ буквой.
	5. Вести учет угаданных букв.
	6. Показывать игроку, сколько букв он угадал и сколько еще педстоит угадать.
	7. Завершать игру, если слово отгадано

	Псевдокод
	Выбрать случайное слово
	Пока слово не угадано { 
		Показать игроку тущее состояние игры
		Запросить у игрока вариант ответа
		Если игрок хочет выйти из игры {
			Выйти из игры
		} Иначе, если вариант ответа - не одиночная буква {
			Сообщить игроку, что он должен ввести букву
		} Иначе {
			Если такая буква есть в слове {
				Обновить состояние игры, подставив новую букву
			}
		}
	}
	Поздравить игрока!
 */

 // Одиннадцатый урок
 var ourFirstFunction = function () { // Объявление функции
	console.log("Привет, мир!");
 };
 ourFirstFunction(); // Вызов функции

 var sayHelloTo = function (name) {
	console.log("Привет, " + name + "!"); 
 };
sayHelloTo("Андрей");

var double = function (number) { // Функция возвращает значение
	return number * 2;
};

double(4); // Функция вернет 8