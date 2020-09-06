import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Todo } from '../models/todo.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  dataStoreUrl: string;

  constructor(private httpClient: NgxDhis2HttpClientService) {
    this.dataStoreUrl = 'dataStore';
  }

  // Implement support to fetch todo list from server
  getTodos(): Observable<Todo[]> {
    return this.httpClient.get(
      `${this.dataStoreUrl}/todo_list_mrblack360/todo_list`
    );
  }

  getCompletedTodos(): Observable<Todo[]> {
    return this.httpClient.get(
      `${this.dataStoreUrl}/todo_list_mrblack360/completed_list`
    );
  }

  // implement support to save todo list
  saveTodos(todoList: Todo[]) {
    return this.httpClient
      .put(`${this.dataStoreUrl}/todo_list_mrblack360/todo_list`, todoList)
      .subscribe((res) => {
        console.log(res);
      });
  }
  saveCompletedTodos(completedTodoList: Todo[]) {
    return this.httpClient
      .put(
        `${this.dataStoreUrl}/todo_list_mrblack360/completed_list`,
        completedTodoList
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
