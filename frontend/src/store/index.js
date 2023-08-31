import React from 'react'
import spaTable from './spaTableStore'

class RootStore {
    constructor() {
        this.spaTableStore = spaTable
    }
}

const rootStore = new RootStore()

// context机制的数据查找链  Provider如果找不到 就找createContext方法执行时传入的参数
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }
