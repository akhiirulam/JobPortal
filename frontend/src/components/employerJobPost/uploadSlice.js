import { createSlice } from '@reduxjs/toolkit';

const uploadSlice = createSlice({
  name: 'upload',
  initialState: {
    file: null,
    status: 'idle', // 'idle' | 'uploading' | 'uploaded' | 'error'
  },
  reducers: {
    setFile(state, action) {
      state.file = action.payload;
      state.status = 'idle'; // Reset status to idle when a new file is selected
    },
    uploadStart(state) {
      state.status = 'uploading';
    },
    uploadSuccess(state) {
      state.status = 'uploaded';
    },
    uploadError(state) {
      state.status = 'error';
    },
  },
});

export const { setFile, uploadStart, uploadSuccess, uploadError } = uploadSlice.actions;

export default uploadSlice.reducer;
