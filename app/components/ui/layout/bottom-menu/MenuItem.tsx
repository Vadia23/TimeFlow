import { AntDesign, Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable } from 'react-native'

import type { IMenuItem, TypeNav } from './menu.interface'
import { AppConstants } from '@/app.constants'

interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNav
	curentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ item, nav, curentRoute }) => {
	const isActive = curentRoute === item.path
	return (
		<Pressable className='w-[24%] items-center' onPress={() => nav(item.path)}>
			<Feather
				name={item.iconName}
				size={26}
				color={isActive ? AppConstants.primary : '#8D8A97'}
			/>
		</Pressable>
	)
}

export default MenuItem
