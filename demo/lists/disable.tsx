import * as React from 'react'
import Checkbox from '../../src'

export default class Demo extends React.Component <any,any> {
    render() {
        return (
            <div>
                <Checkbox disabled>被禁用</Checkbox>
            </div>
        )
    }
}