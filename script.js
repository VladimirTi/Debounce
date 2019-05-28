'use strict';

/** 
 * Реализовать декоратор debounce
 * 
 * Чтобы оригинальная функция запускалась только после определённой паузы в запусках обёртки
 * Пока пользователь печататет - ничего
 * Если остановился и подождал секунду - вывести последнее значение
 * Функция onChange должна получать тот же `this` и аргументы, что и обёртка
 **/
function debounce(fn, delay) {
  let lastCalled;
  return (...params) => {
    clearTimeout(lastCalled);
    lastCalled = setTimeout(() => fn(...params), delay);
  }
}

function onChange(event) {
  console.log(event.target.value);
}

let onChange_wrapper = debounce(onChange, 1000);

input1.addEventListener('input', onChange_wrapper);
