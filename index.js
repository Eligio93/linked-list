class LinkedList {

  constructor() {
    this.list = null;
    this.listSize = 0;
  }
  // adds a new node containing value to the end of the list
  append(value) {
    if (this.list == null) {
      this.list = new Node(value);
    } else {
      let current = this.list
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = new Node(value)
    }
    this.listSize += 1;
  }
  //adds a new node containing value to the start of the list
  prepend(value) {
    if (this.list == null) {
      this.list = new Node(value);
    } else {
      this.list = new Node(value, this.list)
    }
    this.listSize += 1;
  }
  //returns the total number of nodes in the list
  size() {
    return this.listSize;
  }
  //returns the first node in the list
  head() {
    return this.list
  }
  //returns the last node in the list
  tail() {
    let current = this.list;
    while (current.nextNode !== null) {
      current = current.nextNode
    }
    return current
  }
  //returns the node at the given index
  at(index) {
    if (this.list == null) {
      return "No elements in the list"
    } else if (index == 0) {
      return this.list
    } else if (index > this.listSize - 1) {
      return "No elements at that index"
    } else {
      let cont = 0;
      let current = this.list;
      while (cont < index) {
        current = current.nextNode;
        cont++;
      }
      return current
    }
  }
  //removes the last element from the list
  pop() {
    if (this.list == null) {
      return "The list is empty"
    } else {
      let current = this.list;
      let prev = current;
      while (current.nextNode !== null) {
        prev = current;
        current = current.nextNode
      }
      prev.nextNode = null;
      this.listSize -= 1;
    }
  }
  //returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    if (this.list == null) {
      return "The list is empty"
    } else {
      let current = this.list;
      while (current.nextNode !== null) {
        if (current.value == value) {
          return true;
          break;
        } else {
          current = current.nextNode;
        }
      }
      if (current.value == value) {
        return true
      } else {
        return false
      }

    }
  }
  //returns the index of the node containing value, or null if not found.
  find(value){
    if(this.list== null){
      return "No elements in the list"
    }else{
      let index=0;
      let current=this.list;
      while(current.nextNode!==null){
        if(current.value==value){
          return index
          break;
        }else{
          current=current.nextNode
          index++;
        }
      }
      if(current.value==value){
        return index
      }else{
        return null
      }
    }
  }
  //represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString(){
    let string="";
    let current=this.list;
    if(current==null){
      return "The list is empty"
    }else{
      while(current.nextNode !== null){
        string += '('+current.value+')->';
        current=current.nextNode;
      }
      string+='('+current.value+')-> null';
      return string
    }
  }

}
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value,
      this.nextNode = nextNode;

  }
}
// LinkedList.append(3);
let linkedList = new LinkedList();
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.prepend(1);
linkedList.append(5);
linkedList.pop();
linkedList.contains(2);


console.log(linkedList.toString());



