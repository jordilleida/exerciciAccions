export default class BankMember {
    private savingBalance$: number;

    public get savingBalance(): number{
        return this.savingBalance$;
    }
    public set savingBalance(amount: number){
        this.savingBalance$ += amount;
    }
    constructor(savingBalance: number){
        this.savingBalance$ = savingBalance;
    }
}