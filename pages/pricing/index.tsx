import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function Pricing() {
  return (
    <MainLayout>
        <div>
            <h1>PRICING Page</h1>
          Ir al <Link href="/">HOME</Link>
          </div>
    </MainLayout>
  )
}
