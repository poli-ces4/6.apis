import { createContext, useEffect, useState } from 'react';

const ArticlesContext = createContext();

const ArticlesProvider = ({ children }) => {
	const [category, setCategory] = useState('general');
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const query = async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=c105012511a84a1897f5b95b3840de26`;
		};
	}, [category]);

	return (
		<ArticlesContext.Provider value={{ category, articles }}>
			{children}
		</ArticlesContext.Provider>
	);
};

export { ArticlesProvider };
export default ArticlesContext;
