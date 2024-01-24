import {test, expect} from '@playwright/test';
import exp from 'constants'

test ('API POST Request', async({request}) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "artyr",
            "job": "QA"
        }
    })
    expect (response.status()).toBe(201)

    const text = await response.text()
    expect(text).toContain('QA')

    console.log(await response.json())
})

test ('API POST1 Request', async({request}) => {
    const response = await request.post('http://dev.goodlombard.ru/api/v1/auth/login/pin', {
        data: {
            "phone": "79221941944",
            "pin": "111111"
        }
    })
    expect (response.status()).toBe(200)

    const text = await response.text()
    expect(text).toContain('refreshToken')

    console.log(await response.json())
})

test ('API PUT Request', async({request}) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "DASHA",
            "job": "PR"
        }
    })
    expect (response).toBeOK()

    const text = await response.text()
    expect(text).toContain('PR')

    console.log(await response.json())
})

test ('API GET Request', async({request}) => {

    const response = await request.get('https://reqres.in/api/users/2')

    expect (response.status()).toBe(200)

    const text = await response.text()
    expect(text).toContain('Janet')

    console.log(await response.json())
})
