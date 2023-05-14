import ComponentPreviewList from '@/components/form_builder/component_preview_list'

export default function Preview(props) {

    return (
        <div className="preview-container" onClick={() => props.selectForm()}>
            <div className="preview">
            <div className="title-description-container">
                {
                    (props.formTitle.trim() === '') ?
                    (
                        <h2 className="title faded">Untitled Form</h2>
                    ) : (
                        <h2 className="title">{props.formTitle}</h2>
                    )
                }
                {
                    (props.formDescription.trim() !== '') && (
                        <p className="description">{props.formDescription}</p>
                    )
                }
            </div>
            {
                (props.components.length === 0) && (
                    <div className="drop_zone">
                        <p className="drop_zone_text">Add a component to begin.</p>
                    </div>
                )
            }
            <div>
            <ComponentPreviewList 
                components={props.components}
                selectComponent={(component) => props.selectComponent(component)}
                selectedComponent={props.selectedComponent}
                setComponents={(components) => props.setComponents(components)}
            />

            </div>
            <div className="submit-container">
                <button className="btn btn-primary">Submit</button>
            </div>
            </div>
            <style jsx>{`
                .preview-container {
                    --padding-horizontal: 24px;
                    padding: var(--padding-horizontal);
                    overflow: scroll;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    flex-direction: column;
                    width: calc(100vw - calc(2 * var(--sidebar-width)));
                }

                .preview {
                    background-color: var(--secondary-bg-color);
                    border-radius: 8px;
                    border: var(--border);
                    width: 100%;
                    max-width: 1000px;
                }

                .title {
                    font-weight: 400;
                    margin: 0px;
                    font-size: 26px;
                }

                .description {
                    color: var(--secondary-text-color);
                    margin: 0px;
                }

                .title-description-container {
                    margin-top: 26px;
                    margin-right: 26px;
                    margin-left: 26px;
                    margin-bottom: 14px;
                }

                .component {
                    padding-top: 7px;
                    padding-bottom: 7px;
                    padding-left: 26px;
                    padding-right: 26px;
                }

                .faded {
                    color: var(--secondary-text-color)
                }

                .submit-container {
                    margin: 26px;
                    margin-top: 21px;
                }

                .selected {
                    background-color: var(--bg-color);
                    border-top: var(--border);
                    border-bottom: var(--border);
                    padding-top: 6px;
                    padding-bottom: 6px;
                    padding-left: 26px;
                    padding-right: 26px;
                }

                .drop_zone {
                    background-color: rgb(253, 253, 253);
                    border: 2px dashed rgba(195, 195, 195, 0.5);
                    border-radius: 10px;
                    height: 200px;
                    margin-top: 14px;
                    margin-bottom: 14px;
                    margin-left: 26px;
                    margin-right: 26px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                .drop_zone_text {
                    color: var(--secondary-text-color);
                }
            `}</style>
        </div>
    )
}
