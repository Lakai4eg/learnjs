import {Component, OnInit} from '@angular/core';
import {Todo} from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'promises';
  allTodos: Todo[] = []

  getTodos (url: string, limit: number){
    fetch(`${url}/?_limit=${limit}`)
      .then(response => {
        if (!response.ok) throw new Error('Неверный запрос')
        return response.json()
      })
      .then(json => this.allTodos = json)
      .catch((err) => {
        console.error(err.message)
        this.getTodos('https://jsonplaceholder.typicode.com/todos', 2)
      })
  }

  ngOnInit() {
    this.getTodos('https://jsonplaceholder.typicode.com/todosss', 10)
    }
  }
