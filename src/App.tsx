import React, { FC } from "react"
import "./App.scss"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"
import { createStore } from "./modules/store"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Redirect } from 'react-router'
import { RouteType, route } from "./modules/routes"

const { store, persistor } = createStore()

const WrapperRoute: FC = () => {

  return (
    <Router>
      <Switch>
        {route?.map((route: RouteType) => (< Route key={route.path} {...route} />))}
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

const App: FC = () => {

  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <WrapperRoute />
      </Provider>
    </PersistGate>
  )
}

export default App
