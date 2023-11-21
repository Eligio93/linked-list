class LinkedList{

  constructor(){
    this.list=null;
    this.listSize=0;
  }

  append(value){
    if(this.list==null){
      this.list=new Node(value);
    }else {
      let current=this.list
      while(current.nextNode!== null){
        current=current.nextNode;
      }
      current.nextNode=new Node(value)
  }
  this.listSize+=1;   
  }
  prepend(value){
    if(this.list==null){
      this.list=new Node(value);
    }else{
      this.list=new Node(value,this.list)
    }
    this.listSize+=1;
  }
  size(){
    return this.listSize;
  }
  head(){
    return this.list
  }
  tail(){
    let current=this.list;
    while(current.nextNode!== null){
      current=current.nextNode
    }
    return current
  }
  at(index){
    if(this.list == null){
      return "No elements in the list"
    }else if(index==0){
      return this.list
    }else if(index > this.listSize-1){
      return "No elements at that index"
    }else{
      let cont=0;
      let current=this.list;
      while(cont<index){        
        current=current.nextNode;
        cont++;
      }
      return current
    }
  }

}
class Node{
  constructor(value=null,nextNode=null){
    this.value=value,
    this.nextNode=nextNode;

  }
}
// LinkedList.append(3);
let linkedList= new LinkedList();
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.prepend(1);
linkedList.append(5);


console.log(linkedList);


