interface Action {
  type: string;
}

interface ListNode<T> {
  value: T;
  next: ListNode<T>;
  prev: ListNode<T>;
}
class BackwardActionIterator implements IterableIterator<Action> {
  [Symbol.iterator](): IterableIterator<Action> {
    return this;
  }
  next(): IteratorResult<Action> {
    throw new Error("Method not implemented.");
  }
}

let action1 = { type: "LOGIN" };
let action2 = { type: "LOAD_POSTS" };

let actionNode1: ListNode<Action> = {
  value: action1,
  next: null,
  prev: null,
};

let actionNode2: ListNode<Action> = {
  value: action2,
  next: null,
  prev: actionNode1,
};

let currentNode = actionNode2;
