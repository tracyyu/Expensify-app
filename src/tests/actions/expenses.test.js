import { addExpense, editExpense, removeExpense } from '../../actions/expenses.js';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123' });

    expect(action).toEqual({ 
        type: 'REMOVE_EXPENSE',
        id: '123'
     });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123', { note: 'new note value' });
    expect(action).toEqual({ 
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: { note: 'new note value' }
     });
});

test('should setup add expense action object with values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 12300,
        createdAt: 1000,
        note: 'This was lst months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            createdAt: 0,
            amount: 0
        }
    });
});