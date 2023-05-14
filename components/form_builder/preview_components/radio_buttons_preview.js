import preview from '@/components/form_builder/preview_components/preview_component.module.css'

export default function RadioButtonsPreview(props) {
    return (
        <div>
            <label className="form-label">{ props.properties.label }{ props.properties.required && <span className={preview.required}>*</span>}</label>
            {
                props.properties.options.map(option => {
                    return (
                        <div className="form-check" key={option.id}>
                            <input className={`form-check-input ${preview.hidden_disabled_text}`} type="radio" disabled />
                            <label className={`form-check-label ${preview.hidden_disabled_text}`}>{option.name}</label>
                        </div>
                    )
                })
            }
            <div className="form-text">{ props.properties.helper }</div>
        </div>
    )
}  