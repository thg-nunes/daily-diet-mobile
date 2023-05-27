import { Routes } from 'src/routes/app.routes'
import { RootStackParamList } from '../routes/app.routes'

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends Routes {}
  }
}
