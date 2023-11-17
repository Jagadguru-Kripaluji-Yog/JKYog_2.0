import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"

const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "201720427247-ia5omhd4ee8pt82n5n1g674t9ukdcdqv.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
