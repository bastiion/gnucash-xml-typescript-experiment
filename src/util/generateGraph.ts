import {Elements} from '../cystoscape/types/CytoscapeComponentProps.types'

const getNodes = ( max = 100 ) => {
  const nodes: any[] = []

  const centerId = Math.floor( max / 2 )

  for ( let i = 0; i < max; i++ ) {
    const node: any = {data: {id: `n${i}`, name: `n${i}`}}

    if ( centerId === i ) {
      node.data.center = true
    }

    nodes.push( node )
  }

  return nodes
}

const getEdges = ( max = 99, maxNodes = 100 ) => {
  const edges = []

  const set = new Set()

  const centerId = Math.floor( maxNodes / 2 )

  while ( set.size < max ) {
    const n2 = Math.floor( Math.random() * maxNodes )

    const uniqKey = `n${centerId}n${n2}`

    edges.push( {
      data: {
        id: uniqKey,
        source: `n${centerId}`,
        target: `n${n2}`,
        label: `n${centerId}n${n2}`,
        classes: 'relationship',
      },
    } )

    set.add( uniqKey )
  }

  return edges
}


const generateGraph: () => Elements = () => ( {
  nodes: getNodes(),
  edges: getEdges(),
} )

export default generateGraph
