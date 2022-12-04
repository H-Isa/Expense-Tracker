import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const {items} = props
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = items.filter((expense => (
        expense.date.getFullYear().toString() === filteredYear)))

    
    return ( 
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
                {/* {filteredExpenses.length === 0 ? (<p>No expenses found</p>) : (filteredExpenses.map((expense)=>(
                    <ExpenseItem
                    key={expense.id} 
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
                )))} */}
            </Card>
     );
}
 
export default Expenses;