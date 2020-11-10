import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil'


const render = () => {
  import('./hooks').then(module => {
    module.initialIndex()
  }).then(() => ReactDOM.render(
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
  ))

}
render()
export default render
