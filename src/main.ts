export type ArithmeticOperation = "Add" | "Subtract" | "Multiply" | "Divide";

export const symbolMap = {
  Add: "+",
  Subtract: "-",
  Multiply: "*",
  Divide: "/",
};

export const operationMap = {
  Add: (a: number, b: number) => a + b,
  Subtract: (a: number, b: number) => a - b,
  Multiply: (a: number, b: number) => a * b,
  Divide: (a: number, b: number) => a / b,
};

export interface IArithmeticNode {
  value: number;
  name?: string;
  derivesFrom?: {
    operation: ArithmeticOperation;
    left: IArithmeticNode;
    right: IArithmeticNode;
  };
}

export class ArithmeticNode implements IArithmeticNode {
  value: number;
  name?: string;
  derivesFrom?: {
    operation: ArithmeticOperation;
    left: ArithmeticNode;
    right: ArithmeticNode;
  };
  constructor(n: number, name?: string) {
    this.value = n;
    this.name = name;
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
      operationMap[operation](this.value, node.valueOf()),
      name,
    );
    newNode.derivesFrom = {
      left: this,
      right: node,
      operation,
    };
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

  toJSON(): IArithmeticNode {
    return {
      value: this.value,
      name: this.name,
      derivesFrom: this.derivesFrom
        ? {
          operation: this.derivesFrom.operation,
          left: this.derivesFrom.left.toJSON(),
          right: this.derivesFrom.right.toJSON(),
        }
        : undefined,
    };
  }
}

function createArithmeticNode(n: number, name?: string): ArithmeticNode {
  return new ArithmeticNode(n, name);
}

export default createArithmeticNode;
export { format } from "./format.ts";
