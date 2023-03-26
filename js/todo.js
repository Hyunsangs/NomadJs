const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = []; //const로 하면 안되고 let으로 해야함 (이유: )

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 로컬스토리지 안에 toDos 에 있는 값을 받아오기.
}               // JSON.stringify() 는 모든 javascript를 스트링으로 만들어주는것. 저렇게 함으로써 배열로 정렬가능
 //JSON.parse(localstorage.getItem("todos")) 를 하면
// 실제로 무언가 할 수 있는 배열로 얻기가능

function deleteToDo(event){  // TOdo 리스트 삭제하는 함수
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
     // parseInt()를 해주는 이유는 위에 li.id는 처음에 타입이 number 이기 때문에 string 타입으로 변환해서 맞춰주는 것
    saveToDos();    
}

function paintToDo(newTodo){ // 리스트에 작성한 것을 html에 나타내는 함수
    const li = document.createElement("li");
    li.id = newTodo.id; 
    const span = document.createElement("span");
    span.innerText =  newTodo.text; // object를 받기 때문에 newTodo.(text) 를 붙여줘야함.
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //li안에 span 넣기
    li.appendChild(button);
    toDoList.appendChild(li); // todolist 안에 계속 리스트 작성하기
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); // toDos 리스트에 제출한 것들 담기.
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 이전 todos 배열안에 받았던 값을 유지하고 새로운 값들을 자연스럽게 추가 할수있게한다.
    parsedToDos.forEach(paintToDo);  // array의 각 item에 대해 function을 실행하게 한다. 
                                    //  *paintToDo를 parsedToDos배열의 요소마다 실행. *
/*
function sayHello(item) {
     consolo.log("This is the turn of", item); 
}
 과 (item) => consolo.log("This is the turn of", item); 과 같은 함수이다. 
  2가지 옵션으로 함수를 만들어 사용이 가능하다. 
*/                                   
}

/*
filter은 foreach와 비슷하다.
filter 함수는 반드시 true 리턴해야한다. 만약 새array에도 배열에 값을 포함하고 싶다면
만약 false 리턴하면 item은 새 array에 포함되지 않는다.
[1,2,3,4].filter(sexyfilter) 라 했을때
sexyfilter(1) = 1
sexyfilter(2) = 2
sexyfilter(3) = 3
sexyfilter(4) = 4 의 형식으로 된다.

예재 const arr = ["pizza", "banana", "tomato"]

  function sextfilter(food){return food !== "banana"}

  array.filter(sexyfilter)
  >> (2) ["pizza", "tomato"]
  의 형식을 가진다.
*/