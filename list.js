// let singleList = {
//     head : {
//         value:1,
//         next : {
//             value :2,
//             next : {
//                 value :3,
//                 next : {
//                    value : 4,
//                    next : null
//                 }
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor(value){
        this.head = {
            value : value,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index,value) {
         if(index>= this.length){
             return this.append(value);
         }
         const newNode = new Node(value);
         const firstPointer = this.getTheIndex(index-1);
         newNode.next = firstPointer.next;
         firstPointer.next = newNode;
         this.length++;
         
         return this;
    }
    getTheIndex(index){
        let count =0;
        let currentNode = this.head;
        while(count !== index){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    

}

let myList = new List(1);