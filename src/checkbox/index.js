import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import './index.scss'

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props)

        let checked

        if (this.props.defaultChecked !== undefined) {
            checked = this.props.defaultChecked
        }

        if (this.props.checked !== undefined) {
            checked = this.props.checked
        }

        this.state = {
            checked
        }
    }

    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: nextProps.checked
            })
        }
    }

    handleChange(event) {
        this.setState({
            checked: event.target.checked
        }, ()=> {
            this.props.onChange(this.state.checked)
        })
    }

    render() {
        const {className, size, disabled, label, children, ...others} = this.props
        const classes = classNames({
            '_namespace'    : true,
            'i-checks'      : true,
            'i-checks-lg'   : size === 'large',
            'i-checks-sm'   : size === 'small',
            'disabled'      : disabled,
            'form-container': !_.isEmpty(label),
            [className]     : className
        })

        let childs = (
            <label className={classes}>
                <input type="checkbox"
                       disabled={disabled}
                       checked={this.state.checked}
                       onChange={this.handleChange.bind(this)}/>
                <i></i>
                <span>{children}</span>
            </label>
        )

        if (!_.isEmpty(label)) {
            childs = (
                <div className={classes}>
                    <label style={{width:this.props.labelWidth||null}}
                           className="form-control-label">{label}</label>
                    {childs}
                </div>
            )
        }

        return childs
    }
}

Checkbox.defaultProps = {
    // @desc 是否禁用
    disabled: false,

    // @desc 值产生修改的回调
    onChange: ()=> {
    },

    // @desc 是否处于选中状态
    defaultChecked: false
}