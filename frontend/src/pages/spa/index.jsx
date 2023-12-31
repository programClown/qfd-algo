/**
 * 集对法
 */
import React, { useState } from 'react'
import './spa.css'
import { Table } from 'antd'
import { useStore } from '../../store'
import { observer } from 'mobx-react-lite'

function SPA() {
    const { spaTableStore } = useStore()

    return (
        <div className="display-flex">
            <div className="div-left">
                <Table
                    columns={spaTableStore.inputColumns}
                    dataSource={spaTableStore.inputDatas}
                    bordered
                    size="middle"
                    pagination={false}
                    scroll={{
                        x: 'calc(100px + 50%)',
                    }}
                />
            </div>

            <div className="div-right">
                <Table
                    columns={spaTableStore.resultColumns}
                    dataSource={spaTableStore.resultData}
                    bordered
                    size="middle"
                    pagination={false}
                    scroll={{
                        x: 'calc(100px + 50%)',
                    }}
                />
            </div>
        </div>
    )
}

export default observer(SPA)
