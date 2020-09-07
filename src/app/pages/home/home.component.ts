import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo.model';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  todoList: Todo[] = [];
  completedList: Todo[] = [];
  newTodo = '';
  constructor(
    private todoService: TodoService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((data: Todo[]) => {
      this.todoList = data;
    });
    this.todoService.getCompletedTodos().subscribe((data: any) => {
      this.completedList = data;
    });
  }

  // implement support to remove todo item from the list and save data to server
  onDeleteTodo(todoItemIndex: number) {
    // Display to the user
    this._snackBar.open(this.todoList[todoItemIndex] + ' Deleted', 'OK', {
      duration: 2000,
    });
    // 1. remove todo from the list
    this.todoList.splice(todoItemIndex, 1);
    // 2. save the updated list to server
    this.todoService.saveTodos(this.todoList);
  }

  // implement support to add todo item into the list and save data to server
  onCreateTodo(todoItem: Todo) {
    if (this.newTodo != '') {
      // 1. add  todo from the list
      this.todoList.push(todoItem);
      // 2. save the updated list to server
      this.todoService.saveTodos(this.todoList);
      this.newTodo = '';
    }
  }

  // implement support to edit todo item and update into the list and save data to server
  onEditTodo(todoItem: Todo) {
    // 1. update edited todo into the list
    // 2. save the updated list to server
    this._snackBar.open(
      'Can not edit a moment, try deleting and add another correct task',
      'OK',
      {
        duration: 2000,
      }
    );
  }

  // implement support to mark todo item as complete and update into the list and save data to server
  onCompleteTodo(todoItemIndex: number) {
    // 1. mark a todo as complete
    this.completedList.push(this.todoList[todoItemIndex]);
    // 2. update edited todo into the list
    this.todoList.splice(todoItemIndex, 1);
    // 3. save the updated list to server
    this.todoService.saveTodos(this.todoList);
    this.todoService.saveCompletedTodos(this.completedList);
    // Display to the user
    this._snackBar.open(
      this.completedList[this.completedList.length - 1] + ' Completed',
      'OK',
      {
        duration: 2000,
      }
    );
  }
  showCompletedList() {
    if (this.completedList.length <= 0) {
      return false;
    } else return true;
  }
  showTodoList() {
    if (this.todoList.length <= 0) {
      return false;
    } else return true;
  }
}
