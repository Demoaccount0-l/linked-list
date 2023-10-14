import Node from "./node.js";

export default class Linkedlist {
    constructor() {
        this.listHead = null;
    }

    append(value) {
        if (this.listHead == null) {
            this.listHead = new Node(value);
            this.listHead.nextNode = null;
        }
        else {
            let current = this.listHead;
            while (current.nextNode != null) {
                current = current.nextNode;
            }
            current.nextNode = new Node(value);
            current.nextNode.nextNode = null;
        }

    }

    prepend(value) {
        if (this.listHead == null) {
            this.listHead = new Node(value);
            this.listHead.nextNode = null;
        }
        else {
            let tmp = null;
            tmp = this.listHead;
            this.listHead = new Node(value);
            this.listHead.nextNode = tmp;
        }
    }

    head() {
        return this.listHead;
    }

    tail() {
        let tmp = this.listHead;
        while (tmp.nextNode != null) {
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    size() {
        let tmp = this.listHead;
        let listSize = 0;
        while (tmp != null) {
            listSize++;
            tmp = tmp.nextNode;

        }
        return listSize;
    }

    at(index) {
        if (index < 0) return "Invalid Index";
        let current = this.listHead;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        return current;
    }

    pop() {
        let tmp = this.listHead;
        let prev = null;
        while (tmp.nextNode != null) {
            prev = tmp;
            tmp = tmp.nextNode;
        }
        prev.nextNode = null;
    }

    contains(value) {

        if (this.listHead == null) return false;
        let tmp = this.listHead;
        while (tmp != null) {
            if (tmp.value == value) {
                return true
            }
            tmp = tmp.nextNode;
        }
        return false;
    }

    find(value) {
        let tmp = this.listHead;
        let index = 0;
        while (tmp != null) {
          if (tmp.value === value) return index;
          tmp = tmp.nextNode;
          index++;
        }
        return null;
      }

      toString(){
          if(this.listHead == null) return "No list items"
          let tmp = this.listHead;
          let string = "";
          while(tmp != null){
            string += `(${tmp.value}) -> `;
            tmp = tmp.nextNode;
          }
          string += `null`;
          return string;
      }


      insertAt(value, index){
        if(this.listHead == null) return "No items in list";
        let current = this.listHead;
        let prev =null;
        for(let i=0;i<index;i++){
            prev = current;
            current = current.nextNode;
            if(current === null) break;

        }
        let temp = new Node(value);
        prev.nextNode = temp;
        temp.nextNode = current;

      }
      

      removeAt(index){
        if(this.listHead == null) return "No items in list"
        let current = this.listHead;
        let prev =null;
        for(let i=0;i<index;i++){
            prev = current;
            current =current.nextNode;
            if (current == null) return "There is no item for this index";
        }
        prev.nextNode = current.nextNode;

      }
     
}

