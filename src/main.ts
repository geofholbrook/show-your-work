export type ArithmeticOperation = "Add" | "Subtract" | "Multiply" | "Divide";

const operationMap = {
  "Add": (a: number, b: number) => a + b,
  "Subtract": (a: number, b: number) => a - b,
  "Multiply": (a: number, b: number) => a * b,
  "Divide": (a: number, b: number) => a / b,
};

class ArithmeticNode {
  private readonly value: number;
  name: string;

  leftParent: ArithmeticNode | null = null;
  rightParent: ArithmeticNode | null = null;
  operation: ArithmeticOperation | null = null;

  constructor(name: string, n: number) {
    this.name = name;
    this.value = n;
  }

  valueOf(): number {
    return this.value;
  }

  private createNewNode(
    node: ArithmeticNode,
    operation: ArithmeticOperation,
    name?: string,
  ) {
    const newNode = new ArithmeticNode(
      name || `${operation.toLowerCase()}_${this.name}_${node.name}`,
      operationMap[operation](this.value, node.valueOf()),
    );
    newNode.leftParent = this;
    newNode.rightParent = node;
    newNode.operation = operation;
    return newNode;
  }

  add(node: ArithmeticNode, name?: string): ArithmeticNode {
    return this.createNewNode(node, "Add", name);
  }

  subtract(node: ArithmeticNode, name?: string): ArithmeticNode {
    return this.createNewNode(node, "Subtract", name);
  }

  multiply(node: ArithmeticNode, name?: string): ArithmeticNode {
    return this.createNewNode(node, "Multiply", name);
  }

  divide(node: ArithmeticNode, name?: string): ArithmeticNode {
    return this.createNewNode(node, "Divide", name);
  }
}

function createArithmeticNode(name: string, n: number): ArithmeticNode {
  return new ArithmeticNode(name, n);
}

export default createArithmeticNode;
