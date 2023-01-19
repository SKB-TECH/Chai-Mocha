import {assert} from 'chai'
import User from '../src/User.js';

describe("USER TEST",()=>{
    it('Should allow to CREATE A USER', () => {
        const user= new User("Cedrick","Kahungu");
        assert.equal(user.firstName,"Cedrick")
    });
    
})