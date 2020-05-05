//Binary Search Tree  26
//A tree data structure is a way to hold data that when visualized looks like a tree you would see a nature now

//Node class represents each node in the tree
class Node{
    constructor(data,left=null,right=null){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}

class BST{
    constructor(){
        this.root=null;
    }
    //add function: add sth to the tree
    add(data){
        const node=this.root;

        //if it is a first node
        if(node===null){
            this.root=new Node(data);
            return;
        }else{
            const searchTree=function(node){
                if(data<node.data){
                    if(node.left===null){
                        node.left=new Node(data);
                        return;
                    }else if(node.left!===null){
                        return searchTree(node.left);
                    }
                }else if(data>node.data){
                    if(node.right===null){
                        node.right===new Node(data);
                        return;
                    }else if(node.right!==null){
                        return searchTree(node.right);
                    }
                }else{
                    return null;
                }
            };
            //initially call the searchTree function
            return searchTree(node);
        }
    }

    //find min in the tree
    findMin(){
        let current=this.root;
        while(current.left!==null){
            current=current.left;
        }
        return current.data;
    }
    //find max in the tree
    findMax(){
        let current=this.root;
        while(current.right!==null){
            current=current.right;
        }
        return current.data;
    }
    //find function(return node)
    find(data){
        let current=this.root;
        while(current.data!==data){
            if(data<current.data){
                current=current.left;
            }else{
                current=current.right
            }
            if(current===null){
                return null;
            }
        }
        return current;
    }

    //isPresent (return true or false)
    isPresent(data){
        let current=this.root;
        while(current){
            if(data===current.data){
                return true;
            }
            if(data<current.data){
                current=current.left;
            }else{
                current=current.right;
            }
        }
        return false;
    }

    //remove function
    remove(data){
        const removeNode=function(node,data){
            if(node===null){
                return null;
            }
            if(data===node.data){
                if(node.left==null&&node.right==null){
                    return null;
                }
                //node has no left child
                if(node.left===null){
                    return node.right;
                }
                //node has no right child
                if(node.right===null){
                    return node.left;
                }
                //node has 2 children
                var tempNode=node.right;
                while(tempNode.left!==null){
                    tempNode=tempNode.left;
                }
                node.data=tempNode.data;
                node.right=removeNode(node.right,tempNode.data);
                return node;
            }
        }
    }
    
}