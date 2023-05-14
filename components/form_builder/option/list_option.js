import option from '@/components/form_builder/option/option.module.css'
import { ListItem } from '@/modules/component'
import ListOptionListItem from '@/components/form_builder/option/list_option_list_item'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers';

export default function ListOption(props) {

    const AddItem = () => {
        const list = [...props.list]
        const newItem = new ListItem('')
        props.onChange([...list, newItem])
    }

    const EditItem = (item, newValue) => {
        const list = [...props.list]
        const itemIndex = list.findIndex(listItem => listItem.id == item.id)

        if (itemIndex > -1) {
            list[itemIndex].name = newValue
            props.onChange(list)
        }
    }

    const DeleteItem = (item) => {
        if (props.list.length > 1) {
            const list = [...props.list]
            const listWithoutOption = list.filter(listItem => listItem.id != item.id)
            props.onChange(listWithoutOption)
        }
    }

    return (
        <div className={option.container}>
            <div className="label-add-container">
                <label className={option.label}>{props.label}</label>
                <p className="add-option-container"><a href="#" onClick={() => AddItem()} className="link-underline-primary add-option">Add Option</a></p>
            </div>
            <div>
            <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis, restrictToParentElement]}
            >
                <SortableContext items={props.list} strategy={verticalListSortingStrategy}>
                    {
                    props.list.map(item => {
                        return (
                            <ListOptionListItem
                                key={item.id} 
                                item={item}
                                deleteItem={() => DeleteItem(item)}
                                deleteEnabled={(props.list.length > 1)}
                                editItem={(event) => EditItem(item, event)}
                            />
                        )
                    })
                    }
                </SortableContext>
            </DndContext>
            </div>
            <style jsx>{`
                .add-option {
                    font-size: 13px;
                    text-decoration: none;
                }
                .label-add-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .add-option-container {
                    margin-bottom: 0px;
                }
            `}</style>
        </div>
    )

    function handleDragEnd(event) {
        const {active, over} = event;
        
        if (active.id !== over.id) {
            const activeIndex = props.list.findIndex(item => item.id === active.id)
            const overIndex = props.list.findIndex(item => item.id === over.id)
            props.onChange(arrayMove(props.list, activeIndex, overIndex))
        }
    }
}