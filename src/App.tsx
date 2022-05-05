import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import { Repositories } from 'pages/repositories'
import { Layout } from 'components/layout'
import { Factorial } from 'pages/factorial'
import { Requirements } from 'pages/requirements'
import { NotFound } from 'pages/notFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='*'
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
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
        <Route
          path='/requirements'
          element={
            <Layout>
              <Requirements />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
