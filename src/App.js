import logo from './logo.svg';
import './App.css';
import {MyData, MyDataWithClass, MyDataWithFunction, MyDataWithoutReturn} from './components/Activities/MyData/MyData';
import MyDataWithProps from './components/Activities/MyDataWithProps/MyDataWithProps';
import Temperature from './components/Activities/Temperature/Temperature';

function App() {
  return (
    <>
      <MyDataWithProps
      name='Gustavo Fernandes'
      course='Ciência da Computação'
      university='Universidade Federal do Ceará (UFC)'
      />
      <Temperature />
    </>
  );
}

export default App;
