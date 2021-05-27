import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;
  // What we could do here is send a request to the BE API
  // to fetch the news item with id === newsId

  return <h1>Detail</h1>;
}

export default DetailPage;
