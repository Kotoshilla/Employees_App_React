import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';


function App() {

    const data = [
        {name: 'Piter P.', salary: 1400, increase: false, id: 1, like: false},
        {name: 'Ben T.', salary: 1600, increase: false, id: 2, like: false},
        {name: 'Nina N', salary: 1500, increase: true, id: 3, like: false},
        {name: 'Anna K',  salary: 2000, increase: true, id: 4, like: false},
    ]

    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;