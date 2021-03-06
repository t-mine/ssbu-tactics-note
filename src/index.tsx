import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import TestPage from './pages/TestPage';
import Header from './components/header/Header';

import '@aws-amplify/ui-react/styles.css';
import awsconfig from '../src/aws-exports';
import { Amplify } from 'aws-amplify';
import TopPage from './pages/TopPage';
import { Provider } from 'jotai';
import AppInit from './components/AppInit';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './pages/NotFound';

Amplify.configure(awsconfig);

const App: React.VFC = () => {
  return (
    <Provider>
      <ChakraProvider>
        <BrowserRouter>
          <Stack>
            <Header></Header>
            <Routes>
              {/* 認証なし */}
              <Route path="/" element={<TopPage />} />
              <Route path='*' element={<NotFound />} />
              {/* 認証あり */}
              <Route path="/test" element={<PrivateRoute><TestPage /></PrivateRoute>}></Route>
            </Routes>
            <AppInit></AppInit>
          </Stack>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
