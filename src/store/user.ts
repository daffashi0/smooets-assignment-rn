import {createSlice} from '@reduxjs/toolkit';

export type User = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  phone: string;
  expires_in: number;
};

export type UserState = {
  user: User;
  token: string;
  token_type: string;
  loading: boolean;
  error: boolean;
};

const initialState: UserState = {
  user: {} as User,
  token: '',
  token_type: '',
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
});

export default userSlice.reducer;
