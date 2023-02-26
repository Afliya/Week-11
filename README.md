# Week-11

Homework for Week 11

1. Сколько детей (дочерних DOM-узлов) у элемента <ul> в примере ниже: 2
<ul>
    <li>Привет</li>
    <li>Мир</li>
</ul>
2. Есть такой элемент: <input id= "input" value = "Привет">. Какой вызов поменяет значение в нём?
   document.input.innerHTML = ‘Bye bye’
3. Сколько потомков будет у <div> после кода ниже?
<div id="div"></div>
<p id="p">Привет</p>

<script>
  div.append(p);
  div.append(p);
</script>

4. В каких случаях для элемента elem не верно elem.firstChild == elem.lastChild? Когда у elem два или более потомков
   • Когда у elem два или более потомков
   • Когда у elem единственный потомок
   • Когда у elem нет потомков
   • Нет такого варианта ответа
5. Какое свойство задает класс элемента?
   Метод add добавляет элементу класс. В качестве аргументов нужно передавать строку с именем класса.
6. Для чего используется запись: setAttribute(name, value)?
   Применяется для задания значения атрибута. Метод setAttribute принимает на вход два аргумента: имя атрибута, значение которого мы хотим задать, и само значение:
   button.setAttribute('lang', 'ru');
   сonsole.log(button.hasAttribute('lang')); //true
7. Назовите метод добавления текста к документу.
   Свойство textContent позволяет получить или перезаписать текстовое содержимое элемента.
8. Как получить HTML-содержимое DOM-элемента elem?
   Чтобы получить содержимое тега, используют свойства innerHTML. Свойство innerHTMLсодержит в себе строку со всем наполнением элемента (в том числе и разметкой). innerHTML позволяет не только получить значение свойства, но и перезаписать его.
9. Что такое объект события и какие у него могут быть свойства?
   Получить детальную информацию о событии в обработчике можно посредством объекта события (Event). Данный объект создаёт браузер, когда это событие происходит. В него он помещает много различной информации. Например, для события click: какая клавиша нажата, координаты курсора и др.
   Свойства объекта Event:
   • bubbles – логическое значение, указывающее на то является ли данное событие всплывающим;
   • cancelable – определяет можно ли событие отменить;
   • cancelBubble – при установке true предотвращает всплытие события, т.е. оно всплывать не будет (является псевдонимом метода stopPropagation);
   • composed – указывает может ли событие всплывать через из теневого DOM (внутреннего DOM конкретного элемента) в обычный DOM документа;
   • currentTarget – элемент, привязанный к обработчику события;
   • defaultPrevented – показывает был ли для события вызван метод preventDefault;
   • eventPhase – число, указывающее фазу процесса распространения события (0 – не обрабатывается, 1 – погружение, 2 – целевой элемент, 3 – всплытие);
   • isTrusted – указывает вызвано ли событие действием пользователя или программно (посредством использования метода dispatchEvent);
   • returnValue – альтернатива для preventDefault;
   • target – элемент, который создал событие;
   • timestamp – время, когда произошло событие;
   • type – тип (имя) события.

10. Что такое BOM и DOM?
    BOM (Browser Object Model) - это объектная модель браузера или браузерное окружение, которое является представлением дополнительных возможностей и функциональности в виде объектов, к которым у языка есть доступ. Окружение предоставляет свои объекты и дополнительные функции, в дополнение базовым языковым.
    DOM (Document Object Model) – это технология, которая работает на стороне пользователя и создаёт веб-страницы такими, какими их привыкли видеть. Интерфейс, позволяющий JS работать с разметкой документа.
11. Есть вот такая страница:

<!DOCTYPE HTML>
<html>

<body>
	 <form name="search">
	   <label>Поиск:
	     <input type="text" name="search"> 
	   </label>
	   <input type="submit" value="Search!"> 
  </form>
	<hr>
	<form name="search-person">Поиск по посетителям:
	   <table id="age-table">
	     <tr>
		<td>Возраст:</td>
		<td id="age-list">
		   <label>
		      <input type="radio"name="age" value="young">до 18
		   </label>
		   <label>
		      <input type="radio"name="age" value="mature">18-50
		   </label>
		   <label>
		      <input type="radio" name="age" value="senior">старше 50
		   </label>
		</td>
	    </tr>
	    <tr>
		<td>Дополнительно:</td>
		<td>
		    <input type="text" name="info">
		    <input type="text" name="info">
		    <input type="text" name="info"> </td>
	    </tr>
	 </table>
	 <input type="button" value="Search!"> </form>
</body>

</html>
Как найти в ней:
1.	Таблицу с id="age-table":
let ageTable = document.querySelector('#age-table ');
console.log(ageTable);
2.	Все элементы label внутри этой таблицы (их три)
let labels = document.getElementsByTagName("label");
console.log(labels);

3. Форму form с именем name="search-person"
   let searchPerson= getElementsByName(‘search-person’);
   console.log(searchPerson);

4. Как сделать переход на другую страницу при клике на кнопку (без <a href=...>, только средствами JavaScript)?
   Задаем кнопке id = ‘mybutton’
   document.getElementById('mybutton').onclick = function() {
   window.location.href = 'redirect-url';
   }
