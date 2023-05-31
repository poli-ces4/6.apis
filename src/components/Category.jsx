import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id='demo-simple-select-label'>Age</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={age}
					label='Age'
					onChange={handleChange}
				>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};

export default Category;
