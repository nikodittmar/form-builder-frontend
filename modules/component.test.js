import {jest} from '@jest/globals'
import { Component, ComponentTypes } from '@/modules/component'

describe('component', () => {
    it('should create text fields properly', () => {
        const textField = new Component(ComponentTypes.TextField)
        expect(textField).toHaveProperty('id')
        expect(textField).toHaveProperty('properties')
        expect(textField).toHaveProperty('properties.label')
        expect(textField).toHaveProperty('properties.required')
        expect(textField).toHaveProperty('properties.placeholder')
        expect(textField).toHaveProperty('properties.helper')
        
    })

    it('should stringify text fields properly', () => {
        const textField = new Component(ComponentTypes.TextField)
        expect(textField).toHaveProperty('id')
        textField.id = '123456789'
        expect(textField).toHaveProperty('properties')
        expect(textField).toHaveProperty('properties.label')
        textField.properties.label = 'Text Field Label'
        expect(textField).toHaveProperty('properties.required')
        textField.properties.required = true
        expect(textField).toHaveProperty('properties.placeholder')
        textField.properties.placeholder = 'Text Field Placeholder'
        expect(textField).toHaveProperty('properties.helper')
        textField.properties.helper = 'Text Field Helper'
        const textFieldJSON = JSON.stringify(textField)
        const textFieldObject = JSON.parse(textFieldJSON)
        expect(textFieldObject).toStrictEqual({ 
            type: 'text-field', 
            id: '123456789', 
            properties: {
                label: 'Text Field Label',
                required: true,
                placeholder: 'Text Field Placeholder',
                helper: 'Text Field Helper',
            }
        })
    })
})