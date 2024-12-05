export default function Page({ params, searchParams }) {
    console.log('params', params)
    return <h1>My Page {params.slug}</h1>
  }