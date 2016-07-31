export interface PropsDefine {
    /**
     * 是否选中
     */
    checked?: boolean
    /**
     * 默认是否选中
     */
    defaultChecked?: boolean
    /**
     * 选中状态修改时的回调
     */
    onChange?: (checked?: boolean) => void
    /**
     * 描述文字
     */
    label?: string
    /**
     * 描述文字宽度
     */
    labelWidth?: number
    /**
     * 是否禁用
     */
    disabled?: boolean
    /**
     * 大小
     */
    size?: string

    [x: string]: any
}

export const defaultProps: PropsDefine = {
    disabled: false,
    onChange: () => { },
    size: 'normal'
}

export interface StateDefine {
    /**
     * 是否选中
     */
    checked?: boolean
}

export const defaultState: StateDefine = {

}