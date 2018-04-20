import promix from './promx'

describe('promix - resolve spec', () => {
  test('resolve nothing', async () => {
    const [err, res] = await promix(Promise.resolve())
    expect(err).toBe(null)
    expect(res).toBe(null)
  })

  test('resolve string', async () => {
    const [err, res] = await promix(Promise.resolve('success'))
    expect(err).toBe(null)
    expect(res).toBe('success')
  })

  test('resolve object', async () => {
    const [err, res] = await promix(Promise.resolve({ response: 'success' }))
    expect(err).toBe(null)
    expect(res).toEqual({ response: 'success' })
  })

  test('reslove async', async () => {
    const [err, res] = await promix(successAsync())
    expect(err).toEqual(null)
    expect(res).toEqual({ status: 'success' })
  })
})

describe('promiox - reject spec', () => {
  const defaultErr = new Error('promix')

  test('reject nothing', async () => {
    const [err, res] = await promix(Promise.reject())
    expect(err).toEqual(defaultErr)
    expect(res).toBe(null)
  })

  test('reject string', async () => {
    const [err, res] = await promix(Promise.reject('fail'))
    expect(err).toBe('fail')
    expect(res).toBe(null)
  })

  test('reject object', async () => {
    const [err, res] = await promix(Promise.reject({ response: 'fail' }))
    expect(err).toEqual({ response: 'fail' })
    expect(res).toBe(null)
  })

  test('reject async', async () => {
    const customErr = new Error({ status: 'failing' })
    const [err, res] = await promix(FailAsync())
    expect(err).toEqual(customErr)
    expect(res).toBe(null)
  })
})

/* utility */

async function successAsync() {
  await waitfor(100)
  return { status: 'success' }
}

async function FailAsync() {
  await waitfor(100)
  throw new Error({ status: 'failing' })
}

function waitfor(time = 0) {
  return new Promise(resolve => setTimeout(resolve, time))
}
