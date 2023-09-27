import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import StudentData from './components/StudentData';
import EditStudent from './components/EditStudent';
import ViewStudent from './components/ViewStudent';


const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<StudentData/>
    },
    {
      path:"/addstudent",
      element:<AddStudent/>,
    },
    {
       path:"edit/:id",
       element:<EditStudent/>
    },
    {
      path:"view/:id",
      element:<ViewStudent/>
   }
  ]


}])

function App() {
  return (
    
    <div >
       <Header/>
       <RouterProvider router={appRouter}>
      
      </RouterProvider>
     
    </div>
   
  );
}

export default App;
