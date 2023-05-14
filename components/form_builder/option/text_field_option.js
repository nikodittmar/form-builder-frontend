import option from '@/components/form_builder/option/option.module.css'

export default function TextFieldOption(props) {
    return (
        <div className={option.container}>
            <label className={option.label}>{props.label}</label>
            <input className="form-control form-control-sm" type="text" value={props.value} onChange={(event) => props.onChange(event.target.value)}/>
        </div>
    )
}