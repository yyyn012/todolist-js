const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// padStart() : 첫번째 인자에 설정할 자릿수, 두번째 인자에 채워질 숫자를 입력하면 된다. 문자열만 적용 가능하므로 숫자는 String()안에 넣어준다.

getClock();
setInterval(getClock, 1000);
// getClock()을 실행시키고 setInterval()로 1초마다 작동시킨다.
