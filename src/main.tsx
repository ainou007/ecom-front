import ReactDOM from 'react-dom/client';
import './styles/app.css';
import AppRouter from '@/routes/appRouter';
import { Provider } from 'react-redux';
import {store, persistor} from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <PersistGate persistor={persistor}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
    </PersistGate>
);
