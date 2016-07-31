import * as React from 'react'
import Checkbox from '../../src'

export default class Demo extends React.Component <any,any> {
    render() {
        return (
            <div>
                <Checkbox/>
                <Checkbox checked/>
                <Checkbox>点击选中</Checkbox>
            </div>
        )
    }
}