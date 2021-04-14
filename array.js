class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    get(index) {
        return this.data[index];
    }
    pop(){
        const lastItem = this.data[this.length-1];
         delete this.data[this.length-1];
         this.length--;
         return lastItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
        
    }
     count() {
         return length;
     }
    shiftIndex(index){
        for(let i = index;i<this.length;i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
    unshift(item){
      
        for(let i = this.length; i>0;i--){

            
            this.data[i] = this.data[i-1];
        }
        this.data[0] = item;
        this.length--;
        return this.data;
    }
   
    shift() {
        const firstItem = this.data[0];
        for(let i=0; i< this.length;i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
        return firstItem;
    }

}

const arreglo = new MyArray();