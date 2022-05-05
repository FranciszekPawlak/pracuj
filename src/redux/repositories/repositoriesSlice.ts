import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getGithubRepositoriesWithCommitsByLogin } from 'services/repositories'
import { RepositoriesState, URLRequestParams } from 'types'
import { errorMessage } from './errorMessage'

export const getRepositoriesWithCommits = createAsyncThunk(
  'repositories/getRepositoriesWithCommits',
  async (params: URLRequestParams, { rejectWithValue }) => {
    try {
      return await getGithubRepositoriesWithCommitsByLogin(params)
    } catch (err: any) {
      return rejectWithValue(errorMessage(err))
    }
  },
)

const initialState: RepositoriesState = {
  entities: [],
  loading: false,
  error: null,
}

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRepositoriesWithCommits.fulfilled, (state, action) => {
      state.loading = false
      if (action.payload && action.payload.length > 0) {
        state.entities = action.payload
        state.error = null
      } else {
        state.entities = []
        state.error = 'No repositories for this user'
      }
    }),
      builder.addCase(getRepositoriesWithCommits.pending, (state) => {
        state.loading = true
        state.error = null
        state.entities = []
      }),
      builder.addCase(getRepositoriesWithCommits.rejected, (state, action) => {
        state.error = String(action.payload)
        state.loading = false
        state.entities = []
      })
  },
})

export default repositoriesSlice.reducer
