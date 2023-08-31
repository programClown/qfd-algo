import { makeAutoObservable } from 'mobx'

class SPATableStore {
    columns = [
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

    data = [
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
