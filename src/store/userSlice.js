import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = { retro: 'retro', coffee: 'coffee' };
const getTheme = () => {
	const theme = localStorage.getItem('theme') || themes.retro;
	document.documentElement.setAttribute('data-theme', theme);
	return theme;
};

const initialState = {
	user: { username: 'Chuck Norris' },
	theme: getTheme(),
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action) => {
			console.log(state, action);
		},
		logoutUser: (state) => {
			state.user = null;
			localStorage.removeItem('user');
			toast.success('Logged out successfully');
		},
		toggleTheme: (state) => {
			const { retro, coffee } = themes;
			state.theme = state.theme === retro ? coffee : retro;
			document.documentElement.setAttribute('data-theme', state.theme);
			localStorage.setItem('theme', state.theme);
		},
	},
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
