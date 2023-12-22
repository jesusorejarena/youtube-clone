import { NextUIProvider } from '@nextui-org/react';
import { Toaster } from 'sonner';

import { AuthProvider } from './context/AuthContext';
import Router from './router';
import './styles/global.css';

const App = () => {
	return (
		<NextUIProvider>
			<AuthProvider>
				<main className="extend">
					<Toaster richColors />
					<Router />
				</main>
			</AuthProvider>
		</NextUIProvider>
	);
};

export default App;
