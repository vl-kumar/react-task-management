import { AppDispatch } from 'presentation/store/store'
import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
