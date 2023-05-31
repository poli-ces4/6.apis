import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import ArticlesContext from '../context/ArticlesContext';

const CATEGORIES = [
	{ value: 'business', label: 'Business' },
	{ value: 'entertainment', label: 'Entertainment' },
	{ value: 'general', label: 'General' },
	{ value: 'health', label: 'Health' },
	{ value: 'science', label: 'Science' },
	{ value: 'sports', label: 'Sports' },
	{ value: 'technology', label: 'Technology' },
];

const Category = () => {
	const { category, handleChangeCategory } = useContext(ArticlesContext);

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id='demo-simple-select-label'>Category</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={category}
					label='Category'
					onChange={handleChangeCategory}
				>
					{CATEGORIES.map(item => (
						<MenuItem value={item.value} key={item.value}>
							{item.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};

export default Category;
