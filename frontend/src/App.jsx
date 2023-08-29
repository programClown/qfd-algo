import React, { useState } from 'react'
import './App.css'
import { Greet } from '../wailsjs/go/main/App'
import { Tabs } from 'antd'
import SPA from './pages/spa'
import PCA from './pages/pca'
import MEA from './pages/mea'

const alogos = [
    { id: 'SPA', name: '集对法' },
    { id: 'PCA', name: '主成分分析' },
    { id: 'MEA', name: '物元分析法' },
]

function App() {
    const [resultText, setResultText] = useState('Please enter your name below 👇')
    const [name, setName] = useState('')
    const updateName = (e) => setName(e.target.value)
    const updateResultText = (result) => setResultText(result)

    function greet() {
        Greet(name).then(updateResultText)
    }

    function algoPage(id) {
        if (id === 'SPA') {
            return <SPA />
        } else if (id === 'PCA') {
            return <PCA />
        } else if (id === 'MEA') {
            return <MEA />
        }
    }
    return (
        <div id="App">
            <Tabs
                centered={true}
                defaultActiveKey="1"
                type="card"
                size="large"
                items={alogos.map((item, _) => {
                    return {
                        label: item.name,
                        key: item.id,
                        children: algoPage(item.id),
                    }
                })}
            />
            <div>
                <input id="name" onChange={updateName} autoComplete="off" name="input" type="text" />
                <button className="btn" onClick={greet}>
                    Greet
                </button>
            </div>
        </div>
    )
}

export default App
