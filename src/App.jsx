import Category from './components/Category';
import { ArticlesProvider } from './context/ArticlesContext';

const App = () => {
	return (
		<ArticlesProvider>
			<Category />
		</ArticlesProvider>
	);
};

export default App;
