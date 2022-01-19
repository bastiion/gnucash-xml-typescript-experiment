import {JsonFormsCore, JsonSchema, Layout, UISchemaElement} from '@jsonforms/core'
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers'
import {JsonForms, JsonFormsReactProps} from '@jsonforms/react'
import React from 'react'

import nodeSchema from '../cytoscape_StylesheetStyle-schema_all.json'
import MaterialAnyOfRenderer, {materialAnyOfControlTester} from './MaterialAnyOfRenderer'
import MaterializedGroupLayoutRenderer, {materialGroupTester} from './MaterialGroupRenderer'
import MaterialVerticalLayout, { materialVerticalLayoutTester} from './MaterialVerticalLayout'

const renderers = [
  ...materialRenderers,
  {
    tester: materialAnyOfControlTester,
    renderer: MaterialAnyOfRenderer
  },
  {
    tester: materialVerticalLayoutTester,
    renderer: MaterialVerticalLayout
  },
  {
    tester: materialGroupTester,
    renderer: MaterializedGroupLayoutRenderer
  }
]

const uischema: Layout = {
  'type': 'VerticalLayout',
  'elements': [
    {
      'type': 'Control',
      'options': {
        'label': 'Color',
        'scope': '#/properties/color'
      }
    }
  ]
}

type Props = JsonFormsReactProps & {
  data: any
}

const StyleBuilder = ( {data, onChange}: Props ) => {


  return <>
    <JsonForms
      onChange={onChange}
      schema={nodeSchema}
      renderers={renderers}
      cells={materialCells} config={{
        showUnfocusedDescription: true
      }}
      data={data}
      uischema={{
        'type': 'VerticalLayout',
        'elements': [
          {
            'type': 'Control',
            'label': 'Node Properties',
            'scope': '#/properties/style'
          }
        ]
      } as unknown as UISchemaElement }
    />{
      /*

    <JsonForms data={{
      'addressOrUser': {
        'street_address': '1600 Pennsylvania Avenue NW',
        'city': 'Washington',
        'state': 'DC'
      }
    }}
    schema={{
      'definitions': {
        'address': {
          'type': 'object',
          'title': 'Address',
          'properties': {
            'street_address': {
              'type': 'string'
            },
            'city': {
              'type': 'string'
            },
            'state': {
              'type': 'string'
            }
          },
          'required': [
            'street_address',
            'city',
            'state'
          ]
        },
        'user': {
          'type': 'object',
          'title': 'User',
          'properties': {
            'name': {
              'type': 'string'
            },
            'mail': {
              'type': 'string'
            }
          },
          'required': [
            'name',
            'mail'
          ]
        }
      },
      'type': 'object',
      'properties': {
        'addressOrUser': {
          'anyOf': [
            {
              '$ref': '#/definitions/address'
            },
            {
              '$ref': '#/definitions/user'
            }
          ]
        }
      }
    }}
    uischema={
      {
        'type': 'VerticalLayout',
        'elements': [
          {
            'type': 'Control',
            'label': 'Basic Information',
            'scope': '#/properties/addressOrUser'
          }
        ]
      } as unknown as UISchemaElement
    }
    renderers={materialRenderers}
    />
       */
    }
  </>
}

export default StyleBuilder
