import { useState } from 'react'
import { useRouter } from 'next/router';
import Nav from '@/components/form_builder/nav'
import Preview from '@/components/form_builder/preview'
import ComponentsSidebar from '@/components/form_builder/components_sidebar'
import OptionsSidebar from '@/components/form_builder/options_sidebar'
import { Component, ComponentTypeFromIdentifier } from '@/modules/component'
import { Form } from '@/modules/form'

export default function FormBuilder(props) {

    const router = useRouter();
    const { id } = router.query

    const [formName, setFormName] = useState(props.data.name)
    const [formTitle, setFormTitle] = useState(props.data.title)
    const [formDescription, setFormDescription] = useState(props.data.description)

    const [components, setComponents] = useState(() => {
        let components = []

        props.data.components.map( component => {
            let newComponent = new Component(ComponentTypeFromIdentifier(component.type))
            newComponent.id = component.id
            newComponent.properties = component.properties
            components = [...components, newComponent]
        })

        return components
    })
    const [selectedComponent, setSelectedComponent] = useState({})

    const AddComponent = (type) => {
        const newComponent = new Component(type)
        setComponents(oldComponents => [...oldComponents, newComponent])
        setSelectedComponent(newComponent)
    }

    const SelectComponent = (component) => {
        
        if (selectedComponent.id === component.id) {
            setSelectedComponent({})
        } else {
            setSelectedComponent(component)
        }
    }

    const SetComponentProperty = (property, newValue) => {
        const componentList = [...components]
        const componentIndex = componentList.findIndex(item => item.id === selectedComponent.id)
        if (componentIndex > -1) {
            componentList[componentIndex].properties[property] = newValue
            setComponents(componentList)
            setSelectedComponent(componentList[componentIndex])
        }
    }

    const DeleteComponent = () => {
        const componentList = [...components]
        const listWithoutSelectedComponent = componentList.filter(component => component.id !== selectedComponent.id)
        setComponents(listWithoutSelectedComponent)
        setSelectedComponent({})
    }

    const SelectForm = () => {
        setSelectedComponent({})
    }

    const Finish = async () => {
        const form = new Form(formName, formTitle, formDescription, components)
        console.log(form)
        try {
            const response = await fetch(`http://localhost:3000/api/v1/forms/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json()
            if (String(response.status).startsWith('2')) {
                console.log(await data)
                await router.push(`/forms`)
            } else {
                console.log(response.status)
                console.log(await response.json())

                //handle error
            }
        } catch {
            console.log("We ran into an unexpected error. Try again later.");
        }
    }

    return (
        <div className="form_builder">
            <Nav 
                formName={formName} 
                setFormName={(name) => setFormName(name)}
                onClickFinish={Finish}
            />
            <div className="builder">
                <ComponentsSidebar 
                    addComponent={(type) => AddComponent(type)}
                />
                <Preview 
                    components={components} 
                    selectedComponent={selectedComponent}
                    selectComponent={(component) => SelectComponent(component)} 
                    formTitle={formTitle}
                    formDescription={formDescription}
                    selectForm={SelectForm}
                    setComponents={(components) => setComponents(components)}
                />
                <OptionsSidebar 
                    selectedComponent={selectedComponent} 
                    formTitle={formTitle}
                    setFormTitle={(title) => setFormTitle(title)}
                    formDescription={formDescription}
                    setFormDescription={(description) => setFormDescription(description)}
                    setComponentProperty={(property, newValue) => SetComponentProperty(property, newValue)}
                    deleteComponent={DeleteComponent}
                />
            </div>

            <style jsx>{`
                .form_builder {
                    width: 100vw;
                    height: 100vh;
                    background-color: var(--bg-color);
                }

                .builder {
                    width: 100%;
                    height: calc(100% - var(--nav-height));
                    display: flex;
                }
            `}</style>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/forms/${params.id}`)
        const data = await res.json()
        if (String(res.status).startsWith('2')) {
            console.log(res)
            return { props: {data} }
        } else {
            console.log(res)
            return {
                notFound: true,
            }
        }
    } catch {
        return {
            notFound: true,
          }
    }
}