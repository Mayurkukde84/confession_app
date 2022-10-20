
import { apiSlice } from "./api/apiSlice";



export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints:builder =>({
        getPosts :builder.query({
            query:()=> '/posts',
            transformResponse: res => res.sort((a, b) => b.id - a.id),
            providesTags: ['posts']
        })
    })
})

export const {
    useGetPostsQuery
} = apiSlice