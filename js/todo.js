const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
// toDos가 배열이 되어야 하는 이유는 나중에 배열의 요소를 하나씩 활용하거나 수정과 삭제가 가능하게 하기 위해서이다.

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// toDos array의 내용을 localStorage에 넣어 브라우저가 새로고침되어도 그 내용을 저장하는 함수
// JSON.stringify()는 JavaScript 값이나 객체를 JSON 문자열로 반환한다.
// stringify를 이용해 JavaScript object나 array 등을 string으로 만들어준다.
// string타입만 localStorage에 저장될 수 있기 때문이다.

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  // deleteToDo가 실행되면 parentElement로 클릭된 delete 버튼의 부모 li를 찾아 삭제한다.

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // filter()를 사용해 삭제 버튼이 눌려진 item(=false가 리턴된 요소)을 제외하고 새로운 배열을 만든다.
  // 여기서 toDo는 toDos의 데이터 베이스에 있는 요소 중 하나라서 데이터 베이스에 있는 모든 것과 함께 실행된다.
  // toDo.id는 숫자인데 li.id는 string이다. parseInt()를 사용하여 li.id를 number type으로 맞춰준다.

  saveToDos();
  // saveToDos()를 한번 더 호출하여 위에서 만들어진 새로운 배열만 화면에 보여지게끔 한다.
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  //   input의 현재 value를 새로운 변수에 복사
  toDoInput.value = "";
  //   input을 빈칸으로 만듦(빈칸이 되었다고 해서 newTodo에 복사된 값이 없어지는 건 아님)
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  // 배열 안에 있는 아이템들을 단순한 text가 아닌 object로 바꾸고, 각각의 랜덤한 id 값을 줘서 겉으로 보기에는 같아보여도 id로 구별되게끔 했다.
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
// JSON.parse()를 이용해 object(JSON 문자열)인 savedToDos를 JavaScript 객체로 변환했다.
// JavaScript 객체로 변한 savedToDos들을 toDos에 저장하고 paintToDo를 이용해 하나씩 브라우저에 나타냈다.
// forEach는 array가 가지고 있는 기능 중 하나로, forEach()를 사용하면 배열의 요소마다 영향을 줄 수 있다.
