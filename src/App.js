import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import { publicRoutes as routes } from '~/routes'
import { DefaultLayout } from '~/Component/layouts'

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => {

          let Layout = DefaultLayout

          if (route.layout) {
            Layout = route.layout
          } else if (route.layout === null) {
            Layout = Fragment
          }

          const Page = route.component
          return <Route key={index} path={route.path} element={
            <Layout>
              <Page />
            </Layout>
          } />
        })}
      </Routes>
    </div>
  );
}

export default App;
