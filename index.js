//Stacks
console.log('Calling Index.Js');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if(this.length === 0){
        console.log('Adding new node');
        this.top = newNode;
        this.bottom = newNode;
    }else{
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
    }
    this.length ++;
    return this;
  }
  pop() {
    if(!this.top){
        return null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.pop('google');
