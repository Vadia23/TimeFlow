import { Auth, Home, Profile, Settings } from '@/components/screens'

import { IRoute } from './navigation.types'

export const routes: IRoute[] = [
	{ name: 'Auth', component: Auth },
	{ name: 'Home', component: Home },
	{ name: 'Profile', component: Profile },
	{ name: 'Settings', component: Settings }
]
