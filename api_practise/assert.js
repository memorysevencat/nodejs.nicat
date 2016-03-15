/**
 * Created by lintao on 16-3-13.
 */
const assert=require('assert');
assert(true);
assert(1);
//assert(false);
//assert(0);
//assert(false,'its false')
assert.deepEqual(Error('a'), Error('b'));
const obj1={
    a:{
        b:1
    }
};
const obj2={
    a:{
        b:2
    }
};
const obj3={
    a:{
        b:1
    }
}
const obj4=Object.create(obj1);
assert.deepEqual(obj1,obj1);
//assert.deepEqual(obj1,obj2);
assert.deepEqual(obj1,obj3);
//assert.deepEqual(obj1,obj4);

assert.deepEqual({a:1},{a:1})
assert.deepStrictEqual({a:1},{a:1})

//assert.doesNotThrow(
//    ()=>{
//    throw new TypeError('wrong value');
//},
//TypeError,
//    'whoops'
//)

assert.equal(1,1)
assert.equal(1,'1')
//assert.equal(1,2)
//assert.equal({a:{b:1}},{a:{b:1}})
assert.deepStrictEqual({a:{b:1}},{a:{b:1}})
assert.deepEqual({a:{b:1}},{a:{b:1}})

//assert.fail(1,2,undefined,'>')
//assert.fail(1,2,'whoops','>')

assert.ifError(0);
//assert.ifError(1);
//assert.ifError('error');
//assert.ifError(new Error());

//assert.notDeepEqual(obj1,obj1)
assert.notDeepEqual(obj1,obj2);
//assert.notDeepEqual(obj1,obj3);
assert.notDeepEqual(obj1,obj4);
