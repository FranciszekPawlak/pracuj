import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GithubRepos } from 'pages/githubRepos'
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
              <GithubRepos />
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
