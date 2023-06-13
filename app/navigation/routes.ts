import { Auth, Home, Profile, Settings, Statistics } from '@/components/screens'

import { IRoute } from './navigation.types'

export const routes: IRoute[] = [
	{ name: 'Auth', component: Auth },
	{ name: 'Home', component: Home },
	{ name: 'Profile', component: Profile },
	{ name: 'Settings', component: Settings },
	{ name: 'Statistics', component: Statistics }
]
