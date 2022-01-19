import _ from 'lodash'

export default class CypherCytoscapeAdapter {

  constructor( input ) {
    this.input = input
    this.output = {nodes: [], edges: []}
    this.nodesMap = {}
    this.edgesMap = {}
    this.is = 'cypher-cytoscape-adapter'
    this.properties = {
      supportVirtualRelationships: {
        type: Boolean,
        value: true
      }
    }
  }


  _transformEdge( edge ) {
    if ( !_.isUndefined( edge.id ) && edge.id in this.edgesMap )
      return
    const cyEdge = {
      group: 'edges',
      data: {},
      classes: edge.type
    }
    if ( !_.isUndefined( edge.properties ))
      _.extend( cyEdge.data, edge.properties )

    _.extend( cyEdge.data, {
      id: edge.id,
      type: edge.type,
      classes: [edge.type],
      source: _.isObject( edge.startNode ) ? edge.startNode.id : edge.startNode,
      target: _.isObject( edge.endNode ) ? edge.endNode.id : edge.endNode,
    } )
    this.edgesMap[cyEdge.data.id] = cyEdge
  }

  transform() {
    if ( _.isUndefined( this.output ) || _.isUndefined( this.input[0] ))
      return
    if ( !this.appendToOutput ) {// || !(_.isArray(this.output.nodes) && _.isArray(this.output.edges))) {
      //this.output = {nodes: [], edges: []};
      this.output.nodes = []
      this.output.edges = []
      this.nodesMap = {}
      this.edgesMap = {}
    }
    const virtualEdgeList = []

    // Iteration on all result data
    this.input[0].data.forEach(( data ) => {

      // iteration on graph for all node
      data.graph.nodes.forEach(( node ) => {
        if ( !_.isUndefined( node.id ) && node.id in this.nodesMap )
          return
        var label = node.id
        var type = 'NONE'
        if ( !_.isUndefined( node.properties.label )) {
          label = node.properties.label
        } else if ( !_.isUndefined( node.properties.name )) {
          label = node.properties.name
        } else if ( !_.isUndefined( node.properties.title )) {
          label = node.properties.title
        }

        if ( node.labels.length > 0 ) {
          type = node.labels[0]
        }
        const cyNode = {
          data: {},
          //                position : {
          //                      x: Math.random() * scale,
          //                      y: Math.random() * scale
          //                },
          group: 'nodes',
          classes: node.labels.join( ' ' )
        }
        _.extend( cyNode.data, node.properties )
        if ( !_.isUndefined( cyNode.data.id ))
          cyNode.data._id = cyNode.data.id
        _.extend( cyNode.data, {
          id: node.id,
          type: type,
          label: label,
          classes: node.labels
        } )
        this.nodesMap[cyNode.data.id] = cyNode
      } )

      // iteration on graph for all node
      data.graph.relationships.forEach(( edge ) => {
        this._transformEdge( edge )
      } )

      //virtual relationships
      data.row.filter( row => ( _.isObject( row ) && row.role === 'relationship' ))
        .forEach(( edge ) => {
          const edgeIdentifier = edge.startNode + edge.type + edge.endNode
          if ( virtualEdgeList.indexOf( edgeIdentifier ) !== -1 ) { //for deduplication we check whether there is an virtual edge already
            return
          }
          virtualEdgeList.push( edgeIdentifier )
          if ( _.isUndefined( edge.id )) {
            edge.id = ( new Date()).getTime() + parseInt( Math.random() * 1000 )
          }
          this._transformEdge( edge )
        } )
    } )


    for ( const key in this.nodesMap ) {
      this.output.nodes.push( this.nodesMap[key] )
    }
    for ( const key in this.edgesMap ) {
      this.output.edges.push( this.edgesMap[key] )
    }
  }
}
