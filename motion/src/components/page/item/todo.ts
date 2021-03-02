import { BaseComponent } from "../../component.js";

export class ToDoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
            <h2 class="todo__title"></h2>
            <input type="checkbox" class="todo-checkbox">
          </section>`);

    const titleElement = this.element.querySelector(".todo__title")! as HTMLHeadingElement;
    titleElement.textContent = title;

    const toDoElement = this.element.querySelector(".todo-checkbox")! as HTMLInputElement;
    toDoElement.insertAdjacentText("afterend", todo);
  };
};