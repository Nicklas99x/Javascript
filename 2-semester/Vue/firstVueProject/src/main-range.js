import './assets/main.css'

import { createApp } from 'vue'
import App from './App-range.vue'
import Billeder from './components/Billeder.vue'
import RangeInput from './components/RangeInput.vue'
const app=createApp(App)
app.component('Billeder', Billeder)
app.component('RangeInput', RangeInput)
app.mount('#app')
