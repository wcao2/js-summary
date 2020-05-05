//https://www.youtube.com/watch?v=t2CEgPsws3U&t=4298s
//Data Structure and Algorithms in JavaScript

//Function provided by the stack
//push: placing data onto a Stack
//pop: moving the top element of a stack
//peek:displaying the top element of a stack
//length:determining how many elements are on a stack

//this is my stack
var letters=[];
var word="racecar1111sasda";
var rword="";

for(var i=0;i<word.length;i++){
    //put each letters in the word into the letters stack
    letters.push(word[i]);
}

for(var i=0;i<word.length;i++){
    rword+=letters.pop();
    
}
console.log(rword);
console.log(word);

if(rword===word){
    console.log(word+" is an interesting word");
}else{
    console.log(word+" normal word");
}

//Stack:is an array which can help me understand stack a litter better
var Stack=function(){
    this.count=0;//keep track of how many values in this stack
    this.storage={};//empty object
    //Add a value to the end of the stack
    this.push=function(value){
        this.storage[this.count]=value;
        this.count++;
    }

    //Removes and returns the value at the end of the stack
    //pop: moving the top element of a stack
    this.pop=function(){
        if(this.count===0){
            return undefined;
        }
        this.count--;
        var result=this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size=function(){
        return this.count;
    }

    //Return the value at the end of the stack
    this.peek=function(){
        return this.storage[this.count-1];
    }
}

var myStack=new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());//return the top number of the stack which will be 2
console.log(myStack.pop());//remove the top one(2)
console.log(myStack.peek());//show 1
myStack.push("GMU");


//SETS
//SETS data structure is kind of like array, except there are no duplicate items and the values are not in any particular order
function mySet(){
    //var collection will hold the set
    var collection=[];
    //this method will check for the presence of an element and return true or false
    this.has=function(element){
        return (collection.indexOf(element)!==-1);
    };
    //this method will return all values in the set
    this.values=function(){
        return collection;
    };
    //this method will add an element to the set
    this.add=function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }
    //this method will remove an element from the set
    this.remove=function(element){
        if(this.has(element)){
            index=collection.indexOf(element);
            //splice:take out an element in array, start the index of the element, and going for one element
            collection.splice(index,1);
            return true;
        }
        return false;
    }

    //this method will return the size of the collection
    this.size=function(){
        return collection.length;
    }

    //this method will return the union of the two sets
    this.union=function(otherSet){
        var unionSet=new mySet();
        var firstSet=this.values();//call the fun above
        var secondSet=otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };

    //return an intersection of two sets as a new set
    this.intersection=function(otherSet){
        var intersectionSet=new mySet();
        var firstSet=this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };

    //difference between two sets
    this.difference=function(otherSet){
        var differenceSet=new mySet();
        var firstSet=this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };

    //test if this set is an subset of a other set
    this.subset=function(otherSet){
        var firstSet=this.values();
        return firstSet.every(function(value){
            //check if firstSet is a subset of otherset
            return otherSet.has(value);
        });
    };
    
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("a");
setB.add("b");
setB.add("c");
//if setA is a part of setB
console.log(setA.subset(setB));
//the interaction part of setA and setB
console.log(setA.intersection(setB).values());
//if there are any difference between two difference set
console.log(setA.difference(setA).values());

var setC=new Set();
var setD=new Set();
setC.add("a");
setD.add("b");
setD.add("c");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));

//Queue
//the queue data structure is a way to hold data, it is similar to stack(first in last out)
//the queue is first in first out
function Queue(){
    collection=[];
    this.print=function(){
        console.log(collection);
    };

    this.enqueue=function(element){
        collection.push(element);
    };
    //items in the beginning of an array will be removed
    this.dequeue=function(){
        return collection.shift();
    };
    //check the first one in the array
    this.front=function(){
        return collection[0];
    }

    this.size=function(){
        return collection.length;
    }

    this.isEmpty=function(){
        return(collection.length===0);
    }
}

var q=new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue(); 
q.print();
console.log(q.front());

function PriorityQueue(){
    var collection=[];
    this.printCollection=function(){
        console.log(collection);
    };
    //the element I pass into queue is an array, element[0] actual things,element[1] is priority
    this.enqueue=function(element){
        if(this.isEmpty()){
            collection.push(element);
        }else{
            var added=false;
            for(var i=0;i<collection.length;i++){
                //if the priority of the element I pass into queue less than 
                //the priority of the item in the collection I am checking
                if(element[1]<collection[i][1]){
                    collection.splice(i,0,element);
                    added=true;
                    break;
                }
            }
            //except if the element hasn't been added
            if(!added){
                collection.push(element)
            }
        }
    };
    this.dequeue=function(){
        var value=collection.shift();
        //just return the item without the priority
        return value[0];
    };
    this.front=function(){
        return collection[0];
    };
    this.size=function(){
        return collection.length;
    };
    this.isEmpty=function(){
        return (collection.length===0)
    };
}

var pq=new PriorityQueue();
pq.enqueue(['David Cao',2]);
pq.enqueue(['Jim Cao',3]);
pq.enqueue(['Qin Xu',1])
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();


