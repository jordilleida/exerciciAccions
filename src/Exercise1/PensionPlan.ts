import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// https://medium.com/@jesusmurfontanals/typescript-para-que-sirven-los-types-y-interfaces-y-en-que-se-diferencian-bee0af17fffa
type tRetencio = {min:number, max:number, retencio:number}

class Desgravacio {
  private baseImponible:number;

  private aportacio:number;

  private tramsRetencio:tRetencio[] = [
    { min: 0, max: 12250, retencio: 19 },
    { min: 12250, max: 20200, retencio: 24 },
    { min: 20200, max: 35200, retencio: 30 },
    { min: 35200, max: 60000, retencio: 37 },
    { min: 60000, max: 300000, retencio: 45 },
    { min: 300000, max: -1, retencio: 47 },
  ];

  constructor(baseImponible:number) {
    this.baseImponible = baseImponible;
    this.aportacio = 0;
  }

  setAportacio(aportacio:number) {
    this.aportacio = aportacio;
  }

  // === same type and same value
  // Non-null assertion operator ! (operador que afirma que no es null)
  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
  getDesgravacio() {
    const escala:tRetencio = this.tramsRetencio.find(
      (e) => this.baseImponible >= e.min && (this.baseImponible < e.max
                || e.max === -1),
    )!;
    const desgravacio = (this.aportacio * escala.retencio) / 100;
    console.log(`El teu percentatge de retenció és de ${escala.retencio}%`);
    return desgravacio;
  }
}

rl.question('Quin pla de pensions vols realitzar?\n'
             + '1.Pla de pensions persona física\n'
             + '2.Pla de pensions empresarial \n'
             + '3.Tots dos \n', (answerPla:String) => {
  // The + operator returns the numeric representation of the object
  const plaPensions:number = +answerPla;
  rl.question('Quina es la teva Base Imponible? ', (answerBase:String) => {
    const baseImponible:number = +answerBase;
    const desgravacio = new Desgravacio(baseImponible);
    if (plaPensions === 1) {
      rl.question(
        'Quina es la teva aportacio al pla de pensions de persona física? ',
        (answerAportacio:String) => {
          const aportacio:number = +answerAportacio;
          desgravacio.setAportacio(aportacio);
          console.log(`La teva desgravació del pla de pensions persona física es
           de ${desgravacio.getDesgravacio()}€`);
          rl.close();
        },
      );
    } else if (plaPensions === 2) {
      rl.question(
        'Quina es la teva aportacio al pla de pensions empresarial? ',
        (answerAportacio:String) => {
          const aportacio:number = +answerAportacio;
          desgravacio.setAportacio(aportacio);
          console.log(`La teva desgravació del pla de pensions empresarial es
         de ${desgravacio.getDesgravacio()}€`);
          rl.close();
        },
      );
    } else if (plaPensions === 3) {
      rl.question(
        'Quina es la teva aportacio al pla de pensions de persona física? ',
        (answerAportacio:String) => {
          const aportacio:number = +answerAportacio;
          desgravacio.setAportacio(aportacio);
          const desgravacioPersonaFisica = desgravacio.getDesgravacio();
          rl.question(
            'Quina es la teva aportacio al pla de pensions empresarial? ',
            (answerAportacioEmpresarial:String) => {
              const aportacioEmpresarial:number = +answerAportacioEmpresarial;
              desgravacio.setAportacio(aportacioEmpresarial);
              const totalDesgravacio:number = desgravacioPersonaFisica
                                              + desgravacio.getDesgravacio();
              console.log(`La teva desgravació dels plans de pensions es de ${totalDesgravacio}€`);
              rl.close();
            },
          );
        },
      );
    }
  });
});
