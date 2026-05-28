import { useState } from 'react'

function useDateControls() {
  const [desde, setDesde] = useState((new Date).toLocaleDateString())
  const [hasta, setHasta] = useState(null)

  function today() {
    setDesde((new Date).toLocaleDateString())
  }

  function nextDate() {
    setDesde((new Date('2026', 4, 27)).toLocaleDateString())
  }

  function prevDate() {
    setDesde((new Date('2026', 4, 25)).toLocaleDateString())
  }

  return { desde, hasta, today, nextDate, prevDate }
}

export default useDateControls
