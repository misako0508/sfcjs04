function assert_eq(a,b){
 return a == b;
}

function test_nor(){
    return assert_eq(nor(true, true), false)&&
        assert_eq(nor(true, false), false)&&
        assert_eq(nor(false, true), false)&&
        assert_eq(nor(false, false), true);
}