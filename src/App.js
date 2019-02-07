/**
 * Budget Application Component
 */

// Dependencies

import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import ExpenseDashboard from "./components/ExpenseDashboard";

// TEST: mock components for testing

const CreateBudget = (props) => (
    <div>
        <h2>Create a budget</h2>
    </div>
);

const EditExpense = (props) => (
    <div>
        <h2>Edit expenses</h2>
    </div>
);

const Help = (props) => (
    <div>
        <h2>Need help?</h2>
    </div>
);

const NotFound = (props) => (
    <div>
        <h2>404: Page not found</h2>
    </div>
);

const Header = (props) => (
    <div>
        <h1>Budgie</h1>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/create">Create Expense</Link>
                    </li>
                    <li>
                        <Link to="/edit">Edit Expense</Link>
                    </li>
                    <li>
                        <Link to="/help">Help</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
);

// Budget application

class BudgetApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={ExpenseDashboard} />
                        <Route path="/create" component={CreateBudget} />
                        <Route path="/edit" component={EditExpense} />
                        <Route path="/help" component={Help} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

// Export budget app

export default BudgetApp;
