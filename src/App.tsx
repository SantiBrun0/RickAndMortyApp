import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { AppRoutes } from './models/routes'
import { Favs } from './pages/Favs'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.HOME} element={<Home />} />
          <Route path={AppRoutes.FAVS} element={<Favs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
