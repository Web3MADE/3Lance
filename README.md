This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# 3Lance

## Designs

Notion link: https://www.notion.so/Day-1-29th-Mar-Architecture-pages-UX-Frontend-Designs-Marketing-FIRST-76d044ed28524d56a2f13c1e7a904349
Cool footer CodePen: https://codepen.io/vipenl26/pen/VwzqMge

## Day 2

Skeleton UI (structural html & css) for the Home, SignUp and Profile pages have been created. Navbar and Footer skeletons are also there.

The next step is to finish skeleton pages and then implement logic for Account Abstraction & save in AWS DynamoDB.

## Day 3 & 4

Skeleton UI finished & Privy login configured. Next steps are to implement Account Abstraction (understand how to fund paymaster) and implement a Schema for jobs with a resolver contract to handle payments upon completion.

### Gelato Experience

Currently unable to perform sponsored transactions via GelatoSDK's `sponsoredCall()` method. For the EAS `attestByDelegation()` method, it doesn't work at all - I've asked in the Discord but had no response.

So, I deployed a basic `Counter.sol` contract to test the `sponsoredCall()` GelatoSDK method on the `increment()` method. Whilst the transaction was `ExecSuccess`, the contract never actually interacted with the `Counter.sol` so I'm not sure what happened there...

The steps for making a sponsoredCall for the attestByDelegation:

1. Received a signature from the `useWallets()` hook from `PrivySDK`
2. This signature string was split via `Signature.from()` from `ethers`
3. The EAS Optimism sepolia contract address, ABI and the signer was passed to the `new ethers.Contract()` method to return an EAS contract instance.
4. The EAS contract instance was used to receive an unsigned transaction from passing the `DelegatedAttestationRequest` argument into the `populateTransaction()` method.
5. An API call was made to an endpoint containg the GelatoSDK. This is where the GelatoSDK would attempt to make a transaction but kept cancelling the requests, or in the case of the `Counter.sol` contract, did not interact with the contract at all and yet was `ExecSuccess`...
