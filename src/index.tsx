import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import TestPage from './pages/TestPage';
import Header from './components/Header';

import '@aws-amplify/ui-react/styles.css';
import awsconfig from '../src/aws-exports';
import { Amplify } from 'aws-amplify';
import TopPage from './pages/TopPage';
import { Provider } from 'jotai';
import AppInit from './components/AppInit';

Amplify.configure(awsconfig);

const App: React.VFC = () => {
  return (
    <Provider>
      <ChakraProvider>
        <BrowserRouter>
          <Stack>
            <Header></Header>
            <Routes>
              <Route path="/" element={<TopPage />} />
              <Route path="/test" element={<TestPage />} />
            </Routes>
            <AppInit></AppInit>
          </Stack>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
