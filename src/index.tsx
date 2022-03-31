import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import TestPage from './pages/TestPage';
import Header from './components/Header';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from '../src/aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      {() => (
        <ChakraProvider>
          <BrowserRouter>
            <Stack>
              <Header></Header>
              <Routes>
                <Route path="/" element={<Navigate to="/test" />} />
                <Route path="/test" element={<TestPage />} />
              </Routes>
            </Stack>
          </BrowserRouter>
        </ChakraProvider>
      )}
    </Authenticator>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
