function runAfter1s(fn : () => void){
   setTimeout(fn ,1000);
}

const fn = () : void => console.log("hi there");

runAfter1s(fn);
