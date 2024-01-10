const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  //   input의 현재 value를 새로운 변수에 복사
  toDoInput.value = "";
  //   input을 빈칸으로 만듦(빈칸이 되었다고 해서 newTodo에 복사된 값이 없어지는 건 아님)
  console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
