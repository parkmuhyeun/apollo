import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "http://localhost:4000/",
    resolvers: {                                                        //요청할 Query, Mutation
        Movie:{
            isLiked: () => false
        },
        Mutation: {                                                 
            toggleLikeMovie: (_, {id, isLiked}, {cache}) =>{           // Like 버튼 토글기능
                cache.writeData({
                    id: `Movie:${id}`,
                    data: {
                        isLiked: !isLiked
                    }
                });
            }
        }
    }
});

export default client;