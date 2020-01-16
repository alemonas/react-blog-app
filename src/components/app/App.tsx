import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import Counter from '../counter/Counter'


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
