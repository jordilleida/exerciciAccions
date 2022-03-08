import { IList } from 'ts-generic-collections-linq';
import Accion from './Accion';

export default class Portfolio {
  private disponible$!:number;

  private capitalInvertido$!:number;

  private beneficio$!:number;

  private capitalVirtual$!:number;

  private accionList$!:IList<Accion>;

  constructor(disponible$:number, accionList$:IList<Accion>) {
    this.disponible$ = disponible$;
    this.accionList$ = accionList$;
  }

  public get accionList() {
    return this.accionList$;
  }

  public get disponible() {
    return this.disponible$ - this.accionList.sum((x) => x.invertido);
  }

  public get capitalInvertido() {
    return this.accionList$.sum((x) => x.invertido);
  }

  public get capitalVirtual() {
    return this.disponible$ + this.accionList$.sum((x) => x.gananciasPerdidas);
  }

  public get beneficios() {
    return this.accionList$.sum((x) => x.gananciasPerdidas);
  }
}
