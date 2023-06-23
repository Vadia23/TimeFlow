import { useNavigation } from '@react-navigation/native'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
	Keyboard,
	Pressable,
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native'

import Button from '@/components/ui/Button'
import Loader from '@/components/ui/Loader'

import { useAuth } from '@/hooks/useAuth'

import { IAuthFormData } from '@/types/auth.interface'

import AuthFields from './AuthFields'

const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false)
	const { navigate } = useNavigation()

	const { control, reset, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { setUser } = useAuth()

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		setUser({
			_id: '',
			...data
		})
		navigate('Profile')
		reset()
	}
	const isLoading = false

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View className='items-center justify-center flex-1'>
				<View className='w-3/4'>
					<Text className='text-white text-4xl font-bold text-center'>
						{isReg ? 'Sign up' : 'Sign in'}
					</Text>
				</View>

				{isLoading ? (
					<Loader />
				) : (
					<>
						<AuthFields control={control} />
						<Button onPress={handleSubmit(onSubmit)}> Let's Go</Button>
						<Pressable onPress={() => setIsReg(!isReg)}>
							<Text className='text-opacity-60 text-white text-base mt-3 text-right'>
								{isReg ? 'LogIn' : 'Register'}
							</Text>
						</Pressable>
					</>
				)}
			</View>
		</TouchableWithoutFeedback>
	)
}

export default Auth
