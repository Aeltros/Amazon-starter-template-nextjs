import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export const authOptions = {
  // Configure one or more authentication providers
  Providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
    Providers.Github({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
  ],
}

export default NextAuth(authOptions)