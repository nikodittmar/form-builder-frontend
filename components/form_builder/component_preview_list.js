import ComponentPreview from '@/components/form_builder/component_preview'
import { DndContext, PointerSensor, closestCenter, useSensors, useSensor } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers';

export default function ComponentPreviewList(props) {

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 10,
            },
        })
    )

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
            modifiers={[restrictToVerticalAxis, restrictToParentElement]}
            sensors={sensors}
        >
            <SortableContext items={props.components} strategy={verticalListSortingStrategy}>
            {
            props.components.map(component => {
                return (
                    <ComponentPreview 
                        key={component.id}
                        selected={props.selectedComponent.id === component.id}
                        component={component}
                        onClick={() => {props.selectComponent(component)}}
                    />
                )
            })
        }
            </SortableContext>
        </DndContext>
    )

    function handleDragEnd(event) {
        console.log(event)
        const {active, over} = event;
        
        if (active.id !== over.id) {
            const activeIndex = props.components.findIndex(component => component.id === active.id)
            const overIndex = props.components.findIndex(component => component.id === over.id)


            props.setComponents(arrayMove(props.components, activeIndex, overIndex))
        }
    }

    function handleDragStart(event) {
        const {active} = event;
        const activeIndex = props.components.findIndex(component => component.id === active.id)
        const activeComponent = props.components[activeIndex]
        if (props.selectedComponent.id !== activeComponent.id) {
            props.selectComponent(activeComponent)
        }
    }
}

