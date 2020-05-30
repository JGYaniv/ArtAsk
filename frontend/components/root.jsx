import React from 'react'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import App from './app'
import storeConfig from '../store/store'
let store = storeConfig()

export default ()=>(
    <Provider store={store}>
        <HashRouter>
            <div>
                <App />
            </div>
        </HashRouter>
    </Provider>
)
