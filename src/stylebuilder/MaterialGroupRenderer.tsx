import {
  getData,
  GroupLayout,
  LayoutProps,
  RankedTester,
  rankWith,
  Resolve, toDataPathSegments,
  uiTypeIs,
  withIncreasedRank
} from '@jsonforms/core'
import { MaterialLayoutRenderer } from '@jsonforms/material-renderers'
import {useJsonForms, withJsonFormsLayoutProps} from '@jsonforms/react'
import {Card, CardContent, CardHeader, Hidden} from '@mui/material'
import isEmpty from 'lodash/isEmpty'
import React from 'react'

import {MaterialLayoutRendererProps} from './layout'

export const groupTester: RankedTester = rankWith( 1, uiTypeIs( 'Group' ))
const style: { [x: string]: any } = { marginBottom: '10px' }

const GroupComponent = React.memo(( { visible, enabled, uischema, data, ...props }: MaterialLayoutRendererProps ) => {
  const groupLayout = uischema as GroupLayout
  // @ts-ignore
  const elements = groupLayout.elements.filter(( {scope} ) => {
    const lastSegment = toDataPathSegments( scope ).pop()
    return lastSegment && data[lastSegment] !== undefined
  } )
  return (
    <Hidden xsUp={!visible}>
      <Card style={style}>
        {!isEmpty( groupLayout.label ) && (
          <CardHeader title={groupLayout.label} />
        )}
        <CardContent>
          <MaterialLayoutRenderer {...props} visible={visible} enabled={enabled} elements={elements} />
        </CardContent>
      </Card>
    </Hidden>
  )
} )

export const MaterializedGroupLayoutRenderer = ( { uischema, schema, path, visible, enabled, renderers, cells, direction }: LayoutProps ) => {
  const groupLayout = uischema as GroupLayout
  const jsonforms = useJsonForms()
  const rootData = getData( {jsonforms} )
  const data = Resolve.data( rootData, path )
  return (
    <GroupComponent
      elements={groupLayout.elements}
      schema={schema}
      path={path}
      direction={direction}
      visible={visible}
      enabled={enabled}
      uischema={uischema}
      renderers={renderers}
      cells={cells}
      data={data}
    />
  )
}

export default withJsonFormsLayoutProps( MaterializedGroupLayoutRenderer )

export const materialGroupTester: RankedTester = withIncreasedRank(
  2,
  groupTester
)
