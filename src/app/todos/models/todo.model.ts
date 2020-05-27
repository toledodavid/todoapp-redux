
export class Todo {

  public id: number;
  public text: string;
  public completado: boolean;

  constructor(text: string) {
    this.id = Math.random();
    this.text = text;
    this.completado = false;
  }

}
