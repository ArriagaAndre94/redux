import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createStore } from 'redux'
import './index.css'
import App from './App.jsx'


const store = createStore((state =  0, action) => { // es un reducer!
  switch (action.type) {
    case 'accion':
      return state + action.payload
    case 'decrement':
      return state - action.payload
    default:
      return state
  }   
  console.log({ state, action })
  return state
})

store.dispatch({ type: 'accion', payload: 2 }) // dispatch es para enviar acciones al store
store.dispatch({ type: 'accionindfeinida', payload: 20 }) // dispatch es para enviar acciones al store
console.log(store.getState())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
