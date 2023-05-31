import Articles from './components/Articles';
import Category from './components/Category';
import { ArticlesProvider } from './context/ArticlesContext';

const App = () => {
	return (
		<ArticlesProvider>
			<Category />
			<Articles />
		</ArticlesProvider>
	);
};

export default App;
