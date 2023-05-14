import option from '@/components/form_builder/option/option.module.css'

export default function TextAreaOption(props) {
    return (
        <div className={option.container}>
            <label className={option.label}>{props.label}</label>
            <textarea className="form-control form-control-sm" rows="3" value={props.value} onChange={(event) => props.onChange(event.target.value)}></textarea>
        </div>
    )
}