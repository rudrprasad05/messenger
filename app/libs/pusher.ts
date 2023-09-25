import PusherServer from 'pusher'
import PusherClient from 'pusher-js'

export const pusherServer = new PusherServer({
    appId: "1676196",
    key: "0f25d548d044d3ce5382",
    secret: "020824caf62ba589b868",
    cluster: 'ap3',
    useTLS: true

})

export const pusherClient = new PusherClient(
    "0f25d548d044d3ce5382",
    {
        channelAuthorization: {
            endpoint: '/api/pusher/auth',
            transport: 'ajax',
        },
        cluster: 'ap3'
    }
)