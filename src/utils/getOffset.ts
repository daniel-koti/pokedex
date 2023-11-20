// https://pokeapi.co/api/v2/pokemon?offset=20&limit=20

// get the value of ofseet in url

export function getOffset(url: string) {
  const hasParameters = url.includes('?')

  if (hasParameters) {
    const paramsAfter = url.split('?')[1]

    const params = paramsAfter.split('&')

    for (const param of params) {
      const [key, value] = param.split('=')

      if (key === 'offset') {
        return value.toString()
      }
    }
  }

  return '0'
}
