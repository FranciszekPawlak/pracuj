import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Repositories } from 'pages/repositories'
import { Layout } from 'components/layout'
import { Factorial } from 'pages/factorial'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Repositories />
            </Layout>
          }
        />
        <Route
          path='/factorial'
          element={
            <Layout>
              <Factorial />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
