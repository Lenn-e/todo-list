import Todo from './todo';
import {TodoContainer, TodoContainerTimePeriod} from './todo-container';

window.todo = Todo('feed the cat');
window.todoContainer = TodoContainer();
window.todoContainerTimePeriod = TodoContainerTimePeriod('today');
window.todoContainer.addTodo(Todo('make lunch'));