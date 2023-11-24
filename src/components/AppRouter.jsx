import React, { useEffect } from 'react'
import { useStateContext } from '../context/ContextProvider';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { adminRoutes, privateRoutes, publicRoutes } from '../router/routes';

const AppRouter = () => {
  const { token, setUser, adminInfo, setAdminInfo, user } = useStateContext();
  const navigate = useNavigate()

  //useEffect(() => {
  //  axiosCLient.get('/user')
  //    .then(({ data }) => {
  //      setUser(data)
  //    })
  //  axiosCLient.get('/adminInfo')
  //    .then(({ data }) => {
  //      setAdminInfo(data)
  //    })
  //}, [])

  return (
    token ?
      adminInfo && user &&
        adminInfo.username == user.name
        ?
        adminInfo.email == user.email
          ?
          <Routes>
            {privateRoutes.map((route, index) =>
              <Route
                path={route.path}
                element={<route.component />}
                key={index}
              />
            )}
            {adminRoutes.map((route, index) =>
              <Route
                path={route.path}
                element={<route.component />}
                key={index}
              />
            )}
            <Route path="*" element={<Navigate to={`/main`} />} />
          </Routes>
          :
          <Routes>
            {privateRoutes.map((route, index) =>
              <Route
                path={route.path}
                element={<route.component />}
                key={index}
              />
            )}
            <Route path="*" element={<Navigate to={`/main`} />} />
          </Routes>
        :
        <Routes>
          {privateRoutes.map((route, index) =>
            <Route
              path={route.path}
              element={<route.component />}
              key={index}
            />
          )}
          <Route path="*" element={<Navigate to={`/main`} />} />
        </Routes>
      :
      <Routes>
        {publicRoutes.map((route, index) =>
          <Route
            path={route.path}
            element={<route.component />}
            key={index}
          />
        )}
        <Route path="*" element={<Navigate to={`/main`} />} />
      </Routes>
  )
}

export default AppRouter