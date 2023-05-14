import preview from '@/components/form_builder/preview_components/preview_component.module.css'

export default function FileUploadPreview(props) {
    return (
        <div>
            <label className="form-label">{ props.properties.label }{ props.properties.required && <span className={preview.required}>*</span>}</label>
            <div>
                <input type="file" className={`form-control ${preview.hidden_disabled}`} disabled />
                
                <input className="offset form-control" disabled />

            </div>
            <div className="form-text">{ props.properties.helper }</div>
            <style jsx>{`
                .offset {
                    position: relative;
                    top: -38px;
                    margin-bottom: -38px;
                    background: transparent;
                }    
            `}</style>
        </div>
    )
}