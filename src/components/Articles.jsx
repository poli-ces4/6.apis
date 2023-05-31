import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import ArticlesContext from '../context/ArticlesContext';
import Article from './Article';

const Articles = () => {
	const { articles } = useContext(ArticlesContext);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{articles.map((item, index) => (
					<Grid item xs={2} sm={4} md={4} key={index}>
						<Article article={item} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Articles;
