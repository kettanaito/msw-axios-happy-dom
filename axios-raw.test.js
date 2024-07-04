import { it, expect } from 'vitest'
import axios from 'axios'

it('responds to a raw axios call', async () => {
  const response = await axios.get('http://localhost/resource')
  expect(response.data).toBe('mock')
})
