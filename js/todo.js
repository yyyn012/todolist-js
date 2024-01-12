const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

const toDos = [];
// toDos가 배열이 되어야 하는 이유는 나중에 수정과 삭제를 용이하게 하기 위해서이다.

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// toDos array의 내용을 localStorage에 넣어 브라우저가 새로고침되어도 그 내용을 저장하는 함수
// stringify를 이용해 JavaScript object나 array 등을 string으로 만들어준다.
// string타입만 localStorage에 저장될 수 있기 때문이다.

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
// daeleteToDo가 실행되면 parentElement로 클릭된 delete 버튼의 부모 li를 찾아 삭제한다.

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
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
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function HiItems() {
  console.log("hi");
}

const savedToDos = localSorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach();
}
