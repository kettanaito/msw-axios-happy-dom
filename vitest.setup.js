import { afterAll, afterEach, beforeAll } from 'vitest'
import { http } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  http.all('*', () => {
    return new Response('mock')
  }),
)

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
