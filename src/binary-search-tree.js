const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(value) {
    this.data = value;
    this.left;
    this.right;
  }
}

class BinarySearchTree {
  constructor(value = null) {
    this.base = value;
  }
  root() {
    // if ( this.base ) {
    //   return this.base ;
    // }else{
    //   return null ;
    // }
    //   ;
      return this.base ;
  }

  add(data) {
    this.base = addNewNode(this.base, data);

    function addNewNode(base, data) {
      if (!base) {
        // this.head = new Node(data) ;
        // this.head
        return new Node(data);
      }

      if (base.data === data) {
        return base;
      }

      if (base.data < data) {
        base.right = addNewNode(base.right, data);
      } else {
        base.left = addNewNode(base.left, data);
      }

      return base;
    }
    // if(this.base){
    //   let current = this.base ;

    //   while(current){

    //     if(data > current.value){
    //       current = current.right ;
    //     }else{
    //       current = current.left ;
    //     }

    //   }

    //   current = current.up ;

    //   if(data > current.left)

    // }else{
    //   this.base = new Node(data) ;
    // }
  }

  has(data ) {

    return search(this.base , data) ;

    function search(base , data){
      if (!base){
        return false ;
      }
      
      if(base.data === data){
        return true ;
      }


      if(base.data < data){
        return search(base.right , data) ;
      }else{
        return search(base.left , data) ;
      }


    }


  }

  find(data) {
    return search (this.base , data) ;


    function search( base , data) {
      if(!base) return null ;

      if( base.data === data ) return base ;

      if(base.data > data) {
        return search(base.left , data) ;
      }else{
        return search(base.right , data) ;
      }
    }
  }

  remove(data ) {
    this.base = deleteData(this.base , data) ;

    function deleteData( base , data) {

      if(!base) return false ;

      if(base.data > data){
        base.left = deleteData(base.left , data) ;
        return base ;
      }else if (base.data < data){
        base.right = deleteData(base.right , data) ;
        return base ;
      }else{

        if( !base.left && !base.right ) return null ;

        if( !base.left && base.right  ) {
          return base.right ;
        }

        if( !base.right && base.left ) {
          return base.left ;
        }


        if( base.left &&  base.right){
          let maxLeft = base.left ;

          while(maxLeft.right){
            maxLeft = maxLeft.right ;
          }

          base.data = maxLeft.data ;

          base.left = deleteData(base.left , base.data) ;

          return base ;

        }



      }

    }


  }

  min() {
    if( !this.base ) return null ;

    let current = this.base ;

    while(current.left){
      current = current.left ;
    }

    return current.data;
  }

  max() {
    if( !this.base ) return null ;

    let current = this.base ;

    while(current.right){
      current = current.right ;
    }

    return current.data;

  }
}

module.exports = {
  BinarySearchTree,
};



let tree = new BinarySearchTree() ;

tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
// tree.remove(14);
// tree.remove(8);
// tree.remove(9);
// tree.remove(1);

// console.log(tree.has(14)) ;
// console.log(tree.has(8)) ;
// console.log(tree.has(9)) ;
// console.log(tree.has(2)) ;
// console.log(tree.has(6)) ;
// console.log(tree.has(128)) ;
// console.log(tree.has(31)) ;
// console.log(tree.has(54)) ;
// console.log(tree.has(1)) ;
console.log(tree.root()) ;

// console.log(tree.find(16)) ;
// console.log(tree.has(16)) ;