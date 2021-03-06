
import { startAddExpense, addExpense, editExpense, startEditExpense, startRemoveExpense, removeExpense, setExpenses, startSetExpenses } from '../../Actions/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

// createMockStore
const createMockStore = configureMockStore([thunk]);

// Remove expense test
// 

beforeEach(done => {
  const expensesData = {};
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = {
      description,
      note,
      amount,
      createdAt
    };
  });
  database.ref('expenses').set(expensesData).then(() => (done()));
});

test('should remove expense from firebase', done => {
  const store = createMockStore({});
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({
    id
  })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database.ref(`expenses/${id}`).once('value');
  }).then(snapshot => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test(' Should return remove expense action object', () => {
  const action = removeExpense({
    id: '123ABC'
  });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123ABC'
  });
});
// Edit expense test
test(' Should return edited expense', () => {
  const action = editExpense('123ABC', {
    note: 'updated note'
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123ABC',
    updates: {
      note: 'updated note'
    }
  });
});

test('Should edit from expense and on firebase', done => {
  const store = createMockStore();
  const id = expenses[0].id,
    updates = {
      description: 'Updated'
    };
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });
    return database.ref(`expenses/${id}`).once('value')
  }).then(snapshot => {
    expect(snapshot.val().description).toBe(updates.description);
    done();
  });
});
// Add expense test
test('Should add expense with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was a test'
  }
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', done => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then(snapshot => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense to database and store with default values', done => {
  const store = createMockStore({});
  const defaultExpense = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };
  store.dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...defaultExpense
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(defaultExpense);
      done();
    });
});

test('should setup set expense action obj with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
});

test('should fetch expenses from firebase', done => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});

//Add expense defaults type
// test('Should setup expense with default values ', () => {
//  const action = addExpense();
//  expect(action).toEqual({
//    type: 'ADD_EXPENSE',
//    expense: {
//      description: '',
//      amount: 0, 
//      createdAt: 0, 
//      note: '',
//      id: expect.any(String)
//    }
//  })
// });