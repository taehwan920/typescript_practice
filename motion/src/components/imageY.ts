export class ImageComponent {
  private imgBox: HTMLDivElement;
  private imgElem: HTMLImageElement;
  private descElem: HTMLHeadingElement;
  constructor(imgUrl: string, description: string) {
    this.imgBox = document.createElement("div");
    this.imgElem = document.createElement("img");
    this.imgElem.src = imgUrl;
    this.descElem = document.createElement("h2");
    this.descElem.innerHTML = description;
    this.imgBox.appendChild(this.imgElem);
    this.imgBox.appendChild(this.descElem);
  };
};