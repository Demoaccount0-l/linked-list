import Linkedlist from "./linkedlist.js";

console.log("Inside Linked list js file");
const linkedlist = new Linkedlist();
linkedlist.append("2");
linkedlist.append("3");
linkedlist.append("4");
linkedlist.append("5");
linkedlist.append("6");
linkedlist.prepend("1");

console.log(linkedlist.size());
console.log(linkedlist.head());
console.log(linkedlist.tail());
console.log(linkedlist.at(4));
linkedlist.pop();
console.log(linkedlist.size());
console.log(linkedlist.contains("5"));
console.log(`Found the value at`,linkedlist.find("2"));
console.log(linkedlist.toString());
linkedlist.removeAt(3);
console.log(linkedlist.toString());
linkedlist.insertAt("4",3)
console.log(linkedlist.toString());
