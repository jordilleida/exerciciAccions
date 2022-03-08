export default class Accion {
  private nombre$!:string;

  private unidades$!:number;

  private invertido$!:number;

  private gananciasPerdidas$!:number;

  private gananciasPerdidasPorcentaje$!:number;

  private valor$!:number;

  public get name() {
    return this.nombre$;
  }

  public set name(nombre$: string) {
    this.nombre$ = nombre$;
  }

  public get unidades() {
    return this.unidades$;
  }

  public set unidades(unidades$: number) {
    this.unidades$ = unidades$;
  }

  public get invertido() {
    return this.invertido$;
  }

  public set invertido(invertido$: number) {
    this.invertido$ = invertido$;
  }

  public get valor() {
    return this.valor$;
  }

  public set valor(valor$: number) {
    this.valor$ = valor$;
  }

  public get gananciasPerdidas() {
    return this.valor$ - this.invertido$;
  }

  public get gananciasPerdidasPorcentaje() {
    return (this.valor$ / 100) * this.invertido$;
  }
}
