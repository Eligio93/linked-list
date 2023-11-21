class LinkedList{

  constructor(){
    this.list=null;
    this.size=0;
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
  this.size+=1;   
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
linkedList.append(5);


console.log(linkedList.size);


