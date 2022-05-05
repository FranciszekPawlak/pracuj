export const errorMessage = (err: any) => {
  if (err?.response?.status === 422) {
    return 'Error: Try another phraze'
  }
  if (err?.response?.status === 403) {
    return 'Error: You have exceeded the query limit'
  }
  if (err?.response?.data?.message) {
    return err.response.data.message
  }
  if (err?.message) {
    return err.message
  }
  return 'Error: Unknow error'
}
