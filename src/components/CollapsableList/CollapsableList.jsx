import './Collapsable.css'
import { useState } from 'react'

export default function CollapsableList({ collapsedRows = 3, elements = [], rowHeight = 50 }) {
  const gap = 15;
  const [expanded, setExpanded] = useState(false)

  const handleToggleExpansion = () => {
    setExpanded(!expanded)
  }

  const maxHeight = expanded ? null : collapsedRows * (rowHeight + gap)

  return(
    <>
      <ul className='collapsable-list' style={{ maxHeight: maxHeight }}>
        {elements}
      </ul>
      <button onClick={handleToggleExpansion} className='collapse-button'>
        {expanded ? 'Show less' : 'Show more'}
      </button>
    </>
  )
}