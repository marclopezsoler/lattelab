import { useRouter } from 'next/router';

export async function GET(request) {
  const router = useRouter();
  router.push('https://lattelab.oddsolutionslab.com/');
}
