import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import TestPage from './pages/TestPage';
import Header from './components/Header';

function App() {
  return (
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
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
