import * as React from 'react'
import Checkbox from '../../src'

export default class Demo extends React.Component <any,any> {
    render() {
        return (
            <div>
                <Checkbox size="large">大尺寸</Checkbox>
                <Checkbox size="small"
                          style={{marginLeft:20}}>小尺寸</Checkbox>
            </div>
        )
    }
}