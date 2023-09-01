import { makeAutoObservable } from 'mobx'

class SPATableStore {
    inputColumns = [
        {
            title: '方案指标',
            dataIndex: 'schemaIndex',
            key: 'schemaIndex',
        },
        {
            title: '方案01',
            dataIndex: 'schema01',
            key: 'schema01',
        },
        {
            title: '方案02',
            dataIndex: 'schema02',
            key: 'schema02',
        },
        {
            title: '方案03',
            dataIndex: 'schema03',
            key: 'schema03',
        },
        {
            title: '最优指标',
            dataIndex: 'optiIndex',
            key: 'optiIndex',
        },
        {
            title: '权系数',
            dataIndex: 'weights',
            key: 'weights',
        },
    ]

    inputDatas = [
        {
            schemaIndex: '特征相似度（%）',
            schema01: 85,
            schema02: 87,
            schema03: 90,
            optiIndex: 91,
            weights: 0.24,
        },
        {
            schemaIndex: '亮度对比',
            schema01: 0.1,
            schema02: 0.15,
            schema03: 0.12,
            optiIndex: 0.1,
            weights: 0.06,
        },
        {
            schemaIndex: '辐射温差(k)',
            schema01: 2.1,
            schema02: 2.2,
            schema03: 2.0,
            optiIndex: 2.0,
            weights: 0.04,
        },
        {
            schemaIndex: '雷达后向散射系数差(db)',
            schema01: 3.3,
            schema02: 3.5,
            schema03: 3.4,
            optiIndex: 3.3,
            weights: 0.03,
        },
        {
            schemaIndex: '目标暴露尺寸(m)',
            schema01: 2.6,
            schema02: 2.8,
            schema03: 2.5,
            optiIndex: 2.5,
            weights: 0.08,
        },
        {
            schemaIndex: '斑点暴露尺寸(m)',
            schema01: 2.0,
            schema02: 2.4,
            schema03: 2.2,
            optiIndex: 2.0,
            weights: 0.05,
        },
        {
            schemaIndex: '伪装率（%）',
            schema01: 79,
            schema02: 83,
            schema03: 82,
            optiIndex: 83,
            weights: 0.12,
        },
        {
            schemaIndex: '逼真度（%）',
            schema01: 80,
            schema02: 79,
            schema03: 81,
            optiIndex: 81,
            weights: 0.21,
        },
        {
            schemaIndex: '辐射温差(k)',
            schema01: 4.3,
            schema02: 4.7,
            schema03: 4.5,
            optiIndex: 4.3,
            weights: 0.04,
        },
        {
            schemaIndex: '雷达后向散射系数差(db)[示假]',
            schema01: 8,
            schema02: 6,
            schema03: 7,
            optiIndex: 6,
            weights: 0.03,
        },
        {
            schemaIndex: '示假率（%）',
            schema01: 76,
            schema02: 79,
            schema03: 78,
            optiIndex: 79,
            weights: 0.1,
        },
    ]
    resultColumns = [
        {
            title: '评估目标层A',
            dataIndex: 'targetLayer',
            key: 'id',
            width: 200,
            onCell: (record, index) => {
                return { rowSpan: record.rowSpanTarget }
            },
        },
        {
            title: '基本要素层B',
            children: [
                {
                    title: '要素B[i]',
                    dataIndex: 'baseElement',
                    key: 'id',
                    width: 100,
                    onCell: (record, index) => {
                        return { rowSpan: record.rowSpanBase }
                    },
                },
                {
                    title: '权重',
                    dataIndex: 'baseWeight',
                    key: 'id',
                    width: 100,
                    onCell: (record, index) => {
                        return { rowSpan: record.rowSpanBase }
                    },
                },
            ],
        },
        {
            title: '指标层C',
            children: [
                {
                    title: '评估指标C[i,j]',
                    dataIndex: 'evalutionIndex',
                    key: 'id',
                    width: 200,
                },
                {
                    title: '权重',
                    dataIndex: 'evalutionWeight',
                    key: 'id',
                },
            ],
        },
    ]

