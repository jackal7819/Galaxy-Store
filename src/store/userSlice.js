import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = { retro: 'retro', coffee: 'coffee' };

const getTheme = () => {
	const theme = localStorage.getItem('theme') || themes.retro;
	document.documentElement.setAttribute('data-theme', theme);
	return theme;
};

const getUser = () => {
	const user = localStorage.getItem('user');
	return user ? JSON.parse(user) : null;
}

const initialState = {
	user: getUser(),
	theme: getTheme(),
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action) => {
			const user = { ...action.payload.user, token: action.payload.jwt };
			state.user = user;
			localStorage.setItem('user', JSON.stringify(user));
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
