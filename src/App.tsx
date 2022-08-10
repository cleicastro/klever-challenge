
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Main from './layout'
import FormUser from './views/Formuser'
import User from './views/User'
import Users from './views/Users'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<Navigate to="/user" replace />}
        />
        <Route path='/user' element={<Main />}>
          <Route index element={<Users />} />
          <Route path='new' element={<FormUser />} />
          <Route path=':id' element={<User />} />
          <Route path='update/:id' element={<FormUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
