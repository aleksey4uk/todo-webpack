export default class swapiService {
    constructor() {
        this._url = 'asdasda';
        this.data = [
            {
                id: 1,
                text: 'Racing car sprays burning fuel into crowd.'
            },
            {
                id: 2,
                text: 'Japanese princess to wed commoner.'
            },
            {
                id: 3,
                text: 'Australian walks 100km after outback crash.'
            },
            {
                id: 4,
                text: 'Man charged over missing wedding girl.'
            },
            {
                id: 5,
                text: 'Los Angeles battles huge wildfires.'
            },
        ]
    }
    getTasks = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.data), 400);
        });
        
    }
}

