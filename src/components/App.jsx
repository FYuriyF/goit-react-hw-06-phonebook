import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>Книга контактов</h1>
          <ContactForm />
          <h2>Контакты</h2>
          <Filter />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
