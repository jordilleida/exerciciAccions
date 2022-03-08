import { List } from 'ts-generic-collections-linq';
import Portfolio from './Portfolio';
import Usuario from './Usuario';
import Club from './Club';
import Accion from './Accion';

const usuario = new Usuario();
usuario.name = 'Jordi';
usuario.alias = 'JMR';
usuario.club = Club.Silver;

const llista = new List<Accion>();

const google = new Accion();
google.name = 'GOOGLE';
google.invertido = 15000;
google.unidades = 10;
google.valor = 18000;

llista.add(google);

const apple = new Accion();
apple.name = 'APPLE';
apple.invertido = 18000;
apple.unidades = 30;
apple.valor = 25000;

llista.add(apple);

const nio = new Accion();
nio.name = 'NIO';
nio.invertido = 28000;
nio.unidades = 28000;
nio.valor = 75000;

llista.add(nio);

const portfolio = new Portfolio(100000, llista);

console.log(`Disponible -> ${portfolio.disponible} €`);
console.log(`Invertido -> ${portfolio.capitalInvertido} €`);
console.log(`Capital Virtual -> ${portfolio.capitalVirtual} €`);
console.log(`Beneficios -> ${portfolio.beneficios} €`);
