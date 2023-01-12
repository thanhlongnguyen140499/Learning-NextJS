import { useRouter } from 'next/router'
import * as React from 'react'

export interface CategoryDetailPageProps {}

export default function CategoryDetailPage(props: CategoryDetailPageProps) {
  const router = useRouter()

  console.log(router)

  return <div>Category Detail</div>
}
