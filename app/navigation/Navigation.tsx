import {
	NavigationContainer,
	useNavigationContainerRef
} from '@react-navigation/native'
import { FC, useEffect, useState } from 'react'

import BottomMenu from '@/components/ui/layout/bottom-menu/BottomMenu'

import { useAuth } from '@/hooks/useAuth'

import PrivateNavigation from './PrivateNavigation'

const Navigation: FC = () => {
	const { user } = useAuth()

	const [curentRoute, setCurentRoute] = useState<string | undefined>(undefined)

	const navRef = useNavigationContainerRef()

	useEffect(() => {
		setCurentRoute(navRef.getCurrentRoute()?.name)
		const listener = navRef.addListener('state', () =>
			setCurentRoute(navRef.getCurrentRoute()?.name)
		)
		return navRef.removeListener('state', listener)
	}, [])
	return (
		<>
			<NavigationContainer ref={navRef}>
				<PrivateNavigation />
			</NavigationContainer>
			{user && curentRoute && (
				<BottomMenu nav={navRef.navigate} curentRoute={curentRoute} />
			)}
		</>
	)
}

export default Navigation
