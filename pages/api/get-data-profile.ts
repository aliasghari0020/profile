import { ApolloClient, InMemoryCache, gql } from "@apollo/client";


export interface QueryProfileResponseType {
    profile: {
        username: string;
        email: string;
        isHicetnuncUser: boolean;
        fullName: string | null;
    }
}

export interface GraphQLQueryType<T = any> {
    data: T
}

const queryProfile = async (id: string ): Promise<GraphQLQueryType<QueryProfileResponseType>> => {
    const apollo = new ApolloClient({
        uri: 'http://192.168.1.151:3000/graphql',
        cache: new InMemoryCache()
    })

    const respons = await apollo.query({
        query: gql
            `query profile($id: String!) {
                profile(id: $id) {
                    username
                    email
                    isHicetnuncUser
                    fullName
                }
          }
          `,
          variables:{
            id,
          }

   
    })
   
    
    return respons

}
export default queryProfile