import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function ComponentPreview(props) {

    const onClick = (event) => {
        event.stopPropagation();
        props.onClick()
    }

    const {
        attributes,
        listeners,
        setNodeRef,
        isDragging,
        transform,
        transition,
    } = useSortable({id: props.component.id})
 
    const style = {
        transform: CSS.Translate.toString(transform),
        transition
    }

    return (
        <div onClick={(event) => onClick(event)} className={`component ${(props.selected) && 'selected'} ${(isDragging) && 'front'}`} ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {props.component.preview()}
            <style jsx>{`
                .component {
                    padding-top: 7px;
                    padding-bottom: 7px;
                    padding-left: 26px;
                    padding-right: 26px;
                }

                .front {
                    position: relative;
                    z-index: 100;
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
            `}</style>
        </div>
    )
}
