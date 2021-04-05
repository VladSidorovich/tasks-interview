const pow = (x, n) => {
  if (n === 1) {
    return x
  } else {
    return x * pow(x, n-1)
  }
}

console.log(pow(2, 4))

const tree = {
  value: 5,
  left: {
    value: 10,
    left: {
      value: 20,
      left: {
        value: 20,
      },
      right: {
        value: 20,
      },
    },
    right: {
      value: 30,
      left: {
        value: 20,
      },
      right: {
        value: 20,
      },
    },
  },
  right: {
    value: 15,
    left: {
      value: 40,
      left: {value: 20,},
      right: {value: 20,},
    },
    right: {
      value: 50,
      left: {
        value: 70,
        left: {
          value: 80,
          left: {value: 20,},
          right: {
            value: 1000,
            left: {value: 20,},
            right: {value: 20,},
          },
        },
        right: {value: 20,},
      },
      right: {
        value: 60,
        left: {value: 20,},
        right: {value: 20,},
      },
    },
  },
}

const summTree = (tree) => {
  result = tree.value
  console.log(result)
  if (tree.left) {
    result += summTree(tree.left)
  }
  if (tree.right) {
    result += summTree(tree.right)
  }
  return result
}
console.log(summTree(tree))