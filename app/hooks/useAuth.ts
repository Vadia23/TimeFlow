import { useContext } from 'react'

import { AuthContext } from '@/providers/AuthProv'

export const useAuth = () => useContext(AuthContext)
