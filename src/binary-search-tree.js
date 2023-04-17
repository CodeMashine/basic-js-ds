const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left;
    this.right;
  }
}

class BinarySearchTree {
  constructor(value = null) {
    this.base = value;
  }
  root() {
    return this.base;
  }

  add(data) {
    this.base = addNewNode(this.base, data);

    function addNewNode(base, data) {
      if (!base) {
        return new Node(data);
      }

      if (base.value === data) {
        return base;
      }

      if (base.value < data) {
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
      if(base.value === data){
        return true ;
      }

      if (!base){
        return false ;
      }

      if(base.value < data){
        return search(base.right , data) ;
      }else{
        return search(base.left , data) ;
      }


    }


  }

  find(data) {
    return search (this.base , data) ;


    function search( base , data) {
      if(!base) return false ;

      if( base.value === data ) return base ;

      if(base.value > data) {
        return search(base.left , data) ;
      }else{
        return search(base.right , data) ;
      }
    }
  }

  remove(data ) {
    this.base = deleteData(this.base , data) ;

    function deleteData( base , data) {

      if(!base) return null ;

      if(base.value > data){
        base.left = deleteData(base.left , data) ;
        return base ;
      }else if (base.value < data){
        base.right = deleteData(base.right , data) ;
      }else{

        if( !base.left && !base.right ) return null ;

        if( !base.left && base.right  ) {
          // base = base.right ;
          return base.right ;
        }

        if( !base.right && base.left ) {
          // base = base.right ;
          return base.left ;
        }


        if( base.left &&  base.right){
          let maxLeft = base.left ;

          while(maxLeft.right){
            maxLeft = maxLeft.right ;
          }

          base.value = maxLeft.value ;

          base.left = deleteData(base.left , base.value) ;

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

    return current.value;
  }

  max() {
    if( !this.base ) return null ;

    let current = this.base ;

    while(current.right){
      current = current.right ;
    }

    return current.value;

  }
}

module.exports = {
  BinarySearchTree,
};



// let tree = new BinarySearchTree() ;

// tree.add(15) ;
// tree.add(4) ;
// tree.add(16) ;
// tree.add(21) ;

// console.log(tree.root()) ;
// console.log(tree.find(16)) ;
// console.log(tree.has(16)) ;