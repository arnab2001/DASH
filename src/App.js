
import TopBar from "./components/Nav";
import List from "./components/List";
import Profile from "./components/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
   <> <div className="App"><TopBar/></div>
   
   <div class="container">
   <div class="row">
    <div class="col"><Profile/></div>
    <div class="col"><List/></div>
  </div>
</div>
    </>
     
     
    
    
  );
}

export default App;
