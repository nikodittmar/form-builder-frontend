import TextFieldOption from '@/components/form_builder/option/text_field_option'
import TextAreaOption from '@/components/form_builder/option/text_area_option'
import ToggleOption from '@/components/form_builder/option/toggle_option'
import ListOption from '@/components/form_builder/option/list_option'


export default function OptionsSidebar(props) {
    if (JSON.stringify(props.selectedComponent) !== '{}') {
        return (
            <div className="sidebar">
                <h3 className="title">{`${props.selectedComponent.type.name} Options`}</h3>
                {
                    (props.selectedComponent.properties.hasOwnProperty('label')) && (
                        <TextFieldOption 
                            label="Label" 
                            value={props.selectedComponent.properties.label}
                            onChange={(label) => props.setComponentProperty('label', label)}
                        />
                    )
                }
                {
                    (props.selectedComponent.properties.hasOwnProperty('placeholder')) && (
                        <TextFieldOption 
                            label="Placeholder" 
                            value={props.selectedComponent.properties.placeholder}
                            onChange={(placeholder) => props.setComponentProperty('placeholder', placeholder)}
                        />
                    )
                }
                {
                    (props.selectedComponent.properties.hasOwnProperty('helper')) && (
                        <TextAreaOption 
                            label="Helper" 
                            value={props.selectedComponent.properties.helper}
                            onChange={(helper) => props.setComponentProperty('helper', helper)}
                        />
                    )
                }
                {
                    (props.selectedComponent.properties.hasOwnProperty('options')) && (
                        <ListOption
                            label="Options"
                            list={props.selectedComponent.properties.options}
                            onChange={(options) => props.setComponentProperty('options', options)}
                        />
                    )
                }
                {
                    (props.selectedComponent.properties.hasOwnProperty('multiple')) && (
                        <ToggleOption 
                            label="Multiple" 
                            checked={props.selectedComponent.properties.multiple}
                            onChange={(multiple) => props.setComponentProperty('multiple', multiple)}
                        />
                    )
                }
                {
                    (props.selectedComponent.properties.hasOwnProperty('required')) && (
                        <ToggleOption 
                            label="Required" 
                            checked={props.selectedComponent.properties.required}
                            onChange={(required) => props.setComponentProperty('required', required)}
                        />
                    )
                }
                <button onClick={props.deleteComponent} type="button" className="btn btn-danger btn-sm mt-4">Delete Component</button>
                <style jsx>{`
                    .sidebar {
                        height: 100%;
                        padding-left: 14px;
                        padding-right: 14px;
                        width: var(--sidebar-width);
                        background-color: var(--secondary-bg-color);
                        overflow: scroll;
                        border-left: var(--border);
                    }
                    .title {
                        margin-top: 14px;
                        margin-bottom: 14px;
                        font-size: 1rem;
                        color: var(--secondary-text-color);
                        font-weight: 400;
                    }
                `}</style>
            </div>
        )
    } else {
        return (
            <div className="sidebar">
                <h3 className="title">Form Options</h3>
                    <TextFieldOption 
                        label="Form Title" 
                        value={props.formTitle}
                        onChange={(title) => props.setFormTitle(title)}
                    />
                    <TextAreaOption 
                        label="Form Description" 
                        value={props.formDescription}
                        onChange={(description) => props.setFormDescription(description)}
                    />
                <style jsx>{`
                    .sidebar {
                        height: 100%;
                        padding-left: 14px;
                        padding-right: 14px;
                        width: var(--sidebar-width);
                        background-color: var(--secondary-bg-color);
                        overflow: scroll;
                        border-left: var(--border);
                    }
                    .title {
                        margin-top: 14px;
                        margin-bottom: 14px;
                        font-size: 1rem;
                        color: var(--secondary-text-color);
                        font-weight: 400;
                    }
                `}</style>
            </div>
        )
    }
}