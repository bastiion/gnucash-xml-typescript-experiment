import {
  createCombinatorRenderInfos,
  isAnyOfControl,
  JsonSchema,
  RankedTester,
  rankWith,
  resolveSubSchemas,
  StatePropsOfCombinator
} from '@jsonforms/core'
import {withJsonFormsExpandPanelProps} from '@jsonforms/material-renderers/lib/layouts/ExpandPanelRenderer'
import { JsonFormsDispatch, withJsonFormsAnyOfProps } from '@jsonforms/react'
import {Hidden, Tab, Tabs, Typography} from '@mui/material'
import React, { useCallback, useState } from 'react'

import CombinatorProperties from './CombinatorProperties'

export const MaterialAnyOfRenderer = ( {
  schema,
  rootSchema,
  indexOfFittingSchema,
  visible,
  path,
  renderers,
  cells,
  uischema,
  uischemas
}: StatePropsOfCombinator ) => {
  const [selectedAnyOf, setSelectedAnyOf] = useState( indexOfFittingSchema || 0 )
  const handleChange = useCallback(
    ( _ev: any, value: number ) => setSelectedAnyOf( value ),
    [setSelectedAnyOf]
  )
  const anyOf = 'anyOf'
  if( !schema || !uischema ) return null
  const _schema = resolveSubSchemas( schema, rootSchema, anyOf )
  if( !_schema.anyOf ) return null
  const anyOfRenderInfos = createCombinatorRenderInfos(
    _schema.anyOf,
    rootSchema,
    anyOf,
    uischema,
    path,
    uischemas
  )
  //console.log( {path} )

  return (
    <Hidden xsUp={!visible}>
      <CombinatorProperties
        schema={_schema}
        combinatorKeyword={'anyOf'}
        path={path}
      />
      <Typography variant={'h4'}>{path.split( '.' ).join( ' ' )}</Typography>
      <Tabs value={selectedAnyOf} onChange={handleChange}>
        {anyOfRenderInfos.map( anyOfRenderInfo => (
          <Tab key={anyOfRenderInfo.label} label={anyOfRenderInfo.schema.type} />
        ))}
      </Tabs>
      {anyOfRenderInfos.map(
        ( anyOfRenderInfo, anyOfIndex ) =>
          selectedAnyOf === anyOfIndex && (
            <JsonFormsDispatch
              key={anyOfIndex}
              schema={anyOfRenderInfo.schema}
              uischema={anyOfRenderInfo.uischema}
              path={path}
              renderers={renderers}
              cells={cells}
            />
          )
      )}
    </Hidden>
  )
}

export const materialAnyOfControlTester: RankedTester = rankWith(
  4,
  isAnyOfControl
)

export default withJsonFormsAnyOfProps( MaterialAnyOfRenderer )
