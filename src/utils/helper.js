export const ObjectChecker = (obj = {}) => Object.keys(obj).reduce((acc, key) => acc && Boolean(obj[key]), true)

export const queryStringToObj = (qs) => {
  qs = qs.replace('?', '')

  const result = qs.split('&').reduce((obj, keyvalue) => {
    const [key, value] = keyvalue.split('=')
    obj[key] = value
    return obj
  }, {})
  return result
}

export const formatRupiah = (value) => {
  if (!value) {
    return 'RP 0'
  }
  return `Rp ${parseInt(value, 10).toLocaleString('de-DE', 'minimumFractionDigits', 2)}`
}

export const formatCur = (value) => {
  if (!value) {
    return '0'
  }
  return `${parseInt(value, 10).toLocaleString('de-DE', 'minimumFractionDigits', 2)}`
}


export const matchTrue = inputObj =>
  Object.keys(inputObj).reduce((acc, key) => {
    const ras = inputObj[key] && acc
    return ras
  }, true)