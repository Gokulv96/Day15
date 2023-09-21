class Calculator{
      constructor(display){
           this.display = display;
           this.clear();
      }
      clear(){
          this.currentOPerand  = " ";
          this.previousOPerand  = " ";
          this.operation = undefined;
      }
      delete(){
         this.currentOPerand = this.currentOPerand.toString().slice(0,-1);

      }
      append(number){
         if((number === '.') && this.currentOPerand.includes('.')) return
         this.currentOPerand = this.currentOPerand.toString()+number.toString();
         console.log(this.currentOPerand);
      }
      chooseOperation(operation){
         if(this.currentOPerand === " ") return
         if (this.previousOPerand !== '') {
            this.compute();
         }
         this.operation = operation;
         this.previousOPerand = this.currentOPerand;
         this.currentOPerand = '';
      }
      compute(){
        let computation;
        const prev = parseFloat(this.previousOPerand);
        const curr = parseFloat(this.currentOPerand);
        if(isNaN(prev) || isNaN(curr)) return
        switch(this.operation){
         case '+':
            computation = prev + curr
            break;
         case '-':
            computation = prev - curr
            break;
         case '*':
            computation = prev * curr
            break;
         case '/':
            computation = prev / curr
            break;
         case '%':
            computation = prev % curr
            break;
         default:
            return
        }
        console.log(computation);
        this.currentOPerand = computation;
        this.operation = undefined;

      }
      output(){
         this.display.value = this.currentOPerand;
      }
}

const numberButtons = Array.from(document.querySelectorAll('[data-number]'));
const operationButtons = Array.from(document.querySelectorAll('[data-operation]'));
const equalButton = document.querySelector('[data-equals]');
const allclearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const display = document.querySelector('[data-current]');

const calc = new Calculator(display);

numberButtons.forEach((button) =>{ 
   button.addEventListener('click',() =>{
      calc.append(button.innerText);
      calc.output();
   })

});

operationButtons.forEach((button) =>{ 
   button.addEventListener('click',() =>{
      calc.chooseOperation(button.innerText);
      calc.output();
   })

});

equalButton.addEventListener('click',(button)=>{
   calc.compute();
   calc.output();
});
allclearButton.addEventListener('click',()=>{

});
allclearButton.addEventListener('click',()=>{
   calc.clear();
   calc.output();
});
deleteButton.addEventListener('click',()=>{
   calc.delete();
   calc.output();
})