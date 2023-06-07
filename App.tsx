import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, View } from 'react-native'

export default function App() {
	return (
		<SafeAreaView className=' bg-[#1C1826] flex-1'>
			<Text className='color-white'>Open 23</Text>
			<StatusBar style='auto' />
		</SafeAreaView>
	)
}
