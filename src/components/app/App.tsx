import React from 'react';
// import { Provider } from 'react-redux';
// import store from '../../store';
// import Counter from '../counter/Counter';
import Container from '@material-ui/core/Container';
import Posts from '../post/Posts';

const App: React.FC = () => {

  return (
    <Container>
      <Posts />
      {/* <Provider store={store}>
        <Counter />
      </Provider> */}
      
    </Container>
  );
};

export default App;
