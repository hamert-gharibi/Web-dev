import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }


  getLists() {
    return this.webReqService.get('lists');
  }

  createList(title: string) {
    // We want to send a web request to create a list
    return this.webReqService.post('lists', { title });
  }

  updateList(id: string, title: string) {
    // We want to send a web request to update a list
    return this.webReqService.put(`lists/${id}`, { title });
  }

  updateTask(taskId: string, title: string, description: string) {
    // We want to send a web request to update a list
    return this.webReqService.put(`lists/tasks/${taskId}`, { title });
  }

  deleteTask(taskId: string) {
    return this.webReqService.delete(`lists/tasks/${taskId}`);
  }

  deleteList(id: string) {
    return this.webReqService.delete(`lists/${id}`);
  }

  getTasks(listId: string) {
    return this.webReqService.get(`lists/tasks/_listId/${listId}`);
  }

  createTask(listId: string, title: string, description: string) {
    // We want to send a web request to create a task
    return this.webReqService.post(`lists/tasks/${listId}/tasks`, { title , description });
  }

  complete(task: Task) {
    return this.webReqService.put(`lists/${task}/tasks/${task._id}`, {
      completed: true
    });
  }
}
