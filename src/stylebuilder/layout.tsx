/*
  The MIT License

  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
import type { UISchemaElement } from '@jsonforms/core'
import {
  JsonFormsCellRendererRegistryEntry,
  JsonFormsRendererRegistryEntry,
  JsonSchema,
  OwnPropsOfRenderer,
} from '@jsonforms/core'
import { JsonFormsDispatch} from '@jsonforms/react'
import { Grid, Hidden } from '@mui/material'
import isEmpty from 'lodash/isEmpty'
import React from 'react'


export const renderLayoutElements = (
  elements: UISchemaElement[],
  schema: JsonSchema,
  path: string,
  enabled: boolean,
  renderers?: JsonFormsRendererRegistryEntry[],
  cells?: JsonFormsCellRendererRegistryEntry[],
  data?: any
) => {
  return elements.map(( child, index ) => {
    return data !== undefined && (
      <Grid style={{display: 'block'}} item key={`${path}-${index}`} xs>
        <JsonFormsDispatch
          uischema={child}
          schema={schema}
          path={path}
          enabled={enabled}
          renderers={renderers}
          cells={cells}
        />
      </Grid>
    )
  } )
}

export interface MaterialLayoutRendererProps extends OwnPropsOfRenderer {
  elements: UISchemaElement[];
  direction: 'row' | 'column';
  data?: any
}
const MaterialLayoutRendererComponent =
  ( {
    visible,
    elements,
    schema,
    path,
    enabled,
    direction,
    renderers,
    cells,
    data
  }: MaterialLayoutRendererProps ) => {
    if ( isEmpty( elements )) {
      return null
    } else {
      return (
        <Hidden xsUp={!visible}>
          <Grid
            container
            direction={direction}
            spacing={direction === 'row' ? 2 : 0}
          >
            {renderLayoutElements(
              elements,
              schema as JsonSchema,
              path ||  '',
              !!enabled,
              renderers,
              cells,
              data
            )}
          </Grid>
        </Hidden>
      )
    }
  }
export const MaterialLayoutRenderer = React.memo( MaterialLayoutRendererComponent )
