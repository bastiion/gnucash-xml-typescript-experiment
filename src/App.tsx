import './App.css'

import {JsonFormsCore} from '@jsonforms/core'
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material'
// @ts-ignore
import cola from 'cytoscape-cola'
import React, {useEffect, useState} from 'react'
import {useQuery} from 'react-query'

import {CytoscapeComponent} from './cystoscape'
import {Elements, StyleSheets} from './cystoscape/types/CytoscapeComponentProps.types'
import {neo4j} from './neo4j/types'
import StyleBuilder from './stylebuilder'
import generateGraph from './util/generateGraph'
import neo4j2cystoscape from './util/neo4j2cytoscape'


const stylesheetsDefault: StyleSheets = [ // the stylesheet for the graph
  {
    selector: 'node',
    style: {
      'background-color': '#666',
      'label': 'data(label)'
    }
  },

  {
    selector: 'edge',
    style: {
      'width': 3,
      'line-color': '#ccc',
      'target-arrow-color': '#ccc',
      'target-arrow-shape': 'triangle',
      'curve-style': 'bezier',
      'source-text-rotation': 'autorotate',
      'target-text-rotation': 'autorotate',
      'target-text-offset': 20,
      'source-text-offset': 20,
      'source-label': 'data(taillabel)',
      'target-label': 'data(sourcelabel)'
    }
  }
]

const defaultLayout = {
  name: 'cola'
}

/*
const defaultNavigatorOptions = {
  container: false // html dom element
  , viewLiveFramerate: 0 // set false to update graph pan only on drag end; set 0 to do it instantly; set a number (frames per second) to update not more than N times per second
  , thumbnailEventFramerate: 30 // max thumbnail's updates per second triggered by graph updates
  , thumbnailLiveFramerate: false // max thumbnail's updates per second. Set false to disable
  , dblClickDelay: 200 // milliseconds
  , removeCustomContainer: true // destroy the container specified by user on plugin destroy
  , rerenderDelay: 100 // ms to throttle rerender updates to the panzoom for performance
}*/

const panzoomOptions = {
  minZoom: 1,
  maxZoom: 3,
}


function App() {

  const [stylesheets, setStylesheets] = useState( stylesheetsDefault )
  // const [lastErrors, setLastErrors] = useState<ErrorObject[] | undefined>( undefined )
  const [currentSelector, setCurrentSelector] = useState<string | undefined>( undefined )

  const handleChange = ( {errors, data}: Pick<JsonFormsCore, 'data' | 'errors'> ) => {
    console.log( {errors} )
    if ( errors && errors.length > 0 ) {
      //setLastErrors( errors )
      return
    }
    if ( currentSelector ) {
      setStylesheets( [
        ...stylesheets.filter(( {selector} ) => selector !== currentSelector ),
        data
      ] )
      console.log( {stylesheets} )
    }

  }

  const {data} = useQuery<neo4j.CypherQueryResultGraph>( 'cypher', () => {
    return fetch( 'http://localhost:7474/db/data/transaction/commit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {
        statements: [
          {
            statement: 'MATCH (m:Switch)-[r]-(n) RETURN m,r,n LIMIT 1000',
            resultDataContents: ['graph'],
            parameters: {}
          }
        ]
      } )
    } ).then( res => res.json())
  }, {enabled: false} )

  const [elements, setElements] = useState<Elements>( generateGraph())

  useEffect(() => {
    if ( !data ) return
    const graph: Elements | undefined = neo4j2cystoscape( data.results[0]?.data )
    if ( graph ) {
      setElements( graph )
    }

  }, [data] )

  // @ts-ignore
  const currentStyleData = currentSelector && stylesheets.find(( {selector} ) => selector === currentSelector )
  return (
    <div>
      {/*
      <CytoscapeComponent
        global={'cy'}
        elements={elements}
        stylesheets={stylesheets}
        layout={defaultLayout}"w
        extensions={[cola]}
        panzoom={panzoomOptions}/>
      */}
      <List>
        {stylesheets.map(( {selector} ) => {
          return (
            <ListItem disablePadding key={selector}>
              <ListItemButton>
                <ListItemText primary={selector} onClick={() =>  setCurrentSelector( selector )}/>
              </ListItemButton>
            </ListItem>

          )
        } )}
      </List>
      {
        currentStyleData  && <StyleBuilder data={currentStyleData} onChange={handleChange}/>
      }
    </div>
  )
}

export default App
