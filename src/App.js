import './App.css';

function App() {
  return (
    <browserRouter>
    <NavBar></NavBar>
    <Routes>
      <route path="/" element={<Home></Home>}/>
    </Routes>
    </browserRouter>
  );
}

export default App;
