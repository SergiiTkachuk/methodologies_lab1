const QuadraticSolver = (a, b, c) => {
    console.log(`\nEquation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);
    const roots = [];
    const discriminant = b * b - 4 * a * c;
    if (discriminant === 0) {
      const x = -b / (2 * a);
      roots.push(x);
    } else if (discriminant > 0) {
      const x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
      roots.push(x1, x2);
    }
    printRoots(roots);
  };
  
  const printRoots = (roots) => {
    const rootsLength = roots.length;
    console.log(`There are ${rootsLength} roots`);
    switch (rootsLength) {
      case 1:
        console.log(`x1 = ${roots[0]}`);
        break;
      case 2:
        console.log(`x1 = ${roots[0]}`);
        console.log(`x2 = ${roots[1]}`);
        break;
    }
  };

  export { QuadraticSolver };