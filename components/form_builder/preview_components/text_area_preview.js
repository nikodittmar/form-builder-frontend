import preview from '@/components/form_builder/preview_components/preview_component.module.css'

export default function TextAreaPreview(props) {
    return (
        <div>
            <label className="form-label">{ props.properties.label }{ props.properties.required && <span className={preview.required}>*</span>}</label>
            <textarea className={`form-control no-resize ${preview.hidden_disabled}`} placeholder={ props.properties.placeholder } rows="3" disabled></textarea>
            <div className="form-text">{ props.properties.helper }</div>
            <style jsx>{`
                .no-resize {
                    resize: none;
                }
            `}</style>
        </div>

        
    )
}  