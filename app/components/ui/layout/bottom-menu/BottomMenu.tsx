import { FC } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import MenuItem from './MenuItem'
import { menuData } from './menu.data'
import { TypeNav } from './menu.interface'

interface IBottomMenu {
	nav: TypeNav
	curentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = props => {
	const { bottom } = useSafeAreaInsets() // значение из безопасной зоны, зона за исключением полосочки на айфон внизу и времени сверху и тд...

	return (
		<View
			className='pt-5 px-3 flex-row justify-between items-center w-full bg-[#1E1C2E]'
			style={{ paddingBottom: bottom + 10 }}
		>
			{menuData.map(item => (
				<MenuItem
					// nav={nav}
					item={item}
					// curentRoute={curentRoute}
					key={item.path}
					{...props}
				/>
			))}
		</View>
	)
}

export default BottomMenu
