import {ComponentTypes, ComponentType} from '@/modules/component.js'
import ComponentListItem from '@/components/form_builder/component_list_item'


export default function ComponentsSidebar(props) {

    return (
        <div className="sidebar">
            <h3 className="title">Form Components</h3>
            {
                Object.entries(ComponentTypes).map(([key, component]) => {
                    return (
                        <ComponentListItem type={component} onClick={() => props.addComponent(component)} key={component.identifier}/>
                    )
                })
            }
            <style jsx>{`
                .sidebar {
                    height: 100%;
                    padding-left: 14px;
                    padding-right: 14px;
                    width: var(--sidebar-width);
                    background-color: var(--secondary-bg-color);
                    overflow-y: scroll;
                    overflow-x: visible;
                    border-right: var(--border);
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
