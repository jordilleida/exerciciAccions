import ConcreteBuilder from './ConcreteBuilder';
import Director from './Director';

function clientCode(director:Director) {
  const builder = new ConcreteBuilder();
  director.setBuilder(builder);

  console.log('Standard basic product');
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log('Standard full featured product');
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

  // Remember, the Builder pattern can be used without a Director class, like this example
  console.log('Custom product');
  builder.producePartA();
  builder.producePartC();
  builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);
