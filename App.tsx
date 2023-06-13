import {
	QueryClient,
	QueryClientProvider,
	useQuery
} from '@tanstack/react-query'
import { SafeAreaView, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AuthProvider from '@/providers/AuthProv'

import Navigation from '@/navigation/Navigation'

const queryClient = new QueryClient()

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
			</AuthProvider>
		</QueryClientProvider>
	)
}
