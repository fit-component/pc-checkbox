import * as React from 'react'
import * as classNames from 'classnames'
import * as _ from 'lodash'
import TransmitTransparently from '../../../../common/transmit-transparently/src'
import * as modules from './module'
import './index.scss'

export default class Checkbox extends React.Component<modules.PropsDefine, modules.StateDefine> {
    static defaultProps = modules.defaultProps

    constructor(props: modules.PropsDefine) {
        super(props)

        let checked: boolean

        if (this.props.defaultChecked !== undefined) {
            checked = this.props.defaultChecked
        }

        if (this.props.checked !== undefined) {
            checked = this.props.checked
        }

        if (!checked) {
            checked = false
        }

        this.state = {
            checked
        }
    }

    componentWillReceiveProps(nextProps: modules.PropsDefine) {
        if ('checked' in nextProps) {
            this.setState({
                checked: nextProps.checked
            })
        }
    }

    handleChange(event: any) {
        this.setState({
            checked: event.target.checked
        }, () => {
            this.props.onChange(this.state.checked)
        })
    }

    render() {
        const classes = classNames({
            '_namespace': true,
            'i-checks': true,
            'i-checks-lg': this.props.size === 'large',
            'i-checks-sm': this.props.size === 'small',
            'disabled': this.props.disabled,
            'form-container': !_.isEmpty(this.props.label),
            [this.props['className']]: !!this.props['className']
        })

        let childs = (
            <label className={classes}>
                <input type="checkbox"
                       disabled={this.props.disabled}
                       checked={this.state.checked}
                       onChange={this.handleChange.bind(this) }/>
                <i></i>
                <span>{this.props.children}</span>
            </label>
        )

        if (!_.isEmpty(this.props.label)) {
            childs = (
                <div className={classes}>
                    <label style={{ width: this.props.labelWidth || null }}
                           className="form-control-label">{this.props.label}</label>
                    {childs}
                </div>
            )
        }

        return childs
    }
}