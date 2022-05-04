import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getGithubRepositoriesWithCommitsByLogin } from 'services/repositories'
import { RepositoriesState, URLRequestParams } from 'types'

export const getRepositoriesWithCommits = createAsyncThunk(
  'repositories/getRepositoriesWithCommits',
  async (params: URLRequestParams, { rejectWithValue }) => {
    try {
      return await getGithubRepositoriesWithCommitsByLogin(params)
    } catch (err: any) {
      if (err?.response?.status === 422) {
        return rejectWithValue('Error: Try another phraze')
      }
      if (err?.response?.status === 403) {
        return rejectWithValue('Error: You have exceeded the query limit')
      }
      if (err?.response?.data?.message) {
        return rejectWithValue(err.response.data.message)
      }
      if (err?.message) {
        return rejectWithValue(err.message)
      }
      return rejectWithValue('Error: Unknow error')
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
      state.error = null
      state.loading = false
      state.entities = action.payload
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
