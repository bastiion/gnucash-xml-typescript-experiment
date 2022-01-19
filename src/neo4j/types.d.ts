export namespace neo4j {

  type CypherMeta = {
    id: number
    deleted: boolean
    type: 'node' | 'relationship'
  }

  type CypherRow = {
    [key: string]: string | number
  }

  type CypherNode = {
    id: string
    labels: string[]
    properties: {
      [key: string]: string | number
    }
  }

  type CypherRelationship = {
    id: string
    startNode: string
    endNode: string
    type: string
    properties: {
      [key: string]: string | number
    }
  }

  type CypherResultGraph = {
    graph: {
      nodes: CypherNode[]
      relationships: CypherRelationship[]
    }
  }

  type CypherResultRow = {
    meta: CypherMeta[]
    row: CypherRow[]
  }

  type CypherResult<T> = {
    columns: string[]
    data: T[]
  }

  type CypherQueryResult<T> = {
    errors: any[]
    results: CypherResult<T>[]
  }

  type CypherQueryResultGraph = CypherQueryResult<CypherResultGraph>
  type CypherQueryResultRow = CypherQueryResult<CypherResultRow>
  type CypherQueryResultGraphRow = CypherQueryResult<CypherResultGraph & CypherResultRow>

}
