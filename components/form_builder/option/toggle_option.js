import option from '@/components/form_builder/option/option.module.css'

export default function ToggleOption(props) {
    return (
        <div className={option.container}>
            <div className="check-option-container">
                <input className="form-check-input check-option" type="checkbox" checked={props.checked} onChange={() => props.onChange(!props.checked)}/>
                <label className={option.label}>{props.label}</label>
            </div>

            <style jsx>{`
                .check-option-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                }

                .check-option {
                    margin-top: 0;
                    margin-right: 8px;
                }
            `}</style>
        </div>
    )
}