class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class List{
    constructor(){
        this.head = null
    }

    append(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }

    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode        
    }

    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' -> ';
            current = current.next;
        }
        console.log(result + 'null');
    }

    reverseList(){
        let prev = null
        let current = this.head
        let next = null
        while(current){
            next= current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }

}

const list = new List();
list.append(10);
list.append(20);
list.prepend(5);
list.printList(); // 5 -> 10 -> 20 -> null



