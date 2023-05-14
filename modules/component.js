import { v4 as uuid } from 'uuid';
import { MdOutlineShortText, MdOutlineSubject, MdOutline123, MdOutlineCheckBox, MdOutlineRadioButtonChecked, MdOutlineEvent, MdOutlineSchedule, MdOutlineUploadFile, MdOutlinePinDrop, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'

import TextFieldPreview from '@/components/form_builder/preview_components/text_field_preview'
import TextAreaPreview from '@/components/form_builder/preview_components/text_area_preview'
import NumberPickerPreview from '@/components/form_builder/preview_components/number_picker_preview'
import CheckBoxesPreview from '@/components/form_builder/preview_components/check_boxes_preview'
import RadioButtonsPreview from '@/components/form_builder/preview_components/radio_buttons_preview'
import DatePickerPreview from '@/components/form_builder/preview_components/date_picker_preview'
import TimePickerPreview from '@/components/form_builder/preview_components/time_picker_preview'
import FileUploadPreview from '@/components/form_builder/preview_components/file_upload_preview'
import AddressFieldPreview from '@/components/form_builder/preview_components/address_field_preview'


export class ComponentType {
    constructor({name, icon, properties, preview}) {
        this.identifier = name
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '')
        this.name = name
        this.icon = icon
        this.propertiesInitializer = properties
        this.preview = (properties) => preview(properties)
    }
}

//Define Components Here

export const ComponentTypes = Object.freeze({
    TextField: new ComponentType({
        name: 'Text Field',
        icon: <MdOutlineShortText />,
        properties: function() {
            this.label = 'Text Field'
            this.required = false
            this.placeholder = ''
            this.helper = ''
        },
        preview: (properties) => <TextFieldPreview properties={properties}/>,
    }),
    TextArea: new ComponentType({
        name: 'Text Area',
        icon: <MdOutlineSubject />,
        properties: function() {
            this.label = 'Text Area'
            this.required = false
            this.placeholder = ''
            this.helper = ''
        },
        preview: (properties) => <TextAreaPreview properties={properties}/>,
    }),
    NumberPicker: new ComponentType({
        name: 'Number Picker',
        icon: <MdOutline123 />,
        properties: function() {
            this.label = 'Number Picker'
            this.required = false
            this.placeholder = 'Enter a number'
            this.helper = ''
        },
        preview: (properties) => <NumberPickerPreview properties={properties}/>,
    }),
    CheckBoxes: new ComponentType({
        name: 'Check Boxes',
        icon: <MdOutlineCheckBox />,
        properties: function() {
            this.label = 'Check Boxes'
            this.required = false
            this.options = [new ListItem('Option')]
            this.helper = ''
        },
        preview: (properties) => <CheckBoxesPreview properties={properties}/>,
    }),
    RadioButtons: new ComponentType({
        name: 'Radio Buttons',
        icon: <MdOutlineRadioButtonChecked />,
        properties: function() {
            this.label = 'Radio Buttons'
            this.required = false
            this.options = [new ListItem('Option')]
            this.helper = ''
        },
        preview: (properties) => <RadioButtonsPreview properties={properties}/>,
    }),
    DatePicker: new ComponentType({
        name: 'Date Picker',
        icon: <MdOutlineEvent />,
        properties: function() {
            this.label = 'Date Picker'
            this.required = false
            this.helper = ''
        },
        preview: (properties) => <DatePickerPreview properties={properties}/>,
    }),
    TimePicker: new ComponentType({
        name: 'Time Picker',
        icon: <MdOutlineSchedule />,
        properties: function() {
            this.label = 'Time Picker'
            this.required = false
            this.helper = ''
        },
        preview: (properties) => <TimePickerPreview properties={properties}/>,
    }),
    FileUpload: new ComponentType({
        name: 'File Upload',
        icon: <MdOutlineUploadFile />,
        properties: function() {
            this.label = 'File Upload'
            this.required = false
            this.multiple = false
            this.helper = ''
        },
        preview: (properties) => <FileUploadPreview properties={properties}/>,
    }),
    AddressField: new ComponentType({
        name: 'Address Field',
        icon: <MdOutlinePinDrop />,
        properties: function() {
            this.label = 'Address Field'
            this.required = false
            this.placeholder = 'Enter a location'
            this.helper = ''
        },
        preview: (properties) => <AddressFieldPreview properties={properties}/>,
    }),
})

export function ComponentTypeFromIdentifier(identifier) {
    var componentType = {}
    Object.entries(ComponentTypes).map(([typeKey, type]) => {
        if (identifier == type.identifier) {
            componentType = type
        }
    })
    return componentType
}

export class ListItem {
    constructor(name) {
        this.name = name
        this.id = uuid()
    }
}

export class Component {
    constructor(type) {
        this.type = type
        this.id = uuid()
        this.properties = new type.propertiesInitializer
        this.previewComponent = type.preview
    }

    preview() {
        return this.previewComponent(this.properties)
    }

    toJSON() {
        return ({
            type: this.type.identifier,
            id: this.id,
            properties: this.properties,
        })
    }
}
