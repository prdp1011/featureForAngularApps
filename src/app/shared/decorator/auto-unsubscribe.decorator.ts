export function AutoUnsubscribe( constructor ) {
  const original = constructor.prototype.ngOnDestroy;
  console.log(constructor);

  constructor.prototype.ngOnOnit = function() {
    console.log(this);
  };
  constructor.prototype.ngOnDestroy = function() {
    console.log(this);
    const property = this[''];
    if ( property && (typeof property.unsubscribe === 'function') ) {
      property.unsubscribe();
    }
    // tslint:disable-next-line:no-unused-expression
    original && typeof original === 'function' && original.apply(this, arguments);
  };

}
