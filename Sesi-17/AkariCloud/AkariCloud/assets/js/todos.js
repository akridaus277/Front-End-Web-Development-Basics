// Pemakaian Javascript Object
var todos = [{
    id:0,
    todo: 'todo 1',
    finished: true,
}, {
    id:1,
    todo: 'todo 2',
    finished: true,
}, {
    id:2,
    todo: 'todo 3',
    finished: false,
}];

//Load data
if(!window.localStorage.getItem("todos")){
    window.localStorage.setItem('todos', JSON.stringify(todos));
}else{
    todos = window.localStorage.getItem("todos");
    todos = JSON.parse(todos);
}

//variable filter todo & search todo
var current_filter = '*';
var input_search = '';

// Pemakaian Function Filter
function searchTodos(todo_element) {
    if(input_search != ''){
        return todo_element.todo.includes(input_search);
    }else{
        return todo_element;
    }
    
}

// Pemakaian Function Filter
function filterTodos(todo_element) {
    //Pemakaian symbol ===
    if(current_filter === '*'){
        return todo_element;
    }
    //Pemakaian symbol ==
    else if(current_filter == 1){
        return todo_element.finished == true;
    }
    //Pemakaian symbol ==
    else if(current_filter == 0){
        return todo_element.finished == false;
    }
}


getAll();
// Pemakaian Function

function getAll(){
    newTodos = window.localStorage.getItem("todos");
    newTodos = JSON.parse(newTodos);
    allData = '';
    // Pemakaian Function Filter
    filteredTodos = newTodos.filter(filterTodos);
    searchedTodos = filteredTodos.filter(searchTodos);
    // console.log(filteredTodos);
    if(searchedTodos.length>0){
        // Pemakaian ForEach Loop
        searchedTodos.forEach(function callback(element, key) {
            // Pemakaian Ternary Operator
            element.finished ? 
            // Load data ke dalam element HTML jika todo sudah finished
            allData +=
            `<li class="list-group-item" data-key="${element.id}">
                <div class="custom-control custom-checkbox ">
                    <input type="checkbox" class="custom-control-input " checked id="customCheck${key}" onclick="ubahTodo(this)">
                    <label  class="custom-control-label "  style="text-decoration: line-through;" for="customCheck${key}">${element.todo}</label>
                    <button class="btn btn-danger float-end" onclick="hapusTodo(this)" href=#>X</button>
                </div>
            </li>`:
            allData +=
            `<li class="list-group-item filter-ongoing " data-key="${element.id}">
                <div class="custom-control custom-checkbox" >
                    <input type="checkbox" class="custom-control-input " id="customCheck${key}" onclick="ubahTodo(this)">
                    <label class="custom-control-label " for="customCheck${key}">${element.todo}</label>
                    <button class="btn btn-danger float-end" onclick="hapusTodo(this)" href=#>X</button>
                </div>
            </li>`;
        });

    }else{
        // Load respon ke dalam element HTML jika tidak ada elemen todo
        allData=
        `<li class="list-group-item">
                <div class="custom-control custom-checkbox ">
                    <label class="custom-control-label " for="customCheck1">No Data can be Shown</label>
                </div>
            </li>`;
    }
    //render data list todo ke dalam HTML
    document.getElementById("todo-list").innerHTML = allData;


}

// Pemakaian Function
function tambahTodo() {
    //variabel kosong penambung todo baru
    var newTodo = {
        id:0,
        todo:'',
        finished:false
    }
    //mengambil nilai todo dari input
    newTodo.todo = document.getElementById("input-todo").value;
    //error handling jika input kosong
    if(!newTodo.todo){
        alert("Maaf isian tidak boleh kosong");
    }
    //error handling jika input berupa number
    else if(!isNaN(newTodo)){
        alert("Maaf input anda tidak valid");
    }
    //jika input valid
    else{
        //tambah element todo
        newTodo.id = todos.length;
        todos.push(newTodo);
        window.localStorage.setItem('todos', JSON.stringify(todos));
        document.getElementById("input-todo").value = '';
    }
    getAll();   
}

// Pemakaian Function
function hapusTodo(label_element){
    let text = "Apakah anda yakin akan menghapus todo ini?";
    let keyArray = Number(label_element.parentElement.parentElement.getAttribute("data-key"));
    //search index by id
    const todos_index = todos.map(object => object.id).indexOf(keyArray);
    // Pemakaian symbol ==
    //jika sudah konfirmasi akan dihapus
    if (confirm(text) == true) {
        //hapus element todo
        todos.splice(todos_index,1);
        window.localStorage.setItem('todos', JSON.stringify(todos));
    } 
    getAll();  
}

// Pemakaian Function
function ubahTodo(checkbox_element){
    let keyArray = Number(checkbox_element.parentElement.parentElement.getAttribute("data-key"));
    //search index by id
    const todos_index = todos.map(object => object.id).indexOf(keyArray);
    // Pemakaian symbol ==
    //jika todo belum finished sebelum diklik, lalu ubah menjadi sudah finished
    if(todos[todos_index].finished == false){
        todos[todos_index].finished = true;
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }
    //jika todo sudah finished sebelum diklik, lalu ubah menjadi belum finished
    else{
        todos[todos_index].finished = false;
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }   
    getAll();  
}

// Pemakaian Function
function activeFilterTodo(filter_element){
    
    let todoFilters = document.querySelectorAll('#portfolio-flters li');

    //nonaktifkan semua list filter
    for (var i = 0; i < todoFilters.length; i++) {
        todoFilters[i].classList.remove('filter-active');
    }
    //aktifkan list filter yang dipilih
    filter_element.classList.add('filter-active');
    current_filter = filter_element.getAttribute("data-filter");
    getAll();
}

// Pemakaian Function
function searchTodo(){
    
    input_search = document.getElementById('search-todo').value;

    console.log(input_search);
    getAll();
}





