const iField = document.querySelector("input");
const addButton = document.querySelector("#add-todo button");
const toDOList = document.getElementById("todo-list");

// return the tast as output by user
const uInput = function() {
    const iField = document.querySelector("input");
    return iField.value.trim();
};

const createNewToDo = (title) => {
    const newToDo = document.createElement("li");
    newToDo.classList.add("list-item");
    newToDo.innerText = title;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.float = "right";

    deleteBtn.addEventListener("click", () => {
        deleteBtn.parentElement.remove();
    }
    );

    newToDo.append(deleteBtn);
    return newToDo;
};

const addNewToDo = () => {
    const userInput = uInput();
    if (userInput.length === 0) {
        alert("Please Add Your Text");
        return ;
    }

    const toDo = createNewToDo(userInput);
    toDOList.append(toDo);
    iField.value = "";
};

// Add Button Event Listener.
addButton.addEventListener("click", addNewToDo);
