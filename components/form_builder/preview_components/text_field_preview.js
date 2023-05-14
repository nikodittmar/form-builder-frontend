import preview from '@/components/form_builder/preview_components/preview_component.module.css'

export default function TextFieldPreview(props) {
    return (
        <div>
            <label className="form-label">{ props.properties.label }{ props.properties.required && <span className={preview.required}>*</span>}</label>
            <input className={`form-control ${preview.hidden_disabled}`} placeholder={ props.properties.placeholder } disabled />
            <div className="form-text">{ props.properties.helper }</div>
        </div>
    )
}  