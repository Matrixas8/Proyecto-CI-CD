const {Ciudad, Impuesto} = require('./ciudad');

test('Ciudad está en déficit', () => {
  const imp1 = new Impuesto("imp1", 5000);
  const imp2 = new Impuesto("imp2", 3000);
  const imp3 = new Impuesto("imp3", 2000);
  const imp4 = new Impuesto("imp4", 1000);
  const imp5 = new Impuesto("imp5", 1500);

  const ciudad = new Ciudad(1001, "Ciudad A", 150000, [imp1, imp2, imp3, imp4, imp5], 13000);
  expect(ciudad.tieneDeficit()).toBe(true);
});

test('Ciudad no está en déficit', () => {
  const imp1 = new Impuesto("imp1", 5000);
  const imp2 = new Impuesto("imp2", 3000);
  const imp3 = new Impuesto("imp3", 2000);
  const imp4 = new Impuesto("imp4", 1000);
  const imp5 = new Impuesto("imp5", 1500);

  const ciudad = new Ciudad(1002, "Ciudad B", 200000, [imp1, imp2, imp3, imp4, imp5], 10000);
  expect(ciudad.tieneDeficit()).toBe(false);
});
