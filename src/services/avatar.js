import fetch from 'node-fetch'

class UserService {
    async Retrieve() {
        const res = await fetch('https://picsum.photos/200')
        return res.url
    }
}

export default new UserService() 