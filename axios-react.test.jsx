import { it } from 'vitest'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import axios from 'axios'

function Component() {
  const [text, setText] = React.useState('')

  React.useEffect(() => {
    axios.get('https://example.com/irrelevant').then((response) => {
      setText(response.data)
    })
  }, [])

  return <p>{text}</p>
}

it('responds to axios call within a React component', async () => {
  render(<Component />)
  await screen.findByText('mock')
})
