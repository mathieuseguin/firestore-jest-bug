import { addTask } from './Tasks'

describe('Tasks', () => {
  it('add the task', () => {
    expect(addTask).toEqual(true)
  })
})
