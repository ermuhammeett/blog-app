import {GraphQLClient,gql} from "graphql-request";
import 'dotenv/config';
import {NextResponse} from "next/server";
const graphqlAPI=process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export async function POST(req, res){
    const graphQLClient=new GraphQLClient((graphqlAPI),{
        headers:{
            authorization:`Bearer ${process.env.GRAPHCMS_TOKEN}`,
        },
    });
    const query=gql`
     mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;
    const body = await req.json();

    const result=await graphQLClient.request(query,{
        name: body.name,
        email: body.email,
        comment: body.comment,
        slug: body.slug,
    });
    return NextResponse.json(result);
}