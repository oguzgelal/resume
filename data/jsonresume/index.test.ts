import {expect, describe, it} from '@jest/globals';

import { __test } from '.'

const { formatDate, addressString } = __test

describe('formatDate', () => {
  it('is forgiving about trailing whitespace', () => {
    // This is unfortunately an ever-green test. If you remove the `.trim()`
    // from the implementation, then Firefox will return "Invalid date" here
    // and you would see a hydration error. This test will still pass though.
    expect(formatDate(' 2020-01-14 \n')).toEqual('Jan 2020')
  })
})

describe('addressString', () => {
  it('renders only fields that were given', () => {
    const location = { address: 'Digital Nomad', city: '  ' }
    expect(addressString(location)).toEqual('Digital Nomad')
  })
})