    resultData = [
        {
            id: 0,
            targetLayer: '野战指挥所伪装方案评估指标体系',
            baseElement: '隐真B[1]',
            baseWeight: 0.62,
            evalutionIndex: '特征相似度（%）C[1]',
            evalutionWeight: 0.24,
            rowSpanTarget: 11,
            rowSpanBase: 7,
        },
        {
            id: 1,
            targetLayer: '野战指挥所伪装方案评估指标体系',
            baseElement: '隐真B[1]',
            baseWeight: 0.62,
            evalutionIndex: '亮度对比C[2]',
            evalutionWeight: 0.06,
            rowSpanTarget: 0,
            rowSpanBase: 0,
        },
        {
            id: 2,
            targetLayer: '野战指挥所伪装方案评估指标体系',
            baseElement: '隐真B[1]',
            baseWeight: 0.62,
            evalutionIndex: '辐射温差(k)C[3]',
            evalutionWeight: 0.04,
            rowSpanTarget: 0,
            rowSpanBase: 0,
        },
        {
            id: 3,
            targetLayer: '野战指挥所伪装方案评估指标体系',
            baseElement: '隐真B[1]',
            baseWeight: 0.62,
            evalutionIndex: '雷达后向散射系数差(db)C[4]',
            evalutionWeight: 0.03,
            rowSpanTarget: 0,
            rowSpanBase: 0,
        },
        {
            id: 4,
            targetLayer: '野战指挥所伪装方案评估指标体系',
            baseElement: '隐真B[1]',
            baseWeight: 0.62,
            evalutionIndex: '目标暴露尺寸(m)C[5]',
            evalutionWeight: 0.08,
            rowSpanTarget: 0,
            rowSpanBase: 0,
        },
        {
            id: 5,
            targetLayer: '野战指挥所伪装方案评估指标体系',
            baseElement: '隐真B[1]',
            baseWeight: 0.62,
            evalutionIndex: '斑点暴露尺寸(m)C[6]',
            evalutionWeight: 0.05,
            rowSpanTarget: 0,
            rowSpanBase: 0,
        },
        {
            id: 6,
            targetLayer: '野战指挥所伪装方案评估指标体系',
            baseElement: '隐真B[1]',
            baseWeight: 0.62,
            evalutionIndex: '伪装率（%）C[7]',
            evalutionWeight: 0.12,
            rowSpanTarget: 0,
            rowSpanBase: 0,
        },
        {
            id: 7,
            targetLayer: '野战指挥所伪装方案评估指标体系',
            baseElement: '示假B[2]',
            baseWeight: 0.38,
            evalutionIndex: '逼真度（%）C[8]',
            evalutionWeight: 0.21,
            rowSpanBaseWeight: 3,
            rowSpanTarget: 0,
            rowSpanBase: 4,
        },
        {
            id: 8,
            targetLayer: '野战指挥所伪装方案评估指标体系',
            baseElement: '示假B[2]',
            baseWeight: 0.38,
            evalutionIndex: '辐射温差(k)C[9]',
            evalutionWeight: 0.04,
            rowSpanTarget: 0,
            rowSpanBase: 0,
        },
        {
            id: 9,
            targetLayer: '野战指挥所伪装方案评估指标体系',
            baseElement: '示假B[2]',
            baseWeight: 0.38,
            evalutionIndex: '雷达后向散射系数差(db)C[10]',
            evalutionWeight: 0.03,
            rowSpanTarget: 0,
            rowSpanBase: 0,
        },
        {
            id: 10,
            targetLayer: '野战指挥所伪装方案评估指标体系',
            baseElement: '示假B[2]',
            baseWeight: 0.38,
            evalutionIndex: '示假率（%）C[11]',
            evalutionWeight: 0.1,
            rowSpanTarget: 0,
            rowSpanBase: 0,
        },
    ]

    constructor() {
        makeAutoObservable(this)
    }
}

const spaTable = new SPATableStore()

export default spaTable
