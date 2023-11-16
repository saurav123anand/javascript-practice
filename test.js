function outer(){
    var a=45;
    function inner(){
        console.log(a)
    }
    let a=10;
    return inner;
    
}
outer()()