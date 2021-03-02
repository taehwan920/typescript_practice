import { Component } from "./components/component.js";
import { Imagecomponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ToDoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new Imagecomponent("Image Title", "https://picsum.photos/600/300");
    this.page.addChild(image);

    const video = new VideoComponent("Video Title", "https://youtu.be/EjZqqRC61p0");
    this.page.addChild(video);

    const note = new NoteComponent("Note Title", "Note Body");
    this.page.addChild(note);

    const todo = new ToDoComponent("ToDo Title", "ToDo Item");
    this.page.addChild(todo);
  };
};

new App(document.querySelector(".document")! as HTMLElement);