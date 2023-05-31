import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const ArticlesContext = createContext();

const ArticlesProvider = ({ children }) => {
	const [category, setCategory] = useState('general');
	const [articles, setArticles] = useState([]);

	const handleChangeCategory = e => {
		setCategory(e.target.value);
	};

	useEffect(() => {
		const query = async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=c105012511a84a1897f5b95b3840de26`;
			const { data } = await axios(url);
			setArticles(data.articles);
		};
		query();
	}, [category]);

	return (
		<ArticlesContext.Provider
			value={{ category, articles, handleChangeCategory }}
		>
			{children}
		</ArticlesContext.Provider>
	);
};

export { ArticlesProvider };
export default ArticlesContext;
