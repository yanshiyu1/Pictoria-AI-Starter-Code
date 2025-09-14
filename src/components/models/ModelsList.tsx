import React from 'react'

type ModelType = {
  error: string | null,
  success: boolean,
  data: 
}

interface ModelsListProps {
  models: ModelType
}

const ModelsList = ({ models }: ModelsListProps) => {
  return (
    <div>ModelsList</div>
  )
}

export default ModelsList
