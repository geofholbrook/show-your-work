import { type IArithmeticNode, symbolMap } from "./main.ts";
import { dim } from "@std/fmt/colors";

export function format(node: IArithmeticNode, depth = 0): string {
  if (!node.derivesFrom) return formatValue(node);

  const derivationString = node.derivesFrom &&
    `(${format(node.derivesFrom.left, depth + 1)} ${
      symbolMap[node.derivesFrom.operation]
    } ${format(node.derivesFrom.right, depth + 1)})`;

  if (depth === 0) {
    return derivationString + " = " + formatValue(node);
  } else {
    return derivationString;
  }
}

function formatValue(node: IArithmeticNode): string {
  return `${node.value}${node.name ? ` ${dim(`(${node.name})`)}` : ""}`;
}
