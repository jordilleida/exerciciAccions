import Club from './Club';

export default class Usuario {
  private nombre$!:string;

  private alias$!:string;

  private club$!:Club;

  public get name() {
    return this.nombre$;
  }

  public set name(nombre$: string) {
    this.nombre$ = nombre$;
  }

  public get alias() {
    return this.alias$;
  }

  public set alias(alias$: string) {
    this.alias$ = alias$;
  }

  public get club() {
    return this.club$;
  }

  public set club(club$: Club) {
    this.club$ = club$;
  }
}
