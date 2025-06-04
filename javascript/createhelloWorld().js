/**
 * @return {Function}
 */
var createHelloWorld = ()=> ()=>"Hello World";


 const f = createHelloWorld();
 console.log(f());
 console.log(f({},null,42));