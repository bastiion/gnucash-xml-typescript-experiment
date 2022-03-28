import './ace'

import React from 'react'
import AceEditor from 'react-ace'

type DebugDocumentEditorProps = {
  xmlDocument?: string
  onXmlDocumentChange?: ( newDoc: string ) =>  void
  jsonDocument?: any
  onJsonDocumentChange?: ( change: any ) => void
}

const DebugDocumentEditor = ( { xmlDocument, onXmlDocumentChange, jsonDocument, onJsonDocumentChange}: DebugDocumentEditorProps ) => <div>
  <AceEditor
    mode="xml"
    theme="github"
    name="xml-editor"
    editorProps={{ $blockScrolling: true }}
    onChange={( v ) => onXmlDocumentChange && onXmlDocumentChange( v ) }
    value={xmlDocument || ''}
  />
  <AceEditor
    mode="json"
    theme="github"
    name="json-editor"
    editorProps={{ $blockScrolling: true }}
    onChange={( v ) => {
      try {
        onJsonDocumentChange && onJsonDocumentChange( JSON.parse( v ))
      } catch ( e ) { return }
    }}
    value={(() => {
      try {
        return JSON.stringify( jsonDocument, null, 2 )
      } catch ( e ) {
        return ''
      }
    } )()}
  />
</div>

export default DebugDocumentEditor
