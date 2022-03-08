export default class BankMember {
  private savingsBalance$: number;

  public get savingsBalance(): number {
    return this.savingsBalance$;
  }

  public set savingsBalance(savingsBalance$: number) {
    this.savingsBalance$ = savingsBalance$;
  }

  constructor(savingsBalance$: number) {
    this.savingsBalance$ = savingsBalance$;
  }

  public deposit(amount: number):void {
    this.savingsBalance$ += amount;
  }

  public withdraw(amount: number):void {
    if (this.savingsBalance$ < amount) {
      console.log('Insuficient Funds');
      return;
    }
    this.savingsBalance$ -= amount;
  }
}
