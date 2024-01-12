import  express  from "express"
import { kelilingLingkaran, kelilingPersegi, luasLingkaran, luasPersegi } from "../controller/bangunDatar"
const app = express()
// ..allow read a body
app.use(express.json()) 

//fungsi use untuk menerapkan fungsi object.express, maka akan otomatis dijalankan
app.post(`/lingkaran/luas`,luasLingkaran)
app.post(`/lingkaran/keliling`,kelilingLingkaran)
app.post(`/persegi/luas`,luasPersegi)
app.post(`/persegi/keliling`,kelilingPersegi)

export default app
