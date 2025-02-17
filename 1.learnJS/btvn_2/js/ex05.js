function caculate (){
    return {
        a: 0,
        add(b)  {
            this.a = this.a + b;
            return this;
        },
        subtract(b) {
            this.a = this.a - b;
            return this;      
        },
        multi(b) {
            this.a = this.a * b;
            return this;
        },
        division(b) {
            this.a = this.a / b;
            return this;
        },
        result() {
            return this.a; 
        }
    }

}


console.log(caculate().add(5).subtract(8).result())

