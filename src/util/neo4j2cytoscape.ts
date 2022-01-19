import {Elements} from '../cystoscape/types/CytoscapeComponentProps.types'
import {neo4j} from '../neo4j/types'

const neo4j2cystoscape: ( neo4jGraph: neo4j.CypherResultGraph[] ) => Elements = ( neo4jGraph ) => {
  const graph: Elements | undefined = neo4jGraph.reduce<Elements>(( {nodes, edges}, {graph} ) => ( {
    nodes: [
      ...nodes,
      ...graph.nodes
        .map(( {id, properties} ) => ( {
          data: {
            ...properties,
            id
          }
        } ))],
    edges: [
      ...edges,
      ...graph.relationships
        .filter(( {startNode, endNode} ) => !edges.find(( {data} ) => data.id === `${startNode}->${endNode}` ))
        .map(( {id, startNode, endNode, type, properties} ) => ( {
          data: {
            ...properties,
            originalId: id,
            id: `${startNode}->${endNode}`,
            source: startNode,
            target: endNode,
            type
          }
        } ))]
  } ), {nodes: [], edges: []} )
  return graph
}

export default  neo4j2cystoscape
