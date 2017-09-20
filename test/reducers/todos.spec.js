import expect from 'expect'
import todos from '../../reducers/todos'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        text: 'Run the tests',
        id: 0
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
        showButtons: false
      }
    ])

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 0,
          showButtons: false
        }
      ], {
        type: 'ADD_TODO',
        text: 'Use Redux',
        id: 1,
        showButtons: false
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
        showButtons: false
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1,
        showButtons: false
      }
    ])

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 0,
          showButtons: false
        }, {
          text: 'Use Redux',
          completed: false,
          id: 1,
          showButtons: false
        }
      ], {
        type: 'ADD_TODO',
        text: 'Fix the tests',
        id: 2,
        
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
        showButtons: false
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1,
        showButtons: false
      }, {
        text: 'Fix the tests',
        completed: false,
        id: 2,
        showButtons: false
      }
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ], {
        type: 'TOGGLE_TODO',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })

})
