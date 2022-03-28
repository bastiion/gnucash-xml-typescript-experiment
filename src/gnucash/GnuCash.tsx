import {AppBar, Box, Toolbar, Typography} from '@mui/material'
import {XMLBuilder, XMLParser, XMLValidator} from 'fast-xml-parser'
import React, {useEffect, useState} from 'react'

import GncContainer from './components/GncContainer'
import {Account, Gncv2} from './typescript3/gnucash-v2.xsd'


const GnuCash = () => {
  const [xmlRaw, setXmlRaw] = useState( '' )
  const [jsonRes, setJsonRes] = useState<Gncv2 | undefined>()

  const [resultXML, setResultXML] = useState( '' )
  const fecthXML = async () => {
    const result = await fetch(  '/sample.gnucash' )
    return await result.text()
  }

  useEffect(() => {
    fecthXML()
      .then(( data ) => {
        setXmlRaw( data )
        const parser = new XMLParser( {
          ignoreAttributes: false
        } )
        const jObj = parser.parse( data )
        //setJsonRes( jObj )
        console.log(jObj)
        if( jObj['gnc-v2'] ) {

          setJsonRes( jObj['gnc-v2'] as Gncv2 )
        }

        /*
        const parser2 = new cxml.Parser()
        const result = parser2.parse( data, document )
        console.log({document})
        result.then( res => {
          setJsonRes2( result )
        }).catch(e => {
          console.log('rejected', e)
        })*/

      } )
  }, [] )

  useEffect(() => {
    if( jsonRes ) {

      console.log(jsonRes)
      const builder = new XMLBuilder( {
        preserveOrder: true,
        indentBy: '  '
      } )
      const newXML = builder.build( jsonRes )
      setResultXML( newXML.toString())
    }
  }, [jsonRes] )


  return <Box sx={{ display: 'flex' }}>
    <AppBar  position="fixed" sx={{ zIndex: ( theme ) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
            GnuCash-Web
        </Typography>
      </Toolbar>
    </AppBar>
    {jsonRes && <GncContainer gnucashData={jsonRes} /> }
  </Box>
}

export default GnuCash
