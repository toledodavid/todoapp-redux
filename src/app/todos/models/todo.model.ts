
export class Todo {

  public id: number;
  public text: string;
  public completado: boolean;

  constructor(text: string) {
    this.id = new Date().getTime();
    this.text = text;
    this.completado = false;
  }

}
