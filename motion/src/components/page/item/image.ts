import { BaseComponent } from "../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
    <div class="image__holder">
    <img class="image__thumbnail">
    </div>
    <h2 class="image__title"></h2>
    </section>`);

    const imageElment = this.element.querySelector(".image__thumbnail")! as HTMLImageElement;
    imageElment.src = url;
    imageElment.alt = title;

    const titleElement = this.element.querySelector(".image__title")! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
};