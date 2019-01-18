function decorate() {
  return (target: any, propertyKey: string) => {
    console.log(propertyKey);
  };
}

abstract class Foo extends Object {
  @decorate()
  baz: String = "baz";
}

export class Bar extends Foo {}
