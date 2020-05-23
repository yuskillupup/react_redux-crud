import _ from 'lodash'
import {
    READ_EVENTS,
    DELETE_EVENT,
} from '../actions'

export default (events = {}, action) => {
    switch (action.type){
        case READ_EVENTS:
            console.log(action.response.data)
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENT:
            delete events[action.id]
            //...スプレッド演算子
            return { ...events}
        default:
            return events
    }
}