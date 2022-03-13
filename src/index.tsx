import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import TestPage from './pages/TestPage';

function App() {
  useEffect(() => {
    document.title = process.env.REACT_APP_TITLE || '';
  }, []);
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Stack>
          <Routes>
            <Route path="/" element={<Navigate to="/test" />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </Stack>
      </BrowserRouter>
    </ChakraProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
