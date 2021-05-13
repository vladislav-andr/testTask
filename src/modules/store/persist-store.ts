import { persistStore } from 'redux-persist'

const store = (store: any) => persistStore(store, null, () => {})

export default store
