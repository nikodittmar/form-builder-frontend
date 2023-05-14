import { FiMinusCircle } from 'react-icons/fi'
import { MdOutlineDragIndicator } from 'react-icons/md'
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

export default function ListOptionListItem(props) {

    const {
        attributes,
        listeners,
        setNodeRef,
        isDragging,
        transform,
        transition,
    } = useSortable({id: props.item.id})
 
    const style = {
        transform: CSS.Translate.toString(transform),
        transition
    }

    return (
        <div className={`list-item ${(isDragging) && 'front'}`} ref={setNodeRef} style={style}>
            <div onClick={() => props.deleteItem()} className="delete">
                <FiMinusCircle color={(props.deleteEnabled) ? 'red' : 'var(--secondary-text-color)' }/> 
            </div>
            <input className="form-control form-control-sm" onChange={(event) => props.editItem(event.target.value)} type="text" value={props.item.name} />
            <div className="drag-handle"  {...attributes} {...listeners}>
                <MdOutlineDragIndicator color="var(--secondary-text-color)"/>
            </div>
            <style jsx>{`
                .list-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
                    margin-top: 5px;
                }
                .front {
                    position: relative;
                    z-index: 100;
                }
                .delete {
                    margin-right: 10px;
                    display: flex;
                    align-items: center;
                }
                .drag-handle {
                    margin-left: 4px;
                }
            `}</style>
        </div>
    )
}