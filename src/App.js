import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import User from './components/User'
import AddNewTodo from './components/AddNewTodo';
import Calender from './components/Calender';
import Projects from './components/Projects';
import Todos from './components/Todos';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <div className='header'>
      <Header>
        <User />        {/**This are the children props */}
        <AddNewTodo />
        <Calender />
        <Projects />
      </Header>
      <Main>
        <Todos />          {/**This is the children props */}
        <EditTodo />
      </Main>
    </div>
  );
}

export default App;
