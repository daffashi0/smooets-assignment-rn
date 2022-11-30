import {createSlice} from '@reduxjs/toolkit';

export type User = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  phone: string;
};

export type UserState = {
  user: User;
  token: string;
  token_type: string;
  loading: boolean;
  error: boolean;
  expires_in?: number | null;
  isAuth: boolean;
};

const initialState: UserState = {
  user: {} as User,
  token: '',
  token_type: '',
  loading: false,
  error: false,
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.access_token;
      state.token_type = action.payload.token_type;
      state.expires_in = action.payload.expires_in;
      state.isAuth = true;
    },
    setUserLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUserError: (state, action) => {
      state.error = action.payload;
    },
    logout: () => initialState,
  },
});

export const {setUser, setUserError, setUserLoading} = userSlice.actions;

export default userSlice.reducer;
