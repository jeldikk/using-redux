const {combineReducers, createStore} = require("redux");

const { createPolicy, deletePolicy, createClaim } = require("./actions")
const {claimHistory, accounting, policies} = require("./reducers")


// instead of below code you can use ES6 syntax like : const departments = combineReducers({claimHistory,accounting,policies})
const departments = combineReducers({
    claimHistory: claimHistory,
    accounting: accounting,
    policies: policies
});

//let's create a store by using output from combineReducers function
const store = createStore(departments);

//let's create few actions from the imported actions
const action1 = createPolicy('jeldikk',20);
const action2 = createPolicy('kamal',40);
const action3 = createPolicy('kumar',50);

const claimAction1 = createClaim('kamal',20);
const claimAction2 = createClaim('kumar',10);

//let's dispatch createPolicy actions
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);

console.log("state after dispatching createPolicy")
console.log(store.getState())

//let's dispatch createClaim actions
store.dispatch(claimAction1);
store.dispatch(claimAction2);

console.log("state after dispatching createClaim")
console.log(store.getState())


const deleteAction = deletePolicy('jeldikk');

console.log("state after dispatching deletePolicy");
store.dispatch(deleteAction)

